import React, {useState} from 'react';
import styles from './HospitalLogin.module.css';
import Logo from '../../assests/demoLogo.png';
import UserName from '../../assests/USER.png';
import Password from '../../assests/password.png'
import LoginUi from '../../components/LoginComponent/LoginUi';
import { motion } from 'framer-motion';
import axios from 'axios';
import { authenticate, getCookie, isAuth } from '../../Storage/auth';
import {useNavigate } from 'react-router-dom'


const HospitalLogin = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const token = getCookie('token');
    const navigation = useNavigate();

    console.log("TOken", token)
    const handleSubmit = async (e) => {
        e.preventDefault();
        let loginData = new FormData()
        loginData.append('username', username)
        loginData.append('password', password)
        
        console.log("BLOG DATA", [...loginData])
        try {

        let res = await axios.post(`http://18.237.160.150/api/auth/token/`, loginData, {
                
            })

            authenticate(res, () => {
                // setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
                // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                // isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
                // history.push("/Home")
                navigation("/Home")
            });
           
            console.log("Login Res", res)
            console.log("Is Auth", isAuth())
          
           

        } catch (err) {
            console.log("ERRRRR", err.response.data.error);
           
        }

    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     // console.table({ name, email, password, error, loading, message, showForm });
    //     // setValues({ ...values, loading: true, error: false });
    //     const hospital = { userName, password };

    //     axios({
    //         method: 'POST',
    //         headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //         url: `http://18.237.160.150/api/auth/token/`,
    //         data: { userName, password }
    //     })
    //         .then(response => {
    //             console.log('SIGNIN SUCCESS', response);
    //             // save the response (user, token) localstorage/cookie
    //             // authenticate(response, () => {
    //             //     setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
    //             //     // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
    //             //     isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
    //             // });
    //         })
    //         .catch(error => {
    //             console.log('SIGNIN ERROR', error.response.data);
    //             // setValues({ ...values, buttonText: 'Submit' });
    //             // toast.error(error.response.data.error);
    //         });

       
    // };



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
                formSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default HospitalLogin