import Countdown, { ICountdownProps } from './Countdown';

export type WidgetId = 'countdown';

export type IWidget = {
  countdown: {
    props: ICountdownProps;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IWidgetRegistry = Record<WidgetId, React.FC<any>>;

export const WidgetRegistry: IWidgetRegistry = {
  countdown: Countdown,
};
