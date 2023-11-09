import style from "./style.module.scss";
import { HEADER_CART_TABLE } from "./modal";
import CheckBox from "src/components/base/checkbox";
import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { ICartProduct } from "src/common/interface";
import CountButton from "src/components/base/count-button";
import {
  updateCartProduct,
  deleteCartProduct,
  selectedCartProduct,
  deleteOrderedProduct,
} from "src/store/slices/cart-slices";
import OrderProduct from "./order-product";
import useScrollToTop from "src/utils/hooks/useScrollToTop";

interface Props {}

const CartProduct = (props: Props) => {
  const dispatch = useAppDispatch();
  const { cartArr, orderProducts } = useAppSelector(
    (state) => state.cartProduct
  );

  useScrollToTop();

  const subTotalSelectedProduct = cartArr.reduce(
    (accumulator, currentValue) => {
      if (currentValue.selected) {
        return accumulator + currentValue.salePrice * currentValue.quantity;
      }
      return accumulator;
    },
    0
  );

  const handleCheckProduct = (idProduct: string, isChecked: boolean) => {
    dispatch(selectedCartProduct({ idProduct, isChecked }));
  };

  const handleChangeQuantity = (
    quantity: number,
    productCart: ICartProduct
  ) => {
    if (quantity - 1 === 0 && productCart.quantity === 1) {
      const userConfirmed = window.confirm(
        "Are you sure to remove this Product"
      );
      if (userConfirmed) {
        dispatch(deleteCartProduct({ idProduct: productCart.id }));
      }
    } else {
      const paramCartproduct = {
        ...productCart,
        quantity: quantity,
      };
      dispatch(updateCartProduct(paramCartproduct));
    }
  };

  const renderRowProduct = (item: ICartProduct, orderedProduct: boolean) => {
    return (
      <tr key={item.id} className={style.ProductRow}>
        <td className={style.checkBoxRow}>
          {!orderedProduct && (
            <CheckBox
              className={style.checkbox}
              checked={item.selected}
              onClick={() => handleCheckProduct(item.id, !item.selected)}
            />
          )}
        </td>
        <td className={style.nameRow}>
          <div className={style.imgwrap}>
            <img src={item.image} />
          </div>
          <span>{item.name}</span>
        </td>
        <td className={style.Price}>{"$" + item.salePrice}</td>
        <td className={orderedProduct ? style.orderQuantity : ""}>
          {!orderedProduct ? (
            <CountButton
              defaulValue={item.quantity}
              onChange={(quantity: number) =>
                handleChangeQuantity(quantity, item)
              }
              range={[1, null]}
              disabled={orderedProduct}
            />
          ) : (
            item.quantity
          )}
        </td>
        <td className={style.totalPrice}>
          {"$" + (item.quantity * item.salePrice).toFixed(2)}
        </td>
      </tr>
    );
  };

  const renderCartTable = (
    listCartProduct: Array<ICartProduct>,
    orderedProduct: boolean
  ) => {
    return (
      <table className={style.cartTable}>
        <thead>
          <tr>
            {HEADER_CART_TABLE.map((item, index) => (
              <th className={style.headerRow} key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {listCartProduct.map((item) =>
            renderRowProduct(item, orderedProduct)
          )}
        </tbody>
      </table>
    );
  };

  return (
    <div className={style.cart}>
      {cartArr.length > 0 && (
        <>
          <h1>Your cart</h1>
          {renderCartTable(cartArr, false)}
        </>
      )}

      {cartArr.length > 0 && (
        <OrderProduct
          subTotalSelectedProduct={subTotalSelectedProduct}
          dispatch={dispatch}
        />
      )}

      {cartArr.length === 0 && orderProducts.length === 0 && (
        <h2 style={{ textAlign: "center" }}>Your Cart Is Emtpy</h2>
      )}

      {orderProducts.length > 0 && (
        <>
          <div className={style.titleOrdered}>
            <h1>Ordered</h1>
            <span onClick={() => dispatch(deleteOrderedProduct())}>
              Clear Ordered products
            </span>
          </div>
          {renderCartTable(orderProducts, true)}
        </>
      )}
    </div>
  );
};

export default CartProduct;
