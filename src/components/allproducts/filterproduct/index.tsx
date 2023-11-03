import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import fakeData from "src/components/main/category/fakeData.json";
import { ICategory } from "src/common/interface";
type Props = {};

const FilterProduct = (props: Props) => {
  const [cate, setCate] = useState<ICategory[]>([]);

  useEffect(() => {
    setCate(fakeData);
  }, []);

  return (
    <div className={style.filter}>
      <div className={style.cateFilter}>
        <div className={style.groupTitle}>
          <h6 className={style.titleFilter}>CATEGORIES</h6>
          <i>+</i>
        </div>
        <ul className={style.cateGroup}>
          {cate.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div className={style.colorFilter}></div>
      <div className={style.priceFilter}></div>
    </div>
  );
};

export default FilterProduct;
