import { BusinessData } from '../client/types';

export function buildHtml(businessData: BusinessData, appString: string, script: string) {
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
        <script src="/${script}.bundle.js"></script>
      </body>
    </html>
  `;
}

export function buildPreviewHtml(businessData: BusinessData, appString: string, script: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${businessData.shopName}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/${script}.bundle.js"></script>
      </body>
    </html>
  `;
}
