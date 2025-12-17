import React from 'react';
import coverpic from '../assets/cover picture.jpg';
import './CategoriesCard.css';

const CategoriesCard = () => {
    return (
        <div className="echagenus-container">
            {/* Background Image */}
            <div className="background-image-container">
                <img
                    src={coverpic}
                    alt="Music Enhancement Background"
                    className="background-image"
                />
            </div>
            
            {/* Content Container */}
            <div className="content-overlay">
                {/* Header with Logo and Tagline */}
                <header className="echagenus-header">
                    <h1 className="echagenus-logo">Echagenus</h1>
                    <p className="echagenus-tagline">Enhance Your Music Experience</p>
                </header>

                

                
            </div>
        </div>
    );
};

export default CategoriesCard;