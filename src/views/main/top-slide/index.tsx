import { Fragment, useEffect, useRef, useState } from "react";
import IconAwesome from "src/components/title/icon-awesome";
import style from "./style.module.scss";
import { Button } from "src/components/base/button";
import fakeData from "./fakeData.json";
import { IProduct } from "src/common/interface";
import { useNavigate } from "react-router-dom";

const TopSlide = () => {
  const [activeBtn, setActiveBtn] = useState<number>(0);
  const [isHideTitle, setHideTitle] = useState<boolean>(false);
  const [slideAnimate, setslideAnimate] = useState<boolean>(false);
  const [buttonClickable, setbuttonClickable] = useState(true);
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const slideElementRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleSlide = (index: number) => {
    if (activeBtn != index) {
      setHideTitle(true);
      setActiveBtn(index);
      setbuttonClickable(false);
      setslideAnimate(true);
      setTimeout(() => {
        setbuttonClickable(true);
      }, 500);
    }
  };

  const hadleNavigate = () => {
    navigate(`/product/${products[activeBtn].id}`, {
      state: { navigateProduct: products[activeBtn] },
    });
  };

  useEffect(() => {
    setProducts(fakeData);
  }, []);

  useEffect(() => {
    if (slideAnimate && slideElementRef.current) {
      const positionSlide = -activeBtn * 6.7;
      slideElementRef.current.style.transform = `translateX(${positionSlide}%)`;
      setslideAnimate(true);
    }
    setHideTitle(false);
  }, [activeBtn]);

  return (
    <div className={style.topslide}>
      <div className={`${style.titleWrap}`}>
        <div className={`${style.title} ${isHideTitle ? style.hide : ""}`}>
          <IconAwesome
            iconClass="fa-solid fa-fire-flame-curved"
            className={`${style["icon-title"]}`}
          >
            Hot Deal In This Week
          </IconAwesome>
          <h1 className={`${style.bigtitle}`}>{products[activeBtn]?.name}</h1>
          <Button
            color="white"
            variant="contained"
            className={`${style.shopbtn}`}
            onClick={hadleNavigate}
          >
            <i className={`fa-solid fa-cart-shopping ${style.carticon}`}></i>
            Shop Now
          </Button>
        </div>
      </div>
      <div className={style.slideWrap}>
        <div className={style.slide} ref={slideElementRef}>
          {products.map((item, index) => (
            <Fragment key={index}>
              <div
                className={`${
                  activeBtn === index ? style.bigImgWarp : style.smallImgWarp
                } 
                  ${index >= activeBtn + 2 && style.visible}`}
              >
                <img key={index + item.id} src={item.bigImg} />
                <div
                  className={`${style.saleTitle} ${
                    activeBtn === index ? style.visibleTitle : ""
                  }`}
                >
                  <span>From</span>
                  <span>{"$" + item.salePrice.toFixed(2)}</span>
                </div>
              </div>
              {index === products.length - 1 && (
                <div
                  className={`${style.smallImgWarp} ${
                    activeBtn < products.length - 1 ? style.visible : ""
                  }`}
                >
                  <img key={index} src={products[0].bigImg} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className={style.buttonslide}>
        {products.map((item, index) => (
          <span key={item.id} onClick={() => handleSlide(index)}>
            <button
              disabled={!buttonClickable}
              className={`${style.button} ${
                activeBtn === index ? style.active : ""
              }`}
            ></button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopSlide;
