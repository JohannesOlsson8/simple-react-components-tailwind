import { BaseButton, IBaseButton } from '../base/BaseButton';

export const ContainedButton: React.FC<IBaseButton> = (props) => {
  return (
    <BaseButton className="bg-fuchsia-500 border-fuchsia-500 text-white" {...props}>
      {props.children}
    </BaseButton>
  );
};
