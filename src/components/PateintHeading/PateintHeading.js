import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { MdArrowBackIosNew } from 'react-icons/md'
import styles from "./PateintHeading.module.css"
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
function PateintHeading(props) {
    const [showDrop, setShowDrop] = useState(false)
    const [Style, setStyle] = useState("")
    const [select, setSelect] = useState("");
    console.log(props);
    return (
        <div className={styles.main}>
            <div className={styles.topNav}>
                <div className={styles.left}>
                    <button className={styles.button1}>{props.buttonText?.text1}</button>
                    <button className={styles.button2}>{props.buttonText?.text2}</button>
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
    )
}

export default PateintHeading