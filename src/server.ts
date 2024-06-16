import express, { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import { App } from './App';

const app = express();

app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.get('/', (req: Request, res: Response) => {
  const name = req.query.name as string || 'World';
  const appString = ReactDOMServer.renderToString(React.createElement(App, { name }));

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR Template Engine</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify({ name })};
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
