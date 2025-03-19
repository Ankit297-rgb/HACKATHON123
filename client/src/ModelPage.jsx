// src/components/ModelPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import stateData from './stateData'; // Adjust the path as needed

import './Css/ModelPage.css'; // Add CSS as needed

const ModelPage = () => {
    const { state } = useParams();
    const stateInfo = stateData[state] || {};

    // Only render the model if it exists in stateData
    if (!stateInfo.modelUrl) {
        return <div>3D Model is not available for this state.</div>;
    }

    return (
        <div className="model-container">
            <h1>3D Model Viewer: {state}</h1>

            {/* Embed Sketchfab 3D model iframe */}
            <div className="sketchfab-embed-wrapper">
                <iframe
                    title={`${state} 3D Model`}
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src={stateInfo.modelUrl}
                    style={{ width: '100%', height: '100%', border: 'none' }}  // Ensure the iframe takes full width and height of its container
                >
                </iframe>
                <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
                    <a
                        href={stateInfo.modelUrl}
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                    >
                        {state} 3D Model
                    </a>{' '}
                    on{' '}
                    <a
                        href="https://sketchfab.com"
                        target="_blank"
                        rel="nofollow"
                        style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                    >
                        Sketchfab
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ModelPage;