import React from 'react';
import './HousePlants.css';

export default function HousePlants({houseplant}) {
    return (
        <div className="houseplant">
            <img className="houseplant-picture" src={houseplant.picture} alt=""></img>
        </div>

    )
}
