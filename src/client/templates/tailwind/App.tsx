import React from 'react';
import { AppProps } from '../../types';

export const TailwindTemplate: React.FC<AppProps> = props => {
  return (
    <div className="bg-red-400 w-screen h-screen flex justify-center items-center">
      {props.business.shopName}
    </div>
  );
};
