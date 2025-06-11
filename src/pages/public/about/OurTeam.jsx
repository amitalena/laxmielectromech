import { Box, Typography, Avatar, Card, CardContent, Divider, useTheme } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Heading from "../../../components/heading/Heading";
import PersonIcon from '@mui/icons-material/Person';

// Team Members Data
const teamMembers = [
    {
        name: "Arjun Mehra",
        role: "Systems Integration",
        description: "Arjun excels at integrating diverse systems, ensuring smooth functionality across hardware and software platforms.",
    },
    {
        name: "Priya Nair",
        role: "Project Management",
        description: "Priya leads projects with expertise, coordinating teams and resources to deliver exceptional results on schedule.",
    },
    {
        name: "Rohan Kapoor",
        role: "Design",
        description: "Rohan creates innovative designs, transforming ideas into practical solutions for cutting-edge automation.",
    },
    {
        name: "Neha Gupta",
        role: "Programming",
        description: "Neha develops efficient code, building the backbone of automation systems with precision and skill.",
    },
    {
        name: "Vikram Singh",
        role: "Commissioning",
        description: "Vikram oversees system commissioning, ensuring every component is tested and optimized for deployment.",
    },
    {
        name: "Ananya Desai",
        role: "Training",
        description: "Ananya designs training initiatives, equipping teams and clients with the knowledge to succeed.",
    },
];


const TeamCard = ({ testimonial }) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                // height: "100%",
                height: "170px",
                p: 3,
                pb: 0,
                my: 2,
                mb: 6,
                textAlign: "center",
                position: "relative",
                boxShadow: 3,
                borderRadius: 3,
                overflow: "hidden",
            }}
        >
            {/* Quote Design */}
            {/* <Box
                sx={{
                    position: "absolute",
                    top: -20,
                    left: -20,
                    width: 100,
                    height: 100,
                    bgcolor: "#1C85C6",
                    borderBottomRightRadius: "120%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <FormatQuoteIcon sx={{ fontSize: 35, transform: "rotate(180deg)", color: "white" }} />
            </Box> */}

            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box
                    sx={{
                        background: 'var(--colorOne)',
                        borderRadius: '60%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 1,
                    }}
                >
                    <PersonIcon sx={{ fontSize: 35, color: '#fff' }} />
                </Box>
            </Box>

            <CardContent sx={{ flexGrow: 1, }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                        {testimonial.description}
                    </Typography>
                    <Typography fontWeight="bold" color="var(--colorOne)" className="flex justify-center items-center gap-x-2">
                       <div className="w-[10px] bg-[var(--colorOne)] h-[1px]"></div> {testimonial.name}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};


const OurTeam = () => {
    const theme = useTheme();
    return (
        <div className="testimonial_bg-section">
            <Box sx={{ bgcolor: "grey.100", py: 3, textAlign: "center" }}>
                {/* <Box sx={{ pb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Team</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box> */}
                <Heading
                    startText="Our"
                    endText="Team"
                />
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                    Leadership & Key Team Members
                </Typography>

                {/* Swiper Slider for Team Members */}
                <Box sx={{ px: 2 }}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        loop
                        slidesPerView={1}
                        autoplay={true}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            600: { slidesPerView: 1 },
                            900: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <TeamCard testimonial={member} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </div>
    );
};

export default OurTeam;
