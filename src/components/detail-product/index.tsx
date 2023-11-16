import { HTMLProps, useEffect, useState } from "react";
import style from "./style.module.scss";
import { Button } from "src/components/base/button";
import ProductStar from "../product-star";
import ImageSlideProduct from "./ImageProduct";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { addItemToCart } from "src/store/slices/cart-slices";
import { IProduct, ICartProduct } from "src/common/interface";
import { useParams, useNavigate } from "react-router-dom";
import CountButton from "../base/count-button";
import fakeData from "src/views/fakeData.json";
import { addItemToWishlist } from "src/store/slices/wishlist-slices";
import imgData from "src/views/imgData.json";
import { getRandomImg } from "src/utils/getRandomImg";

interface Props extends HTMLProps<HTMLDivElement> {
  product?: IProduct;
  modalStatus?: boolean;
  type?: "modal" | "page";
}

const DetailProduct = (props: Props) => {
  const { type = "page", className = "", modalStatus } = props;
  const [productDetail, setProductDetail] = useState<IProduct>();
  const [colorPos, setColorPos] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const wishlistArr = useAppSelector((s) => s.wishlistProduct.wishlistArr);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const handleSetProductQuantity = (quantity: number) => {
    setProductQuantity(quantity);
  };

  const processProductProps = (product: IProduct | undefined) => {
    const findItem = wishlistArr.find((item) => item.id === product?.id);
    if (findItem) return findItem;
    return product;
  };

  const renderChillRateStar = () => {
    return (
      <div className={style.startWrap}>
        <ProductStar rate={productDetail?.rate} />
        <p className={style.reviewNum}>
          {productDetail?.review
            ? `${productDetail?.review} Customer Reviews`
            : "0  Customer Reviews"}
        </p>
      </div>
    );
  };

  const renderChillColor = (indexColor: number, color: string) => {
    return (
      <li key={indexColor} onClick={() => handleColor(indexColor)}>
        <span
          className={`${colorPos === indexColor ? style.active : ""} ${
            style.dotWrap
          } ${style[color]}`}
        >
          <span className={style.colorDot}></span>
        </span>
      </li>
    );
  };

  const handleColor = (colorPos: number) => {
    setColorPos(colorPos);
  };

  const handleAddToCart = () => {
    if (productDetail) {
      const itemToCart: ICartProduct = {
        ...productDetail,
        selected: false,
        quantity: productQuantity,
      };
      dispatch(addItemToCart(itemToCart));
    }
  };

  const handleAddItemToWishlist = (item: IProduct) => {
    const addItem = {
      ...item,
      wishlist: true,
    };
    dispatch(addItemToWishlist(addItem));
    setProductDetail(addItem);
  };

  const handleProcessImgData = (imglist: string[]) => {
    if (imglist.length === 1 && (modalStatus || type === "page")) {
      return getRandomImg(imgData, imglist[0], 3);
    }
    return imglist;
  };

  useEffect(() => {
    if (type === "page") {
      const { id } = params;
      const product = fakeData.find((item) => item.id === id);
      product ? setProductDetail(processProductProps(product)) : navigate("/");
    }
  }, [params.id]);

  useEffect(() => {
    if (modalStatus === true) {
      setProductDetail(processProductProps(props.product));
    } else if (modalStatus === false) {
      setProductQuantity(0);
      setColorPos(0);
    }
  }, [modalStatus]);

  return (
    <div className={`${style.wrap} ${className}`}>
      <ImageSlideProduct
        modalStatus={modalStatus}
        images={productDetail && handleProcessImgData(productDetail.imgList)}
      />
      <div className={style.detail}>
        {type === "modal" && renderChillRateStar()}
        <h1 className={style[type]}>{productDetail?.name}</h1>
        <span className={style.price}>
          {"$ " + productDetail?.salePrice?.toFixed(2)}
        </span>
        {type === "page" && renderChillRateStar()}
        <ul className={style.groupCheck}>
          <li>
            <i className="fa-solid fa-check"></i>
            In stock
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            Free delivery available
          </li>
          <li>
            <i className="fa-solid fa-check"></i>
            Sales 30% Off Use Code: MOTIVE30
          </li>
        </ul>
        <p className={style.desc}>{productDetail?.desc}</p>
        <div className={style.color}>
          <p className={style.colorTitle}>Colors:</p>
          <div className={style.groupColor}>
            <ul>
              {productDetail?.color?.map((item, index) =>
                renderChillColor(index, item)
              )}
            </ul>
          </div>
        </div>
        <div className={style.groupbutton}>
          <div className={style.count}>
            {modalStatus !== false && (
              <CountButton
                defaulValue={productQuantity}
                onChange={handleSetProductQuantity}
              />
            )}
          </div>
          <Button
            disabled={productQuantity === 0}
            color="blue"
            variant="contained"
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
          <div
            onClick={() =>
              productDetail && handleAddItemToWishlist(productDetail)
            }
            className={style.wish}
          >
            <i
              className={
                productDetail?.wishlist
                  ? `fa-solid fa-heart ${style.redIcon}`
                  : "fa-regular fa-heart"
              }
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
