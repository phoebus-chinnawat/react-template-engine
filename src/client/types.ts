import { TemplateName } from '../types';

export interface Widget {
  id: number;
  type: string;
  props?: any;
}

export interface Section {
  id: number;
  title: string;
  widgets: Widget[];
}

export interface BusinessData {
  templateName?: TemplateName;
  shopName: string;
  description: string;
  location: string;
  reviewers: { name: string; review: string }[];
  contacts: { phone: string; email: string };
  sections: Section[];
}

export interface AppProps {
  business: BusinessData;
}
