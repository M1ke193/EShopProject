import style from "./style.module.scss";
import { Link } from "react-router-dom";
import Dropdown from "src/components/header/header-dropdown";
import { MenuItem } from "../modal";

interface Props {
  className?: string;
  color?: "dark" | "white";
}

const itemsLanguage: MenuItem = [
  {
    label: <span className={style.item}>English</span>,
  },
  {
    label: <span className={style.item}>VietNam</span>,
  },
  {
    label: <span className={style.item}>France</span>,
  },
];

const itemsMoney: MenuItem = [
  {
    label: <span className={style.item}>USD</span>,
  },
  {
    label: <span className={style.item}>EUR</span>,
  },
  {
    label: <span className={style.item}>VND</span>,
  },
];

const TopHeader = (props: Props) => {
  const { className = "", color = "white" } = props;
  return (
    <div className={`${style["header-top"]} ${className} ${style[color]}`}>
      <div className={style["dropdown-top"]}>
        <Dropdown items={itemsLanguage}>En</Dropdown>
        <Dropdown items={itemsMoney}>USD</Dropdown>
      </div>
      <div className={style["quick-link"]}>
        <Link to="/register">Join Us</Link>
        <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};

export default TopHeader;
