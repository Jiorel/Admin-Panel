import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "danger" | "primary";
}

export function Button({
  variant,
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className={`button button--state-${variant}`} {...props}>
      {children}
    </button>
  );
}
