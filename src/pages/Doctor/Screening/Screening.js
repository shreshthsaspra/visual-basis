import React, { useContext } from 'react'
import styles from './Screening.module.css';
import ReactSlider from 'react-slider'
import Progress from './Progress';
import GlobalStorage from '../../../Storage/ContextProvider';
import { useState } from 'react';
import { useEffect } from 'react';
const color = [
  {}
]

const Screening = () => {
  const { Bgcolor, setBgcolor } = useContext(GlobalStorage);
  const [Style, setStyle] = useState("")
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
  },[Bgcolor])
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.containerDiv}>

          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: Style }}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress setBgcolor = {setBgcolor}/>
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: Style }}></div>
            <div className={styles.input} >
              <p className='px-3'>Very Terrible</p>
              <Progress setBgcolor = {setBgcolor} />
              <p className='px-3'>Very Terrible</p>
            </div>
          </div>
          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color} style={{ backgroundColor: Style }}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <Progress setBgcolor = {setBgcolor}/>
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
    </>
  )
}

export default Screening;