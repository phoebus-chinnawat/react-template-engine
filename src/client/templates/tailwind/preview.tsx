import React from 'react';
import { createRoot } from 'react-dom/client';
import { initialData } from '../../../initialData';
import PreviewApp from '../../PreviewApp/App';
import { publish } from '../../service/publish';
import { BusinessData } from '../../types';
import { TailwindTemplate } from './App';

const business = initialData;
const rootNode = document.getElementById('root');
const onPublish = async (data: BusinessData) => {
  publish('tailwind', data);
};
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <PreviewApp
      business={business}
      onPublish={onPublish}
      render={businessData => <TailwindTemplate business={businessData} />}
    />,
  );
} else {
  console.error('cannot create root');
}
