import './components/navbar/navbar.css';
import './components/category/category.css';
import './components/signup/signup.css'
import './components/login/login.css'
import './components/collection/collection.css'
import './components/localities/localities.css'
import './components/app/app.css'
import './components/explore/explore.css'
import './components/footer/footer.css'
import React from 'react';
import Navbar from './components/navbar/navbar';
import Category from './components/category/category';
import SignUpModal from './components/signup/signupModal'
import LoginModal from './components/login/loginModal'
import Collection1 from './components/collection/collection';
import Localities from './components/localities/localities';
import ZomatoApp from './components/app/app';
import CollapsePanel from './components/explore/explore';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SignUpModal />
      <LoginModal />
      <Category />
      <Collection1 />
      <Localities />
      <ZomatoApp />
      <CollapsePanel />
      <Footer />
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