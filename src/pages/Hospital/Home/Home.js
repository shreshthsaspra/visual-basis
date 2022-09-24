import React, { useEffect } from 'react'
import styles from "./Home.module.css"
import Logo from "../../../assests/demoLogo.png"
import BedLogo from "../../../assests/patient.png"
import Staff from "../../../assests/staff.png";
import { NavLink, useNavigate } from 'react-router-dom'
import { isAuth } from '../../../Storage/auth';
import axios from 'axios';


function Home() {
  // const navigation = useNavigate();

  // React.useEffect(() => {
  //   if (!isAuth()) {
  //     navigation("/")
  //   } 
  // }, []);
  useEffect(() => {

    const userDetails = async () => {
      let url1 = `http://18.237.160.150/api/user/get/`
      const userDetails = await axios({
        method: "get",
        url: url1,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }

      })
      console.log("userDetails", userDetails);
      if (userDetails.status == 200) {
        localStorage.setItem('user', userDetails.data.role_id)
        localStorage.setItem('userdetail', JSON.stringify(userDetails.data))
      }
      console.log("usedetails", userDetails);
    }
    userDetails()
  }, [])


  return (
    <div
      className={styles.Home}

    >
      <div className={styles.Home__body}>
        <div className={styles.Home__Icon}>
          <img src={Logo} alt="" />
          <p>FORTIS HOSPITAL</p>
        </div>
        <div className={styles.Home__body__button}>
          <NavLink to="/Hospital/staffmanagement" style={{ textDecoration: "none" }}>
            <div className={styles.Home__body__button__staff}>
              <img src={Staff} alt="" />
              <p>Staff Management</p>
            </div>
          </NavLink>
          <NavLink to="/Hospital/pateintmanagement" style={{ textDecoration: "none" }}>
            <div className={styles.Home__body__button__pateint}>
              <img src={BedLogo} alt="" />
              <p>Patient Management</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Home