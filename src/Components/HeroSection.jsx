import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import heroImage from '../assets/image1.jpg';

const HeroSection = () => {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
            height: '400px',
            marginTop: '64px'
        }}>
            {/* Left Side Categories (35%) */}
            <Box sx={{
                width: '20%',
                padding: '16px',
                borderRight: '1px solid #f0f0f0',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}>
                

                <List sx={{ padding: 0, flexGrow: 1 }}>
                    {['Woman\'s Fashion', 'Men\'s Fashion', 'Electronics', 'Home & Lifestyle',
                        'Medicine', 'Sports & Outdoor', 'Baby\'s & Toys',
                        'Groceries & Pets', 'Health & Beauty'].map((item) => (
                            <ListItem key={item} sx={{
                                padding: '8px 0px',
                                '&:hover': {
                                    backgroundColor: '#f9f9f9',
                                    cursor: 'pointer'
                                }
                            }}>
                                <ListItemText primary={item} />
                                {['Woman\'s Fashion', 'Men\'s Fashion'].includes(item) && (
                                    <ChevronRightIcon sx={{ color: '#999' }} />
                                )}
                            </ListItem>
                        ))}
                </List>

            
            </Box>

            {/* Right Side Hero Banner (65%) with white space */}
            <Box sx={{
                width: '80%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center', // Centers the content
                backgroundColor: '#fff' // White background for the empty space
            }}>
                <Box sx={{
                    width: '85%', // Image takes 85% of the right section
                    height: '100%',
                    position: 'relative'
                }}>
                    <Box
                        component="img"
                        src={heroImage}
                        alt="iPhone 14 Series"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '30px',
                        backgroundColor: 'rgba(0,0,0,0.3)'
                    }}>
                        <Typography variant="h4" sx={{
                            fontWeight: 'bold',
                            marginBottom: '8px',
                            color: '#fff'
                        }}>
                            iPhone 14 Series
                        </Typography>
                        <Typography variant="body1" sx={{
                            marginBottom: '16px',
                            color: '#fff'
                        }}>
                            Up to 10% off Voucher
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                alignSelf: 'flex-start',
                                backgroundColor: '#000',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#333'
                                }
                            }}
                        >
                            Shop Now <ChevronRightIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;