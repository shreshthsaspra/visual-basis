import React, { useContext } from 'react'
import styles from './Analysis.module.css';
import Logo from '../../../../assests/demoLogo.png';

import PateintHeading from '../../../../components/PateintHeading/PateintHeading';

const textName = {
    text1: "Front Face",
    text2: "Side Face"
}
const Analysis = () => {

    return (
        <>
            <div className={styles.image}>
                <img src={Logo} alt="" />
            </div>

            <PateintHeading
                buttonText={textName}
            />

            <div className={styles.containerMain}>
                <div className={styles.buttonWrap}>
                    <button>Image Points</button>
                    <button>Distance Mapping</button>

                    <button>Characterstics</button>

                    <button>Distance Analysis</button>

                    <button>Angular Analysis</button>

                </div>
            </div>



        </>
    )
}

export default Analysis;