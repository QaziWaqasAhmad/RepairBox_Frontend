import React from 'react'
import { Link} from "react-router-dom"
import { useState } from 'react'
import SpeedIcon from '@mui/icons-material/Speed';
import HandymanIcon from '@mui/icons-material/Handyman';
import FolderIcon from '@mui/icons-material/Folder';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import StyleIcon from '@mui/icons-material/Style';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddLinkIcon from '@mui/icons-material/AddLink';
import HelpIcon from '@mui/icons-material/Help';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';

export default function Admin() {
    const [active, setactive] = useState(1)

    return ( 
        <div className='w-[270px] h-[89vh] bg-[#1c3053] overflow-y-auto'>
            
            <p className='text-gray-300 text-[16px] mt-[10px] ml-[15px] mb-[10px]'>GENERAL</p>
            <Link to="/admin/Dashboard">
                <div 
                    className={
                        active === 1 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(1)}
                >
                    <SpeedIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Dashboard</p>
                </div>
            </Link>
           
            <p className='text-gray-300 text-[16px] mt-[10px] ml-[15px] mb-[10px]'>WORKSHOP</p>
            <Link to="/admin/RepairOrders">
                <div 
                    className={
                        active === 2 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(2)}
                >
                    <HandymanIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Repair Orders</p>
                </div>
            </Link>
           
            <p className='text-gray-300 text-[16px] mt-[10px] ml-[15px] mb-[10px]'>DATA ENTRIES</p>
            <Link to="/admin/Brands">
                <div 
                    className={
                        active === 3 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(3)}
                >
                    <FolderIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Brands</p>
                </div>
            </Link>
            <Link to="/admin/RepairableDevices">
                <div 
                    className={
                        active === 4 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(4)}
                >
                    <FolderIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Repairable Devices</p>
                </div>
            </Link>
            <Link to="/admin/RepairableDefects">
                <div 
                    className={
                        active === 5 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(5)}
                >
                    <FolderIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Repairable Defects</p>
                </div>
            </Link>
           
            <p className='text-gray-300 text-[16px] mt-[10px] ml-[15px] mb-[10px]'>TOOLS</p>
            <Link to="/admin/QuickReplies">
                <div 
                    className={
                        active === 6 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(6)}
                >
                    <ReplyAllIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Quick Replies</p>
                </div>
            </Link>
            <Link to="/admin/RepairStatus">
                <div 
                    className={
                        active === 7 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(7)}
                >
                    <StyleIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Repair Statuses</p>
                </div>
            </Link>
            <Link to="/admin/RepairPriorities">
                <div 
                    className={
                        active === 8 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(8)}
                >
                    <FormatListNumberedIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Repair Priorities</p>
                </div>
            </Link>
            <Link to="/admin/CustomPages">
                <div 
                    className={
                        active === 9 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(9)}
                >
                    <AddLinkIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Custom Pages</p>
                </div>
            </Link>
            <Link to="/admin/FAQ">
                <div 
                    className={
                        active === 10 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(10)}
                >
                    <HelpIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>FAQ</p>
                </div>
            </Link>
            <Link to="/admin/Report">
                <div 
                    className={
                        active === 11 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(11)}
                >
                    <AssignmentIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Report</p>
                </div>
            </Link>

            <p className='text-gray-300 text-[16px] mt-[10px] ml-[15px] mb-[10px]'>ADMINISTRATION</p>
            <Link to="/admin/Users">
                <div 
                    className={
                        active === 12 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(12)}
                >
                    <GroupsIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Users</p>
                </div>
            </Link>
            <Link to="/admin/UserRoles">
                <div 
                    className={
                        active === 13 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(13)}
                >
                    <LockPersonIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>User roles</p>
                </div>
            </Link>

            <p className='text-gray-300 text-[16px] mt-[10px] ml-[15px] mb-[10px]'>SYSTEM</p>
            <Link to="/admin/Settings">
                <div 
                    className={
                        active === 14 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(14)}
                >
                    <SettingsSuggestIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Settings</p>
                </div>
            </Link>
            <Link to="/admin/Backup">
                <div 
                    className={
                        active === 15 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(15)}
                >
                    <StorageIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Backup</p>
                </div>
            </Link>
            <Link to="/admin/Translations">
                <div 
                    className={
                        active === 16 ? 
                        'w-[100%] h-[50px] flex justify-start items-center bg-[#2a426d]' :
                        'w-[100%] h-[50px] flex justify-start items-center hover:bg-[#2a426d] hover:cursor-pointer'
                    } 
                    onClick={() => setactive(16)}
                >
                    <LanguageIcon style={{ color: '#0096FF', marginLeft: '15px' }}/>
                    <p className='ml-[10px] text-white text-[16px] font-semibold'>Translations</p>
                </div>
            </Link>
        </div>
    )
}
