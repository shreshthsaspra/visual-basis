import React from 'react'
import styles from './PatientMap.module.css';
import Pimage from '../../../assests/imageTesting.jpeg'
import { useContext } from 'react';
import GlobalStorage from '../../../Storage/ContextProvider';

const mapPoins = {
    "status": "success",
    "message": {
      "keypoints": [
        [
          163,
          76
        ],
        [
          168,
          68
        ],
        [
          172,
          68
        ],
        [
          176,
          68
        ],
        [
          159,
          68
        ],
        [
          156,
          68
        ],
        [
          154,
          68
        ],
        [
          179,
          71
        ],
        [
          151,
          70
        ],
        [
          169,
          85
        ],
        [
          159,
          85
        ],
        [
          211,
          128
        ],
        [
          124,
          126
        ],
        [
          221,
          197
        ],
        [
          107,
          191
        ],
        [
          220,
          254
        ],
        [
          107,
          251
        ],
        [
          220,
          274
        ],
        [
          107,
          270
        ],
        [
          216,
          272
        ],
        [
          111,
          270
        ],
        [
          214,
          264
        ],
        [
          114,
          263
        ],
        [
          188,
          262
        ],
        [
          139,
          262
        ],
        [
          189,
          360
        ],
        [
          140,
          359
        ],
        [
          187,
          451
        ],
        [
          142,
          455
        ],
        [
          183,
          463
        ],
        [
          146,
          466
        ],
        [
          192,
          482
        ],
        [
          137,
          483
        ]
      ]
    }
  }

const PatientMap = () => {
    const {pointMap, point, setPointMap} = useContext(GlobalStorage)
    console.log("POINT MAP", pointMap);
    return (
        <>
            <div className={styles.mainDiv}>
                <div className={styles.wrap}>
                    
                    <img src={point.front} alt="" />
                    {
                        pointMap.front.map((p) => (
                            <div style={{
                                top:`${p[1]}px`,
                                left:`${p[0]}px`
                            }} className={styles.point}>

                            </div>
                        ))

                    }
                    
                </div>
            </div>
        </>
    )
}

export default PatientMap;