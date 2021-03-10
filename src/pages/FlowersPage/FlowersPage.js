import React from 'react';
import './FlowersPage.css';
import { flowersDB} from '../../flowersDB';
import Flowers from '../../components/Flowers/Flowers';

export default function FlowersPage() {
    return (
        <div className="flowers">
            <h1>Flowers</h1>
            {flowersDB.map(flower => 
            <Flowers flower={flower}/>    
            )}
        </div>
    )
}
