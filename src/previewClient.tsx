import React from 'react';
import { createRoot } from 'react-dom/client';
import { PreviewApp } from './Preview';
import { App } from './App';

const business = (window as any).__INITIAL_DATA__.business;
const rootNode = document.getElementById('root');
if (rootNode) {
  const root = createRoot(rootNode);  
  root.render(<PreviewApp business={business}>
    <App business={business} />
  </PreviewApp>);
} else {
  console.error('cannot create root');
}

