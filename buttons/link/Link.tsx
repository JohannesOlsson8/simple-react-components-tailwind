import React from 'react';
import { IVariant, Variant } from '../atoms/Variant';

interface ILink extends IVariant {
  to: string;
}

export const Link: React.FC<ILink> = (props) => {
  return <Variant {...props} />;
};
