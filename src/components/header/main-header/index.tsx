import style from "./style.module.scss";
import NavHeader from "../nav-header";
import { Link } from "react-router-dom";
import logo from "src/assets/img/logo.png";
import IconGroup from "../icongroup";
import TopHeader from "../top-header";
type Props = {};

const MainHeader = (props: Props) => {
  return (
    <>
      <div className={style.header}>
        <TopHeader className={style.headertop} />
        <div className={style["space-headbar"]}></div>
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
            <IconGroup />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
