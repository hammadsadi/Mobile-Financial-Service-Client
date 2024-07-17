import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import PropTypes from "prop-types";
const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  // handleLogout

  return (
    <div
      className={` ${
        sidebarToggle ? "w-full" : "ml-64"
      } bg-gray-900 py-4 px-2 text-white flex justify-between items-center`}
    >
      {/* Arrow For Toggle */}
      <div>
        {sidebarToggle ? (
          <IoMdArrowDropright
            className="h-8 w-8 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
        ) : (
          <IoMdArrowDropleft
            className="h-8 w-8 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
        )}
      </div>
      {/* User Info */}
      <div className="flex items-center gap-3">
        <div>
          <FaBell className="h-5 w-5 cursor-pointer" />
        </div>
        <div className="relative ">
          <button className="group">
            <FaUserCircle className="h-8 w-8 cursor-pointer " />
          </button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  sidebarToggle: PropTypes.bool,
  setSidebarToggle: PropTypes.func,
};
export default Navbar;
