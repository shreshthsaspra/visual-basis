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
const Screening = () => {
  const { Bgcolor, setBgcolor } = useContext(GlobalStorage);
  const [showDrop, setShowDrop] = useState(false)
  const [Style, setStyle] = useState("")
  const [select, setSelect] = useState("");
  useEffect(() => {
    if (Bgcolor >= 0 && Bgcolor <= 1) {
      setStyle("#50B188")
      console.log(Style);
    }
    if (Bgcolor >= 1 && Bgcolor <= 2) {
      setStyle("#60CC5C")
      console.log(Style);
    }
    if (Bgcolor >= 2 && Bgcolor <= 3) {
      setStyle("#BFCA24")
      console.log(Style);
    }
    if (Bgcolor >= 3 && Bgcolor <= 4) {
      setStyle("#F2E503")
      console.log(Style);
    }
    if (Bgcolor >= 4 && Bgcolor <= 5) {
      setStyle("#FBDB00")
      console.log(Style);
    }
  }, [Bgcolor])
  return (
    <>
      <div className={styles.image}>
        <img src={Logo} alt="" />
      </div>

      <div className={styles.main}>
        <div className={styles.topNav}>
          <div className={styles.left}>
            <button className={styles.button1}>Point</button>
            <button className={styles.button2}>Screening</button>
          </div>
          <div className={styles.right}>
            <button className={styles.backButton}>
              <MdArrowBackIosNew color='#185EB6' size="22px" />Back
            </button>
            <button className={styles.homeButton}><IoHome color="#185EB6" size="22px" /></button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardInner}>
            <div className={styles.cardLeft}>
              <h2>Suzaane Kaushik</h2>
              <div className={styles.nameBelow}>
                <p>ID : 10091990</p>
                <span>26 yrs, female</span>
              </div>
            </div>

            <div className={styles.inputDiv}>
              <p>Visit Date</p>
              <div>
                <div onClick={() => setShowDrop(!showDrop)} className={styles.inputDivDate}>
                  <div>
                    <p>{select ? select?.date : data[0].date}</p>
                  </div>
                  <div className={styles.dropDown}>
                    <IoIosArrowForward />
                  </div>


                </div>
                <div className={`${styles.inputDivDateList} `}>
                  <div className={`${styles.inputDivDateListOption} ${showDrop ? styles.showDrop : styles.hideDrop}`}>
                    {
                      data?.map(item => {
                        return (
                          <p key={item.id} onClick={() => { setSelect(item); setShowDrop(!showDrop) }} >{item.date}</p>
                        )
                      })
                    }
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.containerDiv}>

          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: Style }}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress setBgcolor={setBgcolor} />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: Style }}></div>
            <div className={styles.input} >
              <p className='px-3'>Very Terrible</p>
              <Progress setBgcolor={setBgcolor} />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: Style }}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress setBgcolor={setBgcolor} />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: Style }}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Physical Condition</button>
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