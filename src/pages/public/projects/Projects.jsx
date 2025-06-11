
import React, { useEffect } from 'react';
import Heading from '../../../components/heading/Heading';
import { useMediaQuery, useTheme } from '@mui/material';
import { Title } from 'react-head';
import { FaAward, FaCheckCircle, FaExternalLinkAlt, FaUsers } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";

const Projects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const projects = [
        {
            id: 1,
            title: "11kV Distribution Substation Installation",
            description: "Complete turnkey solution for 11kV substation including design, installation and commissioning",
            image: "/projects/1.png",
            tags: ["Substation", "Government Project", "High Voltage"],
            features: [
                "VCB panel installation with protection relays",
                "11kV/415V transformer installation & commissioning",
                "SCADA integration for remote monitoring & control",
            ]
        },
        {
            id: 2,
            title: "DG Set Installation with Exhaust System",
            description: "Complete diesel generator installation including exhaust pipe routing and sound attenuation",
            image: "/projects/2.png",
            tags: ["Power Backup", "DG Installation", "Exhaust System"],
            features: [
                "DG set foundation and mounting",
                "Exhaust pipe routing and insulation",
                "Acoustic enclosure installation",
                "ATS integration",
                "Fuel system setup"
            ]
        },
        {
            id: 3,
            title: "Vacuum Circuit Breaker (VCB) Installation",
            description: "Professional installation of VCB panels for 11kV substation with complete protection system",
            image: "/projects/3.png",
            tags: ["High Voltage", "Switchgear", "Substation"],
            features: [
                "VCB panel installation and alignment",
                "Protection relay configuration",
                "Busbar connections",
                "Interlocking system setup",
                "Testing and commissioning"
            ]
        },
    ];

    const stats = [
        {
            icon: <FaAward className="text-3xl text-yellow-500" />,
            value: "Class I Licensed",
            label: "Highest Grade Government Electrical Contractor"
        },
        {
            icon: <FaCheckCircle className="text-3xl text-green-500" />,
            value: "150+ Successful",
            label: "Electrical Infrastructure Projects Delivered"
        },
        {
            icon: <FaUsers className="text-3xl text-blue-500" />,
            value: "75+ Certified",
            label: "Engineers & Technicians Team"
        },
        {
            icon: <FaShield className="text-3xl text-emerald-500" />,
            value: "100% Safety",
            label: "Zero Incidents Across All Projects"
        },
        // {
        //     icon: <FaBolt className="text-3xl text-orange-500" />,
        //     value: "Up to 66kV",
        //     label: "Substation Installation & Maintenance Capacity"
        // }
    ];

    return <>
        <Title>Our Projects</Title>
        <div className='w-auto h-auto bannerCard'>
            <a className="w-auto h-auto">
                <img src={isMobile ? "/banners/our-projct-phone.png" : "/banners/our-project-1.png"} alt="image" className="w-full" />
            </a>
        </div>

        <div className="bg-gray-100 py-3 px-4 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <Heading startText="Our" endText="Projects" pb={2} />

            <div className="bg-gray-50">
                {/* Stats Section */}
                {
                    isMobile ? <>
                        <div className="px-6 py-8">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={20}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                            >
                                {stats.map((stat, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="bg-white p-6 my-2 shadow-md text-center hover:shadow-lg transition-shadow"
                                            data-aos="zoom-in"
                                            data-aos-easing="ease-in-sine"
                                        >
                                            <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
                                            <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                                            <p className="text-gray-600 main-size">{stat.label}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </> : <>
                        <div className="mx-auto px-6 py-8">
                            <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-white p-6 shadow-md my-2 text-center hover:shadow-lg transition-shadow"
                                        data-aos="zoom-in"
                                        data-aos-easing="ease-in-sine"
                                    >
                                        <div className="text-blue-600 mb-4 flex justify-center">{stat.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                                        <p className="text-gray-600 main-size">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                }

                {/* Projects Showcase */}
                <div className="container mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800"
                        data-aos="zoom-in"
                    // data-aos-easing="ease-in-sine"
                    >Featured Projects</h2>

                    <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 main-size">{project.description}</p>

                                    <ul className="space-y-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className='main-size'>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center">
                                        View Details <FaExternalLinkAlt className="ml-2" />
                                    </button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Capabilities Section */}
                <div className="bg-gray-100 py-10">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800"
                            data-aos="zoom-in"
                        >Our Electrical Capabilities</h2>

                        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Substation */}
                            <div className="bg-white p-6 rounded-lg shadow-md"
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">Substation Solutions</h3>
                                <ul className="space-y-2 text-gray-600 main-size">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> New substation installation up to 11kV
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> Maintenance services up to 66kV
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> VCB and transformer installation
                                    </li>
                                </ul>
                            </div>

                            {/* Electrification */}
                            <div className="bg-white p-6 rounded-lg shadow-md"
                                data-aos="fade-up"
                                data-aos-easing="ease-in-sine"
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">External Electrification</h3>
                                <ul className="space-y-2 text-gray-600 main-size">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> Complete power distribution
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> DG set installation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> LT panel and feeder pillars
                                    </li>
                                </ul>
                            </div>

                            {/* Automation */}
                            <div className="bg-white p-6 rounded-lg shadow-md"
                                data-aos="fade-left"
                                data-aos-easing="ease-in-sine"
                            >
                                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">Industrial Automation</h3>
                                <ul className="space-y-2 text-gray-600 main-size">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> PLC programming
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> VFD installation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span> Process optimization
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Projects;