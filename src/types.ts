export type TemplateName = 'mui' | 'tailwind';
export type TemplateConfigMapping = {
  [key in TemplateName]: TemplateConfig;
};
export interface TemplateConfig {
  html: string;
  previewHtml: string;
  script: string;
  previewScript: string;
}
