import React, { useCallback, useEffect, useState } from 'react'
import ShadoeLogo from '../../assests/shadowLogo.png'
import Logo from '../../assests/demoLogo.png'
import Cropper from 'react-easy-crop'
import styles from './PateintUploadImg.module.css';
import { useContext } from 'react';
import GlobalStorage from '../../Storage/ContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { BiZoomIn, BiZoomOut } from 'react-icons/bi';
function PateintUploadI() {
    const navigate = useNavigate()
    const { uploadedImage, setUploadIMage, switchPoint, setSwitchPoint, point, setPoint } = useContext(GlobalStorage)
    const [url, setUrl] = useState()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [croppedArea, setCroppedArea] = useState(null)
    const [initialCroppedArea, setInitialCroppedArea] = useState(undefined)
    const [anti, setAnti] = useState(0);
    const [zoom, setZoom] = useState(1)



    const handleAntiClkwise = () => {
        setAnti(anti - 90)
    }
    const handleClkwise = () => {

        setAnti(anti + 90)
    }

    const handleZoomIn = () => {
        // setCrop(scaleId+0.4)
        setZoom(zoom + 0.2)
    }

    const handleZoomOut = () => {
        // setCrop(scaleId+0.4)
        setZoom(zoom - 0.2)
    }
    function getRadianAngle(degreeValue) {
        return (degreeValue * Math.PI) / 180;
    }
    useEffect(() => {
        const croppedArea = JSON.parse(window.localStorage.getItem('croppedArea'))
        setInitialCroppedArea(croppedArea)
        console.log(URL.createObjectURL(uploadedImage))
        setUrl(URL.createObjectURL(uploadedImage))
    }, [])
    const createImage = (url) =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener("load", () => resolve(image));
            image.addEventListener("error", (error) => reject(error));
            image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
            image.src = url;
        });

    async function getCroppedImg(imageSrc, pixelCrop, rotation = anti) {
        const image = await createImage(imageSrc);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const maxSize = Math.max(image.width, image.height);
        const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

        // set each dimensions to double largest dimension to allow for a safe area for the
        // image to rotate in without being clipped by canvas context
        canvas.width = safeArea;
        canvas.height = safeArea;

        // translate canvas context to a central location on image to allow rotating around the center.
        ctx.translate(safeArea / 2, safeArea / 2);
        ctx.rotate(getRadianAngle(rotation));
        ctx.translate(-safeArea / 2, -safeArea / 2);

        // draw rotated image and store data.
        ctx.drawImage(
            image,
            safeArea / 2 - image.width * 0.5,
            safeArea / 2 - image.height * 0.5
        );

        const data = ctx.getImageData(0, 0, safeArea, safeArea);

        // set canvas width to final desired crop size - this will clear existing context
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;

        // paste generated rotate image with correct offsets for x,y crop values.
        ctx.putImageData(
            data,
            0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
            0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
        );

        // As Base64 string
        // return canvas.toDataURL("image/jpeg");
        return canvas;
    }
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };
    const generateDownload = async (imageSrc, crop) => {
        if (!crop || !imageSrc) {
            return;
        }

        const canvas = await getCroppedImg(imageSrc, crop);

        canvas.toBlob(
            (blob) => {
                // const previewUrl = window.URL.createObjectURL(blob);
                // console.log(blob);
                // const anchor = document.createElement("a");
                // anchor.download = "image.jpeg";
                // anchor.href = URL.createObjectURL(blob);
                // anchor.click();

                // window.URL.revokeObjectURL(previewUrl);
                const formData = new FormData();
                formData.append('file', blob, "noName.png");

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

                    navigate("/doctor/function");
                    console.log(response);

                })
            },
            "image/jpeg",
            0.66
        );
    };
    return (
        <>

            {/* <CameraComponent /> */}
            <div className={styles.logoSection}>
                <img src={Logo} alt="" />
            </div>
            <div className={styles.cameraMain}>
                <div className={styles.rotateButton}>
                    <button className={styles.rotateRight} onClick={handleAntiClkwise}>
                        <FiRotateCcw size="20px" />
                    </button>
                    <button className={styles.rotateLeft} onClick={handleClkwise}>
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
                                    <Cropper
                                        image={url}

                                        crop={crop}
                                        zoom={zoom}
                                        aspect={3 / 4}
                                        objectFit
                                        rotation={anti}
                                        onCropComplete={onCropComplete}
                                        style={{
                                            containerStyle: {
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",
                                                background: "unset"

                                            },

                                            mediaStyle: {
                                                width: "100%",
                                                height: "610px",
                                                // position:"relative",
                                                objectFit: "contain"
                                            }

                                        }}
                                        onCropChange={setCrop}
                                        onZoomChange={setZoom}
                                        initialCroppedAreaPercentages={initialCroppedArea}
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={styles.uploadImg}>
                        <button className={styles.upload} onClick={() => generateDownload(url, croppedArea)}>Upload</button>
                    </div>
                </div>
                <div className={styles.ZoomButton}>
                    <button className={styles.zoomIn} onClick={handleZoomIn}>
                        <BiZoomIn size="26px" />
                    </button>

                    <button className={styles.zoomIn} onClick={handleZoomOut}>
                        <BiZoomOut color="#185EB6" size="26px" />
                    </button>
                </div>

            </div>


        </>
    )
}

export default PateintUploadI