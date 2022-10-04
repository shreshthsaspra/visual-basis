import React, { useState, useEffect } from 'react';
import styles from './HospitalLogin.module.css';
import Logo from '../../assests/demoLogo.png';
import LoginUi from '../../components/LoginComponent/LoginUi';
import axios from 'axios';
import cookie from 'js-cookie';
import { authenticate, getCookie, isAuth, signout } from '../../Storage/auth';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import GlobalStorage from '../../Storage/ContextProvider';


const HospitalLogin = () => {
const {tokens, setTokens} = useContext(GlobalStorage)

    const [username, setUserName] = useState("hospital2@gmail.com")
    const [password, setPassword] = useState("SkM70BhaFXs")
    const [loading, setLoading] = useState(true)
    // let [authTokens, setAuthTokens] = useState(()=>)
    const token = getCookie('token');
    const navigation = useNavigate();

    // useEffect(() => {
    //     isAuth() && navigation("/Hospital");
    // }, [])
    // console.log("refreshh token", localStorage.getItem('refresh_token'));
    // useEffect(() => {
    //     let refreshTime = 1000
    //     const interval = setInterval(() => {
    //         updateToken()
    //     }, refreshTime)
    //     return () => clearInterval(refreshTime)

    // }, [localStorage.getItem('refresh_token'), loading])


    const handleSubmit = async (e) => {
        e.preventDefault();
        let loginData = new FormData()
        loginData.append('username', username)
        loginData.append('password', password)

        console.log("Login DATA", [...loginData])
        try {

            let res = await axios.post(`http://18.237.160.150/api/auth/token/`, loginData, {

            })
                setTokens(res.data)
            // authenticate(res, () => {
            // setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
            // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
            // isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('refresh_token', res.data.refresh_token)

               
            

            navigation("/Hospital")
            window.location.reload()
           
            // });









        } catch (err) {
            console.log("ERRRRR", err.response?.data?.error);

        }

    };




    return (
        <div

        >
            <div className={styles.loginSection}>
                <div className={styles.logoSection}>
                    <img src={Logo} alt="Dummy Logo" />
                    <p>FORTIS HOSPITAL</p>
                </div>
                <LoginUi
                    userValue={username}
                    passValue={password}
                    handleUser={(e) => setUserName(e.target.value)}
                    handlePassword={(e) => setPassword(e.target.value)}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default HospitalLogin