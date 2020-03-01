import React from 'react';

const ServicesCard = (prop)=> {

    const cardStyle = {
        "width": "18rem"
    }
    
    return(
        <div className="container">
                <div classname="card" style={cardStyle}>
                    <img src={prop.image} classname="card-img-top" alt="..."/>
                    <div classname="card-body">
                        <h5 classname="card-title">Card title</h5>
                        <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul classname="list-group list-group-flush">
                        <li classname="list-group-item">Cras justo odio</li>
                        <li classname="list-group-item">Dapibus ac facilisis in</li>
                        <li classname="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div classname="card-body">
                        <a href="#" classname="card-link">Card link</a>
                        <a href="#" classname="card-link">Another link</a>
                    </div>
                </div>
        </div>
    )
}
export default ServicesCard;