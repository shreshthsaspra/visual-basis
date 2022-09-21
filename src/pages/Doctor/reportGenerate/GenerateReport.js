import React from 'react'
import Header from '../../../components/DoctorHeader/Header';
import styles from './GenerateReport.module.css';
import { IoIosArrowDown } from "react-icons/io";



const GenerateReport = () => {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.mainOuter}>
                    <div className={styles.cardInner}>
                        <div className={styles.border}>
                           <div className={styles.buttonFlex}>
                           <div className={styles.wrap}>
                                <button>Function</button>
                                <input type="checkbox" />

                            </div>
                            <div className={styles.wrap}>
                                <button>Analysis</button>
                                <input type="checkbox" />

                            </div>
                            <div className={styles.wrap}>
                                <button>Motion Checking</button>
                                <input type="checkbox" />


                            </div>

                            <div className={styles.wrap}>
                                <button>Face Analysis</button>
                                <input type="checkbox" />


                            </div>
                           </div>

                        </div>

                        <div className={styles.expand}>
                            <p>expand</p>
                            <IoIosArrowDown size="35px" color='#185EB6' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenerateReport