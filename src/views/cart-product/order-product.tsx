import { useState } from "react";
import style from "./style.module.scss";
import { Button } from "src/components/base/button";
import { Dispatch } from "redux";
import { orderCartProduct } from "src/store/slices/cart-slices";

interface Props {
  subTotalSelectedProduct: number;
  dispatch: Dispatch;
}

const OrderProduct = (props: Props) => {
  const { subTotalSelectedProduct } = props;
  const [shippingPrice, setShippingPrice] = useState<string>("0");

  const handleOnchangeShippingPrice = (event: any) => {
    setShippingPrice(event.target.value);
  };

  const handleOrderProduct = () => {
    const userConfirmed = window.confirm("Do you want to order product");
    if (userConfirmed) {
      props.dispatch(orderCartProduct());
    }
  };
  return (
    <div className={style.orderWrap}>
      <div className={style.order}>
        <h3>Order Sumamary</h3>
        <div className={style.subtotalOrder}>
          <span>Subtotal</span>
          <span>{"$" + subTotalSelectedProduct + ".00"}</span>
        </div>
        <div className={style.shipping}>
          <span>Shipping</span>
          <div className={style.selectedGroup}>
            <label>
              <input
                type="radio"
                checked={shippingPrice === "0"}
                value={0}
                onChange={handleOnchangeShippingPrice}
              />
              Standard: $0.00
            </label>
            <label>
              <input
                type="radio"
                checked={shippingPrice === "12"}
                onChange={handleOnchangeShippingPrice}
                value={12}
              />
              Fast: $12.00
            </label>
            <label>
              <input
                type="radio"
                checked={shippingPrice === "35"}
                onChange={handleOnchangeShippingPrice}
                value={35}
              />
              Express: $35.00
            </label>
          </div>
        </div>
        <div className={style.total}>
          <span>Total</span>
          <span className={style.totalPrice}>
            {"$" + (subTotalSelectedProduct + parseInt(shippingPrice)) + ".00"}
          </span>
        </div>
        <Button
          className={style.orderButton}
          variant="contained"
          color="blue"
          disabled={subTotalSelectedProduct === 0}
          onClick={handleOrderProduct}
        >
          Process To Checkout
        </Button>
      </div>
    </div>
  );
};

export default OrderProduct;
