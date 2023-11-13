import { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useParams } from "react-router-dom";
import fakeData from "../fakeData.json";
import { IProduct } from "src/common/interface";
import useScrollToTop from "src/utils/hooks/useScrollToTop";
import CardProduct from "src/components/card-product";

const CategoryPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const params = useParams();
  useScrollToTop();
  useEffect(() => {
    setProducts(fakeData.filter((item) => item.type === params.type));
  }, [params]);

  return (
    <>
      <h1 className={style.cateName}>{params.type}</h1>
      {products.length > 0 ? (
        <div className={style.catePage}>
          <div className={style.loopProduct}>
            {products.map((item, index) => (
              <CardProduct type={"primary"} key={index} product={item} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className={style.noProduct}>No Category Products Found</h1>
      )}
    </>
  );
};

export default CategoryPage;
