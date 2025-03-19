import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Food = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const foods = [
    {
      name: 'Biryani',
      image: 'https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=0&k=20&c=ueFrghYZuKAty-rFVe5dtMtNIbn0jaUsSvCUwTVOmd8=',
      link: '/food/biryani'
    },
    {
      name: 'Dosa',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D',
      link: '/food/dosa'
    },
    {
      name: 'Paneer Tikka',
      image: 'https://suhana.com/wp-content/uploads/2023/07/paneer-tikka-2-1.png',
      link: '/food/paneerTikka'
    },
    {
      name: 'Dhokla',
      image: 'https://www.maggi.in/sites/default/files/srh_recipes/d1d74216ba5fa7ce5d72b8e121afe69f.jpg',
      link: '/food/dhokla'
    }
  ];

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="festivals-container">
      <h1 className="display-5">Indian Foods</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search food by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="festivals-grid">
        {filteredFoods.map((food, index) => (
          <div key={index} className="festival-card">
            <img src={food.image} alt={food.name} className="festival-image" />
            <h5 className="food-title">{food.name}</h5>
            <Link to={food.link} className="btn btn-primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;