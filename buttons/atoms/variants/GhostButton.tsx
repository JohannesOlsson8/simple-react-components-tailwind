import { BaseButton, IBaseButton } from '../base/BaseButton';

export const GhostButton: React.FC<IBaseButton> = (props) => {
  return (
    <BaseButton className="border-none" {...props}>
      {props.children}
    </BaseButton>
  );
};
