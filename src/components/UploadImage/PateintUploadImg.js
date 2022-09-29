import React, { useCallback, useEffect, useState } from 'react'
import ShadoeLogo from '../../assests/shadowLogo.png'
import Logo from '../../assests/demoLogo.png'
import Cropper from 'react-easy-crop'
import styles from './PateintUploadImg.module.css';
import { useContext } from 'react';
import GlobalStorage from '../../Storage/ContextProvider';
function PateintUploadImg() {
    const { uploadedImage, setUploadIMage } = useContext(GlobalStorage)
    const [url, setUrl] = useState()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [croppedArea, setCroppedArea] = useState(null)
    const [initialCroppedArea, setInitialCroppedArea] = useState(undefined)
    const [zoom, setZoom] = useState(1)
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

    async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
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
                const previewUrl = window.URL.createObjectURL(blob);
                console.log(blob);
                const anchor = document.createElement("a");
                anchor.download = "image.jpeg";
                anchor.href = URL.createObjectURL(blob);
                anchor.click();

                window.URL.revokeObjectURL(previewUrl);
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

                                        crop={crop}
                                        zoom={zoom}
                                        aspect={2/3}
                                        objectFit
                                        rotation={0}
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
                    <button onClick={()=>generateDownload(url, croppedArea)}>download</button>
                </div>


            </div>


        </>
    )
}

export default PateintUploadImg