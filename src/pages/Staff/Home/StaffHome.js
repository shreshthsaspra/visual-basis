
import styles from "./StaffHome.module.css";
import React, { useState, useEffect } from 'react'
import Logo from "../../../assests/demoLogo.png"
import BedIcon from "../../../assests/PATIENT ICON 1.png";
import Icon from '../../../assests/buttonIcon.png'
import Profile from '../../../assests/profile.png'
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { getCookie } from '../../../Storage/auth';
import moment from 'moment';
import StaffPersional from "./Components/StaffPersional";
import StaffAcedemic from "./Components/StaffAcedemic";
import StaffClinical from "./Components/StaffClinical";
import { useContext } from "react";
import GlobalStorage from "../../../Storage/ContextProvider";
function StaffHome() {
  const currentDate = new Date();
  const { currentStep, setCurrentStep } = useContext(GlobalStorage)
  const [myMonth, setMyMonth] = useState(currentDate);
  const [myYear, setMyYear] = useState(currentDate);
  const [myDay, setMyDay] = useState(currentDate);



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


  // const dateOfBirth = `${moment(myYear).format("YYYY")}-${moment(myMonth).format("MM")}-${moment(myDay).format("DD")}`;

  return (
    <>

      <ToastContainer />
      <div className={styles.upperLogo}>
        <img src={Logo} alt="" />

      </div>

      <div
        className={styles.PateintRegister}
      >

        <div className={styles.PateintRegister__body}>

          <div className={styles.PateintRegister__body__left}>
            <div className={styles.PateintRegister__body__leftCard}>
              <img src={BedIcon} alt="" />
              <div className={styles.PateintRegister__body__leftCard__body}>
                <p>PATIENT</p>
                <NavLink to="/Hospital/pateintmanagement" style={{ textDecoration: "none" }}>
                  <h4>Registration</h4>
                </NavLink>
                <NavLink to="/Hospital/PateintSearch" style={{ textDecoration: "none" }}>
                  <h4 className={styles.PateintRegister__body__leftCard__bodySeacrh}>Search</h4>
                </NavLink>
              </div>
            </div>
            <div className={styles.PateintRegister__body__leftGoback}>
              <NavLink to="/Hospital" style={{ textDecoration: "none" }}>
                <h4 className={styles.PateintRegister__body__leftCard__bodyGoback}>Go Back</h4>
              </NavLink>
            </div>
          </div>
          <div className={styles.PateintRegister__body__rightTop} >
            <div className={styles.progress}>
              <div className={styles.progressOutline}>
                <div className={styles.progressOutlineColor} style={{ width: `${currentStep}%` }}>

                </div>
                <div>

                </div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className={styles.PateintRegister__body__right}>
              <StaffPersional />
              {/* <StaffAcedemic/> */}
              {/* <StaffClinical /> */}
            </div>


          </div>
        </div>
      </div>
    </>

  )
}

export default StaffHome
