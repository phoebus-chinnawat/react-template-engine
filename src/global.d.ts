import { BusinessData } from './client/types';

declare global {
  interface Window {
    __INITIAL_DATA__: {
      business: BusinessData;
    };
  }
}
