import React from 'react';
import { createRoot } from 'react-dom/client';
import { TailwindTemplate } from './App';
import PreviewApp from '../../PreviewApp/App';
import { initialData } from '../../../initialData';

const business = initialData;
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
