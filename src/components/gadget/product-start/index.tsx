import React, { HTMLProps } from "react";
import style from "./style.module.scss";

interface Props extends HTMLProps<HTMLDivElement> {
  rate?: number;
}

const ProductStart = (props: Props) => {
  const { rate = 0, className = "" } = props;
  return (
    <ul className={`${style.listStart} ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index}>
          {index + 1 <= rate ? (
            <i className="fa-solid fa-star"></i>
          ) : (
            <i className="fa-regular fa-star"></i>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProductStart;
