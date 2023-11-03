import AllProductsPage from "src/views/allproducts";
import { RouteConfig } from "./modal";
import ProductLayout from "src/components/layout/product";

const AllProductRouter: Array<RouteConfig> = [
  {
    path: "/allproducts",
    element: ProductLayout,
    children: [
      {
        path: "",
        Component: AllProductsPage,
      },
    ],
  },
];

export default AllProductRouter;
