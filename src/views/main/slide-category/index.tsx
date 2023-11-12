import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import fakeData from "./fakeData.json";
import { ICategory } from "src/common/interface";
import { Link } from "react-router-dom";

interface Props {
  slideCategory: string;
}

const Category = (props: Props) => {
  const [categoryData, setcategoryData] = useState<ICategory[]>([]);
  const [currenWidthParent, setCurrentWidthParent] = useState<number>(0);
  const slideWrapElementRef = useRef<HTMLDivElement>(null);
  const slideElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setcategoryData(fakeData);
  }, []);

  useEffect(() => {
    if (
      props.slideCategory &&
      slideWrapElementRef.current !== null &&
      slideElementRef.current !== null
    ) {
      const widthParent = slideWrapElementRef.current.clientWidth;
      if (props.slideCategory === "right") {
        //cộng với warp để dịch chuyển slide qua phải
        slideElementRef.current.style.left = `-${
          currenWidthParent + widthParent
        }px`;
        setCurrentWidthParent(currenWidthParent + widthParent);
      } else if (props.slideCategory === "left") {
        //trừ với warp để dịch chuyển slide qua trái
        slideElementRef.current.style.left = `${
          currenWidthParent - widthParent
        }px`;
        setCurrentWidthParent(currenWidthParent - widthParent);
      }
    }
  }, [props.slideCategory]);

  const CalcWidthSlideElement = (100 / 6) * categoryData.length;

  return (
    <div className={style.slideWrap} ref={slideWrapElementRef}>
      <div
        className={style.slide}
        style={{ width: `${CalcWidthSlideElement}%` }}
        ref={slideElementRef}
      >
        {categoryData.map((item, index) => (
          <div key={index}>
            <Link to={`/product/category/${item.name}`}>
              <img src={item.image} />
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
