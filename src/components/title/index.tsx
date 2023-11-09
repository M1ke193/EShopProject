import { HTMLProps } from "react";
import style from "./index.module.scss";
import IconAwesome from "./icon-awesome";

interface Props extends HTMLProps<HTMLDivElement> {
  iconClass: string;
  inconTitle: string;
  title: string;
  setSlideAction?: (action: string) => void;
}

const Title = (props: Props) => {
  return (
    <div className={style.titleSlide}>
      <IconAwesome iconClass={props.iconClass}> {props.inconTitle}</IconAwesome>
      <h1>{props.title}</h1>
      {props.setSlideAction && (
        <div className={style.groupButton}>
          <a onClick={() => props.setSlideAction!("left")}>
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <a onClick={() => props.setSlideAction!("right")}>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default Title;
