import React from 'react'
import styles from './PatientMap.module.css';
import Pimage from '../../../assests/imageTesting.jpeg'
import { useContext } from 'react';
import GlobalStorage from '../../../Storage/ContextProvider';
import { useState } from 'react';
import { useEffect } from 'react';

const PatientMap = () => {
    const { pointMap, point, setPointMap } = useContext(GlobalStorage)
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
    // console.log("9090", pointMap)
    const handleClick = (index) => {

        setIndex(index)
    };
    // const handDragStart = (id) => {
    //     console.log(id);
    //     setX(id.clientX)
    //     setX(id.clientY)
    // }
    // console.log("Start", x, Y);
    // const handleDragEnd = (End)=>{
    //     console.log("end", End);
    // }
    // useEffect(()=>{
    //     
    // },[Yvalu])


    useEffect(() => {
        var img = document.getElementById('patientId');
        var width1 = img.clientWidth;
        var height1 = img.clientHeight;
        setWidth(width1);
        setHeight(height1);
        setScaleXY(300 / height1);
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

    // let new[0] +=20

    // copyMap?.front?.[index]?.[0] = copyMap?.front?.[index]?.[0]+20
    // copyMap?.front?.[index]?.[1] = copyMap?.front?.[index]?.[1]+5


    return (
        <>
            <div className={styles.mainDiv}>
                <div style={{ gap: "20px", display: "flex" }}>
                    <button onClick={() => setY(!Yvalu)}>up</button>
                    <button onClick={() => setX(!x)}>left</button>
                    <button onClick={() => setDown(!Down)}>down</button>
                    <button onClick={() => setRight(!right)}>right</button>
                </div>
                {/* <div style={{display:'flex', justifyContent:'center', border:'1px solid red', width:'100%'}}> */}
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

                    {/* <div className={styles.wrap}>


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

                    </div> */}
                {/* </div> */}

                <button onClick={() => handleClick()}>Add Point</button>
                <button style={{ position: 'absolute', zIndex: 100, top: '50px' }} onClick={() => handleScaleUp()}>Scale Up</button>
                <button style={{ position: 'absolute', zIndex: 100, top: '10px' }} onClick={() => handleScaleDown()}>Scale Down</button>


            </div>
        </>
    )
}

export default PatientMap;