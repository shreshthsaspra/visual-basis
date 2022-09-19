import React from 'react';
import styles from './DiagnosisHistory.module.css';
import Logo from '../../../assests/shadowLogo.png';
import Cross from '../../../assests/cross.png';
import { ImCross } from "react-icons/im";



const DiagnosisHistory = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <div className={styles.navWrapper}>
                        <div className={styles.left}>
                            <img src={Logo} alt="" />
                            <p className='ms-2'>Diagnosis History</p>
                        </div>
                        <div className={styles.right}>
                            {/* <img className='' src={Cross} alt="" /> */}
                            <p
                                className={styles.crossIcon}
                            > x
                            </p>
                        </div>
                    </div>
                    <div className={styles.mainCard}>
                        <div className={styles.heading}>
                            <h2>Diagnosis History</h2>
                        </div>


                        <div className={styles.profileCard}>
                        <div className={styles.profileWrap}>
                            <div className={styles.profileLeft}>
                                <h3>Suzanne Kaushik</h3>
                                <p>ID: 10091990</p>
                            </div>
                            <div className={styles.profileRight}>
                                <p style={{fontSize:'22px'}}>12</p>
                                <p style={{fontSize:'12px'}}>Visits</p>
                            </div>
                        </div>
                    </div>
                    </div>

                   

                </div>
            </div>
        </>
    )
}

export default DiagnosisHistory