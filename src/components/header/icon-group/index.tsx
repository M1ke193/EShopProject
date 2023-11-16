import style from "./style.module.scss";
import { useAppSelector } from "src/store/hooks";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "src/components/base/button";
import { useEffect, useRef, useState } from "react";
import { IuserData } from "src/common/interface";
import { showToast } from "src/utils/showToast";

interface Props {
  handleSearchPopup: () => void;
}

const IconGroup = (props: Props) => {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.cartProduct.cartArr);
  const popUpRef = useRef<HTMLDivElement>(null);
  const [userData, setUserData] = useState<IuserData | undefined>(undefined);

  const wishlistArr = useAppSelector(
    (state) => state.wishlistProduct.wishlistArr
  );

  const handlePopupProfile = () => {
    popUpRef.current?.classList.toggle(style.activePopup);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setUserData(undefined);
    showToast("Logout Successful", "success");
  };

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    userData && setUserData(JSON.parse(userData));
  }, []);

  return (
    <div className={style.icongroup}>
      <ul>
        <li onClick={() => props.handleSearchPopup()}>
          <i className="fa-solid fa-magnifying-glass fa-xl" />
        </li>
        <div
          onClick={() => navigate("/shop/wishlist")}
          className={style.countProduct}
        >
          {wishlistArr.length > 0 && <span>{wishlistArr.length}</span>}
          <li>
            <i className="fa-regular fa-heart fa-xl" />
          </li>
        </div>
        <div
          onClick={() => navigate("/shop/cart")}
          className={style.countProduct}
        >
          <span>{products?.length}</span>
          <li>
            <i className="fa-solid fa-cart-shopping fa-xl" />
          </li>
        </div>
        <li onClick={handlePopupProfile}>
          {userData ? (
            <div className={style.imgWrap}>
              <img src={userData.img} />
            </div>
          ) : (
            <i className="fa-regular fa-user fa-xl" />
          )}
        </li>
        <div className={style.userPopup} ref={popUpRef}>
          {userData && (
            <div className={style.nameUser}>
              <span>Welcome</span>
              <span>{userData.name}</span>
            </div>
          )}
          <Button
            color="blue"
            size="sm"
            variant="contained"
            onClick={userData ? handleLogout : () => navigate("/login")}
          >
            {userData ? "Log Out" : "Log In"}
          </Button>
          {!userData && (
            <div className={style.registerUser}>
              No account yet?<Link to={"/register"}>Register Here</Link>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default IconGroup;
