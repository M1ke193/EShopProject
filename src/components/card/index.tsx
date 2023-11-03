import style from "./style.module.scss";
import { Link } from "react-router-dom";
import GroupButton from "src/components/group-button";
import { IProduct } from "src/common/interface";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  product: IProduct;
}

const Card = (props: Props) => {
  const { className = "", product } = props;
  const calcProductPrice = Math.round(
    product.price - product.price * (product.sale / 100)
  );

  return (
    <div className={`${style.card} ${className}`}>
      <Link to={`/product/${product.id}`} className={style.imgWrap}>
        <img
          className={`${
            product.optionimg ? style.fadeProduct : style.imgProduct
          }`}
          src={product.image}
        />
        {product.optionimg && (
          <img src={product.optionimg} className={style.imgOption} />
        )}
        <GroupButton product={product} className={style.button}></GroupButton>
      </Link>
      <Link to={`/product/${product.id}`} className={style.productName}>
        {product.name}
      </Link>
      <div className={style.groupPrice}>
        <span className={style.oldPrice}>{"$" + product.price}</span>
        <span className={style.newPrice}>{"$" + calcProductPrice}</span>
      </div>
    </div>
  );
};

export default Card;
