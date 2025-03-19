
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Css/Navbar.css'; // Ensure correct path to CSS
import img5 from './image/teamlogo.jpg'; // Assuming you want the logo here as well

function Navbar({ user }) {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Determine which link is active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header1">
            <nav className="navbar">
                <div className="menu-icon" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1.5 12.5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm0-5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13zm0-5a.5.5 0 0 1 0-1h13a.5.5 0 0 1 0 1h-13z"/>
                    </svg>
                </div>

                <div className="logo">
                    <img src={img5} alt="logo" />
                </div>

                <ul className={isMenuOpen ? 'open' : ''}>
                    <li><Link to="/home" className={isActive('/home')}>Home</Link></li>
                    <li><Link to="/learning" className={isActive('/learning')}>Learning</Link></li>
                    <li><Link to="/about" className={isActive('/about')}>About</Link></li>
                    <li><Link to="/contact" className={isActive('/contact')}>Contact Us</Link></li>
                    <li><Link to="/product" className={isActive('/product')}>Product</Link></li>
                    <li><Link to="/blog" className={isActive('/blog')}>Blog</Link></li>
                </ul>
            </nav>

            <div className="nav-v2">
                <div className="nav-v2-2">
                    {user && (
                        <button className="btn btn-secondary" onClick={() => navigate('/profile')}>Profile</button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;
