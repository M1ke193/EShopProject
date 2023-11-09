import CloseButton from "src/components/close-button";
import style from "./style.module.scss";
import DetailProduct from "src/components/detail-product";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { changeModalStatus } from "src/store/slices/modal-product-slices";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

interface Props {}
const ModalProduct = (props: Props) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const currentPath = useRef("");
  const { modalStatus, modalProductSelected } = useAppSelector(
    (s) => s.modalProduct
  );

  const handleModalParent = (event: any) => {
    if (event.target === event.currentTarget) {
      dispatch(changeModalStatus());
    }
  };

  useEffect(() => {
    modalStatus && (currentPath.current = location.pathname);
  }, [modalStatus]);

  useEffect(() => {
    const checkIsNavigate =
      modalStatus && location.pathname !== currentPath.current;
    checkIsNavigate && dispatch(changeModalStatus());
  }, [location.pathname]);

  return (
    <div
      onClick={(event) => handleModalParent(event)}
      className={`${style.modalWrap} ${modalStatus ? style.show : ""}`}
    >
      <div className={style.modal}>
        <div className={style.headerModal}>
          <CloseButton
            className={style.close}
            onclick={() => dispatch(changeModalStatus())}
          />
        </div>
        <div className={style.children}>
          <DetailProduct
            product={modalProductSelected}
            type="modal"
            modalStatus={modalStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
