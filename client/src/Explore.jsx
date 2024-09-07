import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Css/Explore.css';

const Explore = () => {
  const [user, setUser] = useState({ name: 'John Doe' });

  const onLogout = () => {
    // Handle logout logic
    console.log('User logged out');
  };

  return (
    <div className="container1 pt-5">
      <Navbar user={user} onLogout={onLogout} />
      <h1 className="display-5">Explore</h1>
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card text-center p-4">
            <img
              src="https://www.adotrip.com/public/images/areas/master_images/5e40f7e5931ca-Howrah_bridge_Attractions.jpg" // Replace with your image URL
              alt="State Details"
              className="card-img-top"
            />
            <div className="card-body">
              <Link to="/statedetails" className="btn btn-outline-primary">
                View State Details
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center p-4">
            <img
              src="https://i2.wp.com/destinosahora.com/wp-content/uploads/2019/09/tajmahajnoche.jpg?fit=1920%2C1080&ssl=1" // Replace with your image URL
              alt="VR Experience"
              className="card-img-top"
            />
            <div className="card-body">
              <Link to="/vrexperience" className="btn btn-outline-primary">
                View VR Experience
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center p-4">
            <img
              src="https://i.pinimg.com/originals/6a/9f/d2/6a9fd28d73b06bf9f122dfea7a97fa5f.jpg" // Replace with your image URL
              alt="Festivals"
              className="card-img-top"
            />
            <div className="card-body">
              <Link to="/festivals" className="btn btn-outline-primary">
                View Indian Festivals
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-center p-4">
            <img
              src="https://i.pinimg.com/originals/6a/9f/d2/6a9fd28d73b06bf9f122dfea7a97fa5f.jpg" // Replace with your image URL
              alt="Quiz"
              className="card-img-top"
            />
            <div className="card-body">
              <Link to="/quiz" className="btn btn-outline-primary">
                Quiz
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Explore;
