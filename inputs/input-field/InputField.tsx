interface IInputField extends React.HTMLProps<HTMLInputElement> {
  label: string;
  hideLabel?: boolean;
  helperText?: string;
  type?: "text" | "number";
  validation?: IValidation;
}

interface IValidation {
  error: boolean;
  message?: string;
}

export const InputField = (props: IInputField) => {
  const {
    label,
    helperText,
    hideLabel,
    validation,
    type,
    className,
    ...rest
  } = props;
  const labelWithoutSpaces = trimString(label);

  function getErrorState() {
    return validation?.error ? "border-red-600 bg-red-50" : "border-gray-300";
  }

  return (
    <label className="flex flex-col items-start w-full sm:w-auto">
      <span className={`mb-1 ${props.hideLabel ? "sr-only" : ""} `}>
        {label}
      </span>
      <input
        className={`w-full sm:w-80 h-12 border p-2 placeholder-gray-600 rounded-sm outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600 ring-inset ${getErrorState()} ${
          className ? className : ""
        }`}
        type={!type ? "text" : type}
        placeholder={hideLabel ? label : undefined}
        {...rest}
      />

      {(validation || helperText) && (
        <div className="w-full sm:w-80 mt-1.5">
          {validation && validation.message && (
            <p className="text-red-800 font-light">{validation.message}</p>
          )}
          {helperText && !validation?.message && (
            <p className="text-gray-600 font-light">{helperText}</p>
          )}
        </div>
      )}
    </label>
  );
};
