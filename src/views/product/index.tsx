import { useEffect } from "react";
import style from "./style.module.scss";
import DetailProduct from "src/components/detail-product";
import DescProduct from "src/views/product/desc-product";

const Productpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={style.productpage}>
      <DetailProduct className={style.productDetail} />
      <div className={style.desWrap}>
        <DescProduct />
      </div>
    </div>
  );
};

export default Productpage;
