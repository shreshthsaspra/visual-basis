import React, { useContext } from 'react';
import styles from './Camera.module.css';
import Logo from '../../../assests/demoLogo.png'
import ShadoeLogo from '../../../assests/shadowLogo.png'
import CameraComponent from '../../../components/CameraComponent';
import GlobalStorage from '../../../Storage/ContextProvider';
import Front from './Front/Front';
import Left from './Left/Left';
import Back from './Back/Back';
import Right from './Right/Right';

const Camera = () => {
    const { saveImage, setSaveImage, switchPoint } = useContext(GlobalStorage);
    const { imgPath, setImgPath, step } = useContext(GlobalStorage);

    return (
        <>
            {
                switchPoint === "front" && (
                    <Front />
                )
            }
            {
                switchPoint === "left" && (
                    <Left />

                )
            }

            {
                switchPoint === "back" && (
                    <Back />

                )
            }

            {
                switchPoint === "right" && (
                    <Right />

                )
            }

            {
                step === 4 && (
                    <>
                        <h2>Thanks For Uploading the Images</h2>
                        <br />
                        <h4>Your Images are uploaded Successfully</h4>
                    </>

                )
            }
        </>
    )
}

export default Camera