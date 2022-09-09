
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HospitalLogin from './pages/Login/HospitalLogin';
import DoctorLogin from './pages/Login/DoctorLogin';
import StaffManagement from './pages/Login/StaffManagement';
import Testing from './pages/Testing';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HospitalLogin />} />
          <Route path="/doctor-login" element={<DoctorLogin />} />
          <Route path="/staff-login" element={<StaffManagement />} />
          <Route path="/testing" element={<Testing />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
