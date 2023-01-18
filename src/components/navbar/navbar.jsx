import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (<div className="container-fluid custom_container">
        {/* <!-- HEADER --> */}
        <header>
            <div className="nav">
                <div className='app-heading'>
                    <a href="/"><li><MdOutlineAppSettingsAlt /> Get The App</li></a>
                </div>
                <nav className="nav-bar">
                    <Link>Add Restaurant</Link>
                    <Link data-bs-toggle="modal" data-bs-target="#login">Log In</Link>
                    <Link data-bs-toggle="modal" data-bs-target="#signup">Sign Up</Link>
                </nav>
            </div>
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
                        <BsSearch size={40} />
                        <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
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


