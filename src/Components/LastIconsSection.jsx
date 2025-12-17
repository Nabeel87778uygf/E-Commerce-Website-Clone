import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

const LastIconSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                padding: { xs: '40px 20px', md: '60px 40px' },
                margin: '40px 0'
            }}
        >
            <Grid container spacing={4} justifyContent="center">
                {/* Free Delivery */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <Box
                        sx={{
                            backgroundColor: '#f5f5f5', // Light gray background
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2
                        }}
                    >
                        <LocalShippingIcon
                            sx={{
                                fontSize: '2.5rem',
                                color: 'black', // Black icon
                            }}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        Free and Fast Delivery
                    </Typography>
                    <Typography variant="body1">
                        Free delivery for all orders over $140
                    </Typography>
                </Grid>

                {/* Customer Service */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <Box
                        sx={{
                            backgroundColor: '#f5f5f5', // Light gray background
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2
                        }}
                    >
                        <SupportAgentIcon
                            sx={{
                                fontSize: '2.5rem',
                                color: 'black', // Black icon
                            }}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        24/7 Customer Service
                    </Typography>
                    <Typography variant="body1">
                        Friendly 24/7 customer support
                    </Typography>
                </Grid>

                {/* Money Back Guarantee */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <Box
                        sx={{
                            backgroundColor: '#f5f5f5', // Light gray background
                            borderRadius: '50%',
                            width: '80px',
                            height: '80px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2
                        }}
                    >
                        <AssignmentReturnIcon
                            sx={{
                                fontSize: '2.5rem',
                                color: 'black', // Black icon
                            }}
                        />
                    </Box>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}
                    >
                        Money Back Guarantee
                    </Typography>
                    <Typography variant="body1">
                        We return money within 30 days
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LastIconSection;