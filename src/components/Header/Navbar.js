import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../assests/demoLogo.png';
import { isAuth, signout } from '../../Storage/auth';
import { GlobalStorage } from '../../Storage/ContextProvider';
import "./Navbar.css";
import {useNavigate } from 'react-router-dom'

// import {GlobalStorage} from "../../Storage/ContextProvider"

function Navbar() {
    const {pateints,login} = useContext(GlobalStorage)
    const [showNav, setShowNav] = useState(false)
    const [expandLi, setExpandLi] = useState(false)
    const [expandLiPatient, setExpandLiPatient] = useState(false)
    const[pateintsValue, setPateints]  = pateints
    const[loggedIn, SetloggiedIn]  = login

    const navigation = useNavigate();

    
//    useEffect(() => {
//     SetloggiedIn(true)
//     setPateints([{name:"pravin", bloodG:"O+"},{name:"harsh",bloodG:"B+"}])
//    },[])
   
    // console.log(loggedIn);

    const hideSidebar = () => {
        setShowNav(false)
    }
   
    return (
        <div className='navbarMain'>
            <div className={`showHide`} onClick={() => setShowNav(!showNav)}>
                {
                    showNav ? <i className="bi bi-x-lg "></i> :
                        <i className="bi bi-list "></i>
                }
            </div> 
            <div className={`NavbarContainer ${showNav ? 'show' : 'hide'}`}>


                <div className='NavbarContainer__contentHide animation '>
                    <div className='NavbarContainer__content'>
                        <div className='NavbarContainer__content__logo'>
                            <img src={Logo} alt="" />
                            <button className='NavbarContainer__content__signOut' onClick={() => { setShowNav(false); signout(() => navigation(`/`)) }}>Sign Out</button>
                        </div>
                        <div>
                            <ul>
                                <li className=' stafmanagement__head' onClick={() => setExpandLi(!expandLi)}><span>+</span>
                                    Staff Management

                                </li>
                                <ul onClick={(e) => e.stopPropagation()} className={`staffMangaemnet ${expandLi ? 'expnadli' : 'hideLi'}`}>
                                    <li style={{ listStyle: "outside" }}>Registration</li>
                                    <li>Management</li>
                                </ul>
                                <li className=' stafmanagement__head' onClick={() => setExpandLiPatient(!expandLiPatient)}><span>+</span>
                                    Patient Management

                                </li>
                                <ul onClick={(e) => e.stopPropagation()} className={`staffMangaemnet ${expandLiPatient ? 'expnadli' : 'hideLi'}`}>
                                    <li>Registration</li>
                                    <li>Search</li>
                                </ul>
                                <li className='stafmanagement__head '>Diagnostic Screen</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar