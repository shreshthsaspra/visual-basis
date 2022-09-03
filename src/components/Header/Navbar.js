import React, { useState } from 'react'
import Logo from '../../assests/demoLogo.png';
import "./Navbar.css"

function Navbar() {
    const [showNav, setShowNav] = useState(false)
    const [expandLi, setExpandLi] = useState(false)
    const [expandLiPatient, setExpandLiPatient] = useState(false)
    return (
        <div className='navbarMain'>
            <div className={`showHide`} onClick={() => setShowNav(!showNav)}>
                {
                    showNav ? <i class="bi bi-x-lg "></i> :
                        <i class="bi bi-list "></i>
                }
            </div>
            <div className={`NavbarContainer ${showNav ? 'show' : 'hide'}`}>


                <div className='NavbarContainer__contentHide animation '>
                    <div className='NavbarContainer__content'>
                        <div className='NavbarContainer__content__logo'>
                            <img src={Logo} alt="" />
                            <button className='NavbarContainer__content__signOut'>Sign Out</button>
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