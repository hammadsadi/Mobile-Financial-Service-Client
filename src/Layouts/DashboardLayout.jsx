import { useState } from "react"
import Navbar from "../pages/Dashboard/Shared/Navbar/Navbar"
import Sidebar from "../pages/Dashboard/Shared/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div>
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        <div className="flex">
        <Sidebar sidebarToggle={sidebarToggle}/>
        <div className={`${sidebarToggle ? 'w-full' : 'ml-64'}  py-4 px-2`}>
       <Outlet/>
        </div>
    </div>
    </div>
  )
}

export default DashboardLayout