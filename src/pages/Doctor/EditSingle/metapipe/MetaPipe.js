import React, { useContext, useState, useEffect } from 'react';
import styles from './MetaPipe.module.css';
import Logo from '../../../../assests/demoLogo.png'
import ShadoeLogo from '../../../../assests/shadowLogo.png'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

import GlobalStorage from '../../../../Storage/ContextProvider';
import { transform } from 'framer-motion';


const MetaPipe = () => {

    const { pointMap, point, setPointMap } = useContext(GlobalStorage);

    const [x, setX] = useState(false)
    const [ind, setIndex] = useState("")
    const [Yvalu, setY] = useState(false)
    const [right, setRight] = useState(false)
    const [Down, setDown] = useState(false)
    const [scaleXY, setScaleXY] = useState(1);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [enableAdd, setEnableAdd] = useState(false);
    const [enableEdit, setEnableEdit] = useState(false);
    const [enableDelete, setEnableDelete] = useState(false);

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

    const handlePoint = (i) => {
        if (enableDelete) {
            deleteMap(i)
            console.log(enableAdd);
        }
        if (enableAdd) {

        }
        if (enableEdit) {
            setIndex(i)
        }

    }

    console.log("indexxxx", ind);
    const handlePosition = (action) => {
        console.log("action", action);
        if (action === 'xl') {
            const value = pointMap.front?.map((obj, i) => {
                if (i === ind) {
                    return { ...obj, 0: obj?.[0] - 1 }
                }
                return obj
            })
            console.log(x);
            setPointMap({ ...pointMap.front, front: value })
        }
        if (action === 'xr') {
            const value = pointMap.front?.map((obj, i) => {
                if (i === ind) {
                    return { ...obj, 0: obj?.[0] + 1 }
                }
                return obj
            })
            console.log(x);
            setPointMap({ ...pointMap.front, front: value })


        }
        if (action === 'yu') {
            const value = pointMap.front?.map((obj, i) => {
                if (i === ind) {
                    return { ...obj, 1: obj?.[1] - 1 }
                }
                return obj
            })
            console.log(x);
            setPointMap({ ...pointMap.front, front: value })
        }
        if (action === 'yd') {
            const value = pointMap.front?.map((obj, i) => {
                if (i === ind) {
                    return { ...obj, 1: obj?.[1] + 1 }
                }
                return obj
            })
            console.log(x);
            setPointMap({ ...pointMap.front, front: value })
        }
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
    const handleAdd = () => {

        setEnableDelete(false)
        setEnableEdit(false)
        setEnableAdd(true);
        setIndex("")
    };
    const handleDelete = () => {
        setEnableDelete(true)
        setEnableEdit(false)
        setEnableAdd(false);
        setIndex("")

    }
    const handleEdit = () => {
        setEnableAdd(false);
        setEnableDelete(false)
        setEnableEdit(true)
    }

    const addPoint = (e) => {
        // offsetX
        // :
        // 65
        // offsetY
        // :
        // 51
        console.log(e);
        const x = e.nativeEvent.offsetX 
        const y = e.nativeEvent.offsetY
        const elem = [x, y]
        console.log(elem);
        console.log(pointMap);
        // spush(elem)
        const copyEle = [...pointMap.front]
        copyEle.push(elem)
        console.log(copyEle);
        setPointMap({ ...pointMap.front, front: copyEle })

    }

    return (
        <>

            {/* <CameraComponent /> */}

            <div style={{ overflow: 'hidden' }} className={styles.cameraMain}>
                <div className={styles.width}>
                    <div className={styles.nav}>
                        <div className={styles.navButton}>
                            <img src={ShadoeLogo} alt="" />
                            <p>Camera Screen MP</p>
                        </div>
                    </div>


                    <div className={styles.mainBody}>
                        <div className={styles.controlEdit}>
                            <div className={styles.controlEditInner}>
                                <button
                                    onClick={() => { enableEdit && handlePosition('xl') }}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        background: '#185EB6',
                                        width: '40px',
                                        height: '35px',
                                        borderRadius: '5px',
                                        color: '#FFFFFF',
                                        fontFamily: 'poppins-medium',
                                        position: "absolute",
                                        left: "0",


                                    }}
                                    className={styles.leftScale}
                                >
                                    <BsArrowRightCircleFill />
                                </button>
                                <button
                                    onClick={() => { enableEdit && handlePosition('xr') }}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        background: '#185EB6',
                                        width: '40px',
                                        height: '35px',
                                        borderRadius: '5px',
                                        color: '#FFFFFF',
                                        fontFamily: 'poppins-medium',
                                        position: "absolute",
                                        right: "-42px",
                                    }}>
                                    <BsArrowRightCircleFill />
                                </button>
                                <button
                                    className={styles.topScale}
                                    onClick={() => { enableEdit && handlePosition('yu') }}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        background: '#185EB6',
                                        width: '40px',
                                        height: '35px',
                                        borderRadius: '5px',
                                        color: '#FFFFFF',
                                        fontFamily: 'poppins-medium',
                                        position: "absolute",
                                        left: "41px",
                                        top: "-43px"
                                    }}>
                                    <BsArrowLeftCircleFill />
                                </button>
                                <button
                                    onClick={() => { enableEdit && handlePosition('yd') }}
                                    className={styles.bottomScale}
                                    style={{
                                        border: 'none',
                                        outline: 'none',
                                        background: '#185EB6',
                                        width: '40px',
                                        height: '35px',
                                        borderRadius: '5px',
                                        color: '#FFFFFF',
                                        fontFamily: 'poppins-medium',
                                        position: "absolute",
                                        bottom: "-2px",
                                        left: "42px"
                                    }}>
                                    <BsArrowLeftCircleFill />
                                </button>


                            </div>
                        </div>
                        <div className={styles.inner}>
                            {/* <CameraComponent /> */}
                            <h3>Front</h3>

                            <div className={styles.cameraStyle}>
                                <div style={{

                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: 'hidden'
                                }} className="mt-4">
                                    <div className={styles.wrap}>
                                        <img onClick={(e) => addPoint(e)} src={point.front} alt="" id="patientId" style={{ transform: `scale(${scaleXY})` }} />
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
                                                onClick={(e) => handlePoint(e)}
                                                >

                                                </div>
                                            ))

                                        }

                                    </div>
                                </div>

                            </div>

                            <div className={styles.bottomButton}>
                                <button onClick={() => handleAdd()}>Add Points</button>
                                <button onClick={() => handleEdit()}>Edit Points</button>
                                <button onClick={() => handleDelete()}>Delete Points</button>


                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default MetaPipe;