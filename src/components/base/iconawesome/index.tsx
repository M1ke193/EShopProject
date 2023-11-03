import React, { HTMLProps } from "react";
import style from "./style.module.scss";
interface Props extends HTMLProps<HTMLDivElement> {
  iconClass: string;
  color?: "red" | "purple";
}

const IconAwesome = (props: Props) => {
  const { color = "red", className = "" } = props;
  return (
    <div className={`${style.iconawesome} ${style[color]} ${className}`}>
      <i className={props.iconClass}></i>
      <span>{props.children}</span>
    </div>
  );
};

export default IconAwesome;
