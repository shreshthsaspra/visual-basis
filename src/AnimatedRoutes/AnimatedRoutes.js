import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HospitalLogin from '../pages/Login/HospitalLogin';
import DoctorLogin from '../pages/Login/DoctorLogin';
import StaffManagement from '../pages/Login/StaffManagement';
import PateintRegister from '../pages/Hospital/PateintRegister/PateintRegister';
import Home from '../pages/Hospital/Home/Home';
import DoctorHome from '../pages/Doctor/Home/Home';
import CroppedIMage from "../Cropped/CroppedIMage"
import { AnimatePresence } from 'framer-motion';
import styles from "./AnimatedRoutes.module.css"  
import PateintsSearch from '../pages/Hospital/PateintsSearch/PateintsSearch';
import ThreedModel from '../pages/ThreedModel';
import StaffRegister from '../pages/Hospital/staffRegister/StaffRegister';
import StaffSearch from '../pages/Hospital/StaffSearch/StaffSearch';
import Patient from '../pages/Doctor/Patient/Patient';
import DiagnosisHistory from '../pages/Doctor/patientDiagnosis/DiagnosisHistory';
import GenerateReport from '../pages/Doctor/reportGenerate/GenerateReport';
import Function from '../pages/Doctor/function/Function';
import Camera from '../pages/Doctor/camera/Camera';
import PateintUploadImg from '../components/UploadImage/PateintUploadImg';
import StaffHome from '../pages/Staff/Home/StaffHome';
import PatientMap from '../pages/Doctor/PatientMap/PatientMap';
import EditModelMain from '../pages/Doctor/EditModel/EditModelMain';
import Screening from '../pages/Doctor/Screening/Screening';
import EditSingle from '../pages/Doctor/EditSingle/EditSingle';
import Upload from '../pages/Doctor/face/FaceUpload/Upload';
import Analysis from '../pages/Doctor/face/FaceAnalysis/Analysis';
import HospitalProfile from '../pages/Hospital/Profile/HospitalProfile';

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div className={styles.mainRoutes}>
      {/* <AnimatePresence> */}
        <Routes>
          <Route path="/" element={<HospitalLogin />} />
          <Route path="/Hospital" element={<Home/>} />
          <Route path="/threed" element={<ThreedModel/>} />
          <Route path="/Hospital/pateintmanagement" element={<PateintRegister/>} />
          <Route path="/doctor/function/upload" element={<PateintUploadImg/>} />
          <Route path="/Hospital/PateintSearch" element={<PateintsSearch/>} />
          <Route path="/Hospital/staffSearch" element={<StaffSearch/>} />
          <Route path="/Hospital/staffSearch" element={<StaffSearch/>} />
          <Route path="/Hospital/staffhome" element={<StaffHome/>} />
          <Route path="/editmodel" element={<EditModelMain/>} />
          <Route path="/editmodel/single" element={<EditSingle/>} />

          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/Hospital/doctor" element={<DoctorHome />} />
          <Route path="/Hospital/patient" element={<Patient />} />
          <Route path="/Hospital/profile" element={<HospitalProfile />} />

          {/* <Route path="/crops" element={<CroppedIMage />} /> */}
          <Route path="/Hospital/diagnosis-history" element={<DiagnosisHistory />} />
          <Route path="/doctor/generate-report" element={<GenerateReport />} />
          <Route path="/doctor/function" element={<Function />} />
          <Route path="/doctor/camera" element={<Camera />} />
          <Route path="/doctor/patientMap" element={<PatientMap />} />
          {/* <Route path="/staffmanagement" element={<StaffManagement />} /> */}
          <Route path="/staff-login" element={<Home />} />
          <Route path="/doctor/screening" element={<Screening />} />
          <Route path="/doctor/face" element={<Upload />} />
          <Route path="/doctor/faceAnalysis" element={<Analysis />} />



        </Routes>
        {/* </AnimatePresence> */}
    </div>
  )
}

export default AnimatedRoutes