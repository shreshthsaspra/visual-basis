import React from 'react'
import styles from './Screening.module.css';
import ReactSlider from 'react-slider'

const Screening = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.containerDiv}>

          <div className={styles.row}>
            <button>Physical Condition</button>
            <div className={styles.color}></div>
            <div className={styles.input}>
              <p className='px-3'>Very Terrible</p>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
              />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Screening;