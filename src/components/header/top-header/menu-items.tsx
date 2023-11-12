import { MenuItem } from "../modal";
import style from "./style.module.scss";
export const itemsLanguage: MenuItem = [
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
export const itemsMoney: MenuItem = [
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
