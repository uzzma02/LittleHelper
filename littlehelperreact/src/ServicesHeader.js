import React from 'react';

const ServicesHeader = () => {

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-default fixed-top py-3" id="mainNav">
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
        </div>
    )
}
export default ServicesHeader;