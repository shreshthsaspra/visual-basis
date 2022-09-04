import React from 'react';
import styles from './HospitalLogin.module.css';
import Logo from '../../assests/demoLogo.png';
import UserName from '../../assests/USER.png';
import Password from '../../assests/password.png'
import LoginUi from '../../components/LoginComponent/LoginUi';

const HospitalLogin = () => {
    return (
        <>
            <div className={styles.loginSection}>
                <div className={styles.logoSection}>
                    <img src={Logo} alt="Dummy Logo" />
                    <p>FORTIS HOSPITAL</p>
                </div>
                <LoginUi />
            </div>
        </>
    )
}

export default HospitalLogin