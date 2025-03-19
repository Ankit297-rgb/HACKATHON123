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
      <div className="row1 mb-4">
        <div className="col-md-6 first">
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
        <div className="col-md-6 second">
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
        <div className="col-md-6 third">
          <div className="card text-center p-4">
            <img
              src="https://indiashorts.com/wp-content/uploads/2021/04/Untitled-design-26-5.jpg" // Replace with your image URL
              alt="Festivals"
              className="card-img-top"
            />
            <div className="card-body">
              <Link to="/festivals" className="btn btn-outline-primary">
                Indian Festivals
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 fourth">
          <div className="card text-center p-4">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQFzIbj_dfnPMA/article-cover_image-shrink_720_1280/0/1693203021003?e=2147483647&v=beta&t=LpGDzW5blWgUg5lyQCNRkwfdgwCcREJP-BtB91lo2uY" // Replace with your image URL
              alt="Quiz"
              className="card-img-top"
            />
            <div className="card-body">
              <Link to="/quiz" className="btn btn-outline-primary">
                Fun & Games
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card text-center p-4">
            <img
              src="https://supplychaingamechanger.com/wp-content/uploads/2023/04/IndianFolklore.webp" // Replace with your image URL
              alt="Folklore"
              className="card-img-top"
            />
            <div className="card-body">
              <Link to="/folklores" className="btn btn-outline-primary">
              Folklore 
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="card text-center p-4">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/559/564/946/cuisine-food-india-indian-wallpaper-preview.jpg" // Replace with your image URL
              alt="Food"
              className="card-img-top"
            />
            <div className="card-body">
              <Link to="/food" className="btn btn-outline-primary">
              Food 
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Explore;