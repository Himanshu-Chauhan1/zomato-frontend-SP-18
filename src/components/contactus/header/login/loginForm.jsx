import React from 'react';
import './login.css'
import './responsive.css'
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <>
            <form className='modal-form' >
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Phone / Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="d-grid gap-2">
                    <Link to="/login"><button className="login-account" type="button">Log In</button></Link>
                </div>
                <div className="form-check">
                    <label type="text" className="already-login">New to Zomato? <Link className="login-button" tabIndex="-1" role="button" aria-disabled="true">Create Account</Link>
                    </label>
                </div>
            </form>

        </>
    );
};
export default LogIn;