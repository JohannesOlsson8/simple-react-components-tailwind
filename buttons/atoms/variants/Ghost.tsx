import { Base, IBase } from '../base/Base';

export const Ghost: React.FC<IBase> = (props) => {
  return (
    <Base className="border-none" {...props}>
      {props.children}
    </Base>
  );
};
