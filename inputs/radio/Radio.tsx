import React from "react";
import { Label } from "../atoms/Label";
import { SvgWrapper } from "../atoms/SvgWrapper";
import classes from "./Radio.module.scss";

interface IRadio extends React.HTMLProps<HTMLInputElement> {
  label: string;
  name: string;
}

export const Radio = (props: IRadio) => {
  const { label, name, ...rest } = props;

  const CheckedRadio = () => (
    <SvgWrapper className={classes.checked}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      <circle cx="12" cy="12" r="5" />
    </SvgWrapper>
  );

  const UncheckedRadio = () => (
    <SvgWrapper className={classes.unchecked}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </SvgWrapper>
  );

  return (
    <Label label={label} disabled={rest.disabled}>
      <input
        className={`sr-only ${classes.radio}`}
        name={name}
        type="radio"
        {...rest}
      />
      <UncheckedRadio />
      <CheckedRadio />
    </Label>
  );
};
