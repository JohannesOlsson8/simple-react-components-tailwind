import React from 'react';
import { IBase } from './base/Base';
import { Contained } from './variants/Contained';
import { Ghost } from './variants/Ghost';
import { Outlined } from './variants/Outlined';

export interface IVariant extends IBase {
  variant?: 'contained' | 'outlined' | 'ghost';
  icon?: React.ReactNode;
  children: React.ReactNode;
  to?: string;
}

export const Variant = (props: IVariant) => {
  const { children, variant, ...rest } = props;
  if (variant === 'outlined') {
    return <Outlined {...rest}>{props.children}</Outlined>;
  }

  if (variant === 'ghost') {
    return <Ghost {...rest}>{props.children}</Ghost>;
  }

  return <Contained {...rest}>{props.children}</Contained>;
};
