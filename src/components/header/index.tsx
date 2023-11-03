import React from "react";
import MainHeader from "./main-header";
import ProductHeader from "./product-header";

interface Props {
  type: "main" | "product";
}

const Header = (props: Props) => {
  if (props.type === "main") {
    return <MainHeader></MainHeader>;
  } else {
    return <ProductHeader></ProductHeader>;
  }
};
export default Header;
