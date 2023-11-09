import React from "react";
import style from "./style.module.scss";
import CloseButton from "src/components/close-button";
import { Button } from "src/components/base/button";
import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { ICartProduct } from "src/common/interface";
import { deleteCartItem, updateCartPrice } from "src/store/slices/cart-slices";

interface Props {
  showCart: boolean;
}

const ProductCard = (props: Props) => {
  const { cartArr, cartPrice } = useAppSelector((state) => state.cartProduct);
  const dispatch = useAppDispatch();

  const handleDeleteCartItem = (idProduct: string) => {
    dispatch(deleteCartItem({ idProduct }));
    dispatch(updateCartPrice());
  };

  const renderChillCartItem = (itemCart: ICartProduct) => {
    return (
      <div key={itemCart.idProduct} className={style.cartItem}>
        <div className={style.wrapImg}>
          <img src={itemCart.image} />
        </div>
        <div className={style.productDetail}>
          <p className={style.productName}>{itemCart.name}</p>
          <div className={style.priceDetail}>
            <span className={style.realPrice}>{"$" + itemCart.price}</span>
            <span className={style.quantity}>{" x" + itemCart.quantity}</span>
          </div>
        </div>
        <CloseButton
          onclick={() => handleDeleteCartItem(itemCart.idProduct)}
          className={style.removeCart}
        />
      </div>
    );
  };

  return (
    <div
      className={`${style.ProductCard} ${props.showCart ? style.visible : ""}`}
    >
      <div className={style.cartHeader}>
        <h3>Cart review</h3>
      </div>
      <div className={style.cartItemWrap}>
        {cartArr.map((item) => renderChillCartItem(item))}
      </div>
      <div className={style.total}>
        <span className={style.subTotal}>Subtotal:</span>
        <span className={style.totalPrice}>{"$" + cartPrice}</span>
      </div>
      <div className={style.groupAction}>
        <Button className={style.actionButton} color="blue" variant="contained">
          View Cart
        </Button>
        <Button className={style.actionButton} color="red" variant="contained">
          {" "}
          Check Out
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
