// src/pages/Folklore.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Folklore.css'; // Create a CSS file for styling

const Folklores = () => {
  const folkloreList = [
    {
      name: 'Vikram-Betal',
      imageUrl: 'https://www.exoticindiaart.com/images/products/original/books/ihg087.webp', // Replace with actual image URL
      path: '/folklore/vikrambetal'
    },
    {
      name: 'Heer-Ranjha',
      imageUrl: 'https://3.bp.blogspot.com/-p9Q9aAxuGwA/V5T7qrNixnI/AAAAAAAADaY/50MDY6D5yi06Pbx0YICYQ7AohUPPqnNPgCEw/s640/07-Heer-Ranjha1.jpg', // Replace with actual image URL
      path: '/folklore/heerranjha'
    },
    {
      name: 'Gopal Bhar',
      imageUrl: 'http://prodimage.images-bn.com/pimages/9781975617349_p0_v1_s1200x630.jpg', // Replace with actual image URL
      path: '/folklore/gopalbhar'
    },
    {
      name: 'Padmini of Chittorgarh',
      imageUrl: 'https://www.maharajatrails.com/wp-content/uploads/2018/02/22Princess_Padmavati_ca._1765_Biblioth%C3%A8que_nationale_de_France_Paris.jpg', // Replace with actual image URL
      path: '/folklore/padminiofchittorgarh'
    },
    {
      name: 'Parayi Petta Panthirukulam',
      imageUrl: 'https://www.exoticindiaart.com/images/products/original/books-2019/nzx402.webp', // Replace with actual image URL
      path: '/folklore/parayi'
    },
    {
      name: 'Tenali Rama Stories',
      imageUrl: 'https://cdn.exoticindia.com/images/products/original/books/nzf263.jpg', // Replace with actual image URL
      path: '/folklore/tenli'
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