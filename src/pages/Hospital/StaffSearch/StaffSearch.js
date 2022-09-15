import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./StaffSearch.module.css"
import Logo from "../../../assests/demoLogo.png"
import BedIcon from "../../../assests/PATIENT ICON 1.png";
import Icon from '../../../assests/buttonIcon.png'
import Profile from '../../../assests/profile.png'

function StaffSearch() {
  return (
    <>
      <div className={styles.upperLogo}>
        <img src={Logo} alt="" />

      </div>
      <div
        className={styles.PateintRegister}
      >



        <div className={styles.PateintRegister__body}>
          <div className={styles.PateintRegister__body__left}>
            <div className={styles.PateintRegister__body__leftCard}>
              <img src={BedIcon} alt="" />
              <div className={styles.PateintRegister__body__leftCard__body}>
                <p>Staff</p>
                <NavLink to="/Hospital/pateintmanagement" style={{ textDecoration: "none" }}>
                  <h4>Registration</h4>
                </NavLink>
                <NavLink to="/Hospital/PateintSearch" style={{ textDecoration: "none" }}>
                  <h4 className={styles.PateintRegister__body__leftCard__bodySeacrh}>Search</h4>
                </NavLink>
              </div>
            </div>
            <div className={styles.PateintRegister__body__leftGoback}>
              <NavLink to="/Hospital" style={{ textDecoration: "none" }}>
                <h4 className={styles.PateintRegister__body__leftCard__bodyGoback}>Go Back</h4>
              </NavLink>
            </div>
          </div>
          <div className={styles.PateintRegister__body__right}>
            <h2>STAFF SEARCH</h2>
            <div className={styles.searchBody}>
              <div className={styles.search}>
                <input placeholder='Patient UUID' type="text" />
                <input placeholder='Patient Name' type="text" />
                <img src={Icon} alt="" />
              </div>
            </div>

            <div className={styles.mainBody}>
              <div className={styles.singlePatient}>
                <p>Patient 1</p>
              </div>
              <div className={styles.singlePatient}>
                <p>Patient 2</p>
              </div>

              <div className={styles.singlePatient}>
                <p>Patient 3</p>
              </div>

              <div className={styles.singlePatient}>
                <p>Patient 4</p>
              </div>

              <div className={styles.singlePatient}>
                <p>Patient 5</p>
              </div>

              <div className={styles.singlePatient}>
                <p>Patient 6</p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StaffSearch