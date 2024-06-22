import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PreviewApp from '../client/PreviewApp/App';
import { BusinessData } from '../client/types';
import { TemplateName } from '../types';
import { getTemplateElement } from '../util/template';

export function buildReactString(templateName: TemplateName, businessData: BusinessData): string {
  const Template = getTemplateElement(templateName);
  const AppElement = React.createElement(Template, { business: businessData });

  return ReactDOMServer.renderToString(AppElement);
}

export function buildPreviewReactString(
  templateName: TemplateName,
  businessData: BusinessData,
): string {
  const Template = getTemplateElement(templateName);
  const AppElement = React.createElement(Template, { business: businessData });
  const EditorElement = React.createElement(
    PreviewApp,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    { business: businessData, onPublish: async data => {} },
    AppElement,
  );

  return ReactDOMServer.renderToString(EditorElement);
}
