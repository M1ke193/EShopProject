import React, { HTMLProps, useContext } from "react";
import style from "./style.module.scss";
import DetailProduct from "src/components/detail-product";
import { GlobalStateContext } from "src/store/context";

interface Props {}

const ModalProduct = (props: Props) => {
  const GlobalState = useContext(GlobalStateContext);

  const handleModal = () => {
    GlobalState?.ChangeModalStatus();
  };
  const handleModalParent = (event: any) => {
    if (event.target === event.currentTarget) {
      GlobalState?.ChangeModalStatus();
    }
  };
  return (
    <div
      onClick={(event) => handleModalParent(event)}
      className={`${style.modalWrap} ${
        GlobalState?.modalStatus ? style.show : ""
      }`}
    >
      <div className={style.modal}>
        <div className={style.headerModal}>
          <span onClick={handleModal}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className={style.children}>
          <DetailProduct type={"modal"}></DetailProduct>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
