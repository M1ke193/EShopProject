import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import style from "./style.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  label: string;
}

const Input = (props: Props) => {
  const { id, label, className = "", register } = props;
  return (
    <div className={`${style.customInput} ${className}`}>
      <label htmlFor={id} className={props.required ? style.require : ""}>
        {label}
      </label>
      <input {...props} {...register} />
    </div>
  );
};

export default Input;
