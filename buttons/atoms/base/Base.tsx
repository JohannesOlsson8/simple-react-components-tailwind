import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../loading/Loading';

export interface IBase extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  iconButton?: boolean;
  to?: string;
  loading?: boolean;
}

export const Base = (props: IBase) => {
  const { className, iconButton, to, children, loading, icon, ...rest } = props;

  const Icon = () => (
    <div aria-hidden="true" className={`${!iconButton ? 'mr-1 -ml-1.5' : ''} `}>
      {icon}
    </div>
  );

  const styles =
    'rounded-sm h-12 py-3 px-3 font-semibold border-2 outline-none focus:ring-2 relative flex items-center justify-center';

  if (to) {
    return (
      <a className={styles} href={to}>
        <div className="flex items-center">
          {icon && <Icon />}
          {props.children}
        </div>
      </a>
    );
  }

  return (
    <button
      className={`${styles} ${className ? className : ''} ${loading ? 'cursor-default' : ''} ${
        rest.disabled ? 'opacity-50 cursor-not-allowed' : ''
      } `}
      type={rest.type ?? 'button'}
      disabled={rest.disabled || loading}
      {...rest}
    >
      <div className={`flex items-center ${loading ? 'opacity-0' : ''}`}>
        {icon && <Icon />}
        {props.children}
      </div>
      {loading && <Loading />}
    </button>
  );
};
