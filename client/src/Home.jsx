import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import img5 from './image/teamlogo.jpg';
import './Css/App.css';
import EventSection from './EventSection';
import ImageCarousel from './ImageCarousel';
import HeritageBooking from './HeritageBooking';

import Typed from 'typed.js'; // Import Typed.js

function Home({ user, onLogout }) {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location (URL)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Initialize Typed.js for dynamic text typing
        const options = {
            strings: [
                '<span style="font-size:105%; font-weight: bold; color: black; text-align:left">Welcome to Indian Culture and Heritage</span>',
                '<span style="font-size:105%; font-weight: bold; color: black; text-align:left">भारतीय संस्कृति में आपका स्वागत है</span>',
                '<span style="font-size:100%; font-weight: bold; color: black; text-align:left">ভারতীয় সংস্কৃতি এবং ঐতিহ্যে আপনাকে স্বাগতম!</span>',
            ],
            typeSpeed: 60,
            backSpeed: 25,
            loop: true,
            showCursor: false,
        };

        const typed = new Typed('#typed-text', options);

        // Cleanup when component unmounts
        return () => {
            typed.destroy();
        };
    }, []);

    const handleExploreClick = () => {
        if (user) {
            navigate('/explore');
        } else {
            navigate('/login');
        }
    };

    const handleBlogClick = () => {
        if (user) {
            navigate('/blog');
        } else {
            navigate('/login');
        }
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    //test
    const handleLearningClick = () => {
        navigate('/learning');
    };

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    const handleProductClick = () => {
        navigate('/product');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="body">
            <header className="header">
                <nav className="navbar">
                    <div className="menu-icon" onClick={toggleMenu} style={{ cursor: 'pointer', color: 'black' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M1.5 12.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm0-5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm0-5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13z"/>
                        </svg>
                    </div>
                    
                    <div className="logo">
                        <img src={img5} alt="logo" />
                    </div>
                    
                    <ul className={isMenuOpen ? 'open' : ''}>
                        {/* Conditionally render the Home link */}
                        {location.pathname !== '/home' && location.pathname !== '/' && (
                            <li><a href="/home" className="active">Home</a></li>
                        )}
                        <li><a onClick={handleLearningClick} style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#3498db')} onMouseLeave={(e) => (e.target.style.color = '#000')}>Learning</a></li>
                        <li><a onClick={handleAboutClick} style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#3498db')} onMouseLeave={(e) => (e.target.style.color = '#000')}>About</a></li>
                        <li><a onClick={handleContactClick} style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#3498db')} onMouseLeave={(e) => (e.target.style.color = '#000')}>Contact-us</a></li>
                        <li><a onClick={handleProductClick} style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }} onMouseEnter={(e) => (e.target.style.color = '#3498db')} onMouseLeave={(e) => (e.target.style.color = '#000')}>Products</a></li>
                        <li>
                            <a
                                onClick={handleBlogClick}
                                style={{ cursor: 'pointer', color: 'black', textDecoration: 'none' }}
                                onMouseEnter={(e) => (e.target.style.color = '#3498db')}
                                onMouseLeave={(e) => (e.target.style.color = '#000')}
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="nav-v2">
                    <div className="nav-v2-2">
                        {user ? (
                            <>
                                <button className="btn btn-secondary" onClick={handleProfileClick}>
                                    Profile
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn2 dynamic__login" onClick={() => navigate('/login')}>
                                    Log in
                                </button>
                                <button className="btn2 btn2--medium" onClick={() => navigate('/register')}>
                                    Sign Up
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </header>

            <div className="row align-items-center border shadow p-4 mx-5">
                <div className="col-md-6">
                    <div className="typewriter-container">
                        <h2 id="typed-text" style={{ textAlign: 'left' }}></h2>
                        <h1>
                            Explore and Showcase 
                            <br /><h1>Our Culture.</h1>
                        </h1>
                    </div>
                    <p className="lead">
                        <span>Know the Nation,</span>
                        <br />
                        <span style={{ color: 'black' }}>Hold the Traditions,</span>
                        <br />
                        <span style={{ color: 'green' }}>Spread the Culture.</span>
                    </p>

                    <button className="btn btn-primary" onClick={handleExploreClick}>
                        Explore
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-up-right-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                        </svg>
                    </button>
                    <p>&copy;TEAM PARAM-SANSKRIT</p>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-12 mb-2 p-8">
                            <ImageCarousel />
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="comp">
                {user && <EventSection user={user} />}
            </div>
            <div className="comp">
                {user && <HeritageBooking user={user} />}
            </div>
            
        </div>
    );
}

export default Home;