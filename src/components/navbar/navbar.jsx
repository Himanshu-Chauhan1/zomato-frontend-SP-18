import React from 'react';
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";


const navbar = () => {
    return (<div className="container-fluid custom_container">
        {/* <!-- HEADER --> */}
        <header>
            <div class="nav">
                <div className='app-heading'>
                    <a href="/"><li><MdOutlineAppSettingsAlt /> Get The App</li></a>
                </div>
                <ul class="nav-bar">
                    <a href="/"><li>Add Restaurant</li></a>
                    <a href="/"> <li>Log in</li></a>
                    <a href="/"><li>Sign up</li></a>
                </ul>
            </div>
            <div class="head">
                <img class="logo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                <h3 className='logo-heading'>Discover the best food & drinks in Delhi NCR</h3>
                <div class="search">
                    <img class="logo1" src="https://icons8.com/icon/13800/location" alt="" />
                    <div class="search-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <HiLocationMarker size={25} color="rgb(255, 126, 139)" />
                        <p className="search-para">
                            <select name="membership" id="membership" className='search-option'>
                                <option value="silver" selected>Spark Eighteen, New Delhi</option>
                            </select></p>
                    </div>
                    <div class="search-item">
                        <i class="fas fa-search"></i>
                        <BsSearch size={40} />
                        <input type="text" placeholder="Search for restaurant, cuisine or a dish" />
                    </div>
                </div>
            </div>
            <div class="header-image">
                <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
            </div>
        </header>
    </div>
    );
}
export default navbar;


