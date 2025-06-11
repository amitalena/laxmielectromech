import React, { useState } from 'react';
import Heading from '../heading/Heading';

const License = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const licenses = [
        {
            src: '/crpi/IP_CPRI_page-0001.jpg',
            alt: 'IP CPRI',
        },
        {
            src: '/crpi/SHT_CKT_CPRI_page-0001.jpg',
            alt: 'SHT CKT CPRI',
        },
        {
            src: '/crpi/SHT_CKT_CPRI_page-0002.jpg',
            alt: 'SHT CKT CPRI',
        },
        {
            src: '/crpi/TR_CPRI_page-0001.jpg',
            alt: 'TR CPRI',
        },
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
            {/* Licenses Section */}
            <div className="bg-white py-2 w-full">
                <Heading startText="Our" endText="Licenses" />

                {/* License Grid */}
                <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full px-4 lg:px-12 gap-4">
                    {licenses.map((license, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <div
                                key={index}
                                className="border-[2px] border-blue-500 bg-white p-2.5 shadow-md hover:shadow-lg transform relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full  hover:after:scale-0 transition-transform duration-300 ease-in-out w-[250px] cursor-pointer rounded-lg overflow-hidden"
                                onClick={() => openOverlay(license.src)}
                            >
                                <img
                                    src={license.src}
                                    alt={license.alt}
                                    className="w-full h-auto rounded-md transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[10000] transition-opacity duration-300 ease-in-out"
                    onClick={closeOverlay}
                >
                    {/* Close Button */}
                    <span
                        className="absolute top-5 right-7 text-white text-3xl cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
                        onClick={closeOverlay}
                    >
                        ×
                    </span>

                    {/* Enlarged Image */}
                    <img
                        src={selectedImage}
                        alt="Enlarged Image"
                        className="max-w-[80%] max-h-[80%] border-4 border-white shadow-[0_0_15px_white] rounded-lg transition-transform duration-300 ease-in-out scale-100"
                    />
                </div>
            )}
        </>
    );
};

export default License;
