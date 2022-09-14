import "./Select.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  value: string;
}

export function Select({ options, value, className, ...props }: SelectProps) {
  return (
    <select className={`select ${className}`} defaultValue={value} {...props}>
      {options.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
}
