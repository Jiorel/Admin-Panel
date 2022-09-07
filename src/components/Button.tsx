import "./Button.css";

interface IButtonProps {
  type: "danger" | "primary";
  title: string;
}

function Button({ type, title }: IButtonProps) {
  return (
    <button className={`button button--component button button--state-${type}`}>
      {title}
    </button>
  );
}

export default Button;
