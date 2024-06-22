import { MuiTemplate } from '../client/templates/mui/App';
import { TailwindTemplate } from '../client/templates/tailwind/App';
import { AppProps } from '../client/types';
import { templateConfig } from '../templateConfig';
import { TemplateName, TemplateScript } from '../types';

export function getTemplateElement(templateName: TemplateName): React.FC<AppProps> {
  switch (templateName) {
    case 'mui':
      return MuiTemplate;
    case 'tailwind':
      return TailwindTemplate;
  }
}

export function getTemplateScript(templateName: TemplateName): TemplateScript {
  switch (templateName) {
    case 'mui':
      return templateConfig.mui;
    case 'tailwind':
      return templateConfig.tailwind;
  }
}
