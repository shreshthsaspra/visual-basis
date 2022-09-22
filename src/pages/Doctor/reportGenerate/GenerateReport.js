import React, { useState } from 'react'
import Header from '../../../components/DoctorHeader/Header';
import styles from './GenerateReport.module.css';
import { IoIosArrowDown } from "react-icons/io";
import Print from '../../../assests/print.png'



const GenerateReport = () => {
    const [isExpand, setIsExpand] = useState(false)

    const handleExpand = () => {
        setIsExpand(!isExpand)

    }
    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.mainOuter}>
                    <div className={styles.cardExpand}>
                        <div className={styles.cardInner}>
                            <div className={`${!isExpand ? styles.border : ""}`}>
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

                            {
                                !isExpand && (
                                    <div className={styles.expand}>
                                        <p>expand</p>
                                        <IoIosArrowDown onClick={handleExpand} style={{ cursor: 'pointer' }} size="35px" color='#185EB6' />
                                    </div>
                                )
                            }

                            {
                                isExpand && (
                                    <div className={styles.expand}>

                                        <IoIosArrowDown onClick={handleExpand} style={{ cursor: 'pointer' }} size="35px" color='#185EB6' />
                                    </div>

                                )
                            }

                            {/* <div className={styles.expand}>
                                <p>expand</p>
                                <IoIosArrowDown onClick={handleExpand} style={{ cursor: 'pointer' }} size="35px" color='#185EB6' />
                            </div> */}


                        </div>
                    </div>

                    {
                        isExpand && (
                            <div className={styles.positionExpand}>
                                <div className={styles.expandArea}>

                                    <div className={styles.expandGame}>
                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Point</p>
                                        </div>

                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Screnning</p>
                                        </div>
                                    </div>

                                    <div className={styles.expandGame}>
                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Distortion Image</p>
                                        </div>

                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>3D CG</p>
                                        </div>

                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>3D Image</p>
                                        </div>

                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>S-Shape</p>
                                        </div>

                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Screening</p>
                                        </div>

                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Foot Pressure</p>
                                        </div>
                                    </div>

                                    <div className={styles.expandGame}>
                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Point</p>
                                        </div>

                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Screnning</p>
                                        </div>
                                    </div>

                                    <div className={styles.expandGame}>
                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Point</p>
                                        </div>

                                        <div className={styles.flexExpand}>
                                            <input type="checkbox" />
                                            <p>Screnning</p>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        )
                    }



                </div>

                <div className={styles.printButton}>
                    <button>
                        Print 
                        <img src={Print} alt="" />
                    </button>

                </div>

            </div>
        </>
    )
}

export default GenerateReport