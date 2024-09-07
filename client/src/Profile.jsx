// src/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            setUsername(userData.username || '');
            setEmail(userData.email || '');
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleProfilePicChange = (e) => {
        setProfilePic(e.target.files[0]);
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        if (profilePic) {
            formData.append('profilePic', profilePic);
        }

        try {
            const response = await axios.post('http://localhost:3001/updateProfile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.success) {
                alert('Profile updated successfully!');
                const updatedUser = {
                    ...user,
                    username,
                    email,
                    profilePic: response.data.profilePic
                };
                setUser(updatedUser);
                localStorage.setItem('user', JSON.stringify(updatedUser));
            } else {
                alert('Error updating profile');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred while updating the profile.');
        }
    };

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <form onSubmit={handleUpdateProfile}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Profile Picture:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePicChange}
                    />
                    {user?.profilePic && <img src={user.profilePic} alt="Profile Pic" style={{ width: '100px', height: '100px' }} />}
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default ProfilePage;
