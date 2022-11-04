import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import "./DatePicker.scss";

export function DatePicker(props: ReactDatePickerProps) {
  return <ReactDatePicker className="datepicker input-field" {...props} />;
}
