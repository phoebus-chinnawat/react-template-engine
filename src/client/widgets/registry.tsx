import Countdown, { ICountdownProps } from './Countdown';
import SocialMediaFeed, { ISocialMediaFeedProps } from './SocialMediaFeed';

export type WidgetId = 'countdown' | 'socialMediaFeed';

export type IWidget = {
  countdown: {
    props: ICountdownProps;
  };
  socialMediaFeed: {
    props: ISocialMediaFeedProps;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IWidgetRegistry = Record<WidgetId, React.FC<any>>;

export const WidgetRegistry: IWidgetRegistry = {
  countdown: Countdown,
  socialMediaFeed: SocialMediaFeed,
};
