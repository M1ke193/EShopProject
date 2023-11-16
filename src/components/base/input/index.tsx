import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import style from "./style.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  label: string;
  error?: FieldError;
}

const Input = (props: Props) => {
  const { id, label, className = "", register, error } = props;

  return (
    <div className={`${style.customInput} ${className}`}>
      <label htmlFor={id} className={props.required ? style.require : ""}>
        {label}
      </label>
      <input
        {...props}
        {...register}
        className={error ? style.errorInput : ""}
      />
    </div>
  );
};

export default Input;
