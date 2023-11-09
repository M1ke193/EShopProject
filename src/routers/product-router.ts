import Productpage from "src/views/product";
import { RouteConfig } from "./modal";
import ProductLayout from "src/components/layout/product";

const ProductRouter: Array<RouteConfig> = [
  {
    path: "/product",
    element: ProductLayout,
    children: [
      {
        path: "/product/:id",
        Component: Productpage,
      },
    ],
  },
];

export default ProductRouter;
