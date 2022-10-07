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
    if (value.Physicalvalue > 10) {
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
    if (value.FatigueValue > 10) {
      setStyle({ ...style, FatigueValue: "#B73533" })

    }
  }, [value.FatigueValue])
  useEffect(() => {
    if (value.SleepValue >= 0 && value.SleepValue <= 1) {
      setStyle({ ...style, SleepValue: "#50B188" })

    }
    if (value.SleepValue >= 1 && value.SleepValue <= 2) {
      setStyle({ ...style, SleepValue: "#60CC5C" })

    }
    if (value.SleepValue >= 2 && value.SleepValue <= 3) {
      setStyle({ ...style, SleepValue: "#BFCA24" })

    }
    if (value.SleepValue >= 3 && value.SleepValue <= 4) {
      setStyle({ ...style, SleepValue: "#F2E503" })

    }
    if (value.SleepValue >= 4 && value.SleepValue <= 5) {
      setStyle({ ...style, SleepValue: "#FBDB00" })

    }
    if (value.SleepValue >= 5 && value.SleepValue <= 6) {
      setStyle({ ...style, SleepValue: "#FDBB03" })

    }
    if (value.SleepValue >= 7 && value.SleepValue <= 8) {
      setStyle({ ...style, SleepValue: "#FC9003" })

    }
    if (value.SleepValue >= 8 && value.SleepValue <= 9) {
      setStyle({ ...style, SleepValue: "#FF6600" })

    }
    if (value.SleepValue >= 9 && value.SleepValue <= 10) {
      setStyle({ style, SleepValue: "#FF6600" })

    }
    if (value.SleepValue >= 9 && value.SleepValue <= 10) {
      setStyle({ ...style, SleepValue: "#DF2900" })

    }
    if (value.SleepValue > 10) {
      setStyle({ ...style, SleepValue: "#B73533" })

    }
  }, [value.SleepValue])
  useEffect(() => {
    if (value.HeadacheValue >= 0 && value.HeadacheValue <= 1) {
      setStyle({ ...style, HeadacheValue: "#50B188" })

    }
    if (value.HeadacheValue >= 1 && value.HeadacheValue <= 2) {
      setStyle({ ...style, HeadacheValue: "#60CC5C" })

    }
    if (value.HeadacheValue >= 2 && value.HeadacheValue <= 3) {
      setStyle({ ...style, HeadacheValue: "#BFCA24" })

    }
    if (value.HeadacheValue >= 3 && value.HeadacheValue <= 4) {
      setStyle({ ...style, HeadacheValue: "#F2E503" })

    }
    if (value.HeadacheValue >= 4 && value.HeadacheValue <= 5) {
      setStyle({ ...style, HeadacheValue: "#FBDB00" })

    }
    if (value.HeadacheValue >= 5 && value.HeadacheValue <= 6) {
      setStyle({ ...style, HeadacheValue: "#FDBB03" })

    }
    if (value.HeadacheValue >= 7 && value.HeadacheValue <= 8) {
      setStyle({ ...style, HeadacheValue: "#FC9003" })

    }
    if (value.HeadacheValue >= 8 && value.HeadacheValue <= 9) {
      setStyle({ ...style, HeadacheValue: "#FF6600" })

    }
    if (value.HeadacheValue >= 9 && value.HeadacheValue <= 10) {
      setStyle({ style, HeadacheValue: "#FF6600" })

    }
    if (value.HeadacheValue >= 9 && value.HeadacheValue <= 10) {
      setStyle({ ...style, HeadacheValue: "#DF2900" })

    }
    if (value.HeadacheValue > 10) {
      setStyle({ ...style, HeadacheValue: "#B73533" })

    }
  }, [value.HeadacheValue])
  useEffect(() => {
    if (value.ShoulderValue >= 0 && value.ShoulderValue <= 1) {
      setStyle({ ...style, ShoulderValue: "#50B188" })

    }
    if (value.ShoulderValue >= 1 && value.ShoulderValue <= 2) {
      setStyle({ ...style, ShoulderValue: "#60CC5C" })

    }
    if (value.ShoulderValue >= 2 && value.ShoulderValue <= 3) {
      setStyle({ ...style, ShoulderValue: "#BFCA24" })

    }
    if (value.ShoulderValue >= 3 && value.ShoulderValue <= 4) {
      setStyle({ ...style, ShoulderValue: "#F2E503" })

    }
    if (value.ShoulderValue >= 4 && value.ShoulderValue <= 5) {
      setStyle({ ...style, ShoulderValue: "#FBDB00" })

    }
    if (value.ShoulderValue >= 5 && value.ShoulderValue <= 6) {
      setStyle({ ...style, ShoulderValue: "#FDBB03" })

    }
    if (value.ShoulderValue >= 7 && value.ShoulderValue <= 8) {
      setStyle({ ...style, ShoulderValue: "#FC9003" })

    }
    if (value.ShoulderValue >= 8 && value.ShoulderValue <= 9) {
      setStyle({ ...style, ShoulderValue: "#FF6600" })

    }
    if (value.ShoulderValue >= 9 && value.ShoulderValue <= 10) {
      setStyle({ style, HeadacheValue: "#FF6600" })

    }
    if (value.ShoulderValue >= 9 && value.ShoulderValue <= 10) {
      setStyle({ ...style, ShoulderValue: "#DF2900" })

    }
    if (value.ShoulderValue > 10) {
      setStyle({ ...style, ShoulderValue: "#B73533" })

    }
  }, [value.ShoulderValue])
  useEffect(() => {
    if (value.LowbackPainValue >= 0 && value.LowbackPainValue <= 1) {
      setStyle({ ...style, LowbackPainValue: "#50B188" })

    }
    if (value.LowbackPainValue >= 1 && value.LowbackPainValue <= 2) {
      setStyle({ ...style, LowbackPainValue: "#60CC5C" })

    }
    if (value.LowbackPainValue >= 2 && value.LowbackPainValue <= 3) {
      setStyle({ ...style, LowbackPainValue: "#BFCA24" })

    }
    if (value.LowbackPainValue >= 3 && value.LowbackPainValue <= 4) {
      setStyle({ ...style, LowbackPainValue: "#F2E503" })

    }
    if (value.LowbackPainValue >= 4 && value.LowbackPainValue <= 5) {
      setStyle({ ...style, LowbackPainValue: "#FBDB00" })

    }
    if (value.LowbackPainValue >= 5 && value.LowbackPainValue <= 6) {
      setStyle({ ...style, LowbackPainValue: "#FDBB03" })

    }
    if (value.LowbackPainValue >= 7 && value.LowbackPainValue <= 8) {
      setStyle({ ...style, LowbackPainValue: "#FC9003" })

    }
    if (value.LowbackPainValue >= 8 && value.LowbackPainValue <= 9) {
      setStyle({ ...style, LowbackPainValue: "#FF6600" })

    }
    if (value.LowbackPainValue >= 9 && value.LowbackPainValue <= 10) {
      setStyle({ style, LowbackPainValue: "#FF6600" })

    }
    if (value.LowbackPainValue >= 9 && value.LowbackPainValue <= 10) {
      setStyle({ ...style, LowbackPainValue: "#DF2900" })

    }
    if (value.LowbackPainValue > 10) {
      setStyle({ ...style, LowbackPainValue: "#B73533" })

    }
  }, [value.LowbackPainValue])
  useEffect(() => {
    if (value.KneePainValue >= 0 && value.KneePainValue <= 1) {
      setStyle({ ...style, KneePainValue: "#50B188" })

    }
    if (value.KneePainValue >= 1 && value.KneePainValue <= 2) {
      setStyle({ ...style, KneePainValue: "#60CC5C" })

    }
    if (value.KneePainValue >= 2 && value.KneePainValue <= 3) {
      setStyle({ ...style, KneePainValue: "#BFCA24" })

    }
    if (value.KneePainValue >= 3 && value.KneePainValue <= 4) {
      setStyle({ ...style, KneePainValue: "#F2E503" })

    }
    if (value.KneePainValue >= 4 && value.KneePainValue <= 5) {
      setStyle({ ...style, KneePainValue: "#FBDB00" })

    }
    if (value.KneePainValue >= 5 && value.KneePainValue <= 6) {
      setStyle({ ...style, KneePainValue: "#FDBB03" })

    }
    if (value.KneePainValue >= 7 && value.KneePainValue <= 8) {
      setStyle({ ...style, KneePainValue: "#FC9003" })

    }
    if (value.KneePainValue >= 8 && value.KneePainValue <= 9) {
      setStyle({ ...style, KneePainValue: "#FF6600" })

    }
    if (value.KneePainValue >= 9 && value.KneePainValue <= 10) {
      setStyle({ ...style, KneePainValue: "#FF6600" })

    }
    if (value.KneePainValue >= 9 && value.KneePainValue <= 10) {
      setStyle({ ...style, KneePainValue: "#DF2900" })

    }
    if (value.KneePainValue > 10) {
      setStyle({ ...style, KneePainValue: "#B73533" })

    }
  }, [value.KneePainValue])
  useEffect(() => {
    if (value.ElbowPainValue >= 0 && value.ElbowPainValue <= 1) {
      setStyle({ ...style, ElbowPainValue: "#50B188" })

    }
    if (value.ElbowPainValue >= 1 && value.ElbowPainValue <= 2) {
      setStyle({ ...style, ElbowPainValue: "#60CC5C" })

    }
    if (value.ElbowPainValue >= 2 && value.ElbowPainValue <= 3) {
      setStyle({ ...style, ElbowPainValue: "#BFCA24" })

    }
    if (value.ElbowPainValue >= 3 && value.ElbowPainValue <= 4) {
      setStyle({ ...style, ElbowPainValue: "#F2E503" })

    }
    if (value.ElbowPainValue >= 4 && value.ElbowPainValue <= 5) {
      setStyle({ ...style, ElbowPainValue: "#FBDB00" })

    }
    if (value.ElbowPainValue >= 5 && value.ElbowPainValue <= 6) {
      setStyle({ ...style, ElbowPainValue: "#FDBB03" })

    }
    if (value.ElbowPainValue >= 7 && value.ElbowPainValue <= 8) {
      setStyle({ ...style, ElbowPainValue: "#FC9003" })

    }
    if (value.ElbowPainValue >= 8 && value.ElbowPainValue <= 9) {
      setStyle({ ...style, ElbowPainValue: "#FF6600" })

    }
    if (value.ElbowPainValue >= 9 && value.ElbowPainValue <= 10) {
      setStyle({ ...style, ElbowPainValue: "#FF6600" })

    }
    if (value.ElbowPainValue >= 9 && value.ElbowPainValue <= 10) {
      setStyle({ ...style, ElbowPainValue: "#DF2900" })

    }
    if (value.KneePainValue > 10) {
      setStyle({ ...style, ElbowPainValue: "#B73533" })

    }
  }, [value.ElbowPainValue])
  useEffect(() => {
    if (value.OthersOneValue >= 0 && value.OthersOneValue <= 1) {
      setStyle({ ...style, OthersOneValue: "#50B188" })

    }
    if (value.OthersOneValue >= 1 && value.OthersOneValue <= 2) {
      setStyle({ ...style, OthersOneValue: "#60CC5C" })

    }
    if (value.OthersOneValue >= 2 && value.OthersOneValue <= 3) {
      setStyle({ ...style, OthersOneValue: "#BFCA24" })

    }
    if (value.OthersOneValue >= 3 && value.OthersOneValue <= 4) {
      setStyle({ ...style, OthersOneValue: "#F2E503" })

    }
    if (value.OthersOneValue >= 4 && value.OthersOneValue <= 5) {
      setStyle({ ...style, OthersOneValue: "#FBDB00" })

    }
    if (value.OthersOneValue >= 5 && value.OthersOneValue <= 6) {
      setStyle({ ...style, OthersOneValue: "#FDBB03" })

    }
    if (value.OthersOneValue >= 7 && value.OthersOneValue <= 8) {
      setStyle({ ...style, OthersOneValue: "#FC9003" })

    }
    if (value.OthersOneValue >= 8 && value.OthersOneValue <= 9) {
      setStyle({ ...style, OthersOneValue: "#FF6600" })

    }
    if (value.OthersOneValue >= 9 && value.OthersOneValue <= 10) {
      setStyle({ ...style, OthersOneValue: "#FF6600" })

    }
    if (value.OthersOneValue >= 9 && value.OthersOneValue <= 10) {
      setStyle({ ...style, OthersOneValue: "#DF2900" })

    }
    if (value.OthersOneValue > 10) {
      setStyle({ ...style, OthersOneValue: "#B73533" })

    }
  }, [value.OthersOneValue])
  useEffect(() => {
    if (value.OthersOneValue >= 0 && value.OthersOneValue <= 1) {
      setStyle({ ...style, OthersOneValue: "#50B188" })

    }
    if (value.OthersTwoValue >= 1 && value.OthersTwoValue <= 2) {
      setStyle({ ...style, OthersTwoValue: "#60CC5C" })

    }
    if (value.OthersTwoValue >= 2 && value.OthersTwoValue <= 3) {
      setStyle({ ...style, OthersTwoValue: "#BFCA24" })

    }
    if (value.OthersTwoValue >= 3 && value.OthersTwoValue <= 4) {
      setStyle({ ...style, OthersTwoValue: "#F2E503" })

    }
    if (value.OthersTwoValue >= 4 && value.OthersTwoValue <= 5) {
      setStyle({ ...style, OthersTwoValue: "#FBDB00" })

    }
    if (value.OthersTwoValue >= 5 && value.OthersTwoValue <= 6) {
      setStyle({ ...style, OthersTwoValue: "#FDBB03" })

    }
    if (value.OthersTwoValue >= 7 && value.OthersTwoValue <= 8) {
      setStyle({ ...style, OthersTwoValue: "#FC9003" })

    }
    if (value.OthersTwoValue >= 8 && value.OthersTwoValue <= 9) {
      setStyle({ ...style, OthersTwoValue: "#FF6600" })

    }
    if (value.OthersTwoValue >= 9 && value.OthersTwoValue <= 10) {
      setStyle({ ...style, OthersTwoValue: "#FF6600" })

    }
    if (value.OthersTwoValue >= 9 && value.OthersTwoValue <= 10) {
      setStyle({ ...style, OthersTwoValue: "#DF2900" })

    }
    if (value.OthersTwoValue > 10) {
      setStyle({ ...style, OthersTwoValue: "#B73533" })

    }
  }, [value.OthersTwoValue])
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
                  onChange={(e) => setValue({ ...value, Physicalvalue: e.target.value })}
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
                  onChange={(e) => setValue({ ...value, FatigueValue: e.target.value })}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Sleep</button>
            <div className={styles.color} style={{ backgroundColor: style?.SleepValue }}> <p>{Math.ceil(value.SleepValue)}</p></div>
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
                  onChange={(e) => setValue({ ...value, SleepValue: e.target.value })}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Headache</button>
            <div className={styles.color} style={{ backgroundColor: style.HeadacheValue }}><p>{Math.ceil(value.HeadacheValue)}</p></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
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
                  value={value.HeadacheValue}
                  onChange={(e) => setValue({ ...value, HeadacheValue: e.target.value })}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Shoulder Pain</button>
            <div className={styles.color} style={{ backgroundColor: style.ShoulderValue }}><p>{Math.ceil(value.ShoulderValue)}</p></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
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
                  value={value.ShoulderValue}
                  onChange={(e) => setValue({ ...value, ShoulderValue: e.target.value })}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Low back pain</button>
            <div className={styles.color} style={{ backgroundColor: style.LowbackPainValue }}><p>{Math.ceil(value.LowbackPainValue)}</p></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
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
                  value={value.LowbackPainValue}
                  onChange={(e) => setValue({ ...value, LowbackPainValue: e.target.value })}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Knee pain</button>
            <div className={styles.color} style={{ backgroundColor: style.KneePainValue }}><p>{Math.ceil(value.KneePainValue)}</p></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
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
                  value={value.KneePainValue}
                  onChange={(e) => setValue({ ...value, KneePainValue: e.target.value })}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Elbow pain</button>
            <div className={styles.color} style={{ backgroundColor: style.ElbowPainValue }}><p>{Math.ceil(value.ElbowPainValue)}</p></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
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
                  value={value.ElbowPainValue}
                  onChange={(e) => setValue({ ...value, ElbowPainValue: e.target.value })}
                  step=".1" />
              </div>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Others 1</button>
            <div className={styles.color} style={{ backgroundColor: style.OthersOneValue }}><p>{Math.ceil(value.OthersOneValue)}</p></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
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
                  value={value.OthersOneValue}
                  onChange={(e) => setValue({ ...value, OthersOneValue: e.target.value })}
                  step=".1" />
              </div>
                <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Others 2</button>
            <div className={styles.color} style={{ backgroundColor: style.OthersTwoValue }}><p>{Math.ceil(value.OthersTwoValue)}</p></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
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
                  value={value.OthersTwoValue}
                  onChange={(e) => setValue({ ...value, OthersTwoValue: e.target.value })}
                  step=".1" />
              </div>
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