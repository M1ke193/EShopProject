import { ReactNode } from "react";

interface Item {
  label?: ReactNode;
}

export type MenuItem = Array<Item>;
