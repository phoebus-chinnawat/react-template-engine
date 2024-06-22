// server.ts
import express, { Request, Response } from 'express';
import path from 'path';
import { buildHtml } from './builder/html';
import { buildReactString } from './builder/react';
import { BusinessData } from './client/types';
import { templateConfig } from './templateConfig';
import { TemplateName } from './types';

const sampleBusinessData: BusinessData = {
  shopName: 'The Coffee House',
  description: 'A cozy place to enjoy your favorite coffee.',
  location: '123 Java Street, Caffeine City',
  reviewers: [
    { name: 'John Doe', review: 'Great coffee and atmosphere!' },
    { name: 'Jane Smith', review: 'A perfect place to relax and work.' },
  ],
  contacts: {
    phone: '123-456-7890',
    email: 'info@coffeehouse.com',
  },
  sections: [
    {
      id: 1,
      title: 'Special Offers',
      widgets: [{ id: 1, type: 'countdown', props: { targetDate: '2024-12-31T23:59:59' } }],
    },
  ], // Sample section with widgets
};

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

  const appString = buildReactString(isPreview, templateName, sampleBusinessData);
  const html = buildHtml(sampleBusinessData, appString, templateName, isPreview);

  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
