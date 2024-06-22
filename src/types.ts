export type TemplateName = 'mui' | 'tailwind';
export type TemplateConfig = {
  [key in TemplateName]: TemplateScript;
};
export interface TemplateScript {
  script: string;
  previewScript: string;
}
