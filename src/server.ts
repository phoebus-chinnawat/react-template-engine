// server.ts
import express, { Request, Response } from 'express';
import path from 'path';
import { buildPreviewReactString, buildReactString } from './builder/react';
import { templateConfig } from './templateConfig';
import { TemplateName } from './types';
import { buildHtml, buildPreviewHtml } from './builder/html';
import { getTemplateScript } from './util/template';
import { initialData } from './initialData';

const app = express();

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/', express.static(path.join(__dirname, '../dist')));

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
