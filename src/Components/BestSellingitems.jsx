import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bestsellingitems.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpg';
const BestSellingProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const mockProducts = [
                    {
                        id: 1,
                        title: "The north coat",
                        price: 250,
                        originalPrice: 360,
                        rating: { rate: 5, count: 65 },
                        image: image1
                    },
                    {
                        id: 2,
                        title: "Qucci duffle bag",
                        price: 950,
                        originalPrice: 160,
                        rating: { rate: 5, count: 65 },
                        image: image2
                    },
                    {
                        id: 3,
                        title: "RGB liquid CPU Cooler",
                        price: 160,
                        originalPrice: 170,
                        rating: { rate: 5, count: 65 },
                        image: image3
                    },
                    {
                        id: 4,
                        title: "Small Bookseller",
                        price: 350,
                        rating: { rate: 5, count: 65 },
                        image: image4
                    },
                    {
                        id: 4,
                        title: "Small Bookseller",
                        price: 350,
                        rating: { rate: 5, count: 65 },
                        image: image5
                    },
                    {
                        id: 4,
                        title: "Small Bookseller",
                        price: 350,
                        rating: { rate: 3, count: 65 },
                        image: image6
                    },
                    {
                        id: 4,
                        title: "Small Bookseller",
                        price: 350,
                        rating: { rate: 5, count: 65 },
                        image: image7
                    },
                    { 
                        id: 4,
                        title: "Small Bookseller",
                        price: 350,
                        rating: { rate: 5, count: 65 },
                        image: image8
                    }
                ];
                setProducts(mockProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="best-selling-container">
            <div className="header-container">
                <h2>Best Selling Products</h2>
                <button className="view-all-button">View All</button>
            </div>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="product-image" 
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = "https://via.placeholder.com/200?text=No+Image";
                                }}
                            />
                        </div>
                        <h3 className="product-title">{product.title}</h3>
                        <div className="product-prices">
                            <span className="current-price">${product.price}</span>
                            {product.originalPrice && (
                                <span className="original-price">${product.originalPrice}</span>
                            )}
                        </div>
                        <div className="product-rating">
                            <span className="stars">★★★★★</span>
                            <span className="rating-count">({product.rating.count})</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellingProducts;