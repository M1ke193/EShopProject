import React, { useEffect, useState } from "react";
import Category from "src/components/main/category";
import TopSlide from "src/components/main/topslide";
import style from "./style.module.scss";
import ModalProduct from "src/components/main/modalproduct";
import { IProduct } from "src/common/interface";
import Title from "src/components/title";
import fakeProducts from "./fakeData.json";
import Card from "src/components/card";

interface Props {}

const MainPage = (props: Props) => {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    // call API get product list
    setProducts(fakeProducts);
    // call API get category
    ///...
  }, []);

  return (
    <div className={style.main}>
      <TopSlide></TopSlide>
      <Category> </Category>
      <div className={`${style.products}`}>
        <Title
          iconClass="fa-solid fa-basket-shopping"
          inconTitle="Our Products"
          title="Explore our Products"
        ></Title>
        <div className={style.loopProduct}>
          {products.map((item, index) => (
            <Card key={index} product={item} />
          ))}
        </div>
      </div>
      <ModalProduct></ModalProduct>
    </div>
  );
};

export default MainPage;
