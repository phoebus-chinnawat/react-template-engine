import { RenderData } from './client/types';

declare global {
  interface Window {
    __INITIAL_DATA__: {
      business: RenderData;
    };
  }
}
