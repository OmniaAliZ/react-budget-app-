type InputProps = {
  idNameHtmlFor: string;
  type: string;
  placeholder: string;
  label: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function Input({
  idNameHtmlFor,
  type,
  placeholder,
  label,
  handleChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor={idNameHtmlFor}>{label}</label>
      <input
        type={type}
        id={idNameHtmlFor}
        name={idNameHtmlFor}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  ); //use passing
}
