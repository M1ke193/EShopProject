import Productpage from "src/views/product";
import { RouteConfig } from "./modal";
import ProductLayout from "src/components/layout/product";
import CategoryPage from "src/views/category-products";

const ProductRouter: Array<RouteConfig> = [
  {
    path: "/product",
    element: ProductLayout,
    children: [
      {
        path: ":id",
        Component: Productpage,
      },
      {
        path: "category/:type",
        Component: CategoryPage,
      },
    ],
  },
];

export default ProductRouter;
