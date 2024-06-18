export interface BusinessData {
  shopName: string;
  description: string;
  location: string;
  reviewers: { name: string; review: string; }[];
  contacts: { phone: string; email: string; };
}