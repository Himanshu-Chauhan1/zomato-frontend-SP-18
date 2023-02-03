import React from 'react'
import Header from '../contactus/header/header'
import Footer from '../common/footer/footer'
import Body from './body/body'
import SignUpModal from './header/signup/signupModal'
import LoginModal from './header/login/loginModal'


export default function Contact() {
    return (
        <div>
            <Header />
            <SignUpModal />
            <LoginModal />
            <Body />
            <Footer />
        </div>
    )
}
