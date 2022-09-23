import React from 'react';
import styles from './Function.module.css';
import Logo from '../../../assests/demoLogo.png';
import { MdArrowBackIosNew } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import Reset from '../../../assests/reset.png';
import { FaCamera } from "react-icons/fa";
import { MdUpload } from "react-icons/md";

const Function = () => {
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

                            <div className={styles.inputDiv}>
                                <p>Visit Date</p>
                                <div className={styles.dateWrap}>
                                    <p>10/09/2022</p>
                                    <span>15:45:34</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardMiddle}>
                            <button className={styles.modelButton}>Select Model</button>
                            <button className={styles.screenButton}>Point Screen</button>
                        </div>
                        <div className={styles.cardRight}>
                            <div className={styles.right1}>
                                <div className={styles.topRight}>
                                    <div className={styles.inputWrap}>
                                        <div className={`${styles.inputRight} mb-1`}>
                                            <p>Height</p>
                                            <div className={styles.inputTextWrap}>
                                                <input type="text" />
                                                <p>cm</p>
                                            </div>
                                        </div>

                                        <div className={`${styles.inputRight}`}>
                                            <p>Height</p>
                                            <div className={styles.inputTextWrap}>
                                                <input type="text" />
                                                <p>cm</p>
                                            </div>
                                        </div>
                                    </div>



                                    <button className={styles.uploadButon}>Upload</button>
                                </div>

                                <div className={`${styles.inputRight} mt-1`}>
                                    <p>Height</p>
                                    <div className={styles.inputTextWrap}>
                                        <input type="text" />
                                        <p>cm</p>
                                    </div>
                                </div>



                            </div>
                            <div className={styles.right2}>
                                <img src={Reset} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={`${styles.bodyCard} me-4`}>
                      <p>Front</p>
                        <div className={styles.df}>
                        <div className={styles.camera}>
                            <FaCamera size="25px" color='#185EB6' />
                        </div>
                        <div className={styles.upload}>
                            <MdUpload size="25px" color='#185EB6' />
                        </div>
                        </div>
                    </div>

                    <div className={`${styles.bodyCard} me-4`}>
                    <p>Left</p>
                        <div className={styles.df}>
                        <div className={styles.camera}>
                            <FaCamera size="25px" color='#185EB6' />
                        </div>
                        <div className={styles.upload}>
                            <MdUpload size="25px" color='#185EB6' />
                        </div>
                        </div>
                    </div>

                    <div className={`${styles.bodyCard} me-4`}>
                    <p>Back</p>
                        <div className={styles.df}>
                        <div className={styles.camera}>
                            <FaCamera size="25px" color='#185EB6' />
                        </div>
                        <div className={styles.upload}>
                            <MdUpload size="25px" color='#185EB6' />
                        </div>
                        </div>
                    </div>

                    <div className={`${styles.bodyCard} `}>
                    <p>Right</p>
                        <div className={styles.df}>
                        <div className={styles.camera}>
                            <FaCamera size="25px" color='#185EB6' />
                        </div>
                        <div className={styles.upload}>
                            <MdUpload size="25px" color='#185EB6' />
                        </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Function 