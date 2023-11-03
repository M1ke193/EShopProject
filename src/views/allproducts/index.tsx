import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { IProduct } from "src/common/interface";
import fakeData from "./fakeData.json";
import Card from "src/components/card";
import FilterProduct from "../../components/allproducts/filterproduct";

interface Props {
  //   product: IProduct;
}

const AllProductsPage = (props: Props) => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    setProductList(fakeData);
  }, []);
  return (
    <div className={style.allProductPage}>
      <h1 className={style.titlePage}>Explore All Products</h1>
      <div className={style.content}>
        <div className={style.filterWrap}>
          <FilterProduct />
        </div>
        <div className={style.products}>
          {productList.map((item, index) => (
            <Card key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
