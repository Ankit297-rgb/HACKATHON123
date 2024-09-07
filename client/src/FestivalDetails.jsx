// src/pages/FestivalDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Css/FestivalDetails.css'; // Create a CSS file for styling

const FestivalDetails = () => {
  const { festivalName } = useParams();

  const festivalDetails = {
    diwali: {
      name: 'Diwali',
      description: 'Diwali, also known as Deepavali, is the festival of lights celebrated with fireworks, sweets, and lamps.',
      imageUrl: 'https://example.com/diwali-details.jpg' // Replace with actual image URL
    },
    holi: {
      name: 'Holi',
      description: 'Holi is the festival of colors, celebrated with vibrant powders, water balloons, and joyful gatherings.',
      imageUrl: 'https://example.com/holi-details.jpg' // Replace with actual image URL
    },
    navratri: {
      name: 'Navratri',
      description: 'Navratri is a nine-night festival dedicated to the goddess Durga, celebrated with fasting, dance, and rituals.',
      imageUrl: 'https://example.com/navratri-details.jpg' // Replace with actual image URL
    }
    // Add more festival details as needed
  };

  const festival = festivalDetails[festivalName.toLowerCase()];

  return (
    <div className="festival-details-container">
      <h1>{festival.name}</h1>
      <img src={festival.imageUrl} alt={festival.name} className="festival-details-image" />
      <p>{festival.description}</p>
    </div>
  );
};

export default FestivalDetails;
