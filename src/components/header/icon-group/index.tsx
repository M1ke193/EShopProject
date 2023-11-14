import style from "./style.module.scss";
import { useAppSelector } from "src/store/hooks";
import { useNavigate } from "react-router-dom";

interface Props {
  handleSearchPopup: () => void;
}

const IconGroup = (props: Props) => {
  const navigate = useNavigate();
  const products = useAppSelector((state) => state.cartProduct.cartArr);
  const wishlistArr = useAppSelector(
    (state) => state.wishlistProduct.wishlistArr
  );

  return (
    <div className={style.icongroup}>
      <ul>
        <li onClick={() => props.handleSearchPopup()}>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </li>
        <div
          onClick={() => navigate("/shop/wishlist")}
          className={style.countProduct}
        >
          {wishlistArr.length > 0 && <span>{wishlistArr.length}</span>}
          <li>
            <i className="fa-regular fa-heart fa-xl"></i>
          </li>
        </div>
        <div
          onClick={() => navigate("/shop/cart")}
          className={style.countProduct}
        >
          <span>{products?.length}</span>
          <li>
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
          </li>
        </div>
        <li>
          <i className="fa-regular fa-user fa-xl"></i>
        </li>
      </ul>
    </div>
  );
};

export default IconGroup;
