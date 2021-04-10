interface ILabel {
  label: string;
  disabled?: boolean;
}

export const Label: React.FC<ILabel> = (props) => {
  return (
    <label
      className={`flex items-center my-1 ${
        props.disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div className="pr-1">{props.children}</div>
      <span className="leading-none">{props.label}</span>
    </label>
  );
};
