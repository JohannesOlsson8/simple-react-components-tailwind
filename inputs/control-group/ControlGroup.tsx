interface IControlGroup {
  legend: string;
}

export const ControlGroup: React.FC<IControlGroup> = (props) => {
  return (
    <fieldset className="flex flex-col">
      <legend className="mb-1">{props.legend}</legend>
      <div className="flex flex-col">{props.children}</div>
    </fieldset>
  );
};
