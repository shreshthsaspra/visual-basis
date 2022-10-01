import React from 'react';
import styles from './Function.module.css';
import Logo from '../../../assests/demoLogo.png';
import Testing from '../../../assests/testingImage.png'
import { MdArrowBackIosNew } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import Reset from '../../../assests/reset.png';
import { FaCamera, FaHandLizard } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { AiTwotoneSave } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import { useContext } from 'react';
import GlobalStorage from '../../../Storage/ContextProvider';
import { useNavigate } from 'react-router-dom';

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
const Function = () => {
    const Navigate = useNavigate()
    const [showDrop, setShowDrop] = useState(false)
    const {uploadedImage, setUploadIMage, switchPoint, setSwitchPoint,} = useContext(GlobalStorage)
// const { saveImage, setSaveImage, step, setStep, point, setPoint } = useContext(GlobalStorage);

    const [select, setSelect] = useState("");

  const {point, setPoint } = useContext(GlobalStorage);

        console.log("pointtttttttttt",point);


    const uploadImagefFront = (img)=>{
        // console.log(img);
        if(img)
        {
            setSwitchPoint("front");
            setUploadIMage(img)
            Navigate("/doctor/function/upload")
        }

    }

    const uploadImageRight = (img)=>{
        // console.log(img);
        if(img)
        {
            setSwitchPoint("right");
            setUploadIMage(img)
            Navigate("/doctor/function/upload")
        }

    }

    const uploadImageLeft = (img)=>{
        // console.log(img);
        if(img)
        {
            setSwitchPoint("left");
            setUploadIMage(img)
            Navigate("/doctor/function/upload")
        }

    }

    const uploadImageBack = (img)=>{
        // console.log(img);
        if(img)
        {
            setSwitchPoint("back");
            setUploadIMage(img)
            Navigate("/doctor/function/upload")
        }

    }
    console.log(select);
    const handleFront =() => {
        setSwitchPoint("front");
        Navigate("/doctor/camera")
    }
    const handleLeft =() => {
        setSwitchPoint("left");
        Navigate("/doctor/camera")
    }
    const handleBack =() => {
        setSwitchPoint("back");
        Navigate("/doctor/camera")
    }
    const handleRight =() => {
        setSwitchPoint("right");
        Navigate("/doctor/camera")
    }
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
                                <div>
                                    <div onClick={() => setShowDrop(!showDrop)} className={styles.inputDivDate}>
                                        <div>
                                            <p>{select ? select?.date : data[0].date}</p>
                                        </div>
                                        <div className={styles.dropDown}>
                                            <IoIosArrowForward />
                                        </div>
                                    </div>
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
                        <div className={styles.cardMiddle}>
                            <div className={styles.cardMiddleButton}>
                                <p> posture planning </p>
                                <div className={styles.cardMiddleButtonCircle}><IoIosArrowForward /></div>
                            </div>

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
                                        <div className={`${styles.inputRight}`}>
                                            <p>Height</p>
                                            <div className={styles.inputTextWrap}>
                                                <input type="text" />
                                                <p>cm</p>
                                                <p style={{ color: "#185EB6", fontSize: "15px" }}>/</p>
                                                <input type="text" />
                                                <p>cm</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.inputRightBUtton} mt-1`}>
                                    <div className={styles.newData}>
                                        <BsBoxArrowInRight />
                                        <p>New Data</p>
                                    </div>
                                    <div>
                                        <div className={styles.save}>

                                            <AiTwotoneSave />
                                            <p>Save</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={`${styles.bodyCard} me-4`}>
                        <p>Front</p>
                        <div className={styles.df}>
                               <img src={point.front} alt="" />
                            <div className={styles.camera} onClick={handleFront}>
                                <FaCamera size="25px" color='#185EB6' />
                            </div>
                            <div className={styles.upload}>
                                {/* <MdUpload size="25px" color='#185EB6' type='' /> */}
                                <input type="file" accept='file/image' onChange={(e)=> uploadImagefFront(e.target.files[0])} />
                                <MdUpload size="25px" color='#185EB6' />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bodyCard} me-4`}>
                        <p>Left</p>
                        <div className={styles.df}>
                        <img src={point.left} alt="" />
                            <div className={styles.camera} onClick={handleLeft}>
                                <FaCamera size="25px" color='#185EB6' />
                            </div>
                            <div className={styles.upload}>
                            <input type="file" accept='file/image' onChange={(e)=> uploadImageLeft(e.target.files[0])} />
                                <MdUpload size="25px" color='#185EB6' />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bodyCard} me-4`}>
                        <p>Back</p>
                        <div className={styles.df}>
                        <img src={point.back} alt="" />
                            <div className={styles.camera} onClick={handleBack}>
                                <FaCamera size="25px" color='#185EB6' />
                            </div>
                            <div className={styles.upload}>
                            <input type="file" accept='file/image' onChange={(e)=> uploadImageBack(e.target.files[0])} />
                                <MdUpload size="25px" color='#185EB6' />
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bodyCard} `}>
                        <p>Right</p>
                        <div className={styles.df}>
                             <img src={point.right} alt="" />
                            <div className={styles.camera} onClick={handleRight}>
                                <FaCamera size="25px" color='#185EB6' />
                            </div>
                            <div className={styles.upload}>
                            <input type="file" accept='file/image' onChange={(e)=> uploadImageRight(e.target.files[0])} />
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