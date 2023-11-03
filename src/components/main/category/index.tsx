import React, { HTMLProps, useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import Title from "src/components/title";
import fakeData from "./fakeData.json";
import { ICategory } from "src/common/interface";

interface Props extends HTMLProps<HTMLDivElement> {}

const Category = (props: Props) => {
  const [categoryData, setcategoryData] = useState<ICategory[]>([]);
  const [slideCategory, setslideCategory] = useState<boolean>();
  const [currenWidthParent, setCurrentWidthParent] = useState<number>(0);
  const slideWrapElementRef = useRef<HTMLDivElement>(null);
  const slideElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setcategoryData(fakeData);
  }, []);

  useEffect(() => {
    if (
      slideCategory != undefined &&
      slideWrapElementRef.current !== null &&
      slideElementRef.current !== null
    ) {
      const widthParent = slideWrapElementRef.current.clientWidth;
      if (slideCategory) {
        //cộng với warp để dịch chuyển slide qua phải
        slideElementRef.current.style.left = `-${
          currenWidthParent + widthParent
        }px`;
        setCurrentWidthParent(currenWidthParent + widthParent);
      } else {
        //trừ với warp để dịch chuyển slide qua trái
        slideElementRef.current.style.left = `${
          currenWidthParent - widthParent
        }px`;
        setCurrentWidthParent(currenWidthParent - widthParent);
      }
    }
  }, [slideCategory]);
  return (
    <div
      className={`${style.category} ${props.className ? props.className : ""}`}
    >
      <Title
        iconClass="fa-solid fa-tags"
        inconTitle="Categories"
        title="Browse by Category"
        callBackLeftButton={() => setslideCategory(false)}
        callBackRightButton={() => setslideCategory(true)}
      ></Title>
      <div className={style.slideWrap} ref={slideWrapElementRef}>
        <div
          className={style.slide}
          style={{ width: `${(100 / 6) * categoryData.length}%` }}
          ref={slideElementRef}
        >
          {categoryData.map((item, index) => (
            <div key={index}>
              <a>
                <img src={item.image} />
                <span>{item.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
