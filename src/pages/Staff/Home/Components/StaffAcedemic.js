import React from 'react'
import styles from './StaffAcedemic.module.css'
import Profile from '../../../../assests/profile.png'
import Icon from '../../../../assests/buttonIcon.png'
const multipleCourse = ['1']
function StaffAcedemic() {
    return (
        <div className={styles.title}>
            <p>Acedemic Details/Education Profile</p>
            <form>

                <div className="row">


                    <div className="col-md-12" style={{ display: "flex" }}>
                        {
                            multipleCourse?.map(item => {
                                return (
                                    <div className={` ${styles.formWrap} row`}>
                                        <div className="col-md-8">
                                            <label>Course</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                            // onChange={handleChange('last_name')}
                                            // value={last_name}
                                            />


                                        </div>

                                    </div>
                                )
                            })
                        }
                        <div className={` ${styles.formWrap} row`}>
                            <div className="col-md-4">

                            </div>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                // onChange={handleChange('last_name')}
                                // value={last_name}
                                />


                            </div>

                        </div>
                    </div>

                    <div className={` ${styles.formWrap} row`}>
                        <div className="col-md-4">
                            <label>Year</label>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                            // onChange={handleChange('last_name')}
                            // value={last_name}
                            />


                        </div>

                    </div>
                </div>

                <div className={` ${styles.formWrapTop} row  `}>

                    <div className="col-md-4">
                        <label className=''>Yuniversity</label>
                    </div>
                    <div className=" col-md-4">
                        <input
                            type="email"
                        // onChange={handleChange('email')}
                        // value={email}

                        />
                    </div>

                </div>

                <div className={` ${styles.formWrapTop} row`}>
                    <div className="col-md-4">
                        <label>Medical Licence Number</label>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                        // onChange={handleChange('last_name')}
                        // value={last_name}
                        />


                    </div>

                </div>
                <div className={` ${styles.formWrapTop} row `}>
                    <div className="col-md-4">
                        <label>Language Known</label>

                    </div>
                    <div className="col-md-4">
                        <input
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
                            >Proceed <img className={styles.buttonImg} src={Icon} alt="" /></button>
                        </div>

                    </div>
                </div>


















            </form>
        </div>
    )
}

export default StaffAcedemic