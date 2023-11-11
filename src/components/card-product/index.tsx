import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import GroupButton from "src/components/card-product/group-button";
import { IProduct } from "src/common/interface";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  product: IProduct;
}

const CardProduct = (props: Props) => {
  const { className = "", product } = props;
  const navigate = useNavigate();

  const hadleNavigate = () => {
    navigate(`/product/${product.id}`, { state: { navigateProduct: product } });
  };

  return (
    <div className={`${style.card} ${className}`}>
      <a onClick={hadleNavigate} className={style.imgWrap}>
        <img
          className={`${
            product.optionimg ? style.fadeProduct : style.imgProduct
          }`}
          src={product.image}
        />
        {product.optionimg && (
          <img src={product.optionimg} className={style.imgOption} />
        )}
        <GroupButton
          product={product}
          className={style.button}
          hadleNavigate={hadleNavigate}
        ></GroupButton>
      </a>
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
  );
};

export default CardProduct;
