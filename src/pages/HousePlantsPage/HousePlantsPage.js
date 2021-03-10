import React from 'react';
import './HousePlantsPage.css';
import {housePlantsDB} from '../../houseplantsDB';
import HousePlants from '../../components/HousePlants/HousePlants';


export default function HousePlantsPage() {
    return (
        <div className="house-plants">
           <h1> House Plants</h1>
                {housePlantsDB.map(houseplant => 
                <HousePlants houseplant={houseplant}/>
                )}
        </div>
    )
}
