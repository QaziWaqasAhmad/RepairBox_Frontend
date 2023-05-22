import React from 'react'
import Sidebar from '../components/Admin'
import { Outlet } from "react-router-dom"


export default function adminLayout() {
  return (
    <div className='w-[100%] h-[89vh] flex justify-between items-center'>  
        <Sidebar/>
        <div className='w-[1110px] h-[89vh] flex justify-center items-center'>
          <Outlet/>
        </div>
    </div>
  )
}
