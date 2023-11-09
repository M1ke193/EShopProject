import { useEffect, useState } from "react";
import Category from "src/views/main/slide-category";
import TopSlide from "src/views/main/top-slide";
import style from "./style.module.scss";
import { IProduct } from "src/common/interface";
import Title from "src/components/title";
import fakeProducts from "../fakeData.json";
import CardProduct from "src/components/card-product";
import { Button } from "src/components/base/button";
import { useNavigate } from "react-router-dom";

interface Props {}

const MainPage = (props: Props) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [slideCategory, setSlideCategory] = useState<string>("");

  useEffect(() => {
    setProducts(fakeProducts);
  }, []);

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
            <CardProduct key={index} product={item} />
          ))}
        </div>
        <div className={style.buttonWrap}>
          <Button
            onClick={() => navigate("/shop")}
            variant="contained"
            color="gray"
          >
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
