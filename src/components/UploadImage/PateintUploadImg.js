import React, { useCallback, useEffect, useState } from 'react'
import ShadoeLogo from '../../assests/shadowLogo.png'
import Logo from '../../assests/demoLogo.png'
import styles from './PateintUploadImg.module.css';
import { useContext } from 'react';
import GlobalStorage from '../../Storage/ContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { BiZoomIn, BiZoomOut } from 'react-icons/bi';
import CroppedIMage from '../../Cropped/CroppedIMage';
function PateintUploadI() {
    const navigate = useNavigate()
    const { uploadedImage, setUploadIMage, switchPoint, setSwitchPoint,point, setPoint } = useContext(GlobalStorage)
    const [url, setUrl] = useState()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [croppedArea, setCroppedArea] = useState(null)
    const [initialCroppedArea, setInitialCroppedArea] = useState(undefined)
    const {rotation, setRotation}= useContext(GlobalStorage)
    const {zoom, setZoom} = useContext(GlobalStorage)

    return (
        <>

            {/* <CameraComponent /> */}
            <div className={styles.logoSection}>
                <img src={Logo} alt="" />
            </div>
            <div className={styles.cameraMain}>
                <div className={styles.rotateButton}>
                    <button className={styles.rotateRight} onClick={()=>setRotation(rotation+90)}>
                        <FiRotateCcw size="20px" />
                    </button>
                    <button className={styles.rotateLeft} onClick={()=>setRotation(rotation-90)}>
                        <FiRotateCw size="20px" />
                    </button>
                </div>
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
                            <h3>{switchPoint}</h3>

                            <div className={styles.cameraStyle}>

                                <div className={styles.cropContainer}>
                                   <CroppedIMage/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={styles.uploadImg}>
                        {/* <button className={styles.upload} onClick={() => generateDownload(url, croppedArea)}>Upload</button> */}
                    </div>
                </div>
                <div className={styles.ZoomButton}>
                    <button className={styles.zoomIn} onClick={()=>setZoom(zoom + 0.2)}>
                        <BiZoomIn size="26px" />
                    </button>

                    <button className={styles.zoomIn} onClick={()=> setZoom(zoom - 0.2)}>
                        <BiZoomOut color="#185EB6" size="26px" />
                    </button>
                </div>


            </div>


        </>
    )
}

export default PateintUploadI