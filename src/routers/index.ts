import authRouter from "./authRouter";
import mainRouter from "./mainRouter";
import ProductRouter from "./productRouter";
import { RouteArr } from "./modal";
import AllProductRouter from "./allproductsRouter";

const publicRouter: RouteArr = [
  authRouter,
  mainRouter,
  ProductRouter,
  AllProductRouter,
];

export { publicRouter };
