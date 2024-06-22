// server.ts
import express, { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { MuiTemplate } from './client/templates/mui/App';
import { BusinessData } from './client/types';
import templateConfig from './templateConfig.json';
import App from './client/Editor/App';

const sampleBusinessData: BusinessData = {
  shopName: 'The Coffee House',
  description: 'A cozy place to enjoy your favorite coffee.',
  location: '123 Java Street, Caffeine City',
  reviewers: [
    { name: 'John Doe', review: 'Great coffee and atmosphere!' },
    { name: 'Jane Smith', review: 'A perfect place to relax and work.' }
  ],
  contacts: {
    phone: '123-456-7890',
    email: 'info@coffeehouse.com'
  },
  sections: [
    {
      id: 1,
      title: 'Special Offers',
      widgets: [
        { id: 1, type: 'countdown', props: { targetDate: '2024-12-31T23:59:59' } }
      ]
    }
  ] // Sample section with widgets
};

const app = express();

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/', async (req: Request, res: Response) => {
  const isPreview = req.query.isPreview || false;
  const businessData: BusinessData = {
    shopName: sampleBusinessData.shopName,
    description: sampleBusinessData.description,
    location: sampleBusinessData.location,
    reviewers: sampleBusinessData.reviewers,
    contacts: sampleBusinessData.contacts,
    sections: sampleBusinessData.sections // Include sections in the data
  };
  let appString = '';
  const AppElement = React.createElement(MuiTemplate, { business: businessData });
  
  if (isPreview) {
    const EditorElement = React.createElement(App, { business: businessData, children: AppElement });
    appString = ReactDOMServer.renderToString(EditorElement);
  } else {
    appString = ReactDOMServer.renderToString(AppElement);
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${businessData.shopName}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <div id="root">${appString}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify({ business: businessData })};
        </script>
        <script src="/${isPreview ? templateConfig.muiTemplate.previewScript : templateConfig.muiTemplate.script}.bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
