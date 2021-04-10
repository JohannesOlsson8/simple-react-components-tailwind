import { Base, IBase } from '../base/Base';

export const Contained: React.FC<IBase> = (props) => {
  return (
    <Base className="bg-fuchsia-500 border-fuchsia-500 text-white" {...props}>
      {props.children}
    </Base>
  );
};
