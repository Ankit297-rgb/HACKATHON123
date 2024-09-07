// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './image/image1.jpg';
import './Css/App.css';
import EventSection from './EventSection';

function Home({ user, onLogout }) {
    const navigate = useNavigate();

    const handleExploreClick = () => {
        if (user) {
            navigate('/explore');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="body">
            <header className="header">
                <nav className="navbar">
                    <a href="/home" className="active">Home</a>
                    <a href="/learning">Learning</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/product">Product</a>
                    <a href="/social">Social Media</a>

                </nav>
                <div className="nav-v2">
                    <div className="nav-v2-2">
                        {user ? (
                            <>
                                <div className="profile-bar">
                                    <button className="btn btn-secondary" onClick={() => { onLogout(); navigate('/login'); }}>Logout</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <button className="btn2 dynamic__login" onClick={() => navigate('/login')}>Log in</button>
                                <button className="btn2 btn2--medium" onClick={() => navigate('/register')}>Sign up</button>
                            </>
                        )}
                    </div>
                </div>
            </header>

            <div className="container col-10 pt-5 mt-5">
                <div className="row align-items-center border shadow p-4">
                    <div className="col-md-6">
                        
                        <div className="typewriter-container">
                            <div className="typewriter">
                            <h1 className="display-4">Explore and Showcase</h1>
                            <h1 className='culture'>Our <span>Culture |</span></h1>
                            </div>
                        </div>
                        <p className="lead">Welcome to our vibrant corner of the world where culture and heritage come alive! Dive into the rich tapestry of traditions, art, and history that define us. Our platform is dedicated to celebrating the diverse cultural landscapes that shape our collective identity.</p>
                        <button className="btn btn-primary" onClick={handleExploreClick}>
                            Explore   
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-12 mb-2 p-8">
                                <img src={img1} className="img-fluid shadow rounded" alt="Image 1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='comp'>
                {user && <EventSection user={user} />}
            </div>
        </div>
    );
}

export default Home;
