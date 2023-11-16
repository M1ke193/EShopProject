import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { IProduct } from "src/common/interface";
import ProductStar from "src/components/product-star";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { addItemToWishlist } from "src/store/slices/wishlist-slices";

interface Props {
  product: IProduct;
  className?: string;
}

const HorizonCardProduct = (props: Props) => {
  const { className = "" } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const wishlistArr = useAppSelector((s) => s.wishlistProduct.wishlistArr);
  const processProductProps = (product: IProduct) => {
    const findItem = wishlistArr.find((item) => item.id === product.id);
    if (findItem) return findItem;
    return product;
  };
  const product = processProductProps(props.product);

  const hadleNavigate = () => {
    navigate(`/product/${product.id}`, { state: { navigateProduct: product } });
  };

  const handleAddItemToWishlist = (item: IProduct) => {
    const addItem = {
      ...item,
      wishlist: true,
    };
    dispatch(addItemToWishlist(addItem));
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
        <button
          onClick={() => handleAddItemToWishlist(props.product)}
          className={style.wishButton}
        >
          <i
            className={
              product.wishlist
                ? `fa-solid fa-heart ${style.redIcon}`
                : "fa-regular fa-heart"
            }
          />
        </button>
        <button onClick={hadleNavigate} className={style.buyButton}>
          Buy Product
        </button>
      </div>
    </div>
  );
};

export default HorizonCardProduct;
