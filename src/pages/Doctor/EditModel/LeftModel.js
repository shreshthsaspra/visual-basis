import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./EditModelMain.module.css";
import GlobalStorage from '../../../Storage/ContextProvider'

const LeftModel = () => {
        // const navigate = useNavigate()
        const [scaleXY, setScaleXY] = useState(1);
        const [width, setWidth] = useState(null);
        const [height, setHeight] = useState(null);

        const Navigate = useNavigate()

        const { pointMap, point, setPointMap, pointMapMv, setModel, model} = useContext(GlobalStorage);

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

        const handleModel1 = () => {
            setModel("mp");
            Navigate("/editmodel/single")
        }
        
        const handleModel2 = () => {
            setModel("mv");
            Navigate("/editmodel/single")
        }
  return (
    <>
     <div className={`${styles.modelbutton} ${styles.modelbutton1}`}>
                        <button className={styles.button1}>Model1</button>
                        <button onClick={handleModel1} className={styles.button2}>Edit Model</button>
                    </div>

                    <div className={`${styles.modelbutton} ${styles.modelbutton2}`}>
                        <button className={styles.button1}>Model2</button>
                        <button onClick={handleModel2} className={styles.button2}>Edit Model</button>
                    </div>

                {/* <div style={{ position: 'relative' }}>
                    
                </div> */}
                <div className={styles.editPoint}>
               
                    <div>
                        <div className={`${styles.bodyCard} me-4`}>
                            <div className={styles.df}>
                                <div className={styles.wrap}>
                                    <img src={point?.left} alt="" id="patientId" style={{ transform: `scale(${scaleXY})` }} />
                                    {
                                        pointMap?.left?.map((p, i) => (
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
                                {/* <img src={point.front} alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${styles.bodyCard} me-4`}>
                            <div className={styles.df}>
                                <div className={styles.wrap}>
                                    <img src={point?.left} alt="" id="patientId" style={{ transform: `scale(${scaleXY})` }} />
                                    {
                                        pointMapMv?.left?.map((p, i) => (
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
                    </div>


                </div>
    </>
  )
}

export default LeftModel