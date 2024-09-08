// src/pages/Folklore.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Folklore.css'; // Create a CSS file for styling

const Folklores = () => {
  const folkloreList = [
    {
      name: 'Panchatantra',
      imageUrl: 'https://example.com/panchatantra.jpg', // Replace with actual image URL
      path: '/folklore/panchatantra'
    },
    {
      name: 'Birbal Stories',
      imageUrl: 'https://example.com/birbal.jpg', // Replace with actual image URL
      path: '/folklore/birbal'
    },
    {
      name: 'Akbar and Birbal',
      imageUrl: 'https://example.com/akbar_birbal.jpg', // Replace with actual image URL
      path: '/folklore/akbar-birbal'
    }
    // Add more folklores as needed
  ];

  return (
    <div className="folklore-container">
      <h1>Indian Folklores</h1>
      <div className="folklore-grid">
        {folkloreList.map((folklore, index) => (
          <div key={index} className="folklore-card">
            <img src={folklore.imageUrl} alt={folklore.name} className="folklore-image" />
            <Link to={folklore.path} className="btn btn-primary">
              {folklore.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Folklores;
