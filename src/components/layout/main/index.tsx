import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import Header from "src/components/header";
import style from "./style.module.scss";
import shape from "src/assets/img/shape.webp";
import shape2 from "src/assets/img/shape2.webp";

interface Props {}

const MainLayout = (props: Props) => {
  return (
    <div className={style.mainlayout}>
      <Header type="main" />
      <div className={style.slidebackgroud}>
        <div className={style.backgroud}>
          <div className={style.shapeGroup}>
            <img className={style.shape} src={shape} />
            <img className={style.shape2} src={shape2} />
          </div>
        </div>
      </div>
      <div className={style.body}>
        <Outlet />
      </div>
      <Footer className={style.footer} />
    </div>
  );
};

export default MainLayout;
