import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { IProduct } from "src/common/interface";
import ProductStar from "src/components/product-star";

interface Props {
  product: IProduct;
  className?: string;
}

const HorizonCardProduct = (props: Props) => {
  const { className = "", product } = props;
  const navigate = useNavigate();

  const hadleNavigate = () => {
    navigate(`/product/${product.id}`, { state: { navigateProduct: product } });
  };

  return (
    <div className={`${style.card} ${className}`}>
      <a onClick={hadleNavigate} className={style.imgWrap}>
        <img className={style.imgProduct} src={product.image} />
      </a>
      <div className={style.detailProduct}>
        <div className={style.groupRate}>
          <ProductStar rate={product.rate} />
          <span>{`(${product.review})`}</span>
        </div>
        <a onClick={hadleNavigate} className={style.productName}>
          {product.name}
        </a>
        <div className={style.groupPrice}>
          {product.price !== product.salePrice && (
            <span className={style.oldPrice}>{"$" + product.price}</span>
          )}
          <span className={style.newPrice}>{"$" + product.salePrice}</span>
        </div>
      </div>
      <div className={style.groupButton}>
        <button className={style.wishButton}>
          <i className={"fa-regular fa-heart"} />
        </button>
        <button onClick={hadleNavigate} className={style.buyButton}>
          Buy Product
        </button>
      </div>
    </div>
  );
};

export default HorizonCardProduct;
