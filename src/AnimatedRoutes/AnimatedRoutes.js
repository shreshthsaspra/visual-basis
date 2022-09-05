import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HospitalLogin from '../pages/Login/HospitalLogin';
import DoctorLogin from '../pages/Login/DoctorLogin';
import StaffManagement from '../pages/Login/StaffManagement';
import PateintRegister from '../pages/Login/Hospital/PateintRegister/PateintRegister';
import Home from '../pages/Login/Hospital/Home/Home';
import { AnimatePresence } from 'framer-motion';
import styles from "./AnimatedRoutes.module.css"  

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div className={styles.mainRoutes}>
      <AnimatePresence>
        <Routes location={location} key = { location.pathname}>
          <Route path="/" element={<HospitalLogin />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/pateintmanagement" element={<PateintRegister/>} />
          {/* <Route path="/staffmanagement" element={<StaffManagement />} /> */}
          <Route path="/staff-login" element={<StaffManagement />} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes