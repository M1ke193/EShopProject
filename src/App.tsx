import { publicRouter } from "src/routers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModalProduct from "./components/modal-product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        {publicRouter.map((Routers) => {
          return Routers.map(
            ({ path, props, element: Component, children }) => {
              return (
                <Route path={path} element={<Component {...props} />}>
                  {children?.map(({ path, Component: Component }, index) => {
                    return (
                      <Route
                        key={index}
                        path={path}
                        element={<Component {...props} />}
                      />
                    );
                  })}
                </Route>
              );
            }
          );
        })}
      </Routes>
      <ModalProduct />
      <ToastContainer />
    </Router>
  );
}

export default App;
