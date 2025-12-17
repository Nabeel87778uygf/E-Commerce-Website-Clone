import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faHeart,
    faCartShopping,
    faBars,
    faTimes
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <div className="nav-container">
                <div className="navbar">
                    <div className="heading">Exclusive</div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="mobile-toggle-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <FontAwesomeIcon
                            icon={isMobileMenuOpen ? faTimes : faBars}
                            className="toggle-icon"
                        />
                    </button>

                    {/* Navigation Links and Search - Wrapped in a div for mobile toggle */}
                    <div className={`nav-content ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                        <div className="nav-links">
                            <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                            <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                            <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                            <Link to="/signup" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                        </div>

                        <div className="search-container">
                            <div className="search-box">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="search-input"
                                />
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="search-icon"
                                />
                            </div>

                            <div className="action-icons">
                                <FontAwesomeIcon icon={faHeart} className="icon" />
                                <FontAwesomeIcon icon={faCartShopping} className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;