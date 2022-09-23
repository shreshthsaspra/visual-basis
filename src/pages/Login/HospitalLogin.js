import React, { useState, useEffect } from 'react';
import styles from './HospitalLogin.module.css';
import Logo from '../../assests/demoLogo.png';
import LoginUi from '../../components/LoginComponent/LoginUi';
import axios from 'axios';
import cookie from 'js-cookie';
import { authenticate, getCookie, isAuth, signout } from '../../Storage/auth';
import { useNavigate } from 'react-router-dom'


const HospitalLogin = () => {
    const [username, setUserName] = useState("hospital1@gmail.com")
    const [password, setPassword] = useState("_9O-mDv5jrE")
    const [loading, setLoading] = useState(true)
    // let [authTokens, setAuthTokens] = useState(()=>)
    const token = getCookie('token');
    const navigation = useNavigate();

    useEffect(() => {
        isAuth() && navigation("/Hospital");
    }, [])
    console.log("TOken", token)
    const updateToken =() => {
        if (localStorage.getItem('refresh_token')) {
            let url1 = `http://18.237.160.150/api/auth/refresh/`
            const refreshToken = axios({
                method: "post",
                url: url1,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('refresh_token')}`
                }

            })
            if (refreshToken.status == 200) {
                setLoading(false)
            }
            else {
                signout()
            }
            
        }
    }
    console.log("refreshh token", localStorage.getItem('refresh_token'));
    useEffect(() => {
        let refreshTime = 1000
        const interval = setInterval(() => {
            updateToken()
        }, refreshTime)
        return () => clearInterval(refreshTime)

    }, [localStorage.getItem('refresh_token'), loading])


    const handleSubmit = async (e) => {
        e.preventDefault();
        let loginData = new FormData()
        loginData.append('username', username)
        loginData.append('password', password)

        console.log("Login DATA", [...loginData])
        try {

            let res = await axios.post(`http://18.237.160.150/api/auth/token/`, loginData, {

            })

            authenticate(res, () => {
                // setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                // isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
                // history.push("/Home")


            });
            if (res.status == 200) {
                let url1 = `http://18.237.160.150/api/user/get/`
                const userDetails = await axios({
                    method: "get",
                    url: url1,
                    headers: {
                        Authorization: `Bearer ${cookie.get('access_token')}`
                    }

                })
                console.log("userDetails", userDetails);
                if (userDetails.status == 200) {
                    localStorage.setItem('user', userDetails.data.role_id)
                    localStorage.setItem('userdetail', JSON.stringify(userDetails.data))
                }
                
                    navigation("/Hospital")
                
            }
            console.log("Login Res", res)
            console.log("Is Auth", isAuth())



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
                    handleSubmit = {handleSubmit}
                />
            </div>
        </div>
    )
}

export default HospitalLogin