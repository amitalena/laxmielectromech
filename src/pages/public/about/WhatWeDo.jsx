import React from 'react';
import { Container, Typography, Grid, Box, Divider, useTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const WhatWeDo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
        <Container maxWidth="xl" sx={{ py: 5, width: "100%" }}>
            {/* Title Section */}
            <Box sx={{ pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    What <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">We Do</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box>
            
            <Grid container spacing={isMobile ? 4 : 2} alignItems="center">
                {/* Left Side: Text Content */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ px: { xs: 2, sm: 3, md: 3, lg: 4 } }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                            Overview of Products & Services
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
                            We provide cutting-edge electrical solutions, including automation
                            systems, panel manufacturing, and EPC contracts. Our commitment
                            to quality and innovation ensures reliable and efficient solutions
                            for all industries.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                            Key Industries We Serve
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#555" }}>
                            Our solutions cater to industrial, commercial, and infrastructure
                            sectors, ensuring safe and efficient electrical installations. We
                            support manufacturing, construction, and energy industries with
                            state-of-the-art automation and control systems.
                        </Typography>
                    </Box>
                </Grid>

                {/* Right Side: Image */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src="https://st2.depositphotos.com/1092019/9700/i/450/depositphotos_97006952-stock-illustration-what-we-do-on-white.jpg"
                            alt="What We Do"
                            style={{
                                width: isMobile ? "80%" : "100%",
                                maxHeight: "350px",
                                borderRadius: "15px",
                                boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhatWeDo;
