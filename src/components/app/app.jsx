import React from 'react';
import { Radio, Input, Button } from 'antd';
import { useState } from 'react';
import { Link } from "react-router-dom";

function ZomatoApp() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <div className="main">
                <div className="left-part">
                    <img src={"https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png"} alt="" />
                </div>
                <div className="right-part">
                    <h1 className="zomato-heading">Get the Zomato app</h1>
                    <p className="zomato-paragraph">We will send you a link, open it on your phone to download the app</p>
                    <div className="contact">
                        <div className="email"> <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1} style={{ fontSize: '18px' }}>Email</Radio>
                        </Radio.Group></div>
                        <div className="phone"><Radio.Group onChange={onChange} value={value}>
                            <Radio value={0} style={{ fontSize: '18px' }}>Phone</Radio>
                        </Radio.Group></div>
                    </div>
                    <div className="contact-1">
                        <div className="email-1"><Input placeholder="Email" style={{ color: 'white', width:'105%', height:'6vh', fontSize:'18px'}}/></div>
                        <div className="email-2"><Button type="message" style={{ backgroundColor:' rgb(241, 79, 98)' ,color: 'white', width:'70%', height:'6vh', fontSize:'18px'}}>Share App Link</Button></div>
                    </div>
                    <p className="download-app">Download app from</p>
                    <div className="download-link">
                        <div className="android">
                            <Link to="https://play.google.com/store/apps/details?id=com..application.zomato&_branch_match_id=1144157600425835932&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D">
                                <img src={"https://icon-library.com/images/google-play-download-icon/google-play-download-icon-2.jpg"} alt="" />
                            </Link>
                        </div>
                        <div className="ios">
                            <Link to="https://play.google.com/store/apps/details?id=com..application.zomato&_branch_match_id=1144157600425835932&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D" target="_blank"><img src={"https://icon-library.com/images/app-store-icon-png/app-store-icon-png-14.jpg"} alt="" />
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ZomatoApp