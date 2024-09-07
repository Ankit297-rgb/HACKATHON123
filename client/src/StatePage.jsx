// src/components/StatePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import stateData from './stateData'; // Adjust the path as needed

import './Css/StatePage.css'; // Import the CSS file



const StatePage = () => {
    const { state } = useParams();
    const stateInfo = stateData[state] || {}; 

    return (
        <div className="container pt-5">
            <div className="state-container">
                <h1 className="state-header">{state}</h1>
                <p className="state-description">{stateInfo.description || 'Information not available.'}</p>
                <p className="state-additional-info">{stateInfo.additionalInfo || 'No additional information available.'}</p>
                {stateInfo.picture && <img src={stateInfo.picture} alt={`${state} picture`} className="state-picture" />}

            </div>
        </div>
    );
}

export default StatePage;

