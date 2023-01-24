import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import '../navbar/navbar.css'


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <div className="container-fluid custom_container">
            {/* <!-- HEADER --> */}
            <header>
                <nav className="navbar">
                    <div className="container">
                        <div className='app-heading'>
                            <NavLink to="/" className="app-heading-a"><li><MdOutlineAppSettingsAlt /> Get The App</li></NavLink>
                        </div>
                        <div className="menu-icon" onClick={handleShowNavbar}>
                            <FaBars color="white" size={20} className='menu-icon-bs' />
                        </div>
                        <div className={`nav-elements  ${showNavbar && 'active'}`}>
                            <ul>
                                <li>
                                    <NavLink>
                                        <div className="menu-icon" onClick={handleShowNavbar}>
                                            <AiOutlineClose color="black" size={22} className='menu-icon-bs' />
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink>
                                        <img className='navlink-image' src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"} alt="" />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink data-bs-toggle="modal" data-bs-target="#login">Add restaurant</NavLink>
                                </li>
                                <li>
                                    <NavLink data-bs-toggle="modal" data-bs-target="#login">Log In</NavLink>
                                </li>
                                <li>
                                    <NavLink data-bs-toggle="modal" data-bs-target="#signup">Sign Up</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="head">
                    <img className="logo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                    <h3 className='logo-heading'>Discover the best food & drinks in Delhi NCR</h3>
                    <div className="search">
                        <img className="logo1" src="https://icons8.com/icon/13800/location" alt="" />
                        <div className="search-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <HiLocationMarker size={25} color="rgb(255, 126, 139)" />
                            <p className="search-para">
                                <select name="membership" id="membership" className='search-option'>
                                    <option value="silver" selected>Spark Eighteen, New Delhi</option>
                                </select></p>
                        </div>
                        <div className="search-item">
                            <i className="fas fa-search"></i>
                            <BsSearch size={40} className="location-marker"/>
                            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='search-para-2' />
                        </div>
                    </div>
                </div>
                <div className="header-image">
                    <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
                </div>
            </header>
        </div>
    );
}
export default Navbar;


