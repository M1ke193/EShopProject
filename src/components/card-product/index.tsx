import PrimaryCardProduct from "./primary-card-product";
import { IProduct } from "src/common/interface";
import HorizonCardProduct from "./horizon-card-product";

interface Props {
  type: "primary" | "horizontal";
  product: IProduct;
  className?: string;
}

const CardProduct = (props: Props) => {
  const { type = "primary", product, className } = props;
  if (type === "primary") {
    return <PrimaryCardProduct product={product} className={className} />;
  } else if (type === "horizontal") {
    return <HorizonCardProduct product={product} className={className} />;
  }
};

export default CardProduct;
