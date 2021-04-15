import ReactSelect, { Props } from "react-select";
const colors = require("tailwindcss/colors");

interface ISelectProps extends Props {
  label: string;
  hideLabel?: boolean;
}

export const Select = (props: ISelectProps) => {
  const { label, hideLabel, ...rest } = props;

  const width = "8rem";
  const selectStyles = {
    container: (base: any, state: any) => {
      const borderColor = state.isFocused
        ? colors.fuchsia[600]
        : colors.gray[300];
      const isDisabled = state.isDisabled ? 0.5 : 1;
      return {
        border: `1px solid ${borderColor}`,
        position: "relative",
        borderRadius: "0.125rem",
        opacity: isDisabled,
      };
    },
    control: (base: any, state: any) => {
      const borderColor = state.isFocused ? colors.fuchsia[600] : "transparent";
      return {
        border: `1px solid ${borderColor}`,
        color: colors.blueGray[800],
        backgroundColor: colors.white,
        minWidth: width,
        width: "100%",
        display: "inline-flex",
        cursor: "text",
        fontSize: "1rem",
        alignItems: "center",
        height: "3rem",
        padding: "0.5rem 0",
      };
    },
    input: () =>
      ({
        font: "inherit",
        color: "currentColor",
        minWidth: width,
        width: "100%",
        display: "block",
        fontSize: "1rem",
        boxSizing: "content-box",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        webkitTapHighlightColor: "transparent",
      } as React.CSSProperties),

    valueContainer: () => ({
      alignItems: "center",
      display: "flex",
      flex: 1,
      flexWrap: "wrap",
      webkitOverflowScrolling: "touch",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
    }),
    dropdownIndicator: () => ({
      cursor: "pointer",
      color: "darkgray",
      display: "flex",
      alignItems: "center",
      // -1px to compensate for border
      padding: "calc(0.5rem - 1px) 0.5rem 0.5rem 0",
    }),
    indicatorSeparator: () => ({}),
    placeholder: () => ({
      position: "absolute",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      fontSize: "1rem",
      color: colors.blueGray[600],
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      height: "100%",
      alignSelf: "normal",
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
        top: "20%",
      },
    }),
    singleValue: () => ({
      position: "absolute",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      fontSize: "1rem",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      maxWidth: "90%",
      height: "100%",
      alignSelf: "normal",
      color: colors.black,
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
        top: "20%",
      },
    }),
    menu: () => {
      return {
        width: "100%",
        position: "absolute",
        borderRadius: "4px",
        zIndex: 10,
        marginTop: "3px",
        backgroundColor: colors.white,
        boxShadow: " -1px 3px 7px -2px rgba(0,0,0,0.30)",
        webkitBoxShadow: " -1px 3px 7px -2px rgba(0,0,0,0.30)",
        mozBoxShadow: " -1px 3px 7px -2px rgba(0,0,0,0.30)",
      };
    },
    multiValueLabel: () => ({
      webkitAlignItems: "center",
      webkitBoxAlign: "center",
      msFlexAlign: "center",
      alignItems: "center",
      display: "flex",
      webkitFlexWrap: "wrap",
      msFlexWap: "wrap",
      flexWrap: "wrap",
      padding: "0.25rem 0 0.25rem 0.4rem",
      webkitOverflowScrolling: "touch",
      position: "relative",
      overflow: "hidden",
    }),
    multiValue: () => ({
      backgroundColor: colors.blueGray[400],
      borderRadius: "1rem",
      display: "flex",
      marginLeft: "0.5rem",
      minWidth: 0,
    }),
    option: (base: any, state: any) => ({
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      fontSize: "1rem",
      color: colors.black,
      backgroundColor: state.isFocused ? colors.blueGray[200] : colors.white,
      "&:hover": {
        cursor: "pointer",
        backgroundColor: colors.blueGray[200],
      },
    }),
    clearIndicator: () => ({
      cursor: "pointer",
      marginRight: "0.5rem",
      display: "flex",
      alignItems: "center",
      color: colors.blueGray[500],
      borderRadius: "50%",
      "&:hover": {
        color: colors.blueGray[800],
      },
    }),
  } as any;
  return (
    <label className="flex flex-col items-start w-full sm:w-auto">
      <span className={`mb-1 ${props.hideLabel ? "sr-only" : ""} `}>
        {label}
      </span>
      <ReactSelect styles={selectStyles} {...rest}></ReactSelect>
    </label>
  );
};
