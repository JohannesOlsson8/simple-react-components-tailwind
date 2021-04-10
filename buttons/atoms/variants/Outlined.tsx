import { Base, IBase } from '../base/Base';

export const Outlined: React.FC<IBase> = (props) => {
  return (
    <Base className="border-fuchsia-500" {...props}>
      {props.children}
    </Base>
  );
};
