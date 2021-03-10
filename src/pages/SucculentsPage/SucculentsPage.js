import React from 'react';
import './SucculentsPage.css';
import { succulentsDB } from '../../succulentsDB';
import Succulents from '../../components/Succulents/Succulents';

export default function SucculentsPage() {
    return (
        <div className="succulents">
            <h1>Succulents</h1>
            {succulentsDB.map(succulent => 
            <Succulents succulent={succulent}/>    
            )}
        </div>
    )
}
