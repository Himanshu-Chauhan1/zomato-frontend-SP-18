import React from 'react';
import './login.css'

const LogIn = () => {
    return (
        <>
            <form >
                <div class="mb-3">
                    <input type="text" class="form-control" id="contact" placeholder="Phone / Email" />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="email" placeholder="Password" />
                </div>
                <div class="d-grid gap-2">
                    <button class="create-account" type="button">Log In</button>
                </div>
                <div class="form-check">
                    <label type="text" class="already">New to Zomato? <a href="/" class="login-button" tabindex="-1" role="button" aria-disabled="true">Create Account</a>
                    </label>
                </div>
            </form>

        </>
    );
};
export default LogIn;