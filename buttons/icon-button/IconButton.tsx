import { ContainedButton } from '../atoms/variants/ContainedButton';
import { GhostButton } from '../atoms/variants/GhostButton';
import { OutlinedButton } from '../atoms/variants/OutlinedButton';

interface IIconButton extends React.HTMLProps<HTMLButtonElement> {
  label: string;
  icon: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'ghost';
}

export const IconButton = (props: IIconButton) => {
  const { label, variant, icon, className, ...rest } = props;
  if (variant === 'outlined') {
    return (
      <OutlinedButton iconButton aria-label={label} {...rest} type="button">
        {icon}
      </OutlinedButton>
    );
  }

  if (variant === 'ghost') {
    return (
      <GhostButton iconButton aria-label={label} {...rest} type="button">
        {icon}
      </GhostButton>
    );
  }

  return (
    <ContainedButton iconButton aria-label={label} {...rest} type="button">
      {icon}
    </ContainedButton>
  );
};
