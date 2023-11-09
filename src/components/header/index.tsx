import MainHeader from "./main-header";
import ProductHeader from "./product-header";

interface Props {
  type: "main" | "product";
}

const Header = (props: Props) => {
  if (props.type === "main") {
    return <MainHeader />;
  } else {
    return <ProductHeader />;
  }
};
export default Header;
