import React from 'react'
import styles from "./StaffClinical.module.css"
import Profile from '../../../../assests/profile.png'
import Icon from '../../../../assests/buttonIcon.png'
const multipleCourse = ['1']
function StaffClinical() {
    return (
        <div className={styles.title}>
            <p>Profesional Details</p>
            <form>
                <div className={` ${styles.formWrapTop} row  `}>

                    <div className="col-md-4">
                        <label className=''>Clinical Experience</label>
                    </div>
                    <div className=" col-md-6" style={{display:"flex", AllignItem:"center", gap:"10px"}}>
                        <input
                        style =  {{width:"8rem"}}
                            type="email"
                        // onChange={handleChange('email')}
                        // value={email}

                        />
                        <span style={{marginLeft:"30px", fontWeight:"600", opacity:".7"}}>(In Years)</span>
                    </div>
                   
                </div>

                <div className={` ${styles.formWrapTop} row`}>
                    <div className="col-md-4">
                        <label>No. of Consulted Pateints</label>
                    </div>
                    <div className="col-md-4">
                        <input
                         style =  {{width:"8rem"}}
                            type="text"
                        // onChange={handleChange('last_name')}
                        // value={last_name}
                        />


                    </div>
                  
                </div>
                <div className={` ${styles.formWrapTop} row `}>
                    <div className="col-md-4">
                        <label>Average Pateints Consult</label>

                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                        // onChange={handleChange('first_name')}
                        // value={first_name}
                        />

                    </div>



                </div>
                <div className={` ${styles.formWrapTop} row `}>
                    <div className="col-md-4">
                        <label>Email ID</label>

                    </div>
                    <div className="col-md-4">
                        <input
                            type="email"
                        // onChange={handleChange('first_name')}
                        // value={first_name}
                        />

                    </div>



                </div>
                <div className={` ${styles.formWrapTop} row `}>
                    <div className="col-md-4">
                        <label>Special Training (If any) </label>

                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                        // onChange={handleChange('first_name')}
                        // value={first_name}
                        />

                    </div>



                </div>
                <div className={` ${styles.formWrapTop} row `}>
                    <div className="col-md-4">
                        <label>Awards/Publications</label>

                    </div>
                    
                    <div className="col-md-4">
                        <textarea
                        className={styles.bottomTextArea}
                            type="text"
                        // onChange={handleChange('first_name')}
                        // value={first_name}
                        />

                    </div>



                </div>
                <div className="row">



                    <div className={styles.formButton}>
                        <div className="">
                            <button className={styles.buttonStyle}
                            // onClick={clickSubmit}
                            >Register<img className={styles.buttonImg} src={Icon} alt="" /></button>
                        </div>

                    </div>
                </div>


















            </form>
        </div >
    )
}

export default StaffClinical