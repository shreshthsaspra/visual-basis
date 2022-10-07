import React, { useContext, useState, useEffect } from 'react';
import styles from './EditSingle.module.css';
import Logo from '../../../assests/demoLogo.png'
import ShadoeLogo from '../../../assests/shadowLogo.png'

import GlobalStorage from '../../../Storage/ContextProvider';


const EditSingle = () => {

    const { pointMap, point, setPointMap } = useContext(GlobalStorage);

    const [x, setX] = useState(false)
    const [ind, setIndex] = useState(163)
    const [Yvalu, setY] = useState(false)
    const [right, setRight] = useState(false)
    const [Down, setDown] = useState(false)
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

    const handleScaleUp = () => {
        setScaleXY((prev) => prev + 0.1);
    }

    const handleScaleDown = () => {
        setScaleXY((prev) => prev - 0.1);
    }

    // console.log("POINT MAP", pointMap);
    const deleteMap = (i) => {
        // console.log("clicked", i);
        let copyMap = [...pointMap.front];

        copyMap.splice(i, 1);
        setPointMap({ ...pointMap, front: copyMap })
    }



    useEffect(() => {
        var img = document.getElementById('patientId');
        var width1 = img.clientWidth;
        var height1 = img.clientHeight;
        setWidth(width1);
        setHeight(height1);
        setScaleXY(450 / height1);
        //alert('just ran')
    }, []);

    useEffect(() => {
        const updatePoint = () => {
            const value = pointMap.front?.map((obj, i) => {
                if (i == ind) {
                    return { ...obj, 0: obj?.[0] - 1 }
                }
                return obj
            })
            console.log(x);
            setPointMap({ ...pointMap.front, front: value })
        }
        updatePoint()
    }, [x])
    useEffect(() => {
        const updatePoint = () => {
            const value = pointMap.front?.map((obj, i) => {
                if (i == ind) {
                    return { ...obj, 0: obj?.[0] + 1 }
                }
                return obj
            })
            console.log(x);
            setPointMap({ ...pointMap.front, front: value })
        }
        updatePoint()
    }, [right])
    useEffect(() => {
        const updatePoint = () => {
            const value = pointMap.front?.map((obj, i) => {
                if (i == ind) {
                    return { ...obj, 1: obj?.[1] - 1 }
                }
                return obj
            })
            console.log(x);
            setPointMap({ ...pointMap.front, front: value })
        }
        updatePoint()
    }, [Yvalu])
    useEffect(() => {
        const updatePoint = () => {
            const value = pointMap.front?.map((obj, i) => {
                if (i == ind) {
                    return { ...obj, 1: obj?.[1] + 1 }
                }
                return obj
            })
            console.log(x);
            setPointMap({ ...pointMap.front, front: value })
        }
        updatePoint()
    }, [Down])


    return (
        <>

            {/* <CameraComponent /> */}
            <div className={styles.logoSection}>
                <img src={Logo} alt="" />
            </div>
            <div style={{overflow: 'hidden'}} className={styles.cameraMain}>
                <div className={styles.width}>
                    <div className={styles.nav}>
                        <div className={styles.navButton}>
                            <img src={ShadoeLogo} alt="" />
                            <p>Camera Screen</p>
                        </div>
                    </div>


                    <div className={styles.mainBody}>
                        <div className={styles.inner}>
                            {/* <CameraComponent /> */}
                            <h3>Front</h3>

                            <div className={styles.cameraStyle}>
                                <div style={{
                                   
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow:'hidden'
                                }} className="mt-4">
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
                                                // onClick={() => handleClick(i)}
                                                >

                                                </div>
                                            ))

                                        }

                                    </div>
                                </div>

                            </div>

                            <div className={styles.bottomButton}>
                            <button>Add Points</button>
                            <button>Edit Points</button>

                            <button>Delete Points</button>


                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default EditSingle;