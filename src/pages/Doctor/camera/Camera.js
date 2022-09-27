import React, { useContext } from 'react';
import styles from './Camera.module.css';
import Logo from '../../../assests/demoLogo.png'
import ShadoeLogo from '../../../assests/shadowLogo.png'
import CameraComponent from '../../../components/CameraComponent';
import GlobalStorage from '../../../Storage/ContextProvider';

const Camera = () => {
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
                            {
                                !saveImage && (
                                    <div className={styles.cameraStyle}>
                                        <CameraComponent />
                                    </div>
                                )
                            }

                            {
                                saveImage && (
                                    <div className={styles.cameraStyle}>
                                        <h4 className="text-center">
                                            Th8is is the Div
                                        </h4>
                                      <img src={imgPath} height="400px" alt="" />

                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default Camera