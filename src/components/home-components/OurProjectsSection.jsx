import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
import Heading from "../heading/Heading";
import ProjectCard from "../../pages/public/projects/ProjectCard";
import { fabricationProjects, PowderProjects } from "../../data/projects";


const OurProjectsSection = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    // Refs for navigation buttons
    const prevRefFab = useRef(null);
    const nextRefFab = useRef(null);
    const prevRefPowder = useRef(null);
    const nextRefPowder = useRef(null);

    const buttonStyle = {
        outline: 'none',
        border: '1px solid gray',
        color: 'gray',
        minWidth: 'auto',
        px: 1
    };

    const handleClick = (id) => {
        navigate('/projects');
    };

    return (
        <Box sx={{ background: "#F1F2F9", py: 1.5, px: { md: 2, lg: 4, xl: 4, xs: 2 } }}>
            {/* <Heading startText="Our" endText="Projects" variant="h5" pb={0.2} /> */}
            <Heading startText="PLANT" endText="AND MACHINERY" justify="center" pb={1} />

            <Grid container alignItems="center"
            >
                {/* Left Side - Fabrication Projects Slider */}
                <Grid item xs={12} md={8}
                    sx={{
                        background: '#e5e7eb',
                        p: 1,
                    }}
                    className="bg-gray-200"
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" fontWeight="bold">
                            Fabrication Plant
                        </Typography>

                        {/* Navigation Buttons */}
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button ref={prevRefFab} variant="outlined" sx={buttonStyle}>
                                <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                            </Button>
                            <Button ref={nextRefFab} variant="outlined" sx={buttonStyle}>
                                <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                            </Button>
                        </Box>
                    </Box>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 1 },
                            900: { slidesPerView: 2 },
                        }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = prevRefFab.current;
                                swiper.params.navigation.nextEl = nextRefFab.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                    >
                        {fabricationProjects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <ProjectCard blog={project} handleClick={handleClick} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>

                {/* Right Side - Powder Coating Projects Slider */}
                <Grid item xs={12} md={4}>
                    {PowderProjects.length > 0 && (
                        <Box
                            sx={{
                                px: 1.5,
                                py: 1,
                                background: "#e0e0e0",
                                // borderRadius: "10px",
                                // boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                textAlign: "center",
                            }}
                        >
                            <div className="flex justify-between items-center w-full mb-2">
                                <Typography variant="h6" fontWeight="bold">
                                    Powder Coating Plant
                                </Typography>

                                {/* Navigation Buttons */}
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button ref={prevRefPowder} variant="outlined" sx={buttonStyle}>
                                        <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                                    </Button>
                                    <Button ref={nextRefPowder} variant="outlined" sx={buttonStyle}>
                                        <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                                    </Button>
                                </Box>
                            </div>

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    600: { slidesPerView: 1 },
                                    900: { slidesPerView: 1 },
                                }}
                                onSwiper={(swiper) => {
                                    setTimeout(() => {
                                        swiper.params.navigation.prevEl = prevRefPowder.current;
                                        swiper.params.navigation.nextEl = nextRefPowder.current;
                                        swiper.navigation.init();
                                        swiper.navigation.update();
                                    });
                                }}
                            >
                                {PowderProjects.map((project) => (
                                    <SwiperSlide key={project.id}>
                                        <ProjectCard blog={project} handleClick={handleClick} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default OurProjectsSection;
