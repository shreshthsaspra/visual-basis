import React, { useContext } from 'react';
import styles from './Left.module.css';
import Logo from '../../../../assests/demoLogo.png'
import ShadoeLogo from '../../../../assests/shadowLogo.png'
import CameraComponent from '../../../../components/CameraComponent';
import GlobalStorage from '../../../../Storage/ContextProvider';
import LeftCameraComponent from '../../../../components/Camera/LeftCameraComponent';

const Left = () => {
    const { saveImage, setSaveImage } = useContext(GlobalStorage);
  const {imgPath, setImgPath} = useContext(GlobalStorage);

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
                            <h3>Left</h3>
                            
                                    <div className={styles.cameraStyle}>
                                        <LeftCameraComponent />
                                    </div>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default Left