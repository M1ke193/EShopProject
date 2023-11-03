import { AnchorHTMLAttributes } from "react";
import style from "./style.module.scss";
import { MenuItem } from "../modal";
import { Link } from "react-router-dom";


interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  type?: "primary" | "text";
  trigger?: "click" | "hover";
  items?: MenuItem;
}

const Dropdown = (props: Props) => {
  const { className = "", type = "text", trigger = "hover", href = "" } = props;
  return (
    <div className={`${style.dropdown} ${className}`
    }>
      <Link className={`${style.link} ${style[type]}`} to={href}>
        {props.children}
        <i className="fa-solid fa-chevron-down fa-xs" style={{ color: '#777', marginLeft: '3px' }}></i>
      </Link>

      <ul className={style.menu}>
        <li>Login</li>
        <li>Cart</li>
        <li>Shop</li>
      </ul>
    </div>
  );
};

export default Dropdown;
