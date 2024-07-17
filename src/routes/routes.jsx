import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Users from "../pages/Dashboard/Users/Users";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
