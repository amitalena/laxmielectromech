import React, { useEffect, useState } from 'react';
import Heading from '../heading/Heading';
import { useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import AOS from "aos";
import "aos/dist/aos.css";

const CertificateLicense = () => {
    const theme = useTheme();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const certificates = [
        { src: '/certificates/INCORPORATION CERTIFICATE_page-0001.jpg', alt: 'Incorporation Certificate' },
        { src: '/certificates/ISO IEC 61439 -1-2020 - LAXMI ELECTROMECH PRIVATE LIMITED_page-0001.jpg', alt: 'ISO IEC Certificate' },
        { src: '/certificates/LAXMI ELECTROMECH EMS_page-0001.jpg', alt: 'EMS Certification' },
        { src: '/certificates/MSME CERTIFICATE_page-0001.jpg', alt: 'MSME Certification' },
        // { src: '/crpi/IP_CPRI_page-0001.jpg', alt: 'IP CPRI' },
        // { src: '/crpi/SHT_CKT_CPRI_page-0001.jpg', alt: 'SHT CKT CPRI' },
        // { src: '/crpi/TR_CPRI_page-0001.jpg', alt: 'TR CPRI' },
    ];

    const openOverlay = (imgSrc) => {
        setSelectedImage(imgSrc);
        setLightboxOpen(true);
    };

    const closeOverlay = () => {
        setLightboxOpen(false);
    };

    return (
        <>
            <div className="bg-gray-100 py-4 w-full">
                <Heading startText="Our" endText="Certificates" />
                {
                    isMobile ? <>
                        <Swiper
                            className="w-full"
                            spaceBetween={2}
                            modules={[Navigation]}
                            navigation
                            loop
                            slidesPerView={1}
                            autoplay={true}
                            speed={1200}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1280: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {certificates.map((cert, index) => (
                                <SwiperSlide key={index} className='flex justify-center items-center w-full'>
                                    <div className='flex justify-center items-center w-full'>
                                        <div
                                            className="relative border-2 border-gray-300 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out w-[260px] overflow-hidden group"
                                            // onClick={() => openOverlay(cert.src)}
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                        >
                                            <img
                                                src={cert.src}
                                                alt={cert.alt}
                                                className="w-full h-auto rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                                <span className="text-white text-lg font-semibold">View Certificate</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </> : <>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_2fr] px-4 lg:px-8'>
                            <div className='flex justify-center items-center'>
                                <img src="/certification-image.png" alt="image" className='w-full h-full rounded-md' />
                            </div>
                            <div className="flex flex-wrap items-center justify-center w-full gap-6 relative">
                                {certificates.map((cert, index) => (
                                    <div key={index} className="relative z-10">
                                        <div
                                            className="group relative border-2 border-gray-300 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out w-[160px] overflow-visible"
                                            // onClick={() => openOverlay(cert.src)}
                                            data-aos="zoom-in"
                                            data-aos-once="true"
                                        >
                                            <img
                                                src={cert.src}
                                                alt={cert.alt}
                                                className="w-full h-auto rounded-md transition-transform duration-300 ease-in-out origin-center z-50"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                }
            </div>

            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[10000] transition-opacity duration-300 ease-in-out"
                    onClick={closeOverlay}
                >
                    <span
                        className="absolute top-5 right-7 text-white text-4xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
                        onClick={closeOverlay}
                    >
                        ×
                    </span>
                    <img
                        src={selectedImage}
                        alt="Enlarged Certificate"
                        className="max-w-[90%] max-h-[98%] border-4 border-white shadow-xl rounded-lg transition-transform duration-300 ease-in-out"
                    />
                </div>
            )}
        </>
    );
};

export default CertificateLicense;
