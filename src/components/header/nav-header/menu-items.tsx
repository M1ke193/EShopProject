import { MenuItem } from "../modal";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

export const itemsHome: MenuItem = [
  {
    label: (
      <Link className={style.link} to={"/product/category/Computers"}>
        Computers
      </Link>
    ),
  },
  {
    label: (
      <Link className={style.link} to={"/product/category/Laptops"}>
        Laptops
      </Link>
    ),
  },
  {
    label: (
      <Link className={style.link} to={"/product/category/Video Games"}>
        Video Games
      </Link>
    ),
  },
  {
    label: (
      <Link className={style.link} to={"/product/category/Headphones"}>
        Headphones
      </Link>
    ),
  },
  {
    label: (
      <Link className={style.link} to={"/product/category/Phones"}>
        Phones
      </Link>
    ),
  },
];

export const itemsPage: MenuItem = [
  {
    label: (
      <Link className={style.link} to={"/shop"}>
        All Products
      </Link>
    ),
  },
  {
    label: (
      <Link className={style.link} to={"/shop/cart"}>
        Cart
      </Link>
    ),
  },
  {
    label: (
      <Link className={style.link} to={"/register"}>
        Register
      </Link>
    ),
  },
];
