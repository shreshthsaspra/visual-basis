import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HospitalLogin from '../pages/Login/HospitalLogin';
import DoctorLogin from '../pages/Login/DoctorLogin';
import StaffManagement from '../pages/Login/StaffManagement';
import PateintRegister from '../pages/Hospital/PateintRegister/PateintRegister';
import Home from '../pages/Hospital/Home/Home';
import { AnimatePresence } from 'framer-motion';
import styles from "./AnimatedRoutes.module.css"  
import PateintsSearch from '../pages/Hospital/PateintsSearch/PateintsSearch';
import ThreedModel from '../pages/ThreedModel';

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div className={styles.mainRoutes}>
      <AnimatePresence>
        <Routes location={location} key = { location.pathname}>
          <Route path="/" element={<HospitalLogin />} />
          <Route path="/Hospital" element={<Home/>} />
          <Route path="/threed" element={<ThreedModel/>} />

          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/Hospital/pateintmanagement" element={<PateintRegister/>} />
          <Route path="/Hospital/PateintSearch" element={<PateintsSearch/>} />
          {/* <Route path="/staffmanagement" element={<StaffManagement />} /> */}
          <Route path="/staff-login" element={<StaffManagement />} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes