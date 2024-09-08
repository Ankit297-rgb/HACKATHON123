// src/pages/FolkloreDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Css/FolkloreDetails.css'; // Create a CSS file for styling

const FolkloreDetails = () => {
  const { folkloreName } = useParams();

  const folkloreDetails = {
    panchatantra: {
      name: 'Panchatantra',
      description: 'Panchatantra is a collection of ancient Indian fables written in Sanskrit.',
      imageUrl: 'https://thumbs.dreamstime.com/b/india-background-showing-its-incredible-culture-diversity-monument-dance-festival-illustration-106768107.jpg' // Replace with actual image URL
    },
    birbal: {
      name: 'Birbal Stories',
      description: 'Birbal, a witty courtier, is known for his clever and humorous stories.',
      imageUrl: 'https://thumbs.dreamstime.com/b/india-background-showing-its-incredible-culture-diversity-monument-dance-festival-illustration-106768107.jpg' // Replace with actual image URL
    },
    'akbar-birbal': {
      name: 'Akbar and Birbal',
      description: 'The stories of Akbar and Birbal depict the wise exchanges between the emperor and his witty advisor.',
      imageUrl: 'https://thumbs.dreamstime.com/b/india-background-showing-its-incredible-culture-diversity-monument-dance-festival-illustration-106768107.jpg' // Replace with actual image URL
    }
    // Add more folklore details as needed
  };

  const folklore = folkloreDetails[folkloreName.toLowerCase()];

  return (
    <div className="folklore-details-container">
      <h1>{folklore.name}</h1>
      <img src={folklore.imageUrl} alt={folklore.name} className="folklore-details-image" />
      <p>{folklore.description}</p>
    </div>
  );
};

export default FolkloreDetails;