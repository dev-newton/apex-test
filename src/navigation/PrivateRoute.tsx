import { Navigate, Outlet } from "react-router-dom";
import useAuth from "hooks/useAuth";
import { isAuth } from "utils";

const PrivateRoute = () => {
  const { github_data } = useAuth();

  if (!isAuth(github_data)) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
