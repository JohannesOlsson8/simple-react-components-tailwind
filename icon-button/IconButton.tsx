interface IIconButton extends React.HTMLProps<HTMLButtonElement> {
  label: string;
  icon: React.ReactNode;
}

export const IconButton = (props: IIconButton) => {
  const { label, icon, className, ...rest } = props;
  return (
    <button
      className={`outline-none rounded-sm focus:ring-2 focus:ring-fuchsia-600 ring-inset ${
        className ? className : ""
      }`}
      aria-label={label}
      {...rest}
      type="button"
    >
      {icon}
    </button>
  );
};
