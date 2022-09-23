import React, { useContext } from 'react'
import styles from './LoginUi.module.css';
import UserName from '../../assests/USER.png';
import Password from '../../assests/password.png'
import GlobalStorage from '../../Storage/ContextProvider';


const LoginUi = ({
    userValue,
    handleUser,
    passValue,
    handlePassword,
}) => {
    let {loginUser} = useContext(GlobalStorage)
    return (
        <div className={styles.loginOuter}>
            <div className={styles.loginCard}>
                <form onSubmit={loginUser} className={styles.loginForm}>
                    <div className={styles.wrap}>
                        <img className={styles.inputIcon} src={UserName} alt="User Icon" />
                        <input value={userValue} onChange={handleUser} type="text" placeholder='Username' />
                    </div>

                    <div className={styles.wrap}>
                        <img className={styles.inputIcon} src={Password} alt="Password Icon" />
                        <input value={passValue} onChange={handlePassword} type="text" placeholder='Password' />
                    </div>
                    <button className={styles.button}>LOGIN</button>
                    <div className={styles.bottom}>
                        <p>Create Account</p>
                        <p>Need Help?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginUi