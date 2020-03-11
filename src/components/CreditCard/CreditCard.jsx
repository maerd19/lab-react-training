import React from 'react';
import './CreditCard.css';

const CreditCard = props => {
    const { expirationMonth, expirationYear, bgColor, color, type, bank, owner, number } = props;
    const divStyle = {
        background: `${bgColor}`,
        color: `${color}`,
    }

    const image = bank => `/img/${(bank == 'Visa' ? 'visa.png' : 'master-card.svg')}`;

    let month = (expirationMonth < 10) ? `0${expirationMonth}` : `${expirationMonth}`;
    let year = `${expirationYear}`.slice(-2);

    const numberCard = `${'•'.repeat(4)} ${'•'.repeat(4)} ${'•'.repeat(4)} ${number.slice(-4)}`;

    return (
        <div className="CreditCard" style={divStyle}>
            <div className="type"><img src={image(type)} /></div>
            <div className="number">{numberCard}</div>
            <div className="expires-bank">
                <span>Expires {month}/{year} </span>
                <span className="bank">{bank}</span>
            </div>
            <div className="owner">{owner}</div>
        </div>
    )
}

export default CreditCard;