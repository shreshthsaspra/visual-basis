import React, { useCallback, useEffect, useState } from 'react'
import ShadoeLogo from '../../assests/shadowLogo.png'
import Logo from '../../assests/demoLogo.png'
import Cropper from 'react-easy-crop'
import styles from './PateintUploadImg.module.css';
import { useContext } from 'react';
import GlobalStorage from '../../Storage/ContextProvider';
function PateintUploadImg() {
    const {uploadedImage, setUploadIMage} = useContext(GlobalStorage)
    const[url, setUrl] = useState()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [initialCroppedArea, setInitialCroppedArea] = useState(undefined)
    const [zoom, setZoom] = useState(1)

    useEffect(() => {
        const croppedArea = JSON.parse(window.localStorage.getItem('croppedArea'))
        setInitialCroppedArea(croppedArea)
        console.log(URL.createObjectURL(uploadedImage))
        setUrl(URL.createObjectURL(uploadedImage))
    }, [])

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        // console.log(croppedArea, croppedAreaPixels)
        window.localStorage.setItem('croppedArea', JSON.stringify(croppedArea))
    }, [])
    return (
        <>

            {/* <CameraComponent /> */}
            <div className={styles.logoSection}>
                <img src={Logo} alt="" />
            </div>
            <div className={styles.cameraMain}>
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

                               <div className={styles.cropContainer}>
                               <Cropper
                                    image={url}
                                    // image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
                                    crop={crop}
                                    zoom={zoom}
                                    // aspect={2 / 3} 
                                    objectFit
                                    rotation={0}
                                    style= {{
                                        containerStyle:{
                                            width:"100%",
                                            height:"100%",
                                            position:"relative",
                                            background:"unset"
                                            
                                        },

                                        mediaStyle:{
                                            width:"100%",
                                            height:"610px",
                                            // position:"relative",
                                            objectFit:"contain"
                                        },
                                        cropAreaStyle:{
                                            width:"100%",
                                            height:"100%"
                                        }
                                    }}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                    initialCroppedAreaPercentages={initialCroppedArea}
                                />
                               </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default PateintUploadImg