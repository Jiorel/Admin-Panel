import "./Checkbox.scss";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

export function Checkbox({ checked, ...props }: CheckboxProps) {
  return (
    <input
      className="input input--type-checkbox"
      type="checkbox"
      checked={checked}
      {...props}
    />
  );
}
