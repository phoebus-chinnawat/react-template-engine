import React from 'react';
import { createRoot } from 'react-dom/client';
import { TailwindTemplate } from './App';
import PreviewApp from '../../PreviewApp/App';

const business = window.__INITIAL_DATA__.business;
const rootNode = document.getElementById('root');
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <PreviewApp
      business={business}
      render={businessData => <TailwindTemplate business={businessData} />}
    />,
  );
} else {
  console.error('cannot create root');
}
