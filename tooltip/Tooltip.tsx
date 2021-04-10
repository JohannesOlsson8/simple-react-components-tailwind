import { Tooltip as ReachTooltip } from "@reach/tooltip";
import "./Tooltip.scss";

interface ITooltip {
  label: string;
}

export const Tooltip: React.FC<ITooltip> = (props) => {
  return <ReachTooltip label={props.label}>{props.children}</ReachTooltip>;
};
