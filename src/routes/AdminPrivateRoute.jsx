import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useGetAdmin from "../hooks/useGetAdmin";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
const AdminPrivateRoute = ({ children }) => {
  const [isAdmin, adminLoading] = useGetAdmin();
  const { auth, isLoading } = useContext(AuthContext);
  if (adminLoading || isLoading) {
    return <Loader />;
  }
  if (auth && isAdmin) {
    console.log("first");
    return children;
  }
  return <Navigate to={"/"} />;
};
AdminPrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminPrivateRoute;
