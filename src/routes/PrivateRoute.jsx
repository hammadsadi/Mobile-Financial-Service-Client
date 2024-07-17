import { Navigate, useLocation } from "react-router-dom";
// import Loader from "../components/Loader/Loader";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../pages/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { auth, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }
  if (auth) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
