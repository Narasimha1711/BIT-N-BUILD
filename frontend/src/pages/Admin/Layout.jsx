import React from 'react'
import SellerSidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    // <div>

    <div className='home'>
    {/* <SellerSidebar /> */}

    <Outlet />
    </div>
    // </div>
  )
}

export default Layout
