import React from 'react';
import { createRoot } from 'react-dom/client';
import { TailwindTemplate } from '../../templates/tailwind/App';
import App from '../App';

const business = window.__INITIAL_DATA__.business;
const rootNode = document.getElementById('root');
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <App
      business={business}
      render={businessData => <TailwindTemplate business={businessData} />}
    />,
  );
} else {
  console.error('cannot create root');
}
