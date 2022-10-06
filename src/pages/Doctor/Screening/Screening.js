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
  text1: "Point",
  text2: "Screening"
}

const Screening = () => {
  const handleChange = (e) => {
    setValue({ ...value, Physicalvalue: e.target.value })
  }
  const [value, setValue] = useState({
    Physicalvalue: 0,
    FatigueValue: 0,
    SleepValue: 0,
    HeadacheValue: 0,
    ShoulderValue: 0,
    LowbackPainValue: 0,
    KneePainValue: 0,
    ElbowPainValue: 0,
    OthersOneValue: 0,
    OthersTwoValue: 0


  });
  console.log(value);
  const [style, setStyle] = useState({
    Physicalvalue: "",
    FatigueValue: "",
    SleepValue: "",
    HeadacheValue: "",
    ShoulderValue: "",
    LowbackPainValue: "",
    KneePainValue: "",
    ElbowPainValue: "",
    OthersOneValue: "",
    OthersTwoValue: ""


  });
  console.log(style);
  useEffect(() => {
    if (value.Physicalvalue >= 0 && value.Physicalvalue <= 1) {
      setStyle({ ...style, Physicalvalue: "#50B188" })

    }
    if (value.Physicalvalue >= 1 && value.Physicalvalue <= 2) {
      setStyle({ ...style, Physicalvalue: "#60CC5C" })

    }
    if (value.Physicalvalue >= 2 && value.Physicalvalue <= 3) {
      setStyle({ ...style, Physicalvalue: "#BFCA24" })

    }
    if (value.Physicalvalue >= 3 && value.Physicalvalue <= 4) {
      setStyle({ ...style, Physicalvalue: "#F2E503" })

    }
    if (value.Physicalvalue >= 4 && value.Physicalvalue <= 5) {
      setStyle({ style, Physicalvalue: "#FBDB00" })

    }
    if (value.Physicalvalue >= 5 && value.Physicalvalue <= 6) {
      setStyle({ style, Physicalvalue: "#FDBB03" })

    }
    if (value.Physicalvalue >= 7 && value.Physicalvalue <= 8) {
      setStyle({ style, Physicalvalue: "#FC9003" })

    }
    if (value.Physicalvalue >= 8 && value.Physicalvalue <= 9) {
      setStyle({ style, Physicalvalue: "#FF6600" })

    }
    if (value.Physicalvalue >= 9 && value.Physicalvalue <= 10) {
      setStyle({ style, Physicalvalue: "#FF6600" })

    }
    if (value.Physicalvalue >= 9 && value.Physicalvalue <= 10) {
      setStyle({ style, Physicalvalue: "#DF2900" })

    }
    if (value.Physicalvalue >10 ) {
      setStyle({ style, Physicalvalue: "#B73533" })

    }
  }, [value.Physicalvalue])
  useEffect(() => {
    if (value.FatigueValue >= 0 && value.FatigueValue <= 1) {
      setStyle({ ...style, FatigueValue: "#50B188" })

    }
    if (value.FatigueValue >= 1 && value.FatigueValue <= 2) {
      setStyle({ ...style, FatigueValue: "#60CC5C" })

    }
    if (value.FatigueValue >= 2 && value.FatigueValue <= 3) {
      setStyle({ ...style, FatigueValue: "#BFCA24" })

    }
    if (value.FatigueValue >= 3 && value.FatigueValue <= 4) {
      setStyle({ ...style, FatigueValue: "#F2E503" })

    }
    if (value.FatigueValue >= 4 && value.FatigueValue <= 5) {
      setStyle({ ...style, FatigueValue: "#FBDB00" })

    }
    if (value.FatigueValue >= 5 && value.Physicalvalue <= 6) {
      setStyle({ ...style, FatigueValue: "#FDBB03" })

    }
    if (value.FatigueValue >= 7 && value.FatigueValue <= 8) {
      setStyle({ ...style, FatigueValue: "#FC9003" })

    }
    if (value.FatigueValue >= 8 && value.FatigueValue <= 9) {
      setStyle({ ...style, FatigueValue: "#FF6600" })

    }
    if (value.FatigueValue >= 9 && value.FatigueValue <= 10) {
      setStyle({ style, FatigueValue: "#FF6600" })

    }
    if (value.FatigueValue >= 9 && value.FatigueValue <= 10) {
      setStyle({ ...style, FatigueValue: "#DF2900" })

    }
    if (value.FatigueValue >10 ) {
      setStyle({ ...style, FatigueValue: "#B73533" })

    }
  }, [value.FatigueValue])
  return (
    <>
      <div className={styles.image}>
        <img src={Logo} alt="" />
      </div>

      <PateintHeading buttonText={buttonText} />
      <div className={styles.mainDiv}>
        <div className={styles.containerDiv}>

          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: style.Physicalvalue }}> <p>{Math.ceil(value.Physicalvalue)}</p></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              {/* <Progress setStyle= {setStyle} phy setValue = {setValue} value = {value} /> */}
              <div className='containerStyles'>
                <div className='colorBg'>
                  <div className='div1'></div>
                  <div className='div2'></div>
                  <div className='div3'></div>
                  <div className='div4'></div>
                  <div className='div5'></div>
                  <div className='div6'></div>
                  <div className='div7'></div>
                  <div className='div8'></div>
                  <div className='div9'></div>
                  <div className='div10'></div>
                </div>
                <input id="typeinp"
                  type="range"
                  className='slider'
                  min="0" max="10"
                  value={value.Physicalvalue}
                  onChange={(e)=>setValue({...value, Physicalvalue:e.target.value})}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Fatigue</button>
            <div className={styles.color} style={{ backgroundColor: style.FatigueValue }}><p>{Math.ceil(value.FatigueValue)}</p></div>
            <div className={styles.input} >
              <p className='px-3'>Very Terrible</p>
              {/* <Progress setStyle = {setStyle} fat setValue = {setValue} value = {value} /> */}
              <div className='containerStyles'>
                <div className='colorBg'>
                  <div className='div1'></div>
                  <div className='div2'></div>
                  <div className='div3'></div>
                  <div className='div4'></div>
                  <div className='div5'></div>
                  <div className='div6'></div>
                  <div className='div7'></div>
                  <div className='div8'></div>
                  <div className='div9'></div>
                  <div className='div10'></div>
                </div>
                <input id="typeinp"
                  type="range"
                
                  className='slider'
                  min="0" max="10"
                  value={value.FatigueValue}
                  onChange={(e)=>setValue({...value, FatigueValue:e.target.value})}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Sleep</button>
            <div className={styles.color} style={{ backgroundColor: style?.SleepValue }}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              {/* <Progress  setStyle = {setStyle} slp setValue = {setValue} value = {value}/> */}
              <div className='containerStyles'>
                <div className='colorBg'>
                  <div className='div1'></div>
                  <div className='div2'></div>
                  <div className='div3'></div>
                  <div className='div4'></div>
                  <div className='div5'></div>
                  <div className='div6'></div>
                  <div className='div7'></div>
                  <div className='div8'></div>
                  <div className='div9'></div>
                  <div className='div10'></div>
                </div>
                <input id="typeinp"
                  type="range"
                  className='slider'
                  min="0" max="10"
                  value={value.SleepValue}
                  onChange={(e)=>setValue({...value, SleepValue:e.target.value})}
                  step=".1" />
              </div>
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