import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
   <>
   <Navbar/>
   <div className='outlet  m-auto'>
     <Outlet/>

   </div>
     

   <Footer/>
   
   
   </>
  )
}
