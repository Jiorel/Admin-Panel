import "./Select.scss";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  value: string;
}

export function Select({ options, value, className, ...props }: SelectProps) {
  return (
    <select className={`select ${className || ""}`} value={value} {...props}>
      {options.map(({ label, value }, index) => {
        return (
          <option key={index} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
}
