import React from 'react';
import './login.css'
import { Link } from "react-router-dom";
import LoginScreen from './loginScreen';

const LogIn = () => {
    return (
        <>
            <form method='POST' >
                <div class="mb-3">
                    <input type="text" class="form-control" id="contact" placeholder="Phone / Email" />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="email" placeholder="Password" />
                </div>
                <div class="d-grid gap-2">
                    <button class="login-account" type="button">Log In</button>
                </div>
                <div class="form-check">
                    <Link to="/login" component={LoginScreen}> <label type="text" class="already">New to Zomato? <a href="/" class="login-button" tabindex="-1" role="button" aria-disabled="true">Create Account</a>
                    </label></Link>
                </div>
            </form>

        </>
    );
};
export default LogIn;