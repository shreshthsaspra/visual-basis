import React, {useState, useEffect} from 'react'
import styles from './DoctorLogin.module.css';
import Logo from '../../assests/demoLogo.png';
import LoginUi from '../../components/LoginComponent/LoginUi';
import axios from 'axios';
import { authenticateDoctor, getCookie, isAuth } from '../../Storage/auth';
import {useNavigate } from 'react-router-dom'
const DoctorLogin = () => {


  const [username, setUserName] = useState("doctor1@gmail.com")
  const [password, setPassword] = useState("q50L5-CciCc")
  const token = getCookie('token');
  const navigation = useNavigate();

  useEffect(() => {
      isAuth() && navigation("/Hospital/patient");
  }, [])
  console.log("TOken", token)
  const handleSubmit = async (e) => {
      e.preventDefault();
      let loginData = new FormData()
      loginData.append('username', username)
      loginData.append('password', password)
      
      console.log("Login DATA", [...loginData])
      try {

      let res = await axios.post(`http://18.237.160.150/api/auth/token/`, loginData, {
              
          })

          authenticateDoctor(res, () => {
              // setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
              // toast.success(`Hey ${response.data.user.name}, Welcome back!`);
              // isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private');
              // history.push("/Home")
              navigation("/Hospital")
          });
         
          console.log("Login Res", res)
          console.log("Is Auth", isAuth())
        
         

      } catch (err) {
          console.log("ERRRRR", err.response.data.error);
         
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