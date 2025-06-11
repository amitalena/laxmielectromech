import React, { useMemo } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Heading from "../heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// Register Autoplay module
SwiperCore.use([Autoplay]);

const Clientele = React.memo(() => {
  const theme = useTheme();

  return (
    <div className="py-2 px-4 md:px-8 w-full">
      <div className="w-full mx-auto text-center">
        <Heading startText="Our" endText="Clients" pb={1} />
        <Typography color="textSecondary" className="mt-1">
          Trusted by leading industries in manufacturing, infrastructure, and commercial sectors.
        </Typography>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={0} // No space between slides
          slidesPerView={9} // Adjusted to match max breakpoint for consistency
          // centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            speed: 1500,
          }}
          speed={5000}
          pagination={false}
          navigation={false}
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 0 },
            600: { slidesPerView: 3, spaceBetween: 0 },
            960: { slidesPerView: 4, spaceBetween: 0 },
            1280: { slidesPerView: 10 , spaceBetween: 0 },
          }}
        >
          {Array(11)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index} className="py-3 mx-2 flex justify-center items-center">
                <img
                  src={`/images/clients/${index + 1}.png`}
                  alt={`Client ${index + 1}`}
                  // className="w-24 h-24 object-contain rounded-lg m-0 px-8 border border-solid border-gray-300" // Added h-24 for consistent height
                  className="w-[72px] h-[72px] object-contain rounded-lg m-0 px-8 border border-solid shadow-[0px_0px_1px_1px_#dbdbdb] border-gray-300" // Added h-24 for consistent height
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
});

export default Clientele;