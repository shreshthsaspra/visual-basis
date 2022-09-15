import React from 'react'
import styles from "./Home.module.css"
import Logo from "../../../assests/demoLogo.png"
import BedLogo from "../../../assests/patient.png"
import Staff from "../../../assests/staff.png"

import { NavLink } from 'react-router-dom'

function Home() {
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