import { FaHome, FaPen, FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { RiFolderHistoryFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { GrSend } from "react-icons/gr";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoBrowsersOutline } from "react-icons/io5";
import { MdOutlineAddCard } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";

import { toastAlert } from "../../../../helper/helper";
import useGetAdmin from "../../../../hooks/useGetAdmin";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
const Sidebar = ({ sidebarToggle }) => {
  const [isAdmin] = useGetAdmin();
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/logout`,
        {
          withCredentials: true,
        }
      );
      if (data) {
        toastAlert(data.message, "success");
        navigate("/login");
      }
    } catch (error) {
      toastAlert(error?.response?.data?.error, "error");
    }
  };
  return (
    <div
      className={`w-64 fixed top-0 bg-gray-900 h-full text-white py-4 px-3 overflow-y-auto ${
        sidebarToggle ? "hidden" : ""
      }`}
    >
      <div className="">
        <h2 className="text-2xl pb-3">Admin Dashboard</h2>
      </div>
      <hr />
      <ul className="mt-3 space-y-2">
        <li className="">
          <Link
            to=""
            className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
          >
            <IoAnalyticsOutline className="h-5 w-5" />
            <span>Home</span>
          </Link>
        </li>
        {/* Admin Menu */}
        {isAdmin && (
          <li className="">
            <Link
              to="/dashboard/users"
              className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
            >
              <FaUsers className="h-5 w-5" />
              <span>Users Management</span>
            </Link>
          </li>
        )}
        {/* Agent Menu */}
        {auth?.accountType === "agent" && auth?.status === "active" ? (
          <li className="">
            <Link
              to="/transaction-manage"
              className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
            >
              <MdOutlineManageHistory className="h-5 w-5" />
              <span>Transaction Manage</span>
            </Link>
          </li>
        ) : (
          ""
        )}
        {/* User Menu */}
        {auth?.accountType === "user" && auth?.status === "active" ? (
          <li className="">
            <Link
              to="/transaction/history"
              className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
            >
              <RiFolderHistoryFill className="h-5 w-5" />
              <span>Transaction History</span>
            </Link>
          </li>
        ) : (
          ""
        )}
        {/* Admin Menu */}
        {isAdmin && (
          <li className="">
            <Link
              to="/all-transaction"
              className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
            >
              <RiFolderHistoryFill className="h-5 w-5" />
              <span>All Transaction</span>
            </Link>
          </li>
        )}

        {auth?.accountType === "user" || auth?.accountType === "agent" ? (
          <li className="">
            <Link
              to="/send-money"
              className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
            >
              <GrSend className="h-5 w-5" />
              <span>Send Money</span>
            </Link>
          </li>
        ) : (
          ""
        )}

        {auth?.accountType === "user" || auth?.accountType === "agent" ? (
          <li className="">
            <Link
              to="/cash-out"
              className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
            >
              <IoBrowsersOutline className="h-5 w-5" />
              <span>Cash Out</span>
            </Link>
          </li>
        ) : (
          ""
        )}

        {auth?.accountType === "user" || auth?.accountType === "agent" ? (
          <li className="">
            <Link
              to="/cash-in"
              className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
            >
              <MdOutlineAddCard className="h-5 w-5" />
              <span>Cash In</span>
            </Link>
          </li>
        ) : (
          ""
        )}

        <li className="">
          <Link
            onClick={handleLogout}
            className="bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base"
          >
            <TbLogout className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
Sidebar.propTypes = {
  sidebarToggle: PropTypes.bool,
};
export default Sidebar;
