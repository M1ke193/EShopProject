import { useEffect, useState } from "react";
import style from "./style.module.scss";
import { IProduct } from "src/common/interface";
import FilterProduct from "./filter-product";
import useScrollToTop from "src/utils/hooks/useScrollToTop";
import { Button } from "src/components/base/button";
import { callApiFakeFetch } from "./fake-api";
import { limitAllProductList } from "src/common/constants";
import CardProduct from "src/components/card-product";

const AllProductsPage = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [cateFilter, setCateRadio] = useState<string | undefined>(undefined);
  const [priceFilter, setPriceGroup] = useState<number | undefined>(undefined);
  const [limitProduct, setLimitProduct] = useState<number>(limitAllProductList);
  const [lengthOffAllProduct, setlengthOffAllProduct] = useState<number>(0);

  useScrollToTop();

  const handleLoadMore = () => {
    if (limitProduct + 3 > lengthOffAllProduct)
      setLimitProduct(lengthOffAllProduct);
    else setLimitProduct(limitProduct + 3);
  };

  const fetchApiAndSetData = () => {
    const { products, lengthAllProduct } = callApiFakeFetch(
      limitProduct,
      priceFilter,
      cateFilter
    );
    setlengthOffAllProduct(lengthAllProduct);
    setProducts(products);
  };

  const optimizeApiCall = () => {
    if (limitProduct !== limitAllProductList) {
      setLimitProduct(limitAllProductList);
    } else {
      fetchApiAndSetData();
    }
  };

  const handleResetFilter = () => {
    setPriceGroup(0);
    setCateRadio("");
  };

  useEffect(() => {
    //call api
    fetchApiAndSetData();
  }, [limitProduct]);

  useEffect(() => {
    //hanndle filter and call api
    if (priceFilter !== undefined || cateFilter !== undefined) {
      optimizeApiCall();
    }
  }, [cateFilter, priceFilter]);

  return (
    <div className={style.allProductPage}>
      <h1 className={style.titlePage}>Explore All Products</h1>
      <div className={style.content}>
        <div className={style.filterWrap}>
          <FilterProduct
            handleResetFilter={handleResetFilter}
            setCateRadio={setCateRadio}
            setPriceGroup={setPriceGroup}
            cateFilter={cateFilter}
            priceFilter={priceFilter}
          />
        </div>
        <div className={style.products}>
          <div className={style.loopProduct}>
            {products.map((item, index) => (
              <CardProduct
                type={"primary"}
                className={style.card}
                key={index}
                product={item}
              />
            ))}
          </div>
          <div className={style.buttonWrap}>
            {products.length === 0 ? (
              <h2>No Product Found</h2>
            ) : (
              <Button
                disabled={lengthOffAllProduct <= limitProduct}
                style={{
                  visibility:
                    lengthOffAllProduct <= limitProduct ? "hidden" : "visible",
                }}
                onClick={handleLoadMore}
                className={style.button}
                color="gray"
                variant="contained"
              >
                Load More
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
