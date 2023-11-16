import { useState } from "react";
import MainHeader from "./main-header";
import ProductHeader from "./product-header";
import ProductSearch from "./search-popup";

interface Props {
  type: "main" | "product";
}

const Header = (props: Props) => {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const handleSearchPopup = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      {props.type === "main" ? (
        <MainHeader handleSearchPopup={handleSearchPopup} />
      ) : (
        <ProductHeader handleSearchPopup={handleSearchPopup} />
      )}
      <ProductSearch
        showSearch={showSearch}
        handleSearchPopup={handleSearchPopup}
      />
    </>
  );
};
export default Header;


