import React, { HTMLProps, useContext } from "react";
import style from "./style.module.scss";
import { Button } from "../base/button";
import { GlobalStateContext } from "src/store/context";
import { IProduct } from "src/common/interface";

interface Props extends HTMLProps<HTMLDivElement> {
  product: IProduct;
}

const GroupButton = (props: Props) => {
  const GlobalState = useContext(GlobalStateContext);
  const handleModal = () => {
    GlobalState?.ChangeModalStatus();
    GlobalState?.ChangeModalData(props.product);
  };

  return (
    <div
      className={`${style.groupbtn} ${props.className ? props.className : ""}`}
      onClick={(event) => event.preventDefault()}
    >
      <span onClick={(event) => event.preventDefault()}>
        <i className="fa-regular fa-heart"></i>
      </span>
      <Button size="sm" color="red" variant="contained">
        Buy Product
      </Button>
      <span onClick={handleModal}>
        <i className="fa-solid fa-eye"></i>
      </span>
    </div>
  );
};

export default GroupButton;
