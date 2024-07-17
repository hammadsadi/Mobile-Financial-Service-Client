import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Users from "../pages/Dashboard/Users/Users";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import PaymentHistory from "../pages/PaymentHistory/PaymentHistory";
import SendMoney from "../pages/SendMoney/SendMoney";
import CashOut from "../pages/CashOut/CashOut";
import CashIn from "../pages/CashIn/CashIn";
import TransactionManagement from "../pages/TransactionManagement/TransactionManagement";
import AllTransaction from "../pages/AllTransaction/AllTransaction";
import AdminPrivateRoute from "./AdminPrivateRoute";

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
      {
        path: "/transaction/history",
        element: <PaymentHistory />,
      },
      {
        path: "/all-transaction",
        element: (
          <AdminPrivateRoute>
            <AllTransaction />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/send-money",
        element: <SendMoney />,
      },
      {
        path: "/cash-out",
        element: <CashOut />,
      },
      {
        path: "/transaction-manage",
        element: <TransactionManagement />,
      },
      {
        path: "/cash-in",
        element: <CashIn />,
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
