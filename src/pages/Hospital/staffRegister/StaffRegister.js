
import React from 'react'
import styles from "./StaffRegister.module.css"
import Logo from "../../../assests/demoLogo.png"
import Staff from "../../../assests/staff.png";
import Icon from '../../../assests/buttonIcon.png'
import Profile from '../../../assests/profile.png'
import { NavLink } from 'react-router-dom'

function StaffRegister() {
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
              <img src={Staff} alt="" />
              <div className={styles.PateintRegister__body__leftCard__body}>
                <p>STAFF</p>
                <NavLink to="/Hospital/staffmanagement" style={{ textDecoration: "none" }}>
                  <h4>Registration</h4>
                </NavLink>
                <NavLink to="/Hospital/staffSearch" style={{ textDecoration: "none" }}>
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
                      <div className='ms-4'>
                        <input type="text" />
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
                    <div className="col-md-9">
                      <input type="text" />
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
                      <input type="text" />
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
                      <input type="text" />
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

export default StaffRegister;