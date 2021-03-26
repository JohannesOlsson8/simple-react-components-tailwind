import { BaseButton, IBaseButton } from '../base/BaseButton';

export const OutlinedButton: React.FC<IBaseButton> = (props) => {
  return (
    <BaseButton className="border-fuchsia-500" {...props}>
      {props.children}
    </BaseButton>
  );
};
