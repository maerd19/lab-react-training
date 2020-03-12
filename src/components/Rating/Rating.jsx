import React from 'react';

const Rating = ({ children }) => {
    const starPercentage = (children / 5) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

    return (
        <div>
            {starPercentageRounded}
            ★☆
        </div>
    )
}

export default Rating;