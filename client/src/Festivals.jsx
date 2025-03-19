// src/pages/Festivals.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Festivals.css'; // Create a CSS file for styling

const Festivals = () => {
  const festivalList = [
    {
      name: 'Diwali',
      imageUrl: 'https://wallpapercave.com/wp/wp10200483.jpg', // Replace with actual image URL
      path: '/festival/diwali'
    },
    {
      name: 'Durga Puja',
      imageUrl: 'http://4.bp.blogspot.com/-NV7nrFUvtts/UHu1rs60V1I/AAAAAAAADL8/_-bRmRKspdw/s1600/durga+puja+wallpapers-11.png', // Replace with actual image URL
      path: '/festival/durga'
    },
    {
      name: 'Eid-ul-Fitr',
      imageUrl: 'https://www.gannett-cdn.com/presto/2020/07/29/USAT/8f7dae1b-28e0-4582-97ea-1e5dcba15001-AP_Eid_Al_Adha_Photo_Gallery.jpg?crop=5650,3179,x0,y261&width=3200&height=1801&format=pjpg&auto=webp', // Replace with actual image URL
      path: '/festival/eid'
    },
    {
      name: 'Christmas',
      imageUrl: 'https://wallpapercave.com/wp/wp2325130.jpg', // Replace with actual image URL
      path: '/festival/christmas'
    },
    {
      name: 'Garba',
      imageUrl: 'https://i.pinimg.com/736x/95/36/8c/95368c95e56e631f01df2b9337532c86.jpg', // Replace with actual image URL
      path: '/festival/garba'
    },
    {
      name: 'Pongal',
      imageUrl: 'https://static.toiimg.com/photo/msid-67512385/67512385.jpg?353206', // Replace with actual image URL
      path: '/festival/pongal'
    },
    {
      name: 'Onam',
      imageUrl: 'https://www.mistay.in/travel-blog/content/images/2020/05/onam-celebrations.jpg', // Replace with actual image URL
      path: '/festival/onam'
    },
    {
      name: 'Lohri',
      imageUrl: 'https://images.thequint.com/thequint/2016-01/4adb6685-3362-40c9-83c2-4870eb013c4a/LOHRI.jpg?rect=0%2C0%2C1024%2C538&w=1200&auto=format%2Ccompress&ogImage=true', // Replace with actual image URL
      path: '/festival/lohri'
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