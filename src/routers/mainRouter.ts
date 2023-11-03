import { RouteConfig } from "./modal";
import MainLayout from "src/components/layout/main";
import MainPage from "src/views/main";

const mainRouter: Array<RouteConfig> = [
  {
    path: "/",
    element: MainLayout,
    children: [
      {
        path: "",
        Component: MainPage,
      },
    ],
  },
];

export default mainRouter;
