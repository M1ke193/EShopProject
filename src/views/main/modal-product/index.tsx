import CloseButton from "src/components/close-button";
import style from "./style.module.scss";
import DetailProduct from "src/components/detail-product";
import { IProduct } from "src/common/interface";

interface Props {
  modalStatus: boolean;
  product: IProduct;
  handleOffModal: () => void;
}
const ModalProduct = (props: Props) => {
  const handleModal = () => {
    props.handleOffModal();
  };

  const handleModalParent = (event: any) => {
    if (event.target === event.currentTarget) {
      props.handleOffModal();
    }
  };

  return (
    <div
      onClick={(event) => handleModalParent(event)}
      className={`${style.modalWrap} ${props.modalStatus ? style.show : ""}`}
    >
      <div className={style.modal}>
        <div className={style.headerModal}>
          <CloseButton className={style.close} onclick={handleModal} />
        </div>
        <div className={style.children}>
          <DetailProduct
            product={props.product}
            type="modal"
            modalStatus={props.modalStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
