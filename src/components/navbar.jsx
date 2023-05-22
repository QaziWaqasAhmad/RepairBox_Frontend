import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
export default function navbar() {
  return (
    <div className='w-[100%] h-[70px] flex justify-between items-center'>
        <div className='w-[270px] h-[100%] bg-[#152238] flex justify-start items-center '>
            <div className='ml-[15px] border-1 border-white'>
                <WidgetsIcon fontSize='large' style={{ color: '#FFFF' }}/>
            </div>
            <div className='ml-[15px] border-1 border-red'>
                <p className='text-white text-[24px]'>REPAIR BOX</p>
            </div>      
        </div>
        <div className='w-[1100px] h-[100%] flex justify-end items-center border-b-4 border-[#0096FF]'>
            <div className='w-[40px] h-[40px] rounded-full bg-gray-100 mr-[50px] flex justify-center items-center'>
                <AccountCircleIcon fontSize='large'/>
            </div>
        </div>

    </div>
  )
}
