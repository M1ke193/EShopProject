import style from "./style.module.scss";
import NavHeader from "../nav-header";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import IconGroup from "../icon-group";
import TopHeader from "../top-header";

interface Props {
  handleSearchPopup: () => void;
}

const MainHeader = (props: Props) => {
  return (
    <>
      <div className={style.header}>
        <TopHeader className={style.headertop} />
        <div className={style["space-headbar"]} />
      </div>
      <div className={style["headbar-container"]}>
        <div className={style["headerbarWrap"]}>
          <div className={style["header-bar"]}>
            <div className={style["header-brand"]}>
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </div>
            <NavHeader />
            <IconGroup handleSearchPopup={props.handleSearchPopup} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
