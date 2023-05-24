import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import AdminLayout from './pages/adminLayout'
import Dashboard from './components/dashboard'
import Backup from './components/backup'
import Brands from './components/brands'
import CustPages from './components/custompages'
import FAQ from './components/faq'
import QuickReplies from './components/quickreplies'
import RepOrder from './components/repairorder'
import RepDefects from './components/repdefects'
import RepDevices from './components/repdevices'
import Report from './components/report'
import RepPriorities from './components/reppriorities'
import RepStatus from './components/repstatus'
import Settings from './components/settings'
import Translations from './components/translations'
import Users from './components/users'
import UserRole from './components/userrole'
import  Navbar  from './components/navbar'
import  Navber  from './components/navber'

import './App.css'


let navbarCheck = () => {

    if(window.location.pathname == "/"){
      return <Navber />
    }else{
      return <Navbar />
    }
  
}

function App() {

  return (
    <>
      {/* <h1 className='bg-red-800 text-4xl'>React Router</h1> */}
    
      {navbarCheck()}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="RepairOrders" element={<RepOrder />} />
          <Route path="Brands" element={<Brands />} />
          <Route path="RepairableDevices" element={<RepDevices />} />
          <Route path="RepairableDefects" element={<RepDefects />} />
          <Route path="QuickReplies" element={<QuickReplies />} />
          <Route path="RepairStatus" element={<RepStatus />} />
          <Route path="RepairPriorities" element={<RepPriorities />} />
          <Route path="CustomPages" element={<CustPages />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Report" element={<Report />} />
          <Route path="Users" element={<Users />} />
          <Route path="UserRoles" element={<UserRole />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Backup" element={<Backup />} />
          <Route path="Translations" element={<Translations />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
