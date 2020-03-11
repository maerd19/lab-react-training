import React from 'react';

const Random = ({ min, max }) => {
    const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);    

    return (
        <div className="box">Random value between {min} and {max} =&gt; {getRndInteger(min, max)}</div>
    );
};

export default Random;