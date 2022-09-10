import "./Input.css";

interface InputProps {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export function Input({ type, placeholder, value, onChange }: InputProps) {
  return (
    <input
      className={`input input--type-${type}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <input
      className="input input--type-checkbox"
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
    />
  );
}
