import { useEffect, useState } from "react";
import style from "./style.module.scss";
import { IProduct } from "src/common/interface";
import fakeData from "../fakeData.json";
import CardProduct from "src/components/card-product";
import FilterProduct from "./filter-product";

const AllProductsPage = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    setProducts(fakeData);
  }, []);

  return (
    <div className={style.allProductPage}>
      <h1 className={style.titlePage}>Explore All Products</h1>
      <div className={style.content}>
        <div className={style.filterWrap}>
          <FilterProduct />
        </div>
        <div className={style.products}>
          {products.map((item, index) => (
            <CardProduct key={index} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
