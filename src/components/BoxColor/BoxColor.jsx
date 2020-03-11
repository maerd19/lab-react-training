import React from 'react';
import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
    const divStyle = {
        color: 'white',
        background: `rgb(${r}, ${g}, ${b})`,
    };

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
      
    const rgbToHex = (red, green, blue) => `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;

    return (
        <div className="BoxColor box" style={divStyle}>
            rgb({`${r},${g},${b}`})<br/>
            {rgbToHex(r,g,b)}
        </div>
    )
}

export default BoxColor;
