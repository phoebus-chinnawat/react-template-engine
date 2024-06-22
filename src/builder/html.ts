import { BusinessData } from '../client/types';
import { TemplateName } from '../types';
import { getTemplateScript } from '../util/template';

export function buildHtml(
  businessData: BusinessData,
  appString: string,
  templateName: TemplateName,
  isPreview: boolean,
) {
  const { script, previewScript } = getTemplateScript(templateName);
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${businessData.shopName}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <div id="root">${appString}</div>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify({ business: businessData })};
        </script>
        <script src="/${isPreview ? previewScript : script}.bundle.js"></script>
      </body>
    </html>
  `;
}
