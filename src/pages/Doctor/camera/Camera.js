import React, { useContext } from 'react';
import styles from './Camera.module.css';
import Logo from '../../../assests/demoLogo.png'
import ShadoeLogo from '../../../assests/shadowLogo.png'
import CameraComponent from '../../../components/CameraComponent';
import GlobalStorage from '../../../Storage/ContextProvider';
import Front from './Front/Front';

const Camera = () => {
    const { saveImage, setSaveImage } = useContext(GlobalStorage);
  const {imgPath, setImgPath} = useContext(GlobalStorage);

    return (
        <>
        <Front />
        </>
    )
}

export default Camera