import React, { useContext, useState, useEffect } from 'react';
import styles from './EditSingle.module.css';
import Logo from '../../../assests/demoLogo.png'
import ShadoeLogo from '../../../assests/shadowLogo.png'

import GlobalStorage from '../../../Storage/ContextProvider';
import MetaPipe from './metapipe/MetaPipe';
import Movenet from './movenet/Movenet';


const EditSingle = () => {

    const { model } = useContext(GlobalStorage);



    return (
        <>

            {/* <CameraComponent /> */}
            <div className={styles.logoSection}>
                <img src={Logo} alt="" />
            </div>
            {
                model ==="mp"  && (
                    <MetaPipe />

                )
            }

            {
                model ==="mv" && (
                    
                        <Movenet />
                    
                )
            }
            


        </>
    )
}

export default EditSingle;