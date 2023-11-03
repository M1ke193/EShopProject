import { useState, useRef, useEffect } from "react";
import style from "./style.module.scss";

type Props = {
  images: Array<string> | undefined;
  modalStatus: boolean | undefined;
};

const ImageProduct = (props: Props) => {
  const { images, modalStatus } = props;
  const [slidePos, setSlidePos] = useState(0);
  const slideWrapWidthRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalStatus) {
      setSlidePos(0);
    }
  }, [modalStatus]);

  const renderChillImg = (indexImg: number, src: string) => {
    return (
      <img
        key={indexImg}
        onClick={() => handleSlide(indexImg)}
        className={`${style.slideItem} ${
          slidePos === indexImg ? style.activeSlide : ""
        }`}
        src={src}
      />
    );
  };

  const handleSlide = (imageSlidePosition: number) => {
    setSlidePos(imageSlidePosition);
  };

  const calcSlideTransform = () => {
    if (slideWrapWidthRef.current && sliderRef.current) {
      //dịch chuyển slide theo chiều x bằng độ dài của parent
      sliderRef.current.style.transform = `translateX(-${
        slidePos * slideWrapWidthRef.current.clientWidth
      }px)`;
    }
  };

  useEffect(() => {
    calcSlideTransform();
  }, [slidePos]);

  return (
    <div className={style.slideGroup}>
      <div className={style.sildeList}>
        {images?.map((item, index) => renderChillImg(index, item))}
      </div>
      <div className={style.sliderWrap} ref={slideWrapWidthRef}>
        <div className={style.slider} ref={sliderRef}>
          {images?.map((item, index) => (
            <div key={index} className={style.imgWraper}>
              <img src={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageProduct;
