import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HospitalLogin from '../pages/Login/HospitalLogin';
import DoctorLogin from '../pages/Login/DoctorLogin';
import StaffManagement from '../pages/Login/StaffManagement';
import PateintRegister from '../pages/Hospital/PateintRegister/PateintRegister';
import Home from '../pages/Hospital/Home/Home';
import DoctorHome from '../pages/Doctor/Home/Home';

import { AnimatePresence } from 'framer-motion';
import styles from "./AnimatedRoutes.module.css"  
import PateintsSearch from '../pages/Hospital/PateintsSearch/PateintsSearch';
import ThreedModel from '../pages/ThreedModel';
import StaffRegister from '../pages/Hospital/staffRegister/StaffRegister';
import StaffSearch from '../pages/Hospital/StaffSearch/StaffSearch';
import Patient from '../pages/Doctor/Patient/Patient';
import DiagnosisHistory from '../pages/Doctor/patientDiagnosis/DiagnosisHistory';

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div className={styles.mainRoutes}>
      <AnimatePresence>
        <Routes location={location} key = { location.pathname}>
          <Route path="/" element={<HospitalLogin />} />
          <Route path="/Hospital" element={<Home/>} />
          <Route path="/threed" element={<ThreedModel/>} />

          <Route path="/Hospital/pateintmanagement" element={<PateintRegister/>} />
          <Route path="/Hospital/PateintSearch" element={<PateintsSearch/>} />
          <Route path="/Hospital/staffSearch" element={<StaffSearch/>} />
          <Route path="/Hospital/staffmanagement" element={<StaffRegister/>} />

          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/Hospital/doctor" element={<DoctorHome />} />
          <Route path="/Hospital/patient" element={<Patient />} />
          <Route path="/Hospital/diagnosis-history" element={<DiagnosisHistory />} />


          {/* <Route path="/staffmanagement" element={<StaffManagement />} /> */}
          <Route path="/staff-login" element={<Home />} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes