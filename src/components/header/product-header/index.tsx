import style from "./style.module.scss";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import IconGroup from "../icon-group";
import TopHeader from "../top-header";
import NavHeader from "../nav-header";

interface Props {
  handleSearchPopup: () => void;
}

const ProductHeader = (props: Props) => {
  return (
    <>
      <div className={style.header}>
        <TopHeader color="dark" className={style.headertop}></TopHeader>
      </div>
      <div className={style["space-headbar"]} />
      <div className={style["headbar-container"]}>
        <div className={style["headerbarWrap"]}>
          <div className={style["header-bar"]}>
            <div className={style["header-brand"]}>
              <Link to={"/"}>
                <img src={logo} />
              </Link>
            </div>
            <NavHeader />
            <IconGroup handleSearchPopup={props.handleSearchPopup}></IconGroup>
          </div>
        </div>

        <div className={style.campain}>
          <div className={style.campainTitle}>
            <span>STUDENT NOW GET 10% OFF: </span>
            <Link to="/"> GET OFFER</Link>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ProductHeader;
