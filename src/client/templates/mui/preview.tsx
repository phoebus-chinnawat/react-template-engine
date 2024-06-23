import React from 'react';
import { createRoot } from 'react-dom/client';
import { initialData } from '../../../initialData';
import PreviewApp from '../../PreviewApp/App';
import { publish } from '../../service/publish';
import { RenderData } from '../../types';
import { MuiTemplate } from './App';

const rootNode = document.getElementById('root');
const onPublish = async (data: RenderData) => {
  publish('mui', data);
};
if (rootNode) {
  const root = createRoot(rootNode);
  root.render(
    <PreviewApp
      renderData={initialData}
      onPublish={onPublish}
      render={initialData => <MuiTemplate data={initialData} />}
    />,
  );
} else {
  console.error('cannot create root');
}
