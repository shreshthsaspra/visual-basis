import React from 'react';
import styles from './CameraSave.module.css';
import Logo from '../../../../assests/demoLogo.png'
import ShadoeLogo from '../../../../assests/shadowLogo.png'
// import CameraComponent from '../../../components/CameraComponent';

const CameraSave = () => {
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
                            <div className={styles.cameraStyle}>
                            {/* <CameraComponent /> */}
                            <h4>Image is daving here </h4>

                        </div>
                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}

export default CameraSave;