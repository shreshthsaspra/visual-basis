
import styles from "./StaffPersional.module.css";
import React, { useState, useEffect, useContext } from 'react'
import Logo from "../../../../assests/demoLogo.png"
import BedIcon from "../../../../assests/PATIENT ICON 1.png";
import Icon from '../../../../assests/buttonIcon.png'
import Profile from '../../../../assests/profile.png'
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { getCookie } from '../../../../Storage/auth';
import moment from 'moment';
import GlobalStorage from "../../../../Storage/ContextProvider";
function StaffPersional() {
    const currentDate = new Date();
    const [myMonth, setMyMonth] = useState(currentDate);
    const [myYear, setMyYear] = useState(currentDate);
    const [myDay, setMyDay] = useState(currentDate);
    const { currentStep, setCurrentStep } = useContext(GlobalStorage)


    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: '',
        dob: "2022-10-21",
        gender: "NA",
        age: 0,
        phone_number: "",
        zipcode: "",
        address: "",
        history: "",
        emergency_phone_number: '',
        prefecture: 'Aomori',
        btnText: "Register"
    })
    useEffect(() => {
        let ar = values?.dob.split('-')
        let date = new Date()
        let yr = date.getFullYear()
        let age = yr - ar?.[0]
        setValues({ ...values, age: age })
    }, [values.dob])

    const { first_name, last_name, email, dob, gender, age, phone_number, zipcode, prefecture, address, emergency_phone_number, history, btnText } = values;

    const minDate = new Date(myYear.getFullYear(), myMonth.getMonth(), 1);
    const maxDate = new Date(myYear.getFullYear(), myMonth.getMonth() + 1, 0);

    useEffect(() => {
        setMyDay(new Date(myYear.getFullYear(), myMonth.getMonth(), 1));


    }, [myMonth, myYear, setMyDay]);

    const renderDayContents = (day, date) => {
        if (date < minDate || date > maxDate) {
            return <span></span>;
        }
        return <span>{date.getDate()}</span>;
    };

    const handleChange = name => event => {
        console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();


        axios({
            method: 'POST',
            url: `http://18.237.160.150/api/patient/register/`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: { first_name, last_name, email, dob, gender, age, phone_number, zipcode, prefecture, emergency_phone_number, address, history }
        })
            .then(response => {
                console.log('Patient Register Successfully', response);
                setValues({
                    ...values, first_name: "",
                    last_name: "",
                    email: '',
                    dob: "",
                    gender: "",
                    age: 0,
                    phone_number: "",
                    zipcode: "",
                    address: "",
                    history: "",
                    emergency_phone_number: '',
                    prefecture: '',
                    btnText: "Register"
                });
                toast.success("Patient Register Successfully");
            })
            .catch(error => {
                console.log('Patient Register error', error.response.data.detail[0].msg);
                setValues({ ...values, buttonText: 'Register' });
                toast.error(error.response.data.detail[0].msg);
            });


    }


    // console.log("DATE OF BIRTH",dateOfBirth);

    const handlemonthChange = (date) => {
        setMyMonth(date);
        const dateOfBirth = `${moment(myYear).format("YYYY")}-${moment(date).format("MM")}-${moment(myDay).format("DD")}`;
        setValues({ ...values, dob: dateOfBirth });
    }

    const handleDayChange = (date) => {
        setMyDay(date);
        const dateOfBirth = `${moment(myYear).format("YYYY")}-${moment(myMonth).format("MM")}-${moment(date).format("DD")}`;
        setValues({ ...values, dob: dateOfBirth });

    }

    const handleYearChange = (date) => {
        setMyYear(date);

        const dateOfBirth = `${moment(date).format("YYYY")}-${moment(myMonth).format("MM")}-${moment(myDay).format("DD")}`;
        setValues({ ...values, dob: dateOfBirth });
    }

    return (
        <div className={styles.title}>
            <p>Persional Details</p>
            <form>
                <div className="formTop">
                    <div className="row">
                        <div className="col-md-10">

                            <div className={` ${styles.formWrapTop} row`}>
                                <div className="col-md-3">
                                    <label>User ID</label>
                                </div>
                                <div className="col-md-9">
                                    <input
                                        type="text"
                                        onChange={handleChange('last_name')}
                                        value={last_name}
                                    />


                                </div>

                            </div>

                            <div className={` ${styles.formWrapTop} row `}>
                                <div className="col-md-3">
                                    <label>Create Password</label>

                                </div>
                                <div className="col-md-9">
                                    <input
                                        type="text"
                                        onChange={handleChange('first_name')}
                                        value={first_name}
                                    />

                                </div>



                            </div>
                            <div className={` ${styles.formWrapTop} row `}>
                                <div className="col-md-3">
                                    <label>Confirm Password</label>

                                </div>
                                <div className="col-md-9">
                                    <input
                                        type="text"
                                        onChange={handleChange('first_name')}
                                        value={first_name}
                                    />

                                </div>



                            </div>






                        </div>
                        <div className="col-md-2">
                            <img className={styles.profileImage} src={Profile} alt="" />
                        </div>

                    </div>

                    <div className={` ${styles.formWrap} row w-100% `}>



                        <div className="col-md-6 d-flex">
                            <div className="">
                                <label className=''>Family Name</label>
                            </div>
                            <div className=" ms-5">
                                <input
                                    type="email"
                                    onChange={handleChange('email')}
                                    value={email}

                                />
                            </div>
                        </div>
                        <div className={` col-md-6 d-flex`}>
                            <div className="">
                                <label>First Name</label>

                            </div>
                            <div className='ms-3'>
                                <input
                                    type="text"
                                    onChange={handleChange('phone_number')}
                                    value={phone_number}

                                />
                            </div>
                        </div>



                    </div>
                  
                </div>     
              
                <div className={` ${styles.formWrap} row `}>



                    <div className="col-md-6 d-flex">
                        <div className="">
                            <label className=''>Family Name</label>
                        </div>
                        <div className=" ms-5">
                            <input
                                type="email"
                                onChange={handleChange('email')}
                                value={email}

                            />
                        </div>
                    </div>
                    <div className={` col-md-6 d-flex`}>
                        <div className="">
                            <label>First Name</label>

                        </div>
                        <div className='ms-3'>
                            <input
                                type="text"
                                onChange={handleChange('phone_number')}
                                value={phone_number}

                            />
                        </div>
                    </div>



                </div>
                <div className={` ${styles.formWrap} row `}>



                    <div className="col-md-6 d-flex">
                        <div className="">
                            <label className=''>Date</label>
                        </div>
                        <div className="ms-5 d-flex">
                            <div className={`${styles.dobInput}`}>
                                <DatePicker
                                    selected={myYear}
                                    onChange={(date) => handleYearChange(date)}
                                    showYearPicker
                                    dateFormat="yyyy"
                                />
                            </div>

                            <div className={`${styles.monthInput} ms-1`}>
                                <DatePicker
                                    showMonthYearPicker
                                    dateFormat="MM"
                                    renderCustomHeader={({ date }) => <div></div>}
                                    selected={myMonth}
                                    onChange={(date) => handlemonthChange(date)}
                                />
                            </div>

                            <div className={`${styles.dayInput} ms-1`}>
                                <DatePicker
                                    dateFormat="dd"
                                    renderCustomHeader={({ date }) => <div></div>}
                                    selected={myDay}
                                    renderDayContents={renderDayContents}
                                    onChange={(date) => handleDayChange(date)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={` col-md-6 d-flex`}>
                        <div className="">
                            <label>Gender</label>

                        </div>
                        <div className='ms-5'>

                            <select className={styles.select} name="gender" id="gender" onChange={handleChange('gender')} value={gender}>
                                <option value="NA">NA</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>
                    </div>



                </div>
                <div className={` ${styles.formWrap} row `}>



                    <div className="col-md-6 d-flex">
                        <div className="">
                            <label className=''>Email</label>
                        </div>
                        <div className={`${styles.emailInp}`} >
                            <input
                                type="email"
                                onChange={handleChange('email')}
                                value={email}

                            />
                        </div>
                    </div>
                    <div className={` col-md-6 d-flex`}>
                        <div className="">
                            <label>Mobile No.</label>

                        </div>
                        <div className='ms-3'>
                            <input
                                type="text"
                                onChange={handleChange('phone_number')}
                                value={phone_number}

                            />
                        </div>
                    </div>



                </div>
                <div className={` ${styles.formWrap} row `}>



                    <div className="col-md-8 d-flex">
                        <div className="">
                            <label className=''>Zip Code</label>
                        </div>
                        <div className={`${styles.ZipInp}`} >
                            <input
                                type="text"
                                onChange={handleChange('email')}
                                value={email}

                            />
                        </div>
                    </div>
                </div>
                  <div className="formBottom">
                    <div className="">
                        <div className={` ${styles.historyAdd} `}>
                            <div className="d-flex">
                                <div className={styles.addressSpace}>
                                    <label className=''>Address</label>
                                </div>
                                <div className={`${styles.textAreaDesigne} ms-5 w-100`}>
                                    <textarea
                                        className={styles.bottomTextArea}
                                        style={{ width: '100%' }}
                                        type="text"
                                        onChange={handleChange('address')}
                                        value={address}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">



                        <div className={styles.formButton}>
                            <div className="">
                                <button className={styles.buttonStyle} onClick={()=>setCurrentStep(currentStep + 50)}>Proceed <img className={styles.buttonImg} src={Icon} alt="" /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default StaffPersional