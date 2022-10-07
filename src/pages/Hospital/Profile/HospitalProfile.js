import React from 'react'
import styles from './HospitalProfile.module.css';
import Logo from '../../../assests/demoLogo.png'

const HospitalProfile = () => {
    return (
        <>
            <div className={styles.logo}>
                <img src={Logo} alt="" />
            </div>

            <div className={styles.mainProfile}>
                <div className={styles.topmain}>

                </div>
                <div className={styles.profileWrap}>
                    <div className={styles.leftTop}>
                    <div className={styles.left}>
                        <div className={styles.patient}>
                            <p>Patient 1</p>
                        </div>
                        <div className={styles.patient}>
                            <p>Patient 2</p>
                        </div>
                        <div className={styles.patient}>
                            <p> Patient 3</p>
                        </div>
                        <div className={styles.patient}>
                            <p>Patient 4</p>
                        </div>
                        <div className={styles.patient}>
                            <p> Patient 5</p>

                        </div>
                        <div className={styles.patient}>
                            <p> Patient 3</p>
                        </div>
                        <div className={styles.patient}>
                            <p>Patient 4</p>
                        </div>
                        <div className={styles.patient}>
                            <p> Patient 5</p>

                        </div>
                        <div className={styles.patient}>
                            <p> Patient 3</p>
                        </div>
                        <div className={styles.patient}>
                            <p>Patient 4</p>
                        </div>
                        <div className={styles.patient}>
                            <p> Patient 5</p>
                        </div>
                    </div>
                    <div className={styles.removeBtn}>
                    <button>
                        Remove Patient
                    </button>
                    </div>
                    </div>
                   

                    <div className={styles.right}>
                        <div className={styles.doctorProfile}>
                            <p>Doctor Tripathi</p>
                            <p>
                                Saurai Khurd Sirathu, Kaushambi, UP
                            </p>

                            <p>tripathihk2014@gmail.com</p>
                            <p className='mb-0 pb-0'>6387522891</p>
                        </div>
                        <div className={styles.editButton}>
                            <button>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalProfile