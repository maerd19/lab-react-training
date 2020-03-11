import React from 'react';
import './DriverCard.css';

const DriverCard = ({ name, rating, img, car: {model, licensePlate} }) => {
    return (
        <div class="DriverCard">
            <img class="left" src={img} />
            <div class="right">
                <h2>{name}</h2>
                <div class="Rating">★★★★☆</div>
                <p>{model} - {licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
