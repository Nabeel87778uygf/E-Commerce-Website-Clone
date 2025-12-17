import React from 'react';
import { FaMobileAlt, FaLaptop, FaClock, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';
import './CategoriesSection.css'
const CategoriesSection = () => {
    return (
        <div className="categories-container">
            <p className='categories-title'>Categories</p>
            <h2 className="categories-subtitle" >Browse by categories</h2>

            <div className='categories-grid'>
                <div className='category-card'>
                    <FaMobileAlt className="category-icon" />
                    <span>Phones</span>
                </div>

                <div className="category-card">
                    <FaLaptop className="category-icon" />
                    <span>Computers</span>
                </div>

                <div className="category-card">
                    <FaClock className="category-icon" />
                    <span>SmartWatch</span>
                </div>

                <div className="category-card">
                    <FaCamera className="category-icon" />
                    <span>Camera</span>
                </div>

                <div className="category-card">
                    <FaHeadphones className="category-icon" />
                    <span>HeadPhones</span>
                </div>

                <div className="category-card">
                    <FaGamepad className="category-icon" />
                    <span>Gaming</span>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSection;
