import "./Button.css";

interface IButtonProps {
  type: "danger" | "primary";
  title: string;
}

function Button({ type, title }: IButtonProps) {
  return (
    <button className={`button-component button-component--${type}`}>
      {title}
    </button>
  );
}

export default Button;
