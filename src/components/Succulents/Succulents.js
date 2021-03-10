import React from 'react';
import './Succulents.css';

export default function Succulents({succulent}) {
    return (
        <div>
            <img className="succulent-picture" src={succulent.picture} alt=""></img>
        </div>
    )
}
