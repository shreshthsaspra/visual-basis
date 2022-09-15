import React from 'react'
import styles from './Home.module.css';
import Header from '../../../components/DoctorHeader/Header';


const Home = () => {
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