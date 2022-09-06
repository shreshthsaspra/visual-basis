import React from 'react';
import styles from './HospitalLogin.module.css';
import Logo from '../../assests/demoLogo.png';
import UserName from '../../assests/USER.png';
import Password from '../../assests/password.png'

const HospitalLogin = () => {
    return (
        <>
            <div className={styles.loginSection}>
                <div className={styles.logoSection}>
                    <img src={Logo} alt="Dummy Logo" />
                    <p>FORTIS HOSPITAL</p>
                </div>
                <div className={styles.loginOuter}>
                    <div className={styles.loginCard}>
                        <form className={styles.loginForm}>
                            <div className={styles.wrap}>
                                <img className={styles.inputIcon} src={UserName} alt="User Icon" />
                                <input type="text" placeholder='Username' />
                            </div>

                            <div className={styles.wrap}>
                                <img className={styles.inputIcon} src={Password} alt="Password Icon" />
                                <input type="text" placeholder='Password' />
                            </div>
                            <button className={styles.button}>LOGIN</button>
                            <div className={styles.bottom}>
                                <p>Create Account</p>
                                <p>Need Help?</p>
                            </div>
                        </form>
                    </div>
                </div>
                <iframe id="myWidget"
            src="https://human.biodigital.com/viewer?id=production/maleAdult/male_system_anatomy_skeletal_09&ui-info=false&ui-menu=false&dk=f2c6ec4e8b1f103853561522cb73a56c2a15a359"
            width="100%"
            height="100%">
    </iframe>
            </div>
        </>
    )
}

export default HospitalLogin