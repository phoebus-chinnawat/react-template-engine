// server.ts
import archiver from 'archiver';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';
import path from 'path';
import { buildHtml, buildPreviewHtml } from './builder/html';
import { buildPreviewReactString, buildReactString } from './builder/react';
import { BusinessData } from './client/types';
import { initialData } from './initialData';
import { templateConfig } from './templateConfig';
import { TemplateName } from './types';
import { getTemplateScript } from './util/template';

const app = express();

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

app.get('/:templateName', async (req: Request, res: Response) => {
  const templateName = req.params.templateName as unknown as TemplateName;
  const isPreview = !!req.query.isPreview || false;

  if (!templateConfig[templateName]) {
    res.status(404).send('Template not found');
    return;
  }
  let appString: string;
  let html: string;
  const { script, previewScript } = getTemplateScript(templateName);

  if (isPreview) {
    appString = buildPreviewReactString(templateName, initialData);
    html = buildPreviewHtml(initialData, appString, previewScript);
  } else {
    appString = buildReactString(templateName, initialData);
    html = buildHtml(initialData, appString, script);
  }

  res.send(html);
});

app.post('/publish', async (req: Request, res: Response) => {
  const businessData: BusinessData = req.body;
  const { templateName } = businessData;

  if (!templateName) {
    res.status(400).send('Missing templateName');
    return;
  }

  const { script } = getTemplateScript(templateName);
  const appString = buildReactString(templateName, businessData);
  const html = buildHtml(businessData, appString, script);

  const scriptContent = readFileSync(path.join(__dirname, `../dist/${script}.bundle.js`), 'utf-8');
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Sets the compression level
  });

  archive.pipe(res);
  archive.append(html, { name: 'index.html' });
  archive.append(scriptContent, { name: `${script}.bundle.js` });
  res.attachment('website.zip');
  archive.finalize();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
