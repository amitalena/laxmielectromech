import { Container, Typography, Grid, Box, Divider, useTheme, useMediaQuery } from "@mui/material";
import Heading from "../../../components/heading/Heading";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurExpertise = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <Container maxWidth="xl" sx={{ py: 3, width: "100%" }}>
            {/* Title Section */}
            {/* <Box sx={{ pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Expertise</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box> */}
            <Heading
                startText="Our"
                endText="Expertise"
            />

            <Grid container spacing={4} alignItems="center">
                {/* Left Side: Image */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src="https://st2.depositphotos.com/1907633/5560/i/450/depositphotos_55608549-stock-photo-businessman-working-with-new-modern.jpg"
                            alt="Our Expertise"
                            style={{
                                width: isMobile ? "100%" : "80%",
                                maxHeight: "350px",
                                borderRadius: "15px",
                                boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
                                objectFit: "cover",
                            }}
                            data-aos="zoom-in"
                            data-aos-once="true"
                        />
                    </Box>
                </Grid>

                {/* Right Side: Text Content */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ px: { xs: 2, sm: 3 }, py: { xs: 2, sm: 3 }, overflow: 'hidden' }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                        >
                            Specializations in Electrical Automation & EPC Solutions
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#555", mb: 2 }} className="main-size"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                        >
                            We specialize in providing top-notch electrical automation and
                            Engineering, Procurement & Construction (EPC) solutions. Our
                            comprehensive services ensure efficiency, safety, and cutting-edge
                            technology integration.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                        >
                            Technical Excellence & Advanced Solutions
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#555" }} className="main-size"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                        >
                            With years of expertise, we deliver high-quality engineering
                            solutions that meet global standards. Our innovative approach and
                            advanced technology enable seamless operations across industries.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurExpertise;
