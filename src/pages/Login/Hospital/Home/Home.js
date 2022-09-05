import React from 'react'
import styles from "./Home.module.css"
import Logo from "../../../../assests/demoLogo.png"
import bedLogo from "../../../../assests/USER.png"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div 
    className={styles.Home}
    initial = {{opacity:0}}
    animate = {{opacity:1}}
    exit = {{opacity:1}}
    >
      <div className={styles.Home__body}>
        <div className={styles.Home__Icon}>
          <img src={Logo} alt="" />
          <p>FORTIS HOSPITAL</p>
        </div>
        <div className={styles.Home__body__button}>
          <NavLink to="/staffmanagement" style={{ textDecoration: "none" }}>
            <div className={styles.Home__body__button__staff}>
              <img src={bedLogo} alt="" />
              <p>Staff Management</p>
            </div>
          </NavLink>
          <NavLink to="/pateintmanagement" style={{ textDecoration: "none" }}>
            <div className={styles.Home__body__button__pateint}>
              <img src={bedLogo} alt="" />
              <p>Patient Management</p>
            </div>
          </NavLink>
        </div>
      </div>
    </motion.div>
  )
}

export default Home