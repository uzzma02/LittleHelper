import React from 'react';

const ServicesCardLayout = (prop) => {
    const myStyle = {
        display: "Flex"
    }

    return (
        <div style={myStyle}>
            {prop.children}
        </div>
    )
}
export default ServicesCardLayout;