type FormInputProps = {
  title: string;
  className?: string;
  inputType?: "date" | "text" | "textarea";
  required?: boolean;
  defaultValue?: string;
};
export const PassiveFormInput = ({
  defaultValue,
  title,
  className,
  inputType,
  required,
}: FormInputProps) => {
  return (
    <div className={`form-inputs-container ${className ? className : ""}`}>
      <label htmlFor={`${title}-input`}>{title}</label>
      {inputType === "textarea" ? (
        <textarea required={required} defaultValue={defaultValue} />
      ) : (
        <input
          id={`${title}-input`}
          defaultValue={defaultValue}
          type={inputType}
          required={required}
        />
      )}
    </div>
  );
};
export const ControlledFormInput = ({
  defaultValue,
  title,
  className,
  inputType,
  value,
  onChange,
  required,
}: FormInputProps & {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <div className={`form-inputs-container ${className ? className : ""}`}>
      <label htmlFor={`${title}-input`}>{title}</label>
      {inputType === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          required={required}
        />
      ) : (
        <input
          id={`${title}-input`}
          defaultValue={defaultValue}
          value={value}
          type={inputType}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};
export const PassiveDropDownInput = () => {};
export const ControlledDropDownInput = () => {};
export default PassiveFormInput;
