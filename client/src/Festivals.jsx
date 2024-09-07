// src/pages/Festivals.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Festivals.css'; // Create a CSS file for styling

const Festivals = () => {
  const festivalList = [
    {
      name: 'Diwali',
      imageUrl: 'https://example.com/diwali.jpg', // Replace with actual image URL
      path: '/festival/diwali'
    },
    {
      name: 'Holi',
      imageUrl: 'https://example.com/holi.jpg', // Replace with actual image URL
      path: '/festival/holi'
    },
    {
      name: 'Navratri',
      imageUrl: 'https://example.com/navratri.jpg', // Replace with actual image URL
      path: '/festival/navratri'
    }
    // Add more festivals as needed
  ];

  return (
    <div className="festivals-container">
      <h1>Indian Festivals</h1>
      <div className="festivals-grid">
        {festivalList.map((festival, index) => (
          <div key={index} className="festival-card">
            <img src={festival.imageUrl} alt={festival.name} className="festival-image" />
            <Link to={festival.path} className="btn btn-primary">
              {festival.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Festivals;
