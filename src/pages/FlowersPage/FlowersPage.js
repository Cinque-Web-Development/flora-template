import React from 'react';
import './FlowersPage.css';
import { flowersDB} from '../../flowersDB';
import Flowers from '../../components/Flowers/Flowers';

export default function FlowersPage() {
    return (
        <div>
            {flowersDB.map(flower => 
            <Flowers flower={flower}/>    
            )}
        </div>
    )
}
