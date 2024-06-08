import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import '@babel/register';
import path from 'path';

const app = express();

app.use('/styles', express.static(path.join(__dirname, 'styles')));

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  const appString = renderToString(React.createElement(App, { name: String(name) }));
  res.send(`<!DOCTYPE html>${appString}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
