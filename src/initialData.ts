import { BusinessData } from './client/types';

export const initialData: BusinessData = {
  shopName: 'The Coffee House',
  description: 'A cozy place to enjoy your favorite coffee.',
  location: '123 Java Street, Caffeine City',
  reviewers: [
    { name: 'John Doe', review: 'Great coffee and atmosphere!' },
    { name: 'Jane Smith', review: 'A perfect place to relax and work.' },
  ],
  contacts: {
    phone: '123-456-7890',
    email: 'info@coffeehouse.com',
  },
  sections: [
    {
      id: 1,
      title: 'Special Offers',
      widgets: [{ id: 1, type: 'countdown', props: { targetDate: '2024-12-31T23:59:59' } }],
    },
  ], // Sample section with widgets
};
