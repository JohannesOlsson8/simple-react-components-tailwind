import { trimString } from "../../other/trim-string";

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
    <div className="flex flex-col items-start w-full sm:w-auto">
      {!hideLabel && (
        <label className="mb-1" htmlFor={labelWithoutSpaces}>
          {label}
        </label>
      )}
      <input
        id={labelWithoutSpaces}
        className={`w-full sm:w-80 h-12 border p-2 placeholder-gray-600 rounded-sm outline-none focus:border-fuchsia-600 focus:ring-1 focus:ring-fuchsia-600 ring-inset ${getErrorState()} ${className}`}
        aria-label={hideLabel ? label : undefined}
        type={!type ? "text" : type}
        placeholder={hideLabel ? label : undefined}
        {...rest}
      />

      {(validation || helperText) && (
        <div className="w-full sm:w-80 mt-1">
          {validation && validation.message && (
            <p className="text-red-800 font-light">{validation.message}</p>
          )}
          {helperText && !validation?.message && (
            <p className="text-gray-600 font-light">{helperText}</p>
          )}
        </div>
      )}
    </div>
  );
};
