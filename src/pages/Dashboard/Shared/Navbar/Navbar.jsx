import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; 
const Navbar = ({sidebarToggle, setSidebarToggle}) => {
    
  return (
    <div className={` ${sidebarToggle ? 'w-full' : 'ml-64' } bg-gray-900 py-4 px-2 text-white flex justify-between items-center`}>
        {/* Arrow For Toggle */}
        <div>
            {sidebarToggle ? <IoMdArrowDropright className="h-8 w-8 cursor-pointer" onClick={()=> setSidebarToggle(!sidebarToggle)}/> : <IoMdArrowDropleft className="h-8 w-8 cursor-pointer" onClick={()=> setSidebarToggle(!sidebarToggle)}/>}
    
        </div>
        {/* User Info */}
        <div className="flex items-center gap-3">
            <div>
                <FaBell className="h-5 w-5 cursor-pointer"/>
            </div>
            <div className="relative ">
                <button className="group">
                    <FaUserCircle className="h-8 w-8 cursor-pointer "/>
                    <div className="absolute right-4 bg-white shadow-lg text-gray-900 rounded-md hidden group-focus:block w-40 text-center p-2">
                    <ul>
                        <li>
                            <Link to="">Profile</Link>
                           
                        </li>
                        <li>
                        <Link to="">Setting</Link>
                        
                        </li>
                        <li><Link to="">Logout</Link></li>
                    </ul>
                </div>
                </button>
                
            </div>
        </div>
    </div>
  )
}

Navbar.propTypes = {
    sidebarToggle: PropTypes.bool,
    setSidebarToggle: PropTypes.func
}
export default Navbar