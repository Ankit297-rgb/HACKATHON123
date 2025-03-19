import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IndiaMap from './IndiaMap'; // Ensure the path is correct
import './Css/StateDetails.css';

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const StateDetails = () => {
  const [search, setSearch] = useState('');
  const [filteredStates, setFilteredStates] = useState(states);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(e.target.value); // Update the search state
    setFilteredStates(
      states.filter(state => state.toLowerCase().includes(query))
    );
  };

  return (
    <div className="state-details-container pt-5">
      {/* Back to Explore button */}
      <div className="back-to-explore">
        <Link to="/explore" className="btn btn-outline-primary">
          &larr; Back to Explore
        </Link>
      </div>
      
      <h1 className="title">Explore Indian States</h1>
      <div className="mb-4 search-bar">
        <input
          type="text"
          value={search} // Controlled input
          onChange={handleSearchChange}
          placeholder="Search states..."
          className="form-control"
        />
      </div>
      
      {/* Render IndiaMap here */}
      <div className="mb-4">
        <IndiaMap />
      </div>
      
      <div className="state-list">
        {filteredStates.map((state, index) => (
          <div className="state-card" key={index}>
            <Link to={`/state/${state}`} className="btn btn-outline-primary btn-block">
              {state}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateDetails;