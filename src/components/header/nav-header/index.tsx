import Dropdown from "src/components/header/header-dropdown";
import style from "./style.module.scss";
import { MenuItem } from "../modal";
import { Link } from "react-router-dom";

const itemsHome: MenuItem = [
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
      <Link className={style.link} to={"/product/category/Controller"}>
        Controller
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

const itemsPage: MenuItem = [
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

const NavHeader = () => {
  return (
    <ul className={style.nav}>
      <li>
        <Dropdown type="primary" items={itemsHome}>
          Home
        </Dropdown>
      </li>
      <li>
        <Dropdown type="primary" href="/shop">
          Shop
        </Dropdown>
      </li>
      <li>
        <Dropdown type="primary" items={itemsPage}>
          Pages
        </Dropdown>
      </li>
      <li>
        <Dropdown type="primary" href="/">
          About
        </Dropdown>
      </li>
      <li>
        <Dropdown type="primary" href="/">
          Blog
        </Dropdown>
      </li>
      <li>
        <Dropdown type="primary" href="/">
          Contact
        </Dropdown>
      </li>
    </ul>
  );
};

export default NavHeader;
