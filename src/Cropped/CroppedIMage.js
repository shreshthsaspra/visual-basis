import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'

import { getOrientation } from 'get-orientation/browser'
import { getCroppedImg, getRotatedImage } from './canvasUtils'
import styles from "./Crop.module.css"
import { useContext } from 'react'
import GlobalStorage from '../Storage/ContextProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const ORIENTATION_TO_ANGLE = {
    '3': 180,
    '6': 90,
    '8': -90,
}

export default function CroppedIMage() {
    const navigate = useNavigate()
    const [imageSrc, setImageSrc] = React.useState(null)
    const { uploadedImage, setUploadIMage, switchPoint, setSwitchPoint, point, setPoint } = useContext(GlobalStorage)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const { rotation, setRotation } = useContext(GlobalStorage)
    const { zoom, setZoom } = useContext(GlobalStorage)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [ShowUrl, SetShowIMg] = useState(null)

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            )
            console.log('donee', { croppedImage })
            const formData = new FormData();
            formData.append('file', croppedImage, "noName.png");
            axios({
                url: `http://18.237.160.150/api/patient/diagnosis/image/upload?id=52351173&tag=${switchPoint}`,
                method: 'POST',
                data: formData,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }).then((response) => {

                if (switchPoint == 'front') {
                    setPoint({ ...point, front: response.data.message.s3_url })
                }
                if (switchPoint == 'right') {
                    setPoint({ ...point, right: response.data.message.s3_url })
                }
                if (switchPoint == 'left') {
                    setPoint({ ...point, left: response.data.message.s3_url })
                }
                if (switchPoint == 'back') {
                    setPoint({ ...point, back: response.data.message.s3_url })
                }

                // navigate("/doctor/function");
                console.log(response);

            })
            SetShowIMg(URL.createObjectURL(croppedImage))
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [imageSrc, croppedAreaPixels, rotation])

    const onClose = useCallback(() => {
        setCroppedImage(null)
    }, [])

    const onFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            let imageDataUrl = await readFile(file)

            // apply rotation if needed
            const orientation = await getOrientation(file)
            const rotation = ORIENTATION_TO_ANGLE[orientation]
            if (rotation) {
                imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
            }

            setImageSrc(imageDataUrl)
            SetShowIMg(URL.createObjectURL(imageDataUrl))
        }
    }

    return (
        <div className={styles.crop}>
            <div >


            </div>
            {imageSrc ? (
                <>
                    <div className={styles.croppedImage}>
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            rotation={rotation}
                            zoom={zoom}
                            aspect={2 / 3}
                            onCropChange={setCrop}
                            onRotationChange={setRotation}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            // style={{
                            //     containerStyle: {
                            //         width: "100%",
                            //         height: "100%",
                            //         position: "relative",
                            //         background: "unset"

                            //     },

                            //     mediaStyle: {
                            //         width: "100%",
                            //         height: "610px",
                            //         // position:"relative",
                            //         objectFit: "contain"
                            //     }

                            // }}
                        />
                    </div>

                    <img src={ShowUrl} onClose={onClose} />
                </>
            ) : (
                <></>
            )}
            <div className={styles.buttonDiv}>
                {imageSrc ? <button
                    onClick={showCroppedImage}
                    variant="contained"
                    color="primary"

                >
                    Show Result
                </button> : <div className={styles.uploadImgDiv}> <input  type="file" onChange={onFileChange} accept="image/*" /> <p>Choose</p> </div>}
            </div>
        </div>
    )
}

function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}


