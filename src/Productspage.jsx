import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Productspage = () => {
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56
    });
    const [isLoading, setIsLoading] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeCategory, setActiveCategory] = useState('Flash Sales');
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            </>
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("https://fakestoreapi.com/products");
                let data = await response.json();
                
                data = data.map(product => ({
                    ...product,
                    rating: {
                        rate: (Math.random() * 3 + 2).toFixed(1),
                        count: Math.floor(Math.random() * 100) + 1
                    }
                }));
                
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error.message);
                setIsLoading(false);
            }
        };

        fetchData();

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const { days, hours, minutes, seconds } = prevTime;
                
                if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
                if (minutes > 0) return { ...prevTime, minutes: minutes - 1, seconds: 59 };
                if (hours > 0) return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
                if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
                
                clearInterval(timer);
                return prevTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const loadMore = () => {
        setVisibleProducts(prev => prev + 4);
    };

    const getGridColumns = () => {
        if (windowWidth < 480) return '1fr';
        if (windowWidth < 768) return 'repeat(2, 1fr)';
        if (windowWidth < 1024) return 'repeat(3, 1fr)';
        return 'repeat(4, 1fr)';
    };

    const handleAddToCart = (product, e) => {
        e.stopPropagation();
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id 
                        ? { ...item, quantity: item.quantity + 1 } 
                        : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        alert(`${product.title} added to cart!`);
    };

    const categories = [
        'Home & Lifestyle',
        'Medicine',
        'Sports & Outdoor',
        "Baby's & Toys",
        'Groceries & Pets',
        'Flash Sales',
        'Health & Beauty'
    ];

    const styles = {
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: '"Inter", sans-serif'
        },
        searchBar: {
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center'
        },
        searchInput: {
            width: '100%',
            maxWidth: '500px',
            padding: '10px 15px',
            borderRadius: '4px',
            border: '1px solid #ddd',
            fontSize: '16px'
        },
        categoryTabs: {
            display: 'flex',
            overflowX: 'auto',
            gap: '15px',
            marginBottom: '20px',
            paddingBottom: '10px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
        },
        categoryTab: {
            padding: '8px 16px',
            borderRadius: '20px',
            backgroundColor: '#f5f5f5',
            color: '#333',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'all 0.3s ease'
        },
        activeCategoryTab: {
            backgroundColor: '#DB4444',
            color: '#fff'
        },
        sectionHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
        },
        title: {
            fontSize: windowWidth < 480 ? '24px' : '32px',
            fontWeight: 600,
            color: '#000'
        },
        countdownTimer: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: windowWidth < 480 ? '14px' : '16px',
            fontWeight: 500
        },
        countdownBox: {
            backgroundColor: '#000',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '4px',
            minWidth: '30px',
            textAlign: 'center'
        },
        productsGrid: {
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: '20px',
            marginBottom: '30px'
        },
        productCard: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
        },
        productImageContainer: {
            backgroundColor: '#f5f5f5',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: windowWidth < 480 ? '150px' : '200px'
        },
        productImage: {
            maxWidth: '100%',
            maxHeight: windowWidth < 480 ? '120px' : '160px',
            objectFit: 'contain'
        },
        productInfo: {
            padding: '15px'
        },
        productTitle: {
            fontSize: windowWidth < 480 ? '14px' : '16px',
            fontWeight: 500,
            marginBottom: '10px',
            height: windowWidth < 480 ? '36px' : '40px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
        },
        priceContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px'
        },
        currentPrice: {
            fontSize: windowWidth < 480 ? '16px' : '18px',
            fontWeight: 600,
            color: '#DB4444'
        },
        originalPrice: {
            fontSize: windowWidth < 480 ? '14px' : '16px',
            color: '#7D7D7D',
            textDecoration: 'line-through'
        },
        ratingContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            marginBottom: '15px'
        },
        ratingStars: {
            color: '#FFAD33',
            fontSize: windowWidth < 480 ? '12px' : '14px'
        },
        ratingCount: {
            fontSize: windowWidth < 480 ? '12px' : '14px',
            color: '#7D7D7D'
        },
        addToCartBtn: {
            width: '100%',
            padding: windowWidth < 480 ? '8px' : '10px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            fontSize: windowWidth < 480 ? '12px' : '14px'
        },
        loadMoreBtn: {
            display: 'block',
            margin: '0 auto',
            padding: windowWidth < 480 ? '10px 20px' : '12px 30px',
            backgroundColor: '#DB4444',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            fontSize: windowWidth < 480 ? '14px' : '16px'
        },
        loadingText: {
            textAlign: 'center',
            fontSize: '18px',
            margin: '40px 0'
        }
    };

    return (
        <div style={styles.container}>
            {/* Search Bar */}
            <div style={styles.searchBar}>
                <input 
                    type="text" 
                    placeholder="Type here to search" 
                    style={styles.searchInput} 
                />
            </div>

            {/* Category Tabs */}
            <div style={styles.categoryTabs}>
                {categories.map(category => (
                    <div 
                        key={category}
                        style={{
                            ...styles.categoryTab,
                            ...(activeCategory === category ? styles.activeCategoryTab : {})
                        }}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>

            {/* Flash Sales Section */}
            <div style={styles.sectionHeader}>
                <h2 style={styles.title}>{activeCategory}</h2>
                {activeCategory === 'Flash Sales' && (
                    <div style={styles.countdownTimer}>
                        <span>Ends in:</span>
                        <span style={styles.countdownBox}>{timeLeft.days.toString().padStart(2, '0')}</span> : 
                        <span style={styles.countdownBox}>{timeLeft.hours.toString().padStart(2, '0')}</span> : 
                        <span style={styles.countdownBox}>{timeLeft.minutes.toString().padStart(2, '0')}</span> : 
                        <span style={styles.countdownBox}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    </div>
                )}
            </div>

            {isLoading ? (
                <div style={styles.loadingText}>Loading products...</div>
            ) : (
                <>
                    <div style={styles.productsGrid}>
                        {products.slice(0, visibleProducts).map((product) => (
                            <div 
                                key={product.id} 
                                style={styles.productCard}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                                onClick={() => navigate(`/product/${product.id}`)}
                            >
                                <div style={styles.productImageContainer}>
                                    <img 
                                        src={product.image} 
                                        alt={product.title} 
                                        style={styles.productImage}
                                    />
                                </div>
                                
                                <div style={styles.productInfo}>
                                    <h3 style={styles.productTitle}>{product.title}</h3>
                                    <div style={styles.priceContainer}>
                                        <span style={styles.currentPrice}>${product.price}</span>
                                        <span style={styles.originalPrice}>${(product.price * 1.33).toFixed(0)}</span>
                                    </div>
                                    <div style={styles.ratingContainer}>
                                        <div style={styles.ratingStars}>
                                            {renderStars(product.rating.rate)} ({product.rating.rate})
                                        </div>
                                        <span style={styles.ratingCount}>({product.rating.count})</span>
                                    </div>
                                    <button 
                                        style={styles.addToCartBtn}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#DB4444'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#000'}
                                        onClick={(e) => handleAddToCart(product, e)}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {visibleProducts < products.length && (
                        <button 
                            style={styles.loadMoreBtn}
                            onClick={loadMore}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0392b'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DB4444'}
                        >
                            Load More
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default Productspage;