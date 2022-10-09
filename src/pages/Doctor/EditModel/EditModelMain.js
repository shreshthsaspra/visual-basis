import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { IoHome } from 'react-icons/io5'
import { MdArrowBackIosNew } from 'react-icons/md'
import Logo from '../../../assests/demoLogo.png';
import styles from "./EditModelMain.module.css"
import FrontModel from './FrontModel';
import BackModel from './BackModel';
import LeftModel from './LeftModel';
import RightModel from './RightModel';
function EditModelMain() {

    
    const [activePosF, setActivePosF] = useState('active')
    const [activePosB, setActivePosB] = useState('noactive')
    const [activePosL, setActivePosL] = useState('noactive')
    const [activePosR, setActivePosR] = useState('noactive')
    const handleClick = (id) => {
        if (id == 1) {
            setActivePosF('active')
            setActivePosB('noactive')
            setActivePosL('noactive')
            setActivePosR('noactive')

        }
        if (id == 2) {
            setActivePosF('noactive')
            setActivePosB('active')
            setActivePosL('noactive')
            setActivePosR('noactive')

        }
        if (id == 3) {
            setActivePosF('noactive')
            setActivePosB('noactive')
            setActivePosL('active')
            setActivePosR('noactive')

        }
        if (id == 4) {
            setActivePosF('noactive')
            setActivePosB('noactive')
            setActivePosL('noactive')
            setActivePosR('active')

        }
    }







    localStorage.getItem("image")
  


    return (
        <div style={{ overflow: 'hidden', height: '140vh' }}>
            <div className={styles.image}>
                <img src={Logo} alt="" />
            </div>

            <div className={styles.main}>
                <div className={styles.topNav}>
                    <div className={styles.left}>
                        <button className={styles.button1}>Point</button>
                        <button className={styles.button2}>Screening</button>
                    </div>
                    <div className={styles.right}>
                        <button className={styles.backButton}>
                            <MdArrowBackIosNew color='#185EB6' size="22px" />Back
                        </button>
                        <button className={styles.homeButton}><IoHome color="#185EB6" size="22px" /></button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardInner}>
                        <div className={styles.cardLeft}>
                            <h2>Suzaane Kaushik</h2>
                            <div className={styles.nameBelow}>
                                <p>ID : 10091990</p>
                                <span>26 yrs, female</span>
                            </div>
                        </div>
                        <div className={styles.cardMiddle}>
                            <div className={styles.cardMiddleButton}>
                                <p> posture planning </p>
                                {/* <div className={styles.cardMiddleButtonCircle}><IoIosArrowForward /></div> */}
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.position}>
                    <div className={styles.cardInnerbutton}>
                        <div onClick={() => handleClick(1)} className={activePosF == 'active' ? styles.positionAcitve : ""}><p >Front</p></div>
                        <div onClick={() => handleClick(2)} className={activePosB == 'active' ? styles.positionAcitve : ""}><p>Back</p></div>
                        <div onClick={() => handleClick(3)} className={activePosL == 'active' ? styles.positionAcitve : ""}><p>Left</p></div>
                        <div onClick={() => handleClick(4)} className={activePosR == 'active' ? styles.positionAcitve : ""}><p>Right</p></div>
                    </div>
                </div>

                {
                    activePosF === "active" && (
                        <FrontModel />

                    )
                }


                {
                    activePosB === "active" && (
                        <BackModel />

                    )
                }

                {
                    activePosL === "active" && (
                        <LeftModel />

                    )
                }

                {
                    activePosR === "active" && (
                        <RightModel />

                    )
                }



            </div>
        </div>
    )
}

export default EditModelMain