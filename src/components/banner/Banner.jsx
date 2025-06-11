import { Box, Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { useMediaQuery, useTheme } from "@mui/material";
import { bannerData } from "./bannerData";

const Banner = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ position: "relative", width: "auto", maxWidth: "100%", overflow: "hidden" }}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={1600}
                navigation={!isXs}
                pagination={{ clickable: true }}
                centeredSlides={true}
                slidesPerView={1} // Ensures only one slide is visible at a time
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="swiper-container"
            >
                {bannerData.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card elevation={3}>
                            <Box sx={{ position: "relative", width: "auto", maxWidth: "100%", height: "auto" }}>
                                <img
                                    src={item.imagePath}
                                    alt="banner"
                                    style={{ width: "100%", maxHeight: "100%" }}
                                />
                            </Box>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Banner;
