// src/components/HomeGallery.jsx
import { useMemo, useState } from "react";
import Heading from "../heading/Heading";
import { Dialog, DialogContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const PlantAndMachinery = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Memoize image arrays
    const fabricationImages = useMemo(
        () =>
            Array(7)
                .fill(0)
                .map((_, index) => `/images/product-images/fabrication-plant/${index + 1}.png`),
        []
    );
    const powerPlantImages = useMemo(
        () =>
            Array(3)
                .fill(0)
                .map((_, index) => `/images/product-images/power-plant/${index + 1}.png`),
        []
    );

    // Handle image click
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setOpen(true);
    };

    // Handle modal close
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    // Image Card Component
    const ImageCard = ({ src, alt, caption }) => (
        <div
            className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer border border-gray-300"
            onClick={() => handleImageClick(src)}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105 bg-white"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <p className="text-white text-sm font-semibold p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {caption}
                </p>
            </div>
        </div>
    );

    return (
        <section className="w-full py-3 bg-gray-50">
            <Heading startText="PLANT" endText="AND MACHINERY" justify="center" pb={1} />
            <div className="w-full px-4 md:px-8">
                {/* Fabrication Plant Section - Swiper Slider */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-center mb-6">Fabrication Plant</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        speed={700}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 1200, disableOnInteraction: false }} // Corrected autoplay
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="w-full"
                    >
                        {fabricationImages.map((imageSrc, index) => (
                            <SwiperSlide key={index}>
                                <ImageCard
                                    src={imageSrc}
                                    alt={`Fabrication Plant Image ${index + 1}`}
                                    caption="Fabrication Plant"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Power Plant Section (Grid Layout) */}
                <div>
                    <h2 className="text-2xl font-bold text-center mb-6">Powder Coating Plant</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {powerPlantImages.map((imageSrc, index) => (
                            <ImageCard
                                key={index}
                                src={imageSrc}
                                alt={`Power Plant Image ${index + 1}`}
                                caption="Power Plant"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Material-UI Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                PaperProps={{
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        overflow: "hidden",
                    },
                }}
            >
                <DialogContent style={{ padding: 0 }}>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected Image"
                            style={{
                                maxWidth: "90vw",
                                maxHeight: "90vh",
                                objectFit: "contain",
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default PlantAndMachinery;
