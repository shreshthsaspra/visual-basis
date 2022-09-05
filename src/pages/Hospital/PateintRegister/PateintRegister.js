
import React from 'react'
import styles from "./PateintRegister.module.css"
import Logo from "../../../assests/demoLogo.png"
import BedIcon from "../../../assests/PATIENT ICON 1.png"
import { NavLink } from 'react-router-dom'

function PateintRegister() {
  return (
    <div
      className={styles.PateintRegister}
    >

      <img src={Logo} alt="" />

      <div className={styles.PateintRegister__body}>
        <div className={styles.PateintRegister__body__left}>
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
            <NavLink to="/Hospital" style={{ textDecoration: "none" }}>
              <h4 className={styles.PateintRegister__body__leftCard__bodyGoback}>Go Back</h4>
            </NavLink>
          </div>
        </div>
        <div className={styles.PateintRegister__body__right}>
          <div className={styles.PateintRegister__body__rightTop1}>
            <div className={styles.PateintRegister__body__rightTop1__left}>
              <div className={styles.PateintRegister__body__rightTop1__leftName}>
                <p>Family Name</p>
                <input type="text" />
              </div>
              <div className={styles.PateintRegister__body__rightTop1__leftFistName}>
                <p>First Name</p>
                <input className={styles.marginsp} type="text" />
              </div>
              <div className={styles.PateintRegister__body__rightTop1__leftDate}>
                <div className={styles.PateintRegister__body__rightTop1__leftDateTop}>
                  <p>Date of Birth</p>
                  <input type="date" />
                </div>
                <div className={styles.PateintRegister__body__rightTop1__leftAge}>
                  <p>Age</p>
                  <input type="text" />
                </div>
              </div>

              <div className={styles.PateintRegister__body__rightTop1__leftGender}>
                <p>Gender</p>
                <select name="" id="">
                  <option value="">MALE</option>
                  <option value="">FEMALE</option>
                </select>
              </div>

            </div>
            <div className={styles.PateintRegister__body__rightTop1__right}></div>
          </div>
          <div className={styles.PateintRegister__body__rightTop2}>
            <div className={styles.PateintRegister__body__rightZip}>
              <div className={styles.PateintRegister__body__rightZipCode}>
                <p>Zip Code</p>
                <input type="text" name="" id="" />
              </div>
              <div className={styles.PateintRegister__body__rightZipPrefecture}>
                <p>Perfecture</p>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className={styles.PateintRegister__body__rightDetails}>
              <div className={styles.PateintRegister__body__rightEmail} >
                <p>Email ID</p>
                <input type="text" name="" id="" />
              </div>
              <div className={styles.PateintRegister__body__rightMob}>
                <p>Phone No.</p>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.PateintRegister__body__rightEmg}>
              <p>Phone No.</p>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.PateintRegister__body__rightAddress}>
            <p>Address</p>
            <div>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.PateintRegister__body__rightHistory}>
            <p>History</p>
            <div>
              <textarea type="text" name="" id="" />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PateintRegister