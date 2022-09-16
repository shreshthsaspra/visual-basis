import React, { useState } from 'react'
import styles from './Header.module.css';
import Logo from '../../assests/demoLogo.png';
import { MdNotificationsActive } from "react-icons/md";
import DoctorImg from '../../assests/doctorProfile.png'


const Header = () => {
    const [profileActive, setProfileActive] = useState(false);
    const [notifyActive, setNotyActive] = useState(false);

    const clickProfile = () => {
        setProfileActive(!profileActive)
    }
    const clickNoty = () => {
        setNotyActive(!notifyActive)
    }

    return (
        <>
            <div className={styles.doctorNav}>
                <div className={styles.navImg}>
                    <img src={Logo} alt="" />
                </div>

                <div className={styles.notification}>
                    {
                        !notifyActive && (
                            <>
                                <div onClick={clickNoty} className={styles.notyOuter} >
                                    <MdNotificationsActive
                                        className={styles.iconSize}
                                        size="35px"
                                    />
                                </div>
                            </>
                        )
                    }

                    {
                        notifyActive && (
                            <>
                            <div className={styles.outerNotification}>
                                <div className={styles.unread}>
                                    <p> You have 4 unread Notification</p>
                                </div>
                            <div onClick={clickNoty} className={styles.notyOuterActive} >
                                    <MdNotificationsActive
                                        className={styles.iconSize}
                                        size="35px"
                                    />
                                </div>
                            </div>
                                
                            </>
                        )
                    }

                </div>
                <div className={styles.userProfile}>
                    <div className={`${profileActive ? styles.outerActive : styles.outer} `}>
                        <div onClick={clickProfile} className={styles.profileFlex}>
                            <p className={`${styles.profiletext} pe-2`}>Dr. Reddy</p>
                            <img className={styles.profileImg} src={DoctorImg} alt="" />
                        </div>

                        {
                            profileActive && (
                                <>
                                    <div className={`${styles.borderLine} mt-2`}>
                                        <div className={`${styles.buttonOuter} mt-2`}>
                                            <button className={styles.profileButton}>My Account</button>
                                        </div>

                                        <div className={styles.buttonOuter}>
                                            <button className={styles.profileButton}>Sign Out</button>
                                        </div>
                                    </div>
                                </>


                            )
                        }

                    </div>



                </div>
            </div>
        </>
    )
}

export default Header;