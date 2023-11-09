import authRouter from "./auth-router";
import mainRouter from "./main-router";
import ProductRouter from "./product-router";
import { RouteArr } from "./modal";
import AllProductRouter from "./allproducts-router";

const publicRouter: RouteArr = [
  authRouter,
  mainRouter,
  ProductRouter,
  AllProductRouter,
];

export { publicRouter };
