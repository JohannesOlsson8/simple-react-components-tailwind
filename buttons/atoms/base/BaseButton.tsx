export interface IBaseButton extends React.HTMLProps<HTMLButtonElement> {
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  iconButton?: boolean;
}

export const BaseButton = (props: IBaseButton) => {
  const { className, iconButton, children, ...rest } = props;

  const Icon = () => (
    <div aria-hidden="true" className={`${!iconButton ? 'mr-1 -ml-1.5' : ''}`}>
      {props.icon}
    </div>
  );

  const styles = 'rounded-sm h-12 py-3 px-3 font-semibold flex items-center border-2 outline-none focus:ring-2';

  return (
    <button
      className={`${styles} ${className ? className : ''} ${rest.disabled ? 'opacity-50 cursor-not-allowed' : ''} `}
      type={rest.type ?? 'button'}
      {...rest}
    >
      {props.icon && <Icon />}
      {props.children}
    </button>
  );
};
