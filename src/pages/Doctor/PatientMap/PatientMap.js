import React from 'react'
import styles from './PatientMap.module.css';
import Pimage from '../../../assests/imageTesting.jpeg'
import { useContext } from 'react';
import GlobalStorage from '../../../Storage/ContextProvider';
import { useState } from 'react';
import { useEffect } from 'react';

// const mapPoins = {
//     "status": "success",
//     "message": {
//         "keypoints": [
//             [
//                 163,
//                 76
//             ],
//             [
//                 168,
//                 68
//             ],
//             [
//                 172,
//                 68
//             ],
//             [
//                 176,
//                 68
//             ],
//             [
//                 159,
//                 68
//             ],
//             [
//                 156,
//                 68
//             ],
//             [
//                 154,
//                 68
//             ],
//             [
//                 179,
//                 71
//             ],
//             [
//                 151,
//                 70
//             ],
//             [
//                 169,
//                 85
//             ],
//             [
//                 159,
//                 85
//             ],
//             [
//                 211,
//                 128
//             ],
//             [
//                 124,
//                 126
//             ],
//             [
//                 221,
//                 197
//             ],
//             [
//                 107,
//                 191
//             ],
//             [
//                 220,
//                 254
//             ],
//             [
//                 107,
//                 251
//             ],
//             [
//                 220,
//                 274
//             ],
//             [
//                 107,
//                 270
//             ],
//             [
//                 216,
//                 272
//             ],
//             [
//                 111,
//                 270
//             ],
//             [
//                 214,
//                 264
//             ],
//             [
//                 114,
//                 263
//             ],
//             [
//                 188,
//                 262
//             ],
//             [
//                 139,
//                 262
//             ],
//             [
//                 189,
//                 360
//             ],
//             [
//                 140,
//                 359
//             ],
//             [
//                 187,
//                 451
//             ],
//             [
//                 142,
//                 455
//             ],
//             [
//                 183,
//                 463
//             ],
//             [
//                 146,
//                 466
//             ],
//             [
//                 192,
//                 482
//             ],
//             [
//                 137,
//                 483
//             ]
//         ]
//     }
// }

const PatientMap = () => {
    const { pointMap, point, setPointMap } = useContext(GlobalStorage)
    const [x, setX] = useState(false)
    const [ind, setIndex] = useState(163)
    const [Yvalu, setY] = useState(false)
    const [right, setRight] = useState(false)
    const [Down, setDown] = useState(false)
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
                    return { ...obj, 1: obj?.[1] +1 }
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
                <div className={styles.wrap}>
                    <div style={{ gap: "20px", display: "flex" }}>
                        <button onClick={() => setY(!Yvalu)}>up</button>
                        <button onClick={() => setX(!x)}>left</button>
                        <button onClick={() => setDown(!Down)}>down</button>
                        <button onClick={() => setRight(!right)}>right</button>
                    </div>

                    <img src={point.front} alt="" />
                    {
                        pointMap.front?.map((p, i) => (
                            <div
                                draggable
                                key={i}
                                style={{
                                    top: `${p[1]}px`,
                                    left: `${p[0]}px`,
                                    cursor: 'pointer',
                                }}
                                className={styles.point}
                                onClick={() => handleClick(i)}
                            >

                            </div>
                        ))

                    }

                </div>

                <button onClick={() => handleClick()}>Add Point</button>


            </div>
        </>
    )
}

export default PatientMap;