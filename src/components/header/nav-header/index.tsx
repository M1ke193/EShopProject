import Dropdown from "src/components/header/header-dropdown";
import style from "./style.module.scss";
import { itemsHome, itemsPage } from "./menu-items";
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
