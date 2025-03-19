import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Css/Profile.css';

function Profile({ user, onUpdateUser, onLogout }) {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [occupation, setOccupation] = useState(user.occupation || '');
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || '');
  const [bio, setBio] = useState(user.bio || '');
  const [interests, setInterests] = useState(user.interests || '');
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showBookings, setShowBookings] = useState(false); // State for showing/hiding bookings
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // Fetch user details and bookings on component mount
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('userBookings')) || [];
    
    // Sort bookings by visitDate in descending order
    const sortedBookings = storedBookings.sort((a, b) => new Date(b.visitDate) - new Date(a.visitDate));
    setBookings(sortedBookings);

    axios.get(`http://localhost:3001/user/${email}`)
      .then(response => {
        const fetchedUser = response.data;
        setName(fetchedUser.name);
        setEmail(fetchedUser.email);
        setOccupation(fetchedUser.occupation || '');
        setProfilePicture(fetchedUser.profilePicture || '');
        setBio(fetchedUser.bio || '');
        setInterests(fetchedUser.interests || '');
      })
      .catch(err => {
        console.error("Error fetching user details:", err);
      });
  }, [email]);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = { name, occupation, profilePicture, bio, interests };
    axios.put(`http://localhost:3001/user/${email}`, updatedData)
      .then(response => {
        const updatedUser = response.data;
        onUpdateUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setIsEditing(false);
        setSuccessMessage('Profile updated successfully!');
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      })
      .catch(err => {
        console.error("Error updating user:", err);
        setSuccessMessage('Failed to update profile. Please try again.');
      });
  };

  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      localStorage.removeItem("user");
      localStorage.removeItem("userBookings"); // Clear bookings from local storage on logout
      onLogout();
      navigate('/');
    } else {
      console.error('onLogout is not a function');
    }
  };

  const toggleBookings = () => {
    setShowBookings(prevShow => !prevShow);
  };

  return (
    <div>
      <button
        type="button"
        className="btn10 btn-info mb-3"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>

      <div className="profile-container">
        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}

        <div className="profile-picture1">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" />
          ) : (
            <p>No profile picture uploaded.</p>
          )}
        </div>
        <h2>{name}</h2>

        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            {!isEditing ? (
              <p>{name}</p>
            ) : (
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            {!isEditing ? (
              <p>{email}</p>
            ) : (
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                disabled
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="occupation">Occupation</label>
            {!isEditing ? (
              occupation ? <p>{occupation}</p> : <p className="message">Please add occupation.</p>
            ) : (
              <input
                type="text"
                id="occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="form-control"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            {!isEditing ? (
              bio ? <p>{bio}</p> : <p className="message">Please add bio.</p>
            ) : (
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="form-control"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="interests">Interests</label>
            {!isEditing ? (
              interests ? <p>{interests}</p> : <p className="message">Please add interests.</p>
            ) : (
              <textarea
                id="interests"
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="form-control"
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="profilePicture"></label>
            {isEditing && (
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                onChange={handlePictureChange}
                className="form-control-file"
              />
            )}
          </div>
          
          {isEditing && (
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          )}
          <button
            type="button"
            className="btn9 btn-secondary1 edit-button1"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </form>

        {/* Bookings Section */}
        <div className="bookings-section">
          <button
            type="button"
            className="btn btn-info"
            onClick={toggleBookings}
          >
            {showBookings ? 'Hide Bookings' : 'Show Bookings'}
          </button>

          {showBookings && (
            <>
              <h3>Your Bookings</h3>
              {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <div key={index} className="booking-card">
                    <h4>{booking.placeName}</h4>
                    <p>Date: {booking.visitDate}</p>
                    <p>Location: {booking.placeName}</p>
                    
                  </div>
                ))
              ) : (
                <p>No bookings available.</p>
              )}
            </>
          )}
        </div>
      </div>

      {/* Render ChatBot component conditionally */}
    </div>
  );
}

Profile.defaultProps = {
  onLogout: () => console.warn('onLogout is not provided')
};

export default Profile;