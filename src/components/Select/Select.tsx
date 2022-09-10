import "./Select.css";

interface ISelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function Select({ options, value, onChange }: ISelectProps) {
  return (
    <select
      className="select"
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
}
