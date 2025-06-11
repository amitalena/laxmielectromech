import { Box, Typography, Avatar, Card, CardContent, Divider, useTheme } from "@mui/material";
import React, { useRef } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Heading from "../heading/Heading";
import GradeIcon from '@mui/icons-material/Grade';

// arrows
import PrevArrow from "../arrows/PrevArrow";
import NextArrow from "../arrows/NextArrow";

const testimonials = [
    {
        title: "Love the simplicity",
        feedback:
            "They understood our brand and created a stunning website design. Professional, responsive, and on-time delivery. Highly recommended!",
        name: "Allan Collins",
        designation: "Managing Director",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        title: "Excellent Designs",
        feedback:
            "Efficient, reliable, and results-oriented. Visually appealing website, improved online visibility. Highly recommended!",
        name: "Tanya Grant",
        designation: "CEO & Founder",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        title: "Efficient and Reliable",
        feedback:
            "Best decision we made. Stunning website, exceptional support. Always available and prompt issue resolution. Hassle-free experience!",
        name: "Clay Washington",
        designation: "Fashion Designer",
        image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
        title: "Exceptional Development",
        feedback:
            "Their development team built a fast and scalable application for us. Top-notch coding standards and great communication throughout the process.",
        name: "Samantha Reed",
        designation: "Product Manager",
        image: "https://randomuser.me/api/portraits/women/37.jpg",
    },
    {
        title: "Marketing Excellence",
        feedback:
            "Their digital marketing strategies brought us more leads than ever. Data-driven and innovative solutions that actually work!",
        name: "Michael Dawson",
        designation: "Head of Marketing",
        image: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
        title: "Reliable Support",
        feedback:
            "Their IT support team is always available. Quick response times and proactive solutions keep our systems running smoothly.",
        name: "Rachel Parker",
        designation: "Operations Manager",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
    },
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "200px",
                px: 3,
                pb: 0,
                my: 1,
                mb: 4.5,
                textAlign: "center",
                position: "relative",
                boxShadow: 3,
                borderRadius: 3,
                overflow: "hidden",
            }}
        >
            {/* Quote Design */}
            <Box
                sx={{
                    position: "absolute",
                    top: -22,
                    left: -8,
                    width: 100,
                    height: 100,
                    // bgcolor: "#1C85C6",
                    // bgcolor: '#2457AA !important',
                    // bgcolor: '#000000 !important',
                    borderBottomRightRadius: "120%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <FormatQuoteIcon sx={{ fontSize: 35, transform: "rotate(180deg)", color: "#2457AA" }} />
            </Box>

            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" color="#1C85C6">
                    {testimonial.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0 }}>
                    {testimonial.feedback}
                </Typography>

                <Box sx={{ mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {/* <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{
                            width: 60,
                            height: 60,
                            border: "2px solid #1C85C6",
                        }}
                    /> */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        {
                            Array(5).fill(0).map((_, index) => (
                                <GradeIcon key={index} sx={{ color: "#facc15" }} fontSize="22px" />
                            ))
                        }
                    </Box>
                    <Typography fontWeight="bold" color="primary.dark" sx={{ mt: 0.5 }}>
                        {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {testimonial.designation}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

const ClientTestimonials = () => {
    const theme = useTheme();
    const swiperRef = useRef(null);
    return (
        <div className="testimonial_bg-section">
            <Box sx={{ bgcolor: "transparent", py: 2, textAlign: "center" }}>
                {/* <Box sx={{ pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Client <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Testimonials</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box> */}
                <Heading
                    startText="Client"
                    endText="Testimonials"
                    pb={0.4}
                />
                <Typography variant="h6" fontWeight="bold" color="text.primary" sx={{ pb: 0, mb: 0 }} className="main-size">
                    What Our Satisfied Customers Say About Their Experience With Us
                </Typography>

                {/* Swiper Slider for Testimonials */}
                {/* Custom Arrows */}
                <Box sx={{ px: 2, mb: 0, pb: 0, width: '100%', position: 'relative' }}>
                    <PrevArrow onClick={() => swiperRef.current.swiper.slidePrev()} />
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 1200, disableOnInteraction: false }}
                        speed={1500}
                        loop={true}
                        // pagination={{ clickable: true }}
                        breakpoints={{
                            600: { slidesPerView: 1 },
                            900: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <NextArrow onClick={() => swiperRef.current.swiper.slideNext()} />
                </Box>
            </Box>
        </div>
    );
};

export default ClientTestimonials;
