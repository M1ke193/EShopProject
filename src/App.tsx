import { publicRouter } from "src/routers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStateProvider } from "./store/context";

function App() {
  return (
    <GlobalStateProvider>
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
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
