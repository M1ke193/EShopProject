import  { HTMLProps } from "react";
import style from "./style.module.scss";

interface Props extends HTMLProps<HTMLParagraphElement> {}

const Errortext = (props: Props) => {
  const { className = "" } = props;
  return <p className={`${style.errortext} ${className} `}>{props.children}</p>;
};

export default Errortext;
