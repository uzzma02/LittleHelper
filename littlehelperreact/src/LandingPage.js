import React, {useState, useContext} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './Navigation.js';
import Header from './Header.js';
import HowItWorks from './HowItWorks.js';
import Services from './Services.js';
import AppDownload from './AppDownload.js';
import Footer from './Footer.js';
//import './App.css';
import './css/creative.css';


function LandingPage() {
  return (
    <div className="LandingPage">
      
        <div>
          <Navigation/>
          <Header/>
          <HowItWorks/>
          <Services/>
          <AppDownload/>
          <Footer/>
        </div>        
      
    </div>
  );
}

export default LandingPage;
