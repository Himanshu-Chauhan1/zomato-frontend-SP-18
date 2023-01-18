import React from 'react';
import { Radio, Input, Button } from 'antd';
import { useState } from 'react';

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
                            <Radio value={1}>Email</Radio>
                        </Radio.Group></div>
                        <div className="phone"><Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Phone</Radio>
                        </Radio.Group></div>
                    </div>
                    <div className="contact-1">
                        <div className="email-1"><Input placeholder="Email" /></div>
                        <div className="email-2"><Button type="primary">Share Link</Button></div>
                    </div>
                    <p className="download-app">Download app from</p>
                    <div className="download-link">
                        <div className="android">
                            <img src={"https://w7.pngwing.com/pngs/366/351/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"} alt="" />
                        </div>
                        <div className="ios">
                            <img src={"https://e7.pngegg.com/pngimages/634/320/png-clipart-app-store-apple-google-play-iphone-mid-autumn-lantern-text-logo.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ZomatoApp