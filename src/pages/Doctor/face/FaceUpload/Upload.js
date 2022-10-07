import React, { useContext } from 'react'
import styles from './Upload.module.css';
import { IoIosArrowForward } from "react-icons/io";
import Logo from '../../../../assests/demoLogo.png';
import { IoHome } from 'react-icons/io5'
// import GlobalStorage from '../../../Storage/ContextProvider';
import { useState } from 'react';
import { MdArrowBackIosNew, MdUpload } from 'react-icons/md'
import { useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import PateintHeading from '../../../../components/PateintHeading/PateintHeading';

const textName = {
  text1:"Front Face",
  text2:"Side Face"
}
const Upload = () => {
  //   const { Bgcolor, setBgcolor } = useContext(GlobalStorage);
  const [showDrop, setShowDrop] = useState(false)
  const [select, setSelect] = useState("");

  return (
    <>
      <div className={styles.image}>
        <img src={Logo} alt="" />
      </div>

     <PateintHeading
     buttonText={textName}
     />


      <div className={styles.mainUpload}>
        <div className={styles.uploadCard}>
          <div className={styles.uploadCardInner}>
            <h2>Image 1</h2>
          </div>

          
          <button className='me-2'>Click Image <FaCamera size="25px" color='#185EB6' style={{marginLeft:'25px'}} />  </button>
          <button> <MdUpload size="25px" color='#185EB6' /> Upload Image   </button>


        </div>

        <div className={styles.uploadCard}>
          <div className={styles.uploadCardInner}>
            <h2>Image 2</h2>

          </div>

          <button className='me-2'>Click Image <FaCamera size="25px" color='#185EB6' style={{marginLeft:'25px'}} />  </button>
          <button> <MdUpload size="25px" color='#185EB6' /> Upload Image   </button>
        </div>
        <div>
          <div className={styles.infoCard}>
            <h2>IMAGE GUIDELINES</h2>
            <div className={styles.infopara}>
              <p> 1. Please show your full face in the forward direction.</p>
              <p> 2. Please do not wear a hat or cover your head unless this
                is for religious reasons.</p>
              <p> 3. Please do not wear sunglasses.</p>
              <p> 4. If you are wearing glasses, please show your eyes clearly and avoid
                glare on the lenses.</p>

              <p> 5. Please do not upload any image with red eyes.</p>
            </div>
          </div>
          <div  className={styles.aButton}>
          <button>Analyse</button>

          </div>
        </div>
      </div>



    </>
  )
}

export default Upload;