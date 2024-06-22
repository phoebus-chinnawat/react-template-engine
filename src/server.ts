// server.ts
import archiver from 'archiver';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { BusinessData } from './client/types';
import { buildPreload } from './script/preloadBuilder';
import { templateConfig } from './templateConfig';
import { TemplateName } from './types';
import { getTemplateConfig } from './util/template';

const app = express();

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

app.get('/:templateName', async (req: Request, res: Response) => {
  const templateName = req.params.templateName as unknown as TemplateName;

  if (!templateConfig[templateName]) {
    res.status(404).send('Template not found');
    return;
  }

  const { previewHtml } = getTemplateConfig(templateName);
  const htmlString = readFileSync(path.join(__dirname, `../dist/${previewHtml}.html`), 'utf-8');

  res.send(htmlString);
});

app.post('/publish', async (req: Request, res: Response) => {
  const businessData: BusinessData = req.body;
  const { templateName } = businessData;

  if (!templateName) {
    res.status(400).send('Missing templateName');
    return;
  }

  const { script, html } = getTemplateConfig(templateName);

  const htmlString = readFileSync(path.join(__dirname, `../dist/${html}.html`), 'utf-8');
  const scriptContent = readFileSync(path.join(__dirname, `../dist/${script}.bundle.js`), 'utf-8');
  const preloadScript = buildPreload(businessData);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level
  });

  archive.pipe(res);
  archive.append(htmlString, { name: 'index.html' });
  archive.append(preloadScript, { name: 'preload.js' });
  archive.append(scriptContent, { name: `${script}.bundle.js` });
  res.attachment('website.zip');
  archive.finalize();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
