import './components/homepage/navbar/navbar.css';
import './components/homepage/category/category.css';
import './components/homepage/signup/signup.css'
import './components/homepage/login/login.css'
import './components/homepage/collection/collection.css'
import './components/homepage/localities/localities.css'
import './components/homepage/app/app.css'
import './components/homepage/explore/explore.css'
import './components/homepage/footer/footer.css'
import './components/homepage/common/modal/index.css'
import React from 'react';
import Navbar from './components/homepage/navbar/navbar';
import Category from './components/homepage/category/category';
import SignUpModal from './components/homepage/signup/signupModal'
import LoginModal from './components/homepage/login/loginModal'
import Collection1 from './components/homepage/collection/collection';
import Localities from './components/homepage/localities/localities';
import ZomatoApp from './components/homepage/app/app';
import CollapsePanel from './components/homepage/explore/explore';
import Footer from './components/homepage/footer/footer';


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