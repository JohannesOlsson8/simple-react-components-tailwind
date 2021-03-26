import { IBaseButton } from "../atoms/base/BaseButton";
import { ContainedButton } from "../atoms/variants/ContainedButton";
import { GhostButton } from "../atoms/variants/GhostButton";
import { OutlinedButton } from "../atoms/variants/OutlinedButton";

interface IButton extends IBaseButton {
  variant?: "contained" | "outlined" | "ghost";
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<IButton> = (props) => {
  const { variant, icon, children, ...rest } = props;

  if (variant === "outlined") {
    return (
      <OutlinedButton icon={icon} {...rest}>
        {props.children}
      </OutlinedButton>
    );
  }

  if (variant === "ghost") {
    return (
      <GhostButton icon={icon} {...rest}>
        {props.children}
      </GhostButton>
    );
  }

  return (
    <ContainedButton icon={icon} {...rest}>
      {props.children}
    </ContainedButton>
  );
};
