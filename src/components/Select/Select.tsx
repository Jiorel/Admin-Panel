import "./Select.css";

interface ISelectProps {
  options: string[];
}

export function Select({ options }: ISelectProps) {
  return (
    <select className="select">
      {options.map((option) => {
        return <option>{option}</option>;
      })}
    </select>
  );
}
