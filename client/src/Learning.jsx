import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/Learning.css';
import Navbar from './Navbar';

const Learning = ({ user }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [message, setMessage] = useState('');
    const [enrolledCourses, setEnrolledCourses] = useState(() => {
        return JSON.parse(localStorage.getItem('enrolledCourses')) || [];
    });

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }, [enrolledCourses]);

    useEffect(() => {
        if (!user) {
            navigate('/login'); // Redirect to login if user is not logged in
        }
    }, [user, navigate]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = () => {
        console.log(`Searching for: ${searchTerm}`);
    };

    const handleEnrollNow = (courseName) => {
        if (!user) {
            setMessage('Please log in to enroll.');
            return;
        }

        if (!enrolledCourses.includes(courseName)) {
            setEnrolledCourses([...enrolledCourses, courseName]);
            setMessage(`Successfully enrolled in ${courseName}`);
            setTimeout(() => setMessage(''), 5000);

            // Redirect to course material page after enrollment
            navigate(`/course/${encodeURIComponent(courseName)}`);
        }
    };

    const handleViewCourse = (courseName) => {
        if (user) {
            navigate(`/course/${encodeURIComponent(courseName)}`);
        } else {
            setMessage('Please log in to view the course.');
        }
    };

    // Safely extract the username from the user object
    const username = user?.username || '';

    return (
        <div className="learning-container">
            {/* Pass the username to the Navbar */}
            <Navbar user={username} />
            <header className="header2">
                <h1>Welcome to Indian Cultural Learning</h1>
                <p>Explore and immerse yourself in the rich heritage of Indian music, dance, and painting.</p>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for courses..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <button onClick={handleSearchSubmit} className="search-button">Search</button>
                </div>
                {message && <div className="message">{message}</div>}
            </header>

            <section className="courses">
                <h2>Featured Courses</h2>
                <div className="course-grid">
                    <div className="course-card">
                        <img src="path/to/image.jpg" alt="Course 1" className="course-image" />
                        <div className="course-info">
                            <h3>Indian Classical Music</h3>
                            <p>Explore the depths of Indian classical music with expert instructors.</p>
                            {enrolledCourses.includes('Indian Classical Music') ? (
                                <button onClick={() => handleViewCourse('Indian Classical Music')} className="view-button">
                                    View Course
                                </button>
                            ) : (
                                <button onClick={() => handleEnrollNow('Indian Classical Music')} className="enroll-button">
                                    Enroll Now
                                </button>
                            )}
                        </div>
                    </div>
                    {/* Repeat the course card for other courses */}
                </div>
            </section>

            
        </div>
    );
};

export default Learning;