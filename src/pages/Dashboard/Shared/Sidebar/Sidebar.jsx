import { FaHome,  FaPen,  FaUsers } from "react-icons/fa"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'; 
const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`w-64 fixed top-0 bg-gray-900 h-full text-white py-4 px-3 overflow-y-auto ${sidebarToggle ? 'hidden' : ''}`}>
        <div className="">
            <h2 className="text-2xl pb-3">Admin Dashboard</h2>
        </div>
        <hr />
        <ul className="mt-3 space-y-2">
            <li className="">
                <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaHome className="h-5 w-5"/>
                <span>Home</span>
                </Link>
            </li>
            <li className="">
            <Link to='/dashboard/users' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaUsers className="h-5 w-5"/>
                <span>Users List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Blog List</span>
                </Link>
            </li>
            <li className="">
            <Link to='' className="hover:bg-rose-700 px-4 py-2 flex justify-start items-center gap-1 text-base">
                <FaPen className="h-5 w-5"/>
                <span>Sadi List</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}
Sidebar.propTypes = {
    sidebarToggle: PropTypes.bool,
   
}
export default Sidebar