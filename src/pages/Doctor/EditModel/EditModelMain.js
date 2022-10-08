import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { AiTwotoneSave } from 'react-icons/ai';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { IoHome } from 'react-icons/io5'
import { MdArrowBackIosNew } from 'react-icons/md'
import Logo from '../../../assests/demoLogo.png';
import styles from "./EditModelMain.module.css"
import GlobalStorage from '../../../Storage/ContextProvider'
import { Link, useNavigate } from 'react-router-dom';
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
    // const navigate = useNavigate()
    const Navigate = useNavigate()

    const { pointMap, point, setPointMap, pointMapMv } = useContext(GlobalStorage)
   
    const [scaleXY, setScaleXY] = useState(1);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    const scaleCoordinates = (x, y) => {

        const centerX = width / 2;
        const centerY = 0;
        const relX = x - centerX;
        const relY = y - centerY;
        const scaledX = relX * scaleXY;
        const scaledY = relY * scaleXY;
        return { x: scaledX + centerX, y: scaledY + centerY };
        //return { x: scaledX, y: scaledY };

    }

    useEffect(() => {
        var img = document.getElementById('patientId');
        var width1 = img.clientWidth;
        var height1 = img.clientHeight;
        setWidth(width1);
        setHeight(height1);
        setScaleXY(400 / height1);
        //alert('just ran')
    }, []);

  
localStorage.getItem("image")
useEffect(()=>{
    // console.log(local);
})
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

                 <div className={`${styles.modelbutton} ${styles.modelbutton1}`}>
                        <button className={styles.button1}>Model1</button>
                        <button onClick={() => Navigate("/editmodel/single")} className={styles.button2}>Edit Model</button>
                    </div>

                    <div className={`${styles.modelbutton} ${styles.modelbutton2}`}>
                        <button className={styles.button1}>Model2</button>
                        <button className={styles.button2}>Edit Model</button>
                    </div>

                {/* <div style={{ position: 'relative' }}>
                    
                </div> */}
                <div className={styles.editPoint}>
               
                    <div>
                        <div className={`${styles.bodyCard} me-4`}>
                            <div className={styles.df}>
                                <div className={styles.wrap}>
                                    <img src={point.front} alt="" id="patientId" style={{ transform: `scale(${scaleXY})` }} />
                                    {
                                        pointMap.front?.map((p, i) => (
                                            <div
                                                draggable
                                                key={i}
                                                style={{
                                                    top: `${scaleCoordinates(p[0], p[1]).y}px`,
                                                    left: `${scaleCoordinates(p[0], p[1]).x}px`,
                                                    cursor: 'pointer',
                                                }}
                                                className={styles.point}
                                                onClick={() => handleClick(i)}
                                            >

                                            </div>
                                        ))

                                    }

                                </div>
                                {/* <img src={point.front} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${styles.bodyCard} me-4`}>
                            <div className={styles.df}>
                                <div className={styles.wrap}>
                                    <img src={point.front} alt="" id="patientId" style={{ transform: `scale(${scaleXY})` }} />
                                    {
                                        pointMapMv.front?.map((p, i) => (
                                            <div
                                                draggable
                                                key={i}
                                                style={{
                                                    top: `${scaleCoordinates(p[0], p[1]).y}px`,
                                                    left: `${scaleCoordinates(p[0], p[1]).x}px`,
                                                    cursor: 'pointer',
                                                }}
                                                className={styles.point}
                                                onClick={() => handleClick(i)}
                                            >

                                            </div>
                                        ))

                                    }

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default EditModelMain