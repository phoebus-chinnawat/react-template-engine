import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/Editor/App';
import { BusinessData } from '../client/types';
import { TemplateName } from '../types';
import { getTemplateElement } from '../util/template';

export function buildReactString(
  isPreview: boolean,
  templateName: TemplateName,
  businessData: BusinessData,
): string {
  let appString: string;
  const Template = getTemplateElement(templateName);
  const AppElement = React.createElement(Template, { business: businessData });

  if (isPreview) {
    const EditorElement = React.createElement(App, { business: businessData }, AppElement);
    appString = ReactDOMServer.renderToString(EditorElement);
  } else {
    appString = ReactDOMServer.renderToString(AppElement);
  }

  return appString;
}
