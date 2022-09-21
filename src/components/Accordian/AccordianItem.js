import React, {useState} from 'react';
import styles from './Accordian.module.css'

const AccordianItem = ({
    id,
    show,
    onShow,

    activeId,
    keyId,

}) => {
    const [isOpen, setIsOpen] = useState();
    // const handleShow = () => onShow && onShow(id);
    const handleSubmit = () => {
        setIsOpen(!isOpen)
        console.log("UID", isOpen);
        console.log("ID", id);

    }

    console.log(isOpen == id);
    return (

        <>
            <div className="mb-3">
                <div  onClick={() => handleSubmit()} className={styles.tableContent}>
                    <div className="d-flex align-items-center">
                        <p>09-02-2000</p>
                        {/* <input className='ms-2' type="checkbox" value="3" /> */}
                    </div>
                </div>

                {
                    isOpen ? (
                        <h3 className="text-center">
                            Hello from Harsh
                        </h3>
                    ) : ""

                }
            </div>

        </>
    )
}

export default AccordianItem