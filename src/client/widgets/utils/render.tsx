import React, { useId } from 'react';
import { WidgetData } from '../../types';
import { WidgetId, WidgetRegistry } from '../registry';

export const renderWidgets = (widgets: WidgetData): (React.JSX.Element | null)[] | null => {
  if (!widgets) return null;
  return Object.keys(widgets).map((key: string) => {
    const widgetId = key as WidgetId;
    if (widgets[widgetId] != null) {
      const WidgetComponent = WidgetRegistry[widgetId];
      const widgetProps = widgets[widgetId].details.props;
      return <WidgetComponent key={useId()} {...widgetProps} />;
    }
    return null;
  });
};
