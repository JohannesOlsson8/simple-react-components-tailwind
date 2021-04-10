interface ISvgProps {
  className: string;
}

export const SvgWrapper: React.FC<ISvgProps> = (props) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
    className={`${props.className}`}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    {props.children}
  </svg>
);
