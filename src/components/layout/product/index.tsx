import React from "react";
import style from "./style.module.scss";
import Header from "src/components/header";
import Footer from "src/components/footer";
import { Outlet } from "react-router-dom";

type Props = {};

const ProductLayout = (props: Props) => {
  return (
    <div className={style.productLayout}>
      <Header type="product"></Header>
      <div className={style.body}>
        <Outlet />
      </div>
      <Footer className={style.footer}></Footer>
    </div>
  );
};

export default ProductLayout;
