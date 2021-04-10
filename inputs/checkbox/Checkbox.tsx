import React from "react";
import { Label } from "../atoms/Label";
import { SvgWrapper } from "../atoms/SvgWrapper";
import classes from "./Checkbox.module.scss";

interface ICheckbox extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

export const Checkbox = (props: ICheckbox) => {
  const { label, ...rest } = props;

  const CheckedCheckbox = () => (
    <SvgWrapper className={classes.checked}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z" />
    </SvgWrapper>
  );

  const UncheckedCheckbox = () => (
    <SvgWrapper className={classes.unchecked}>
      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </SvgWrapper>
  );

  return (
    <Label label={label} disabled={rest.disabled}>
      <input
        className={`sr-only ${classes.checkbox}`}
        type="checkbox"
        checked={props.checked}
        {...rest}
      />
      <UncheckedCheckbox />
      <CheckedCheckbox />
    </Label>
  );
};
