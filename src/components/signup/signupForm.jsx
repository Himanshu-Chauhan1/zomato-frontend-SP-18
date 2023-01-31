import React from 'react';
import './signup.css'
import SingnUpScreen from './signupScreen';
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <>
            <form >
                <div class="mb-3">
                    <input type="text" class="form-control" id="fullName" placeholder="Full Name" />
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" id="email" placeholder="Email" />
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Password" />
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        I agree to Zomato's <a className='checkbox-heading' href='/'> Terms of Service, Privacy Policy</a> and <a className='checkbox-heading' href='/'>Content Policies</a>
                    </label>
                </div>
                <div class="d-grid gap-2">
                <Link to="/signup" component={SingnUpScreen}><button class="create-account" type="button">Create Account</button></Link>
                </div>
                <div class="form-check">
                    <label type="text" class="already">Already have an account? <Link to="/login" class="signup-button" tabindex="-1" role="button" aria-disabled="true">Log In</Link>
                    </label>
                </div>
            </form>

        </>
    );
};
export default SignUp;