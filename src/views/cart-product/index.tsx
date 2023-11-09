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
} from "src/store/slices/cart-slices";
import OrderProduct from "./order-product";
import CloseButton from "src/components/close-button";
import useScrollToTop from "src/utils/hooks/useScrollToTop";

interface Props {}

const CartProduct = (props: Props) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cartProduct.cartArr);
  const notBuyProducts: Array<ICartProduct> = [];
  const purchasedProduct: Array<ICartProduct> = [];

  useScrollToTop();

  products.forEach((item) => {
    item.isBought ? purchasedProduct.push(item) : notBuyProducts.push(item);
  });

  const subTotalSelectedProduct = products.reduce(
    (accumulator, currentValue) => {
      if (currentValue.selected && !currentValue.isBought) {
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
        <td>
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
          {"$" + item.quantity * item.salePrice + ".00"}
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
      {notBuyProducts.length > 0 && (
        <>
          <h1>Your cart</h1>
          {renderCartTable(notBuyProducts, false)}
        </>
      )}

      {notBuyProducts.length > 0 && (
        <OrderProduct
          subTotalSelectedProduct={subTotalSelectedProduct}
          dispatch={dispatch}
        />
      )}

      {notBuyProducts.length === 0 && purchasedProduct.length === 0 && (
        <h2 style={{ textAlign: "center" }}>Your Cart Is Emtpy</h2>
      )}

      {purchasedProduct.length > 0 && (
        <>
          <h1>Ordered</h1>
          {renderCartTable(purchasedProduct, true)}
        </>
      )}
    </div>
  );
};

export default CartProduct;
