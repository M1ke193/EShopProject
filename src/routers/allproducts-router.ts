import AllProductsPage from "src/views/all-products";
import { RouteConfig } from "./modal";
import ProductLayout from "src/components/layout/product";
import CartProduct from "src/views/cart-product";
import WishlistPage from "src/views/wishlist";

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
      {
        path: "wishlist",
        Component: WishlistPage,
      },
    ],
  },
];

export default AllProductRouter;
