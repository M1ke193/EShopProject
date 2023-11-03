import React, { HTMLProps, useContext, useEffect, useState } from "react";
import style from "./style.module.scss";
import { Button } from "src/components/base/button";
import { GlobalStateContext } from "src/store/context";
import ProductStart from "../gadget/product-start";
import ImageSlideProduct from "./ImageProduct";

interface Props extends HTMLProps<HTMLDivElement> {
  type?: "modal" | "page";
}

const DetailProduct = (props: Props) => {
  const { type = "page", className = "" } = props;
  const [colorPos, setColorPos] = useState(0);
  const [count, setCount] = useState(0);
  const globalState = useContext(GlobalStateContext);
  const product = globalState?.modalData;
  const modalStatus = globalState?.modalStatus;

  const renderChillRateStar = () => {
    return (
      <div className={style.startWrap}>
        <ProductStart rate={product?.rate}></ProductStart>
        <p
          className={style.reviewNum}
        >{`${product?.review} Customer Reviews`}</p>
      </div>
    );
  };

  const renderCheckIcon = (text: string) => {
    return (
      <li>
        <i className="fa-solid fa-check"></i>
        {text}
      </li>
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

  //CALULATION THE PRICE OF PRODUCT WHEN SALE
  const calcProductPrice = product?.price
    ? Math.round(product.price - product!.price * (product!.sale / 100))
    : "";

  const handleColor = (colorPos: number) => {
    setColorPos(colorPos);
  };

  useEffect(() => {
    if (!modalStatus) {
      setCount(0);
      setColorPos(0);
    }
  }, [modalStatus]);

  return (
    <div className={`${style.wrap} ${className}`}>
      <ImageSlideProduct modalStatus={modalStatus} images={product?.imgList} />
      <div className={style.detail}>
        {type === "modal" && renderChillRateStar()}
        <h1 className={style[type]}>{product?.name}</h1>
        <span className={style.price}>{"$" + calcProductPrice}</span>
        {type === "page" && renderChillRateStar()}
        <ul className={style.groupCheck}>
          {renderCheckIcon("In stock")}
          {renderCheckIcon("Free delivery available")}
          {renderCheckIcon("Sales 30% Off Use Code: MOTIVE30")}
        </ul>
        <p className={style.desc}>{product?.desc}</p>
        <div className={style.color}>
          <p className={style.colorTitle}>Colors:</p>
          <div className={style.groupColor}>
            <ul>
              {product?.color.map((item, index) =>
                renderChillColor(index, item)
              )}
            </ul>
          </div>
        </div>
        <div className={style.groupbutton}>
          <div className={style.count}>
            <span
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
              className={style.add}
            >
              -
            </span>
            <span className={style.input}>
              <span className={style.valueInput}>{count}</span>
            </span>
            <span onClick={() => setCount(count + 1)} className={style.add}>
              +
            </span>
          </div>
          <Button disabled={count === 0} color="blue" variant="contained">
            Add To Cart
          </Button>
          <div className={style.wish}>
            <i className="fa-regular fa-heart "></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
