import { HTMLProps } from "react";
import style from "./style.module.scss";
import { Button } from "../../base/button";
import { IProduct } from "src/common/interface";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { changeModalStatus } from "src/store/slices/modal-product-slices";
import { addItemToWishlist } from "src/store/slices/wishlist-slices";

interface Props extends HTMLProps<HTMLDivElement> {
  product: IProduct;
  hadleNavigate: () => void;
}

const GroupButton = (props: Props) => {
  const wishlistArr = useAppSelector((s) => s.wishlistProduct.wishlistArr);
  const dispatch = useAppDispatch();

  const processProductProps = (product: IProduct) => {
    const findItem = wishlistArr.find((item) => item.id === product.id);
    if (findItem) return findItem;
    return product;
  };

  const product = processProductProps(props.product);

  const handleModal = () => {
    dispatch(changeModalStatus(product));
  };

  const handleAddItemToWishlist = (item: IProduct) => {
    const addItem = {
      ...item,
      wishlist: true,
    };
    dispatch(addItemToWishlist(addItem));
  };

  return (
    <div
      className={`${style.groupbtn} ${props.className ? props.className : ""}`}
      onClick={(event) => event.stopPropagation()}
    >
      <span onClick={() => handleAddItemToWishlist(product)}>
        <i
          className={
            product.wishlist
              ? `fa-solid fa-heart ${style.redIcon}`
              : "fa-regular fa-heart"
          }
        ></i>
      </span>
      <Button
        onClick={props.hadleNavigate}
        size="sm"
        color="red"
        variant="contained"
      >
        Buy Product
      </Button>
      <span onClick={handleModal}>
        <i className="fa-solid fa-eye"></i>
      </span>
    </div>
  );
};

export default GroupButton;
