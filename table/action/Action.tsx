import { IAction } from '../Table';
import { IconButton } from '../../buttons/icon-button/IconButton';

interface IActionProps<T> extends IAction<T> {
  row: T;
}

export function Action<T>(props: IActionProps<T>) {
  return (
    <>
      {props.button && (
        <IconButton
          className="text-primary-base align-middle"
          key={props.label}
          label={props.button.tooltip}
          icon={props.button.icon}
        />
      )}
    </>
  );
}
