import React from 'react';
import Navigation from './Navigation.js';
import Header from './Header.js';
import HowItWorks from './HowItWorks.js';
import Services from './Services.js';
import AppDownload from './AppDownload.js';
import Footer from './Footer.js';
//import './App.css';
import './css/creative.css';


function App() {
  return (
    <div className="App">
      
        <Navigation/>

        <div>
          <Header/>
        </div>
        
        <div>
          <HowItWorks/>
        </div>

        <div>
          <Services/>
        </div>

        <div>
          <AppDownload/>
        </div>
        
        <Footer/>
        
      
    </div>
  );
}

export default App;
