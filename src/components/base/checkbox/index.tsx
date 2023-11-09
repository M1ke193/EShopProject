import { InputHTMLAttributes, useState } from "react";
import style from "./style.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const CheckBox = (props: Props) => {
  const { className = "", checked = false } = props;
  const [checkStatus, setCheckStatus] = useState(checked);
  const handleCheckStatus = () => {
    setCheckStatus(!checkStatus);
  };

  return (
    <input
      {...props}
      className={`${style.checkbox} ${className}`}
      type="checkbox"
      checked={checkStatus}
      onChange={handleCheckStatus}
    />
  );
};

export default CheckBox;
