import React from 'react';
import './IdCard.css';

const IdCard = props => {
    const { lastName, firstName, gender, height, picture } = props;
    // console.log('IdCard', props);
    return (
        <div className="IdCard box">
                <img src={picture} alt={`${firstName} ${lastName}`} />
                <div className="right">
                    <strong>First name</strong>: {firstName} <br/>
                    <strong>Last name</strong>: {lastName} <br/>
                    <strong>Gender</strong>: {gender} <br/>
                    <strong>Height</strong>: {height} m<br/>
                    {/* <strong>Birth</strong>: {props.birth} <br/> */}
                </div>
        </div>
    );
}

export default IdCard;