import React from 'react';
import { MuiTemplate } from './App';
import { createRoot } from 'react-dom/client';

const business = (window as any).__INITIAL_DATA__.business;
const rootNode = document.getElementById('root');
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(<MuiTemplate business={business} />);
} else {
  console.error('cannot create root');
}
