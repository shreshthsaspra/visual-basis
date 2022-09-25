import React, { useState, useEffect } from 'react'
import Header from '../../../components/DoctorHeader/Header'
import styles from './Patient.module.css'
import { ImCross } from "react-icons/im";
import PatientImg from '../../../assests/patientProfile.png';
import Reset from '../../../assests/reset.png';
import Icon from '../../../assests/buttonIcon.png'
import { ImSearch } from "react-icons/im";
import axios from 'axios';
import { getCookie } from '../../../Storage/auth';
import { Link } from 'react-router-dom';




const Patient = (e) => {

    const [patientId, setPatientId] = useState("");
    const [patientDetail, setPatientDetail] = useState();
    const [showProfile, setShowProfile] = useState(false);
    const token = getCookie('token')
    // 073823f3-d2aa-4a22-a958-0789c7a7ecfe


    useEffect(() => {

        const userDetails = async () => {
            let url1 = `http://18.237.160.150/api/user/get/`
            const userDetails = await axios({
                method: "get",
                url: url1,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            console.log("userDetails", userDetails);
            if (userDetails.status == 200) {
                localStorage.setItem('user', userDetails.data.role_id)
                localStorage.setItem('userdetail', JSON.stringify(userDetails.data))
            }
            console.log("usedetails", userDetails);
        }
        userDetails()
    }, [])

    const handleRemove = (e) => {
        e.preventDefault();
        setPatientId("");
        setShowProfile(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'GET',
            url: `http://18.237.160.150/api/patient/get/${patientId}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })

            .then(response => {
                console.log("PATIENT UUid SEARCH", response);
                setPatientDetail(response.data);
                setShowProfile(true)

            })
            .catch(error => {
                console.log('Patient not found', error.response.data.error);
            });
    }
    return (
        <>
            <Header />
            <div className={styles.patientBody}>
                <div className={styles.inputStyle}>
                    <div className={styles.inputWrap}>
                        <input
                            placeholder='Patient UUID'
                            type="text"
                            value={patientId}
                            onChange={(e) => setPatientId(e.target.value)}
                        />
                        <ImSearch onClick={handleSubmit} size="30px" color="grey" className={styles.iconinner} />
                    </div>
                    {/* <input placeholder='Patient UUID' type="text" /> */}
                    <ImCross
                        color="grey"
                        className='ms-3 mt-1'
                        onClick={handleRemove}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className={styles.mainCard}>
                    {
                        showProfile ? (
                            <>
                                <div className="row">
                                    <div className="col-lg-8 col-md-7">
                                        <div className={styles.left}>
                                            <img src={patientDetail.avatar} alt="" />
                                            <div className={styles.profileDetail}>
                                                <h3>{patientDetail?.first_name} {patientDetail?.last_name}</h3>
                                                <div className="d-flex mb-4">
                                                    <p className='me-4'>{patientDetail.age}, {patientDetail.gender}</p>
                                                    <p>{patientDetail.dob}</p>
                                                </div>

                                                <div className={styles.address}>
                                                    <p>
                                                        {patientDetail.address}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5">
                                        <div className={styles.wrap}>
                                            <div className={styles.buttonStyle}>
                                                <button>
                                                    <Link style={{ textDecoration: 'none' }} to="/Hospital/diagnosis-history">

                                                        Load Previous Data
                                                    </Link>
                                                </button>
                                            </div>
                                            <div className={styles.iconstyle}>
                                                <img src={Reset} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </>
                        ) : (
                            <div className={styles.noPaient}>
                                <p>Patient Details</p>
                            </div>
                        )
                    }






                </div>

                <div className={styles.subcard}>
                    <div className={styles.buttonDesign}>
                        <button>
                            <Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/doctor/function">

                                Function
                            </Link>
                        </button>
                        <button>Analysis</button>
                        <button>Motion Checking</button>
                        <button>Face Analysis</button>

                    </div>
                </div>
                <div className={styles.bottomButton}>
                    <button>
                        <Link style={{ textDecoration: 'none' }} to="/doctor/generate-report">

                        Generate Report <img className={styles.iconStyle} src={Icon} alt="" />
                        </Link>


                      </button>
                </div>
            </div>
        </>
    )
}

export default Patient