import { TemplateName } from '../../types';
import { BusinessData } from '../types';

export async function publish(template: TemplateName, business: BusinessData): Promise<void> {
  business.templateName = template;
  const response = await fetch('/publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(business),
  });
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'website.zip';
  document.body.appendChild(a);
  a.click();

  // Cleanup: Remove the temporary URL and link element
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
