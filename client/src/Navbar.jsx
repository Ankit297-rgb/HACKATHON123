import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Css/Navbar.css'; // Use the same CSS file as your Home page or create a new one
import { Link } from 'react-router-dom';
function Navbar({ user, onLogout }) {
    const navigate = useNavigate();
    const location = useLocation(); // Get current location

    // Determine which link is active
    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="header1">
            <nav className="navbar">
                <a href="/home" className={isActive('/home')}>Home</a>
                <a href="/learning" className={isActive('/learning')}>Learning</a>
                <a href="/about" className={isActive('/about')}>About</a>
                <a href="/contact" className={isActive('/contact')}>Contact Us</a>
                <a href="/product" className={isActive('/product')}>Product</a>
                <Link to="/blog" className={isActive('/blog')}>Blog</Link>

            </nav>
            <div className="nav-v2">
                <div className="nav-v2-2">
                    {user ? (
                        <div className="profile-bar">
                            <button className="btn btn-secondary" onClick={() => { onLogout(); navigate('/login'); }}>Logout</button>
                        </div>
                    ) : (
                        <>
                            <form action="/search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" role="img" className="icon nav-v2-search__icon">
                                    <path d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12.814 12.8132L15.5 15.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </form>
                            <a className="search-btn" title="Search" data-nav-event-clicked="Search" href="/search"></a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;
