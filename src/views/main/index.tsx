import { useEffect, useState } from "react";
import Category from "src/views/main/slide-category";
import TopSlide from "src/views/main/top-slide";
import style from "./style.module.scss";
import ModalProduct from "src/views/main/modal-product";
import { IProduct } from "src/common/interface";
import Title from "src/components/title";
import fakeProducts from "../fakeData.json";
import CardProduct from "src/components/card-product";

interface Props {}

const MainPage = (props: Props) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [modalSelectedItem, setModalSelectedItem] = useState<IProduct>(
    {} as IProduct
  );
  const [modalStatus, setmodalStatus] = useState<boolean>(false);
  const [slideCategory, setSlideCategory] = useState<string>("");

  useEffect(() => {
    setProducts(fakeProducts);
  }, []);

  const handleModalItemSelected = (product: IProduct) => {
    setModalSelectedItem(product);
    setmodalStatus(!modalStatus);
  };

  const handleOffModal = () => {
    setmodalStatus(false);
  };

  return (
    <div className={style.main}>
      <TopSlide />
      <div className={`${style.category} `}>
        <Title
          iconClass="fa-solid fa-tags"
          inconTitle="Categories"
          title="Browse by Category"
          setSlideAction={setSlideCategory}
        ></Title>
        <Category slideCategory={slideCategory} />
      </div>
      <div className={`${style.products}`}>
        <Title
          iconClass="fa-solid fa-basket-shopping"
          inconTitle="Our Products"
          title="Explore our Products"
        ></Title>
        <div className={style.loopProduct}>
          {products.map((item, index) => (
            <CardProduct
              key={index}
              product={item}
              handleSelectedItem={() => handleModalItemSelected(item)}
            />
          ))}
        </div>
      </div>
      <ModalProduct
        product={modalSelectedItem}
        modalStatus={modalStatus}
        handleOffModal={handleOffModal}
      />
    </div>
  );
};

export default MainPage;
