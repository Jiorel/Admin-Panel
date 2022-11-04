import "./Input.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email" | "password";
}

export function Input({ type, ...props }: InputProps) {
  return (
    <input
      className={`input input--type-${type} input-field`}
      type={type}
      {...props}
    />
  );
}
