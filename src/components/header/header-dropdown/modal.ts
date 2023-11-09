import { ReactNode } from "react";

interface Item {
  key?: string | number;
  label?: ReactNode;
  itemsHover?: "background" | "text";
}

export type MenuItem = Array<Item>;
