import style from "./style.module.scss";
import { IProduct } from "src/common/interface";
import { HEADER_WISHLIST_TABLE } from "src/common/constants";
import CloseButton from "src/components/close-button";
import { useNavigate } from "react-router-dom";
import { deleteWishlistProduct } from "src/store/slices/wishlist-slices";
import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { addItemToCart } from "src/store/slices/cart-slices";

const WishlistPage = () => {
  const navigate = useNavigate();
  const { wishlistArr } = useAppSelector((state) => state.wishlistProduct);
  const dispatch = useAppDispatch();

  const handleAddtoCart = (item: IProduct) => {
    const productAddToCart = {
      ...item,
      selected: false,
      quantity: 1,
    };
    dispatch(addItemToCart(productAddToCart));
  };

  const renderRowProduct = (item: IProduct) => {
    return (
      <tr key={item.id} className={style.ProductRow}>
        <td className={style.closeButtonRow}>
          <CloseButton
            onclick={() =>
              dispatch(deleteWishlistProduct({ idProduct: item.id }))
            }
          />
        </td>
        <td className={style.nameRow}>
          <div className={style.imgwrap}>
            <img src={item.image} />
          </div>
          <span onClick={() => navigate(`/product/${item.id}`)}>
            {item.name}
          </span>
        </td>
        <td className={style.Price}>{"$" + item.salePrice}</td>
        <td className={style.stockStatus}>In Stock</td>
        <td className={style.action}>
          <button onClick={() => handleAddtoCart(item)}>Add to Cart</button>
        </td>
      </tr>
    );
  };

  const renderCartTable = (listCartProduct: Array<IProduct>) => {
    return (
      <table className={style.wishTable}>
        <thead>
          <tr>
            {HEADER_WISHLIST_TABLE.map((item, index) => (
              <th className={style.headerRow} key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{listCartProduct.map((item) => renderRowProduct(item))}</tbody>
      </table>
    );
  };

  return (
    <div className={style.wishlist}>
      {wishlistArr.length > 0 ? (
        <>
          <h1 className={style.wishlistTitle}>My Wish List</h1>
          {renderCartTable(wishlistArr)}
        </>
      ) : (
        <h2 className={style.nowish}>There is no Wishlist</h2>
      )}
    </div>
  );
};

export default WishlistPage;
