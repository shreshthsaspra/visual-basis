import React from 'react'
import styles from './Header.module.css';
import Logo from '../../assests/demoLogo.png';
import { MdNotificationsActive } from "react-icons/md";
import DoctorImg from '../../assests/doctorProfile.png'


const Header = () => {
  return (
    <>
        <div className={styles.doctorNav}>
            <div className={styles.navImg}>
                  <img src={Logo} alt="" />
            </div>

            <div className={styles.notification}>
                <div className={styles.notyOuter}>
                    <MdNotificationsActive
                     className={styles.iconSize}
                     size="35px"
                    />
                </div>
            </div>
            <div className={styles.userProfile}>
                <div className={styles.profileFlex}>
                    <p className='pe-2'>Dr. Reddy</p>
                    <img src={DoctorImg} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header;