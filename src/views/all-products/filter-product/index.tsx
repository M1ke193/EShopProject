import { KeyboardEvent, useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import fakeData from "src/views/main/slide-category/fakeData.json";
import { ICategory } from "src/common/interface";
import { Button } from "src/components/base/button";
interface props {
  setCateRadio: (cateName: string) => void;
  setPriceGroup: (price: number) => void;
  handleResetFilter: () => void;
  cateFilter: string | undefined;
  priceFilter: number | undefined;
}

const FilterProduct = (prop: props) => {
  const { setCateRadio, setPriceGroup, cateFilter, priceFilter } = prop;
  const [cate, setCate] = useState<ICategory[]>([]);
  const [price, setPrice] = useState<number[]>([]);
  const customInputRef = useRef<HTMLInputElement>(null);

  const handleKeyPressInput = (e: KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.key;
    if (isNaN(Number(charCode)) && charCode !== "Backspace") {
      e.preventDefault();
    }
    if (e.key === "Enter") {
      customInputRef.current?.blur();
    }
  };

  const handleFilterCustomInput = () => {
    if (customInputRef.current) {
      const filterValue = customInputRef.current.value;
      const convertNum = isNaN(Number(filterValue)) ? 0 : Number(filterValue);
      setPriceGroup(convertNum);
      customInputRef.current.value = convertNum.toString();
    }
  };

  const handleActiveFilter = (event: any) => {
    const activeFilterElement = event.currentTarget;
    if (activeFilterElement.classList.contains(`${style.active}`)) {
      activeFilterElement.classList.remove(`${style.active}`);
    } else {
      activeFilterElement.classList.add(`${style.active}`);
    }
  };

  const renderFitlerGroup = (title: string) => {
    return (
      <div
        onClick={(event) => handleActiveFilter(event)}
        className={`${style.groupTitle} ${style.active}`}
      >
        <h6 className={style.titleFilter}>{title}</h6>
        <i className={`fa-solid fa-plus ${style.plus}`} />
        <i className={`fa-solid fa-minus ${style.minus}`} />
      </div>
    );
  };

  const handleReset = () => {
    prop.handleResetFilter();
    if (customInputRef.current) {
      customInputRef.current.value = "0";
    }
  };

  const activeClassForPriceFilter =
    !priceFilter || priceFilter === Number(customInputRef.current?.value)
      ? style.activeCirle
      : "";

  useEffect(() => {
    setCate(fakeData);
    setPrice([50, 100, 200, 300, 400, 500]);
  }, []);

  return (
    <div className={style.filter}>
      <div className={style.cateFilter}>
        {renderFitlerGroup("CATEGORIES")}
        <ul className={style.cateGroup}>
          {cate.map((item, index) => (
            <li key={index}>
              <label className={style.inputRadio}>
                <input
                  type="radio"
                  checked={cateFilter === item.name}
                  onChange={() => setCateRadio(item.name)}
                />
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.priceFilter}>
        {renderFitlerGroup("PRICE")}
        <div className={style.groupPrice}>
          {price.map((item, index) => (
            <button
              className={`${
                priceFilter === item &&
                Number(customInputRef.current?.value) !== item
                  ? style.activeCirle
                  : ""
              } ${style.filterButton}`}
              key={index}
              onClick={() => setPriceGroup(item)}
            >
              {item}
            </button>
          ))}
          <input
            ref={customInputRef}
            defaultValue={0}
            className={`${style.customPrice} ${style.filterButton} ${activeClassForPriceFilter}`}
            type="text"
            onKeyDown={handleKeyPressInput}
            onBlur={handleFilterCustomInput}
            onClick={() => setPriceGroup(Number(customInputRef.current?.value))}
          />
        </div>
      </div>
      <Button
        onClick={handleReset}
        variant="contained"
        color="blue"
        disabled={!cateFilter && !priceFilter}
      >
        All Reset
      </Button>
    </div>
  );
};

export default FilterProduct;
