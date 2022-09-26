import React from 'react';
import styles from './Camera.module.css';
import Logo from '../../../assests/demoLogo.png'
import ShadoeLogo from '../../../assests/shadowLogo.png'

const Camera = () => {
    return (
        <>
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
                            <h3>Front</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Camera