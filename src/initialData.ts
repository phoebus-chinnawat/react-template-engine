import { BusinessData, RenderData } from './client/types';

export const initialBusinessData: BusinessData = {
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
};

export const initialData: RenderData = {
  ...initialBusinessData,
  section: {
    shopName: {
      detail: initialBusinessData.shopName,
      order: 1,
      widgets: {
        countdown: {
          position: 'top',
          details: {
            props: {
              targetDate: 'Sun Jun 24 2024',
            },
          },
        },
      },
    },
    contacts: {
      detail: initialBusinessData.contacts,
      order: 2,
      widgets: {
        socialMediaFeed: {
          position: 'bottom',
          details: {
            props: {
              handle: '5gcoffeehouse',
              platform: 'instagram',
            },
          },
        },
      },
    },
    description: {
      detail: initialBusinessData.description,
      order: 3,
      widgets: {},
    },
    location: {
      detail: initialBusinessData.location,
      order: 4,
      widgets: {},
    },
    reviewers: {
      detail: initialBusinessData.reviewers,
      order: 5,
      widgets: {},
    },
  },
};
