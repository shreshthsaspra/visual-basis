import React, { useContext, useEffect, useState } from 'react';
import styles from './DiagnosisHistory.module.css';
import Logo from '../../../assests/shadowLogo.png';
import Cross from '../../../assests/cross.png';
import { ImCross } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import AccordianItem from '../../../components/Accordian/AccordianItem';
import axios from 'axios';
import moment from 'moment';
import GlobalStorage from '../../../Storage/ContextProvider';



const data = [


    {
        date: "09-10-2022",
        id:1
    },
    {
        date: "09-10-2022",
        id:2
    },
    {
        date: "09-10-2022",
        id:3
    },
    {
        date: "09-10-2022",
        id:4
    },
    {
        date: "09-10-2022",
        id:5
    },

]

const DiagnosisHistory = (props) => {
    // const state  = this.props.location()
    const {PateintDetails, setPateintDetails} = useContext(GlobalStorage);

    const [activeId, setActiveId] = useState();
    const [showId, setShowId] = useState();
    const handleShow = id => setShowId(id);
    const [isCheck, setIsCheck] = useState(false);
    const [history, setHistory] = useState();
    const toggle = (id) => {
        setActiveId(id)
    }
    const [isOpen, setIsOpen] = useState("");
    const [isClose, setIsClose] = useState("")
    // const handleShow = () => onShow && onShow(id);


    // console.log("UUID", state);
    const handleSubmit = (keyId) => {
        setIsOpen(keyId)
        // setIsOpen(isOpen?.length <=0?keyId: "");

        // console.log("UID", isOpen);
        // console.log("ID", id);

    }

    const handleCheckBox = (checkId) => {
        // setIsCheck(true)
        console.log(checkId);
    }

    useEffect(() => {
        getHistory()
      }, []);
    
      const getHistory = () => {
        axios({
          method: 'GET',
          url: `http://18.237.160.150/api/patient/history?id=${PateintDetails?.id}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        
        })
    
          .then(response => {
            console.log("HISTORY", response);
            setHistory(response.data)
          })
          .catch(error => {
            console.log('Patient not found', error.response.data.error);
          });
      };

       

console.log(history?.[0]?.point,"hhhhh");
    return ( 
        <>
            <div className={styles.main}>
                <div className={styles.nav}>
                    <div className={styles.navWrapper}>
                        <div className={styles.left}>
                            <img src={Logo} alt="" />
                            <p className='ms-2'>Diagnosis History</p>
                        </div>
                        <div className={styles.right}>
                            {/* <img className='' src={Cross} alt="" /> */}
                            <p
                                className={styles.crossIcon}
                            > x
                            </p>
                        </div>
                    </div>
                    <div className={styles.mainCard}>
                        <div className={styles.heading}>
                            <h2>Diagnosis History</h2>
                        </div>


                        <div className={styles.profileCard}>
                            <div className={styles.profileWrap}>
                                <div className={styles.profileLeft}>
                                    <h3>{`${PateintDetails?.first_name} ${PateintDetails?.last_name}`}</h3>
                                    <p>{`ID: ${PateintDetails?.id}`}</p>
                                </div>
                                <div className={styles.profileRight}>
                                    <p style={{ fontSize: '22px' }}>{history?.length}</p>
                                    <p style={{ fontSize: '12px' }}>Visits</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.search}>
                            <div className={styles.inputOuter}>
                                <input type="text" />
                                <ImSearch size="22px" color="grey" className={styles.iconinner} />
                            </div>
                            <div className={styles.sortBy}>

                                <select className={styles.selectStyle} name="cars" id="cars">
                                    <option value="volvo">Sort By</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className={styles.filterBy}>
                                <select className={styles.filterStyle} name="cars" id="cars">
                                    <option value="volvo">Filter By</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.mainTable}>
                            <div className={styles.tableHeading}>

                                <div className={styles.date}>
                                    <p>Date</p>
                                    <p className='ms-2 pt-1' style={{ fontSize: '11px' }}> (mm / dd/ yyyy)</p>
                                </div>
                            </div>
                            <div className={styles.tableBody}>
                                {history?.map((d, i) => (

                                    <div  className="mb-3">
                                        <div onClick={(e) =>{e.stopPropagation(); handleSubmit(d?.id)}} className={` ${isOpen == d?.id ?  styles.tableContentOpen: styles.tableContent} `}>
                                            <div className="d-flex align-items-center">
                                                <p>{moment(d?.created_at).format('MM-DD-YYYY')}</p>
                                               
                                                <input className='ms-2'
                                                //  checked={isCheck} 
                                                 type="radio" 
                                                 value="3"
                                                 name="hello"
                                                 onChange={() => handleCheckBox(d)}
                                                  />
                                            </div>
                                        </div>

                                        {
                                            isOpen == d?.id ? (
                                                <div className={styles.innerToggle}>
                                                    <div className={styles.innerFlex}>
                                                       {d?.services.map((service, i) => (
                                                        <p>{service}</p>
                                                       ))}
                                                        
                                                    </div>
                                                </div>
                                            ) : ""

                                        }
                                    </div>

                                    // <AccordianItem key={i} id={i} />


                                ))}
                            </div>

                            <div className={styles.buttonFlex}>
                                <button>Load</button>
                            </div>





                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default DiagnosisHistory