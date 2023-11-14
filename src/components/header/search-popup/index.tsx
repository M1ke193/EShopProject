import { useState, useRef, useEffect } from "react";
import style from "./style.module.scss";
import { IProduct } from "src/common/interface";
import CardProduct from "src/components/card-product";
import { Link } from "react-router-dom";
import fakeData from "src/views/fakeData.json";

interface Props {
  showSearch: boolean;
  handleSearchPopup: () => void;
}

const ProductSearch = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const iconClearRef = useRef<HTMLElement>(null);

  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ) => {
    let timeOutId: any;
    return (...args: Parameters<T>) => {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => func(...args), delay);
    };
  };

  const searchProductWithKey = debounce((searchKey: string) => {
    if (searchKey) {
      const searchProducts = fakeData.filter((item) =>
        new RegExp(searchKey, "gi").test(item.name)
      );
      setProducts(searchProducts);
    } else {
      setProducts([]);
    }
  }, 300);

  const handleSearch = () => {
    if (inputSearchRef.current) {
      const inputValue = inputSearchRef.current.value;
      iconClearRef.current?.classList.toggle(style.show, !!inputValue);
      searchProductWithKey(inputValue);
    }
  };

  const handleCloseParent = (event: any) => {
    if (event.target === event.currentTarget) {
      props.handleSearchPopup();
    }
  };

  const handleClearSearch = () => {
    if (inputSearchRef.current) {
      inputSearchRef.current.value = "";
      iconClearRef.current?.classList.remove(style.show);
    }
    setProducts([]);
  };

  useEffect(() => {
    if (!props.showSearch) {
      handleClearSearch();
    }
  }, [props.showSearch]);

  return (
    <div
      className={`${style.productSearchWrap} ${
        props.showSearch ? style.showSearch : ""
      }`}
      onClick={(event) => handleCloseParent(event)}
    >
      <div className={style.productSearch}>
        <div className={style.searchHeader}>
          <input
            className={style.inputSearch}
            placeholder="Find Something..."
            ref={inputSearchRef}
            onChange={handleSearch}
          />
          <span className={style.searchIcon}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span
            ref={iconClearRef}
            className={style.closeIcon}
            onClick={handleClearSearch}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <div className={style.searchBody}>
          <div className={style.resutlSearch}>
            <span>{products.length} Result Found</span>
            <Link to={"/shop"}>View All</Link>
          </div>
          <div className={style.itemResult}>
            {products.map((item) => (
              <CardProduct key={item.id} type={"horizontal"} product={item} />
            ))}
          </div>
        </div>
      </div>
      <span
        className={style.CloseButton}
        onClick={() => props.handleSearchPopup()}
      >
        <i className="fa-solid fa-xmark" />
      </span>
    </div>
  );
};

export default ProductSearch;
