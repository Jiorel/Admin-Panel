import "./Input.css";

interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
}

export function Input({ type, placeholder }: InputProps) {
  return (
    <input
      className={`input input--type-${type}`}
      type={type}
      placeholder={placeholder}
    />
  );
}

interface CheckboxProps {
  checked: boolean;
}

export function Checkbox({ checked }: CheckboxProps) {
  return (
    <input
      className="input input--type-checkbox"
      type="checkbox"
      checked={checked}
    />
  );
}
