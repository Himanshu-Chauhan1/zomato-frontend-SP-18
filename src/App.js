import './components/navbar/navbar.css';
import './components/category/category.css';
import './components/signup/signup.css'
import './components/login/login.css'
// import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Navbar from './components/navbar/navbar';
import Category from './components/category/category';
import SignUpModal from './components/signup/signupModal'
import LoginModal from './components/login/loginModal'

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        {/* <Routes>
          <Route path='/signUp' element={<SignUpModal />} />
          <Route />
        </Routes> */}
      </>
      <SignUpModal />
      <LoginModal />
      <Category />
    </div>
  );
}

export default App;


//type of components
//component lifecycle
//routers
// diffrence between jsx and js
//render HTML?
//js comonents in React