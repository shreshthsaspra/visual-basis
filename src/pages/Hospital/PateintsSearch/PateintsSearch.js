import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./PateintsSearch.module.css"
import Logo from "../../../assests/demoLogo.png"
import BedIcon from "../../../assests/PATIENT ICON 1.png";
import Icon from '../../../assests/buttonIcon.png'
import axios from 'axios';
import { getCookie } from '../../../Storage/auth';


import { ImSearch } from "react-icons/im";


function PateintsSearch() {
  const [patientName, setPatientName] = useState("");
  const [patientUuid, setPatientUuid] = useState("");

  const [patients, setPateints] = useState([]);
  const [patientNameSearch, setPatientNameSearch] = useState([])
  const [patientUuidSearch, setPatientUuidSearch] = useState([])

  // const token = getCookie('token');


  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = () => {
    axios({
      method: 'GET',
      url: `http://18.237.160.150/api/patient/get/all`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })

      .then(response => {
        console.log("PATIENT", response);
        setPateints(response.data)
      })
      .catch(error => {
        console.log('Patient not found', error.response.data.error);
      });
  };

  // useEffect(() => {
  //   getPatientNameResults();
  // }, []);

  const handlePatientNameSearch = (e) => {
    e.preventDefault();
    setPatientUuid("")
    axios({
      method: 'GET',
      url: `http://18.237.160.150/api/patient/search?name=${patientName}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })

      .then(response => {
        console.log("PATIENT SEARCH", response);
        setPatientNameSearch(response.data)
      })
      .catch(error => {
        console.log('Patient not found', error.response.data.error);
      });
  };

  const handlePatientUuidSearch = (e) => {
    e.preventDefault();
    setPatientName("")
    axios({
      method: 'GET',
      url: `http://18.237.160.150/api/patient/get/${patientUuid}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })

      .then(response => {
        console.log("PATIENT UUid SEARCH", response);
        setPatientNameSearch([response.data])
      })
      .catch(error => {
        console.log('Patient not found', error.response.data.error);
      });
  }


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
                  <h4 className={styles.PateintRegister__body__leftCard__bodySeacrh}>Registration</h4>
                </NavLink>
                <NavLink to="/Hospital/PateintSearch" style={{ textDecoration: "none" }}>
                  <h4 >Search</h4>
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
            <h2>PATIENT SEARCH</h2>
            <div className={styles.searchBody}>
              <div className={styles.search}>
                <div className={styles.inputWrap}>
                     <input 
                     placeholder='Patient UUID'
                      type="text"
                      value={patientUuid}
                      onChange={(e) => setPatientUuid(e.target.value)}

                      />
                      <ImSearch  onClick={handlePatientUuidSearch} size="30px" color="grey" className={styles.iconinner} />
                </div>

                <div className={styles.inputWrap}>
                <input 
                placeholder='Patient Name'
                 type="text"
                  value={patientName} 
                  onChange={(e) => setPatientName(e.target.value)}
                 
                 />
                      <ImSearch onClick={handlePatientNameSearch} size="30px" color="grey" className={styles.iconinner} />
                </div>
                <img style={{cursor:'pointer'}} src={Icon} alt="" />
              </div>
            </div>

            <div className={styles.mainBody}>
              {
                patientNameSearch?.map(p => (
                  <>
                    {
                      p.first_name && p.last_name && (
                        <div className={styles.singlePatient}>
                          <p>{`${p.first_name} ${p.last_name}`}</p>
                        </div>
                      )
                    }

                    {
                      !p.first_name && !p.last_name && (
                        <div className={styles.singlePatient}>
                          <p>Without Name</p>
                        </div>
                      )
                    }

                  </>
                ))
              }

              {/* <div className={styles.singlePatient}>
                <p>Patient 2</p>
              </div>

              <div className={styles.singlePatient}>
                <p>Patient 3</p>
              </div>

              <div className={styles.singlePatient}>
                <p>Patient 4</p>
              </div>

              <div className={styles.singlePatient}>
                <p>Patient 5</p>
              </div>

              <div className={styles.singlePatient}>
                <p>Patient 6</p>
              </div> */}


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PateintsSearch