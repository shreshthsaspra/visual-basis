import React, { useContext } from 'react'
import styles from './Screening.module.css';
import ReactSlider from 'react-slider'
import { IoIosArrowForward } from "react-icons/io";
import Progress from './Progress';
import Logo from '../../../assests/demoLogo.png';
import { IoHome } from 'react-icons/io5'
import GlobalStorage from '../../../Storage/ContextProvider';
import { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md'
import PateintHeading from '../../../components/PateintHeading/PateintHeading';
import { useEffect } from 'react';
const color = [
  {}
]
const data = [
  {
    id: 1,
    date: "2020/10/24 10:15"
  },
  {
    id: 1,
    date: "2020/10/25 10:15"
  },
  {
    id: 1,
    date: "2020/10/26 10:15"
  },
  {
    id: 1,
    date: "2020/10/26 10:15"
  },
  {
    id: 1,
    date: "2020/10/26 10:15"
  },
  {
    id: 1,
    date: "2020/10/26 10:15"
  },
]
const buttonText =
  {
    text1:"Point",
    text2:"Screening"
  }

const Screening = () => {
  const [value, setValue]= useState({
    Physicalvalue:0,
    FatigueValue:0,
    SleepValue:0,
    HeadacheValue:0,
    ShoulderValue:0,
    LowbackPainValue:0,
    KneePainValue:0,
    ElbowPainValue:0,
    OthersOneValue:0,
    OthersTwoValue:0


  });
  const [style, setStyle]= useState({
    Physicalvalue:"",
    FatigueValue:"",
    SleepValue:"",
    HeadacheValue:"",
    ShoulderValue:"",
    LowbackPainValue:"",
    KneePainValue:"",
    ElbowPainValue:"",
    OthersOneValue:"",
    OthersTwoValue:""


  });
  console.log(style);
  return (
    <>
      <div className={styles.image}>
        <img src={Logo} alt="" />
      </div>

      <PateintHeading buttonText = {buttonText}  />
      <div className={styles.mainDiv}>
        <div className={styles.containerDiv}>

          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: style.Physicalvalue}}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress setStyle= {setStyle} phy setValue = {setValue} value = {value.Physicalvalue} />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Fatigue</button>
            <div className={styles.color} style={{ backgroundColor: style.FatigueValue }}></div>
            <div className={styles.input} >
              <p className='px-3'>Very Terrible</p>
              <Progress setStyle = {setStyle} fat setValue = {setValue} value = {value.FatigueValue} />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Sleep</button>
            <div className={styles.color} style={{ backgroundColor: style?.SleepValue }}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress  setStyle = {setStyle} slp setValue = {setValue} value = {value.FatigueValue}/>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Headache</button>
            <div className={styles.color} style={{ backgroundColor: style.HeadacheValue }}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Shoulder Pain</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Low back pain</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Knee pain</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Elbow pain</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Others 1</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Others 2</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.registarionRemarkMain}>
        <div className={styles.registarionRemark}>
          <p>Registration Remark</p>
        </div>
        <textarea className={styles.textaresReg} type="text" name="" id="" />
      </div>

    </>
  )
}

export default Screening;