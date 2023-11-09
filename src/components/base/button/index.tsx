import { ButtonHTMLAttributes } from "react";
import style from "./style.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  color?: "red" | "blue" | "white" | "gray";
  variant?: "contained" | "outline";
}

export const Button = (props: Props) => {
  const { size = "md", color = "", className = "", variant = "" } = props;

  return (
    <button
      {...props}
      className={`${style.buttonWrap} ${style[size]} 
      ${style[color || ""]} 
      ${style[variant || ""]} ${className}`}
    >
      {props.children}
    </button>
  );
};
