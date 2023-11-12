import { AnchorHTMLAttributes, useEffect, useRef } from "react";
import style from "./style.module.scss";
import { MenuItem } from "../modal";
import { useNavigate } from "react-router-dom";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: "primary" | "text";
  trigger?: "click" | "hover";
  items?: MenuItem;
}

const Dropdown = (props: Props) => {
  const { className = "", type = "text", href = "", items = [] } = props;
  const linkRef = useRef<HTMLAnchorElement>(null);
  const navigate = useNavigate();
  const handleClick = () => {
    if (type === "primary") {
      navigate(href);
    } else {
      const classList = linkRef.current?.classList;
      if (classList?.contains(style.active)) {
        classList.remove(style.active);
      } else {
        classList?.add(style.active);
      }
    }
  };

  const handleTurnoffDropdown = (event: any) => {
    const checkCondition =
      linkRef.current &&
      linkRef.current.classList.contains(style.active) &&
      !linkRef.current.contains(event.target);
    if (checkCondition) {
      linkRef.current.classList.remove(style.active);
    }
  };

  useEffect(() => {
    if (type === "text") {
      document.addEventListener("click", handleTurnoffDropdown);
      return () => {
        document.removeEventListener("click", handleTurnoffDropdown);
      };
    }
  }, []);

  return (
    <div className={`${style.dropdown} ${className}`}>
      <a
        className={`${style.link} ${style[type]}`}
        onClick={handleClick}
        ref={linkRef}
      >
        <span>{props.children}</span>
        {!href && (
          <i
            className={`fa-solid fa-angle-down fa-sm ${style.icon}`}
            style={{ color: "#777", marginLeft: "3px" }}
          ></i>
        )}
      </a>
      {!href && (
        <ul className={style.menu}>
          {items &&
            items.length > 0 &&
            items.map((items, index) => <li key={index}>{items.label}</li>)}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
