import React, { useState, useEffect, useContext } from 'react'
import styles from './DoctorLogin.module.css';
import Logo from '../../assests/demoLogo.png';
import LoginUi from '../../components/LoginComponent/LoginUi';
import axios from 'axios';
import { authenticateDoctor, getCookie, isAuth } from '../../Storage/auth';
import { useNavigate } from 'react-router-dom'
import GlobalStorage from '../../Storage/ContextProvider';
const DoctorLogin = () => {


  const { tokens, setTokens } = useContext(GlobalStorage)

  const [username, setUserName] = useState("hospital1@gmail.com")
  const [password, setPassword] = useState("_9O-mDv5jrE")
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




      navigation("//Hospital/patient")
      window.location.reload()

      // });









    } catch (err) {
      console.log("ERRRRR", err.response?.data?.error);

    }

  };




  return (
    <>
      <div className={styles.loginSection}>
        <div className={styles.logoSection}>
          <img src={Logo} alt="Dummy Logo" />
          <p>Doctor</p>
        </div>
        <LoginUi
          userValue={username}
          passValue={password}
          handleUser={(e) => setUserName(e.target.value)}
          handlePassword={(e) => setPassword(e.target.value)}
          formSubmit={handleSubmit}
        />

      </div>
    </>
  )
}

export default DoctorLogin