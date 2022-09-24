import React, { useEffect } from 'react'
import styles from './Home.module.css';
import Header from '../../../components/DoctorHeader/Header';
import axios from 'axios';


const Home = () => {
  useEffect(() => {

    const userDetails = async () => {
      let url1 = `http://18.237.160.150/api/user/get/`
      const userDetails = await axios({
        method: "get",
        url: url1,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }

      })
      console.log("userDetails", userDetails);
      if (userDetails.status == 200) {
        localStorage.setItem('user', userDetails.data.role_id)
        localStorage.setItem('userdetail', JSON.stringify(userDetails.data))
      }
      console.log("usedetails", userDetails);
    }
    userDetails()
  }, [])
  return (
    <>
        <Header />
        <div className={styles.homeBody}>
            <div className={styles.inputStyle}>
            <input type="text" placeholder='Patient UUID' />

            </div>
            <div className={styles.card}>
               <button>Function</button>
               <button>Analysis</button>
               <button>Motion Checking</button>
               <button>Face Analysis</button>
            </div>
        </div>

    </>
  )
}

export default Home