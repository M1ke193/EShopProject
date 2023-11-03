import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import Dropdown from "src/components/base/dropdown";
interface Props {
  className?: string;
  color?: "dark" | "white";
}

const TopHeader = (props: Props) => {
  const { className = "", color = "white" } = props;
  return (
    <div className={`${style["header-top"]} ${className} ${style[color]}`}>
      <div className={style["dropdown-top"]}>
        <Dropdown>En</Dropdown>
        <Dropdown>USD</Dropdown>
      </div>
      <div className={style["quick-link"]}>
        <Link to="/register">Join Us</Link>
        <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};

export default TopHeader;
