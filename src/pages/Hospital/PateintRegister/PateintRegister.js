
import React, { useState, useEffect } from 'react'
import styles from "./PateintRegister.module.css"
import Logo from "../../../assests/demoLogo.png"
import BedIcon from "../../../assests/PATIENT ICON 1.png";
import Icon from '../../../assests/buttonIcon.png'
import Profile from '../../../assests/profile.png'
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';

function PateintRegister() {

  const currentDate = new Date();
  const [myMonth, setMyMonth] = useState(currentDate);
  const [myYear, setMyYear] = useState(currentDate);
  const [myDay, setMyDay] = useState(currentDate);


  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: '',
    dob: "",
    gender:"",
    age:0,
    phone_number:"",
    zipcode:"",
    address:"",
    btnText: "Register"
})

const { first_name, last_name, email, dob, gender, age, phone_number, zipcode, address, btnText } = values;

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


  return (
    <>
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
          <div className={styles.PateintRegister__body__right}>

            <div className="formTop">
              <div className="row">
                <div className="col-md-9">

                  <div className={` ${styles.formWrap} row`}>
                    <div className="col-md-3">
                      <label>Family Name</label>
                    </div>
                    <div className="col-md-9">
                      <input type="text" />

                    </div>

                  </div>

                  <div className={` ${styles.formWrap} row`}>
                    <div className="col-md-3">
                      <label>First Name</label>

                    </div>
                    <div className="col-md-9">
                      <input type="text" />

                    </div>



                  </div>

                  <div className={` ${styles.formWrap} d-flex `}>
                    <div className="d-flex">
                      <div className="">
                        <label className={styles.birthspace}>Birth Of Date</label>
                      </div>
                      <div className={`${styles.dobInput} ms-4`}>
                        <DatePicker
                          selected={myYear}
                          onChange={(date) => setMyYear(date)}
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
                          onChange={(date) => setMyMonth(date)}
                        />
                      </div>

                      <div className={`${styles.dayInput} ms-1`}>
                        <DatePicker
                          dateFormat="dd"
                          renderCustomHeader={({ date }) => <div></div>}
                          selected={myDay}
                          renderDayContents={renderDayContents}
                          onChange={(date) => setMyDay(date)}
                        />
                      </div>
                    </div>



                    <div className="d-flex ps-5">
                      <label className='pe-2'>Age</label>
                      <div className="">
                        <input className={styles.ageInput} type="text" />
                      </div>
                    </div>
                  </div>


                  <div className={` ${styles.formWrap} row`}>
                    <div className="col-md-3">
                      <label>Gender</label>

                    </div>
                    <div className={`${styles.selectPadding} col-md-9`}>
                      <select name="gender" id="gender">
                        <option value="">NA</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                  </div>





                </div>
                <div className="col-md-3">
                  <img className={styles.profileImage} src={Profile} alt="" />
                </div>
              </div>
            </div>
            <div className="formMiddle">
              <div className="row">
                <div className="col-md-6">
                  <div className={` ${styles.formWrap} `}>
                    <div className="d-flex">
                      <div className={styles.space}>
                        <label className=''>Zip Code</label>
                      </div>
                      <div className='ms-5'>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={` ${styles.formWrap} row`}>
                    <div className="col-md-4">
                      <label>Prefecture</label>

                    </div>
                    <div className='col-md-8 '>
                      <select style={{ width: "210px" }} name="gender" id="gender">
                        <option value="">NA</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className={` ${styles.formWrap} `}>
                    <div className="d-flex">
                      <div className={styles.emailSpace}>
                        <label className=''>Email ID</label>
                      </div>
                      <div className='ms-5'>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={` ${styles.formWrap} row`}>
                    <div className="col-md-4">
                      <label>Phone No .</label>

                    </div>
                    <div className='col-md-8 '>
                      <input type="text" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className={` ${styles.formWrap} `}>
                    <div className="d-flex">
                      <div className={styles.emerSpace}>
                        <label className=''>Emergency No.</label>
                      </div>
                      <div className=''>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={` ${styles.formWrap} row`}>
                    <div className="col-md-4">
                      <label>Doctor's List</label>

                    </div>
                    <div className='col-md-8 '>
                      <select style={{ width: "210px" }} name="gender" id="gender">
                        <option value="">NA</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="formBottom">
              <div className="">
                <div className={` ${styles.formWrap} `}>
                  <div className="d-flex">
                    <div className={styles.addressSpace}>
                      <label className=''>Address</label>
                    </div>
                    <div className=' ms-5 w-100'>
                      <textarea className={styles.bottomTextArea} style={{ width: '100%' }} type="text" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-9">
                  <div className={` ${styles.formWrap} `}>
                    <div className="d-flex">
                      <div className={styles.addressSpace}>
                        <label className=''>History</label>
                      </div>
                      <div className=' ms-5 w-100'>
                        <textarea wrap="off" cols="30" rows="5" className={styles.bottomTextArea} style={{ width: '100%' }} type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={styles.formButton}>
                    <div className="wrap">
                      <button className={styles.buttonStyle}>Register <img className={styles.buttonImg} src={Icon} alt="" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default PateintRegister