import "./Button.css";

interface ButtonProps {
  type: "danger" | "primary";
  onClick: () => void;
}

export function Button({
  type,
  children,
  onClick,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className={`button button--state-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}
