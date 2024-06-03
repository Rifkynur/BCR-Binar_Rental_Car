import { Navigate, useRoutes, useNavigate } from "react-router";
import { privateRoutes, publicRoutes } from "./route.config";
import { useEffect } from "react";
import { isLoggedIn } from "../component/helper/generic";
import { useAuth } from "../context/AuthContext";

export const AppCreatePublicRoutes = (props) => {
  const routes = useRoutes(publicRoutes(props));
  return routes ? routes : <Navigate replace to={{ pathname: "/" }} />;
};

export const AppCreatePrivateRoutes = (props) => {
  const routes = useRoutes(privateRoutes(props));
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     navigate("/");
  //   }, [navigate]);
  return routes;
};

export const PublicRoute = (props) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <AppCreatePrivateRoutes {...props} />;
  return <AppCreatePublicRoutes {...props} />;
};
