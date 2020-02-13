import React from 'react';

const Header = () => {
    return (
        //---- Masthead ----
        <div>
            <header className="masthead">
            <div className="container-fluid h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                    <h1 className="text-uppercase text-white font-weight-bold">Help around your home, at your fingertips</h1>
                    <hr className="divider my-4"/>
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 font-weight-light mb-5">Experienced, hand-picked professionals from your neighborhood to help you!</p>
                    
                    <div className="flex">
                        <form className="form-inline justify-content-center">
                        <input className="form-control mr-sm-2" type="search" placeholder="I need help with..." aria-label="Search"/>
                        <a className="btn btn-secondary btn-xl js-scroll-trigger" href="#services">Get Help!</a>
                        </form>
                    </div>
                        
                    </div>
                </div>
            </div>
        </header>
        </div>
        
        
    )
}

export default Header;