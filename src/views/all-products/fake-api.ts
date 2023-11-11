import fakeData from "../fakeData.json";
export const callApiFakeFetch = (
  limitProduct?: number,
  priceFilter?: number,
  cateFilter?: string
) => {
  //init
  let filterData = fakeData;
  let lengthAllProduct = fakeData.length;

  if (priceFilter || cateFilter) {
    filterData = filterData.filter((item) => {
      const passPriceFilter = priceFilter && item.salePrice <= priceFilter;
      const passCateFilter = cateFilter && item.type === cateFilter;
      if (priceFilter && cateFilter) {
        return passPriceFilter && passCateFilter;
      }
      return passPriceFilter || passCateFilter;
    });
  }
  lengthAllProduct = filterData.length;
  filterData = filterData.slice(0, limitProduct);

  return {
    lengthAllProduct: lengthAllProduct,
    products: filterData,
  };
};
