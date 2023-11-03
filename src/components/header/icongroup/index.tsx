import React from "react";
import style from "./style.module.scss";
interface Props {
  search?: boolean;
}

const IconGroup = (props: Props) => {
  return (
    <div className={style.icongroup}>
      <ul>
        <li>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </li>
        <li>
          <i className="fa-regular fa-heart fa-xl"></i>
        </li>
        <div className={style.cart}>
          <span>0</span>
          <li>
            <i className="fa-solid fa-cart-shopping fa-xl"></i>
          </li>
        </div>
        <li>
          <i className="fa-regular fa-user fa-xl"></i>
        </li>
      </ul>
    </div>
  );
};

export default IconGroup;
