
import React, { useState, useEffect } from 'react'
import styles from "./PateintRegister.module.css"
import Logo from "../../../assests/demoLogo.png"
import BedIcon from "../../../assests/PATIENT ICON 1.png";
import Icon from '../../../assests/buttonIcon.png'
import Profile from '../../../assests/profile.png'
import { NavLink } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { getCookie} from '../../../Storage/auth';
import moment from 'moment';




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
    gender: "NA",
    age: 0,
    phone_number: "",
    zipcode: "",
    address: "",
    history:"",
    emergency_phone_number:'',
    prefecture:'Aomori',
    btnText: "Register"
  })

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
        setValues({ ...values, first_name: "",
        last_name: "",
        email: '',
        dob: "",
        gender: "",
        age: 0,
        phone_number: "",
        zipcode: "",
        address: "",
        history:"",
        emergency_phone_number:'',
        prefecture:'',
        btnText: "Register" });
        toast.success("Patient Register Successfully");
    })
    .catch(error => {
        console.log('Patient Register error', error.response.data.detail[0].msg);
        setValues({ ...values, buttonText: 'Register'});
        toast.error(error.response.data.detail[0].msg);
    });


}


// console.log("DATE OF BIRTH",dateOfBirth);

const handlemonthChange = (date) => {
      setMyMonth(date);
      const dateOfBirth = `${moment(myYear).format("YYYY")}-${moment(date).format("MM")}-${moment(myDay).format("DD")}`;
      setValues({ ...values, dob: dateOfBirth});
}

const handleDayChange = (date) => {
  setMyDay(date);
  const dateOfBirth = `${moment(myYear).format("YYYY")}-${moment(myMonth).format("MM")}-${moment(date).format("DD")}`;
      setValues({ ...values, dob: dateOfBirth});

}

const handleYearChange = (date) => {
  setMyYear(date);

  const dateOfBirth = `${moment(date).format("YYYY")}-${moment(myMonth).format("MM")}-${moment(myDay).format("DD")}`;
      setValues({ ...values, dob: dateOfBirth});
}


// const dateOfBirth = `${moment(myYear).format("YYYY")}-${moment(myMonth).format("MM")}-${moment(myDay).format("DD")}`;
console.log("DOB", dob);

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
          <div className={styles.PateintRegister__body__right}>
            <form>
              <div className="formTop">
                <div className="row">
                  <div className="col-md-9">

                    <div className={` ${styles.formWrap} row`}>
                      <div className="col-md-3">
                        <label>Family Name</label>
                      </div>
                      <div className="col-md-9">
                        <input
                          type="text"
                          onChange={handleChange('last_name')}
                          value={last_name}
                        />

                      </div>

                    </div>

                    <div className={` ${styles.formWrap} row `}>
                      <div className="col-md-3">
                        <label>First Name</label>

                      </div>
                      <div className="col-md-9">
                        <input
                         type="text" 
                         onChange={handleChange('first_name')}
                          value={first_name}
                         />

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



                      <div className="d-flex ps-5">
                        <label className='pe-2'>Age</label>
                        <div className="">
                          <input
                           className={styles.ageInput}
                            type="text"
                            onChange={handleChange('age')}
                            value={age}
                            
                            />
                        </div>
                      </div>
                    </div>


                    <div className={` ${styles.formWrap} row`}>
                      <div className="col-md-3">
                        <label>Gender</label>

                      </div>
                      <div className={`${styles.selectPadding} col-md-9`}>
                        <select className={styles.select} name="gender" id="gender" onChange={handleChange('gender')} value={gender}>
                          <option value="NA">NA</option>
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
                          <input
                           type="text"
                           onChange={handleChange('zipcode')}
                            value={zipcode}
                           />
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
                        <select className={styles.select} style={{ width: "230px" }} name="gender" id="gender">
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
                          <input 
                          type="email"
                          onChange={handleChange('email')}
                           value={email}

                           />
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
                        <input 
                        type="text" 
                        onChange={handleChange('phone_number')} 
                        value={phone_number}
                        
                        />
                      </div>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className={` ${styles.formWrap} `}>
                      <div className="d-flex">
                        <div className={styles.emerSpace}>
                          <label 
                          onChange={handleChange('emergency_phone_number')}
                          value={emergency_phone_number}
                          
                          className=''>Emergency No.</label>
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
                        <label>Doctor</label>

                      </div>
                      <div className='col-md-8 '>
                        <select className={styles.select} style={{ width: "230px" }} name="gender" id="gender">
                          <option value="NA">NA</option>
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
                  <div className="col-md-9">
                    <div className={` ${styles.formWrap} `}>
                      <div className="d-flex">
                        <div className={styles.addressSpace}>
                          <label className=''>History</label>
                        </div>
                        <div className={`${styles.textAreaDesigne} ms-5 w-100`}>
                          <textarea 
                          wrap="off" cols="30" rows="5"
                           className={styles.bottomTextArea}
                            style={{ width: '100%' }}
                            type="text"
                            onChange={handleChange('history')} 
                            value={history}
                            
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={styles.formButton}>
                      <div className="wrap">
                        <button className={styles.buttonStyle} onClick={clickSubmit}>{btnText} <img className={styles.buttonImg} src={Icon} alt="" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    </>

  )
}

export default PateintRegister