import React from 'react';
import { createRoot } from 'react-dom/client';
import { TailwindTemplate } from './App';

const business = window.__INITIAL_DATA__.business;
const rootNode = document.getElementById('root');
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(<TailwindTemplate business={business} />);
} else {
  console.error('cannot create root');
}
