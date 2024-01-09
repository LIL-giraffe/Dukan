import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100  ">
      <Sidebar/>

      <div className="w-full bg-slate-100 ">
        <Header/>
        {<Outlet />}
      </div>
    </div>
  )
}

export default Layout