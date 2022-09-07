import "./Button.css";

interface ButtonProps {
  type: "danger" | "primary";
}

export function Button({
  type,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className={`button  button button--state-${type}`}>
      {children}
    </button>
  );
}
