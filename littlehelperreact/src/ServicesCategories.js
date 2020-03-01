import React from 'react';
import Navigation from './Navigation.js';
import ServicesCard from './ServicesCard.js';
import ServicesCardLayout from './ServicesCardLayout.js';


const ServicesCategories = (prop) => {

    return(
        <div>
            
            {/* <div>
                <nav className="navbar navbar-expand-lg navbar-default fixed-top py-3 bg-secondary" id="mainNav">
                <div className="container-fluid">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Little Helper</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="/servicescategories">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#login">Login</a>
                            </li>
                            <li className="nav-item">
                            <a className="btn btn-outline-secondary my-2 my-sm-0 js-scroll-trigger" href="#signup">Become a Little Helper</a>
                            </li>                        
                        </ul>
                    </div>
                </div>
                </nav>
            </div> */}

            <ServicesCardLayout>
                <ServicesCard 
                    image=""
                    title="Hello"
                    description="Blah Blah"/>

            </ServicesCardLayout>

    </div>
    )
}
export default ServicesCategories;