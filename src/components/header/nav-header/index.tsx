import Dropdown from "src/components/header/header-dropdown";
import style from "./style.module.scss";
interface Props {}

const NavHeader = (props: Props) => {
  return (
    <ul className={style.nav}>
      <li>
        <Dropdown type="primary">Home</Dropdown>
      </li>
      <li>
        <Dropdown type="primary">Shop</Dropdown>
      </li>
      <li>
        <Dropdown type="primary">Pages</Dropdown>
      </li>
      <li>
        <Dropdown type="primary">About</Dropdown>
      </li>
      <li>
        <Dropdown type="primary">Blog</Dropdown>
      </li>
      <li>
        <Dropdown type="primary">Contact</Dropdown>
      </li>
    </ul>
  );
};

export default NavHeader;
