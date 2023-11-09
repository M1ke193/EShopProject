import AllProductsPage from "src/views/all-products";
import { RouteConfig } from "./modal";
import ProductLayout from "src/components/layout/product";
import CartProduct from "src/views/cart-product";

const AllProductRouter: Array<RouteConfig> = [
  {
    path: "/shop",
    element: ProductLayout,
    children: [
      {
        path: "",
        Component: AllProductsPage,
      },
      {
        path: "cart",
        Component: CartProduct,
      },
    ],
  },
];

export default AllProductRouter;
