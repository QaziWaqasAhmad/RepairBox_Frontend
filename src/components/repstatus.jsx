import React from 'react'
import StyleIcon from '@mui/icons-material/Style';

export default function repstatus() {
  return (
    <div className='w-[1050px] h-[100%] border-2 border-black border-dotted flex flex-col justify-center items-center'>
      <div className='w-[1010px] h-[60px] flex items-center justify-between'>
        <div class='w-[350px] h-[100%] flex items-center justify-normal'>
          <StyleIcon style={{ color: '#505050', fontSize: '40px' }}/>
          <p className='ml-[10px] text-[#505050] text-[30px] font-semibold'>REPAIR STATUSES</p>
        </div>
        <div class='w-[250px] h-[100%] mr-[10px] flex items-center justify-end'>
          <button class='w-[80px] h-[40px] bg-[#0096FF] rounded-l-[10px] hover:bg-[#3aa8f7] text-white text-[16px] font-semibold'>Create</button>
          <div className='w-[1px] h-[40px] bg-[#2385ca]'/>
          <button class='w-[80px] h-[40px] bg-[#0096FF] rounded-r-[10px] hover:bg-[#3aa8f7] text-white text-[16px] font-semibold'>Back</button>
        </div>
      </div>
      <div className='w-[1010px] h-[480px] overflow-y-auto'>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400 rounded-t-[10px]'>

        </div>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400'>

        </div>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400'>

        </div>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400'>

        </div>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400'>

        </div>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400'>

        </div>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400'>

        </div>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400'>

        </div>
        <div className='w-[99%] h-[60px] border-[1px] border-gray-400 rounded-b-[10px]'>

        </div>
      </div>
    </div>
  )
}
