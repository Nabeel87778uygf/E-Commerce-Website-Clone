import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [zoom, setZoom] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                
                const enhancedProduct = {
                    ...data,
                    rating: data.rating || { rate: (Math.random() * 3 + 2).toFixed(1), count: Math.floor(Math.random() * 100) + 1 },
                    images: [
                        data.image,
                        `https://picsum.photos/seed/${data.id + 1}/800/800`,
                        `https://picsum.photos/seed/${data.id + 2}/800/800`,
                        `https://picsum.photos/seed/${data.id + 3}/800/800`
                    ],
                    specifications: {
                        brand: "BrandX",
                        model: `MOD-${Math.floor(Math.random() * 10000)}`,
                        weight: `${(Math.random() * 2 + 0.5).toFixed(1)} kg`,
                        dimensions: `${Math.floor(Math.random() * 30 + 10)} x ${Math.floor(Math.random() * 30 + 10)} x ${Math.floor(Math.random() * 10 + 5)} cm`,
                        color: ["Red", "Blue", "Black", "White"][Math.floor(Math.random() * 4)],
                        material: ["Plastic", "Metal", "Wood", "Fabric"][Math.floor(Math.random() * 4)]
                    },
                    description: data.description ? 
                        `${data.description} This premium product comes with a 1-year warranty and is backed by our 100% satisfaction guarantee. Perfect for everyday use or as a special gift.` : 
                        "High-quality product with 1-year warranty. Perfect for everyday use."
                };
                
                setProduct(enhancedProduct);
                setLoading(false);
            } catch (err) {   
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleQuantityChange = (value) => {
        const newQuantity = quantity + value;
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        alert(`Added ${quantity} ${product.title} to cart`);
    };

    const renderStars = (rating) => {
        const numericRating = parseFloat(rating);
        const fullStars = Math.floor(numericRating);
        const hasHalfStar = numericRating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        return (
            <>
                {'★'.repeat(fullStars)}
                {hasHalfStar && '½'}
                {'☆'.repeat(emptyStars)}
                <span className="rating-value">({numericRating.toFixed(1)})</span>
            </>
        );
    };

    if (loading) {
        return <div className="loading">Loading product details...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!product) {
        return <div className="error">Product not found</div>;
    }

    return (
        <div className="product-detail-container">
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb">
                <span onClick={() => navigate('/')}>Home</span>
                <span className="separator">/</span>
                <span onClick={() => navigate('/products')}>Products</span>
                <span className="separator">/</span>
                <span>{product.title}</span>
            </div>

            {/* Product Details */}
            <div className={`product-container ${windowWidth < 768 ? 'mobile' : ''}`}>
                {/* Images Section */}
                <div className="images-section">
                    <div 
                        className={`main-image-container ${zoom ? 'zoomed' : ''}`}
                        onClick={() => setZoom(!zoom)}
                    >
                        <img 
                            src={product.images[selectedImage]} 
                            alt={product.title} 
                            className={`main-image ${zoom ? 'zoomed' : ''}`}
                        />
                        <div className="zoom-notice">
                            {zoom ? 'Click to zoom out' : 'Click to zoom in'}
                        </div>
                    </div>
                    <div className="thumbnail-container">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => {
                                    setSelectedImage(index);
                                    setZoom(false);
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="details-section">
                    <h1 className="product-title">{product.title}</h1>
                    
                    <div className="rating-container">
                        {renderStars(product.rating.rate)}
                        <span className="review-count">({product.rating.count} reviews)</span>
                    </div>
                    
                    <div className="price-container">
                        <span className="current-price">${product.price}</span>
                        <span className="original-price">${(product.price * 1.33).toFixed(2)}</span>
                        <span className="discount-badge">25% OFF</span>
                    </div>
                    
                    <p className="description">{product.description}</p>
                    
                    <hr className="divider" />
                    
                    <div className="quantity-container">
                        <span className="quantity-label">Quantity:</span>
                        <div className="quantity-control">
                            <button 
                                className="quantity-button"
                                onClick={() => handleQuantityChange(-1)}
                            >
                                -
                            </button>
                            <input 
                                type="text" 
                                value={quantity}
                                readOnly
                                className="quantity-input"
                            />
                            <button 
                                className="quantity-button"
                                onClick={() => handleQuantityChange(1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    
                    <button 
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                    
                    <button className="wishlist-btn">
                        Add to Wishlist
                    </button>
                    
                    <hr className="divider" />
                    
                    <h3 className="specs-title">Product Specifications</h3>
                    <table className="specs-table">
                        <tbody>
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <tr key={key} className="spec-row">
                                    <td className="spec-name">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</td>
                                    <td className="spec-value">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;