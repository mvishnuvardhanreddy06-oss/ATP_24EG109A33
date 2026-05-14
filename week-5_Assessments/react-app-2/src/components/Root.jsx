import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
function Root() {
  return (
    <div className='grid'>
        <Header/>
        {/* placeholder*/}
        <div className='min-h-screen bg-gray-400'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root