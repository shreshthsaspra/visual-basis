import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./PateintsSearch.module.css"
import Logo from "../../../assests/demoLogo.png"
import BedIcon from "../../../assests/PATIENT ICON 1.png"

function PateintsSearch() {
  return (
    <div
      className={styles.patientSearch}

    >
      <img src={Logo} alt="" />
      <div className={styles.patientSearch_body}>

        <div className={styles.patientSearch__bodyLeft}>
          <div className={styles.PateintRegister__body__leftCard}>
            <img src={BedIcon} alt="" />
            <div className={styles.PateintRegister__body__leftCard__body}>
              <p>PATIENT</p>
              <NavLink to="/Hospital/pateintmanagement" style={{ textDecoration: "none" }}>
                <h4>Registration</h4>
              </NavLink>
              <NavLink to="/Hospital/PateintSearch" style={{ textDecoration: "none" }}>
                <h4 className={styles.PateintRegister__body__leftCard__bodySeacrh}>Search</h4>
              </NavLink>
            </div>
          </div>
          <div className={styles.PateintRegister__body__leftGoback}>
            <NavLink to="/Hospital/pateintmanagement" style={{ textDecoration: "none" }}>
              <h4 className={styles.PateintRegister__body__leftCard__bodyGoback}>Go Back</h4>
            </NavLink>
          </div>
        </div>
        <div className={styles.patientSearch__bodyRight}>
          <p>PATIENT SEARCH</p>
          <div className={styles.patientSearch__bodyRight__search}>
            <div>
              <input type="text" name="" id="" placeholder='Patient UUID' />
            </div>
            <div>
              <input type="text" name="" id="" placeholder='Patient Name' />
            </div>
            <div>
              <i class="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default PateintsSearch