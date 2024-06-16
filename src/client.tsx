import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client';

const name = (window as any).__INITIAL_DATA__.name;
const rootNode = document.getElementById('root');
if (rootNode) {
  const root = createRoot(rootNode);  
  root.render(<App name={name} />);
} else {
  console.error('cannot create root');
}

