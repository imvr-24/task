import React from 'react';

import './card.styles.css';

export const Card = ({ inps }) => {
    return (
        <div className='card-container'>
            <h2> {inps.currentZone} </h2>
            <p> {inps.currentDT} </p>
        </div>
    )
};