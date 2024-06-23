import { TemplateName } from '../types';
import { IWidget, WidgetId } from './widgets/registry';

export interface Widget<T> {
  details: T;
  position: 'top' | 'left' | 'rignt' | 'bottom';
}

export type WidgetData = {
  [K in WidgetId]: Widget<IWidget[K]>;
};

export interface SectionDetail<T> {
  detail: T;
  order: number;
  widgets: Partial<WidgetData> | undefined;
}

export type Section = {
  [K in keyof BusinessData]: SectionDetail<BusinessData[K]>;
};
export interface Reviewer {
  name: string;
  review: string;
}

export interface Contacts {
  phone: string;
  email: string;
}
export interface BusinessData {
  shopName: string;
  description: string;
  location: string;
  reviewers: Reviewer[];
  contacts: Contacts;
}

export type RenderData = BusinessData & {
  templateName?: TemplateName;
  section: Section;
};

export interface AppProps {
  data: RenderData;
}
