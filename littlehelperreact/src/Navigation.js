import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        //---- Navigation Bar -----
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container-fluid">
                <Link className="navbar-brand js-scroll-trigger" to="/">Little Helper</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/servicescategories">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="#login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="btn btn-outline-secondary my-2 my-sm-0 js-scroll-trigger" href="#signup">Become a Little Helper</Link>
                        </li>                        
                        
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        
        
    )
}

export default Navigation;
