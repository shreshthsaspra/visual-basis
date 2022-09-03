
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HospitalLogin from './pages/Login/HospitalLogin';
import DoctorLogin from './pages/Login/DoctorLogin';
import StaffManagement from './pages/Login/StaffManagement';
import Navbar from './components/Header/Navbar';


function App() {
  return (
    <>
     <Router>
      <Navbar/>
    <Routes>
         <Route  path="/" element={<HospitalLogin />} />
         <Route  path="/doctor-login" element={<DoctorLogin />} />
         <Route  path="/staff-login" element={<StaffManagement />} />
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
