import { useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

import routes from "navigation/routes";
import { isAuth } from "utils";
import useAuth from "hooks/useAuth";
import PrivateRoute from "navigation/PrivateRoute";
import Auth from "pages/Auth/Auth";
import "styles/index.scss";

function App() {
  const location = useLocation();
  const { github_data } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const goBack: any = -1;

  return (
    <Routes>
      <Route
        path="/auth"
        element={isAuth(github_data) ? <Navigate to={goBack} /> : <Auth />}
      />
      <Route element={<PrivateRoute />}>
        {routes.map((route) => {
          let Component = route.component;
          return (
            <Route
              key={route.title}
              path={route.path}
              element={<Component />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
