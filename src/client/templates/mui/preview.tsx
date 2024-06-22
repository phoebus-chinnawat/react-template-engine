import React from 'react';
import { createRoot } from 'react-dom/client';
import { initialData } from '../../../initialData';
import PreviewApp from '../../PreviewApp/App';
import { publish } from '../../service/publish';
import { BusinessData } from '../../types';
import { MuiTemplate } from './App';

const rootNode = document.getElementById('root');
const onPublish = async (data: BusinessData) => {
  publish('mui', data);
};
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <PreviewApp
      business={initialData}
      onPublish={onPublish}
      render={initialData => <MuiTemplate business={initialData} />}
    />,
  );
} else {
  console.error('cannot create root');
}
