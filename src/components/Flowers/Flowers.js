import React from 'react';
import './Flowers.css';

export default function Flowers({flower}) {
    return (
        <div>
            <img className="flower-picture" src={flower.picture} alt=""></img>
        </div>
    )
}
