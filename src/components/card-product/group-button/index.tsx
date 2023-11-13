import { HTMLProps } from "react";
import style from "./style.module.scss";
import { Button } from "../../base/button";
import { IProduct } from "src/common/interface";
import { useAppDispatch } from "src/store/hooks";
import { changeModalStatus } from "src/store/slices/modal-product-slices";

interface Props extends HTMLProps<HTMLDivElement> {
  product: IProduct;
  hadleNavigate: () => void;
}

const GroupButton = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleModal = () => {
    dispatch(changeModalStatus(props.product));
  };
  return (
    <div
      className={`${style.groupbtn} ${props.className ? props.className : ""}`}
      onClick={(event) => event.stopPropagation()}
    >
      <span onClick={(event) => event.stopPropagation()}>
        <i className="fa-regular fa-heart"></i>
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
