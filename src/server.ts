import express, { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { App } from './App';
import { BusinessData } from './types';
import { PreviewApp } from './Preview';

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
  }
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
    contacts: {
        phone: sampleBusinessData.contacts.phone,
        email: sampleBusinessData.contacts.email
    }
  };
  let appString = '';
  const AppElement = React.createElement(App, { business: businessData })
  if (isPreview) {
    appString = ReactDOMServer.renderToString(React.createElement(PreviewApp, { business: businessData, children: AppElement }));
  } else {
    appString = ReactDOMServer.renderToString(AppElement);
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Template Engine</title>
        <link href="/styles/tailwind.css" rel="stylesheet"/>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify({ business: businessData })};
        </script>
        <script src="/${isPreview ? 'preview' : 'client'}.bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
