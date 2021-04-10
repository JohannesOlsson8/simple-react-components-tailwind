import React from "react";
import { IVariant, Variant } from "../atoms/Variant";

export const Button: React.FC<IVariant> = (props) => {
  return <Variant {...props} />;
};
