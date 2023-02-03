import React from 'react'
import '../navbar/navbar.css'
import myFunction1 from '..navbar/navbar.js'

export default function Navbar() {
    return (
        <>
            <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="/" class="icon" onclick={myFunction1}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>

            <div style={{paddingleft:"16px"}}>
                <h2>Responsive Topnav Example</h2>
                <p>Resize the browser window to see how it works.</p>
            </div>
        </>
    )
}
