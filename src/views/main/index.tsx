import { useEffect, useState } from "react";
import Category from "src/views/main/slide-category";
import TopSlide from "src/views/main/top-slide";
import style from "./style.module.scss";
import { IProduct } from "src/common/interface";
import Title from "src/components/title";
import fakeProducts from "../fakeData.json";
import { Button } from "src/components/base/button";
import { useNavigate } from "react-router-dom";
import IconAwesome from "src/components/title/icon-awesome";
import CardProduct from "src/components/card-product";

const MainPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [productsMostSold, setProductsMostSold] = useState<Array<IProduct>>([]);
  const [slideCategory, setSlideCategory] = useState<string>("");

  useEffect(() => {
    setProducts(fakeProducts.slice(0, 8));
    setProductsMostSold(fakeProducts.slice(6, 14));
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
        />
        <Category slideCategory={slideCategory} />
      </div>
      <div className={`${style.products}`}>
        <Title
          iconClass="fa-solid fa-basket-shopping"
          inconTitle="Our Products"
          title="Explore our Products"
        />
        <div className={style.loopProduct}>
          {products.map((item, index) => (
            <CardProduct
              type={"primary"}
              key={index}
              product={item}
              className={style.cardMain}
            />
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
      <div className={style.mostSold}>
        <div className={style.groupTitle}>
          <IconAwesome
            iconClass="fa-solid fa-star"
            color="purple"
            className={style.iconMostSold}
          >
            Most Sold
          </IconAwesome>
          <h2 className={style.titleMostSold}>Most Sold in eShop Store</h2>
        </div>
        <div className={style.loopMostSold}>
          {productsMostSold.map((item, index) => (
            <CardProduct product={item} key={index} type={"horizontal"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
