import { BusinessData } from '../client/types';

export function buildPreload(business: BusinessData): string {
  return `window.__INITIAL_DATA__ = ${JSON.stringify({ business })};`;
}
