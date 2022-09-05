import React from 'react';
import styles from './HospitalLogin.module.css';
import Logo from '../../assests/demoLogo.png';
import UserName from '../../assests/USER.png';
import Password from '../../assests/password.png'
import LoginUi from '../../components/LoginComponent/LoginUi';
import { motion } from 'framer-motion';

const HospitalLogin = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
        >
            <div className={styles.loginSection}>
                <div className={styles.logoSection}>
                    <img src={Logo} alt="Dummy Logo" />
                    <p>FORTIS HOSPITAL</p>
                </div>
                <LoginUi />
            </div>
        </motion.div>
    )
}

export default HospitalLogin