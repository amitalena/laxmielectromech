import { Box, Button, Divider, Grid, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import BlogCard from "../../../utils/BlogCard";
import { blogData } from "./blogData";
import { useRef } from "react";
import Heading from "../../../components/heading/Heading";

const LatestBlog = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    // Refs for navigation buttons
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const buttonStyle = {
        outline: 'none',
        border: '1px solid gray',
        color: 'gray',
        minWidth: 'auto',
        px: 1
    };

    const handleClick = (id) => {
        const selectedBlog = blogData.find((item) => item.id === id);
        if (selectedBlog) {
            localStorage.setItem("latestBlog", JSON.stringify(selectedBlog));
            navigate(`/singleblog/${id}`);
        }
    };

    return (
        <Box sx={{ background: "#F1F2F9", py: 4, px: { md: 2, lg: 6, xl: 6, xs: 2 } }}>
            <Grid container spacing={3} alignItems="center">
                {/* Left Side - Swiper Slider */}
                <Grid item xs={12} md={8} >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 1
                        }}
                    >
                        {/* <Box>
                            <Typography variant="h5" fontWeight="bold">
                                Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h5">Blogs</Typography>
                            </Typography>
                            <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px", mt: 1 }} />
                        </Box> */}
                        <Heading
                            startText="Our"
                            endText="Blogs"
                            variant="h5"
                            pb={0}
                        />

                        {/* Custom Navigation Buttons */}
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button ref={prevRef} variant="outlined" sx={buttonStyle}>
                                <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                            </Button>
                            <Button ref={nextRef} variant="outlined" sx={buttonStyle}>
                                <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                            </Button>
                        </Box>
                    </Box>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            600: { slidesPerView: 1 },
                            900: { slidesPerView: 2 },
                        }}
                        onSwiper={(swiper) => {
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            });
                        }}
                    >
                        {blogData.slice(1).map((blog) => (
                            <SwiperSlide key={blog.id}>
                                <BlogCard blog={blog} handleClick={handleClick} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>

                {/* Right Side - Latest Blog */}
                <Grid item xs={12} md={4}>
                    {blogData.length > 0 && (
                        <Box
                            sx={{
                                px: 1.5,
                                py: 1,
                                background: "#fff",
                                borderRadius: "10px",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                                textAlign: "center",
                            }}
                        >
                            {/* <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, color: "primary.main" }}> */}
                            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1, }} className="text-orange-500">
                                Latest Blog
                            </Typography>
                            <BlogCard blog={blogData[0]} handleClick={handleClick} />
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatestBlog;
