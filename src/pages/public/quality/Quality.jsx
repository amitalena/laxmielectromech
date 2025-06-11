import React from "react";
import Heading from "../../../components/heading/Heading";
import { Title } from "react-head";
import { useMediaQuery, useTheme } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Quality = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);


    return <>
        <Title>Quality Assurance & Control</Title>
        <div className="w-auto h-auto bannerCard">
            <a className="w-auto h-auto">
                <img src={isMobile ? "/banners/Quality-mobile.png" : "/banners/Quality.png"} alt="banner" className="w-full" />
            </a>
        </div>
        <div className="flex flex-col w-full items-center justify-center px-4 md:px-12 py-6 bg-white">
            <div className="flex justify-center flex-col md:flex-row items-center overflow-hidden w-full">
                <div className="flex flex-col justify-start items-start w-full md:w-[60%]">
                    {/* Title Section */}
                    <div className="w-full flex justify-start items-center mb-6"
                        data-aos="fade-down"
                        data-aos-easing="ease-in-sine"
                    >
                        <Heading startText="Quality" endText="Assurance & Control" justify="start" pb={1} />
                    </div>
                    {/* Quality Assurance Section */}
                    <div className="mb-6"
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                    >
                        <h2 className="text-xl font-semibold text-blue-700 mb-2">Our Commitment to Quality</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Quality is the foundation of our company’s operations. We strictly adhere to ISO 9001 standards, ensuring
                            that our processes maintain consistent excellence and continuous improvement. Through precision engineering
                            and cutting-edge technology, we guarantee high reliability and top-tier performance. Our dedicated team
                            constantly enhances operational procedures to boost efficiency, minimize errors, and deliver superior
                            solutions to our clients. We invest heavily in training and development to ensure our workforce upholds
                            the highest quality standards in every project.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full md:w-[40%]">
                    {/* Image Section */}
                    <div className="flex justify-center p-4">
                        <div className="relative"
                            data-aos="zoom-in"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="rounded-full flex items-center justify-center">
                                {/* <img src="/images/quality-control.png" alt="Quality Assurance Process" className="w-full max-w-[400px]" /> */}
                                <img src="/images/Quality-Assurance-vs-Quality-Control.png" alt="Quality Assurance Process" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Additional Image Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
                <div className="flex justify-center p-4 overflow-hidden">
                    <div className="relative w-full">
                        <div className="rounded-lg flex items-center justify-center"
                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                        >
                            <img src="/images/post.png"
                                alt="Quality Assurance Process" className="w-full" />
                        </div>
                    </div>
                </div>
                {/* Quality Control Section */}
                <div className="w-full">
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">Ensuring Excellence</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our approach to quality control is built on rigorous inspections and advanced automated testing systems.
                        Every product undergoes multiple levels of assessment to ensure it meets or exceeds industry benchmarks.
                        From selecting premium raw materials to conducting final inspections, we enforce strict quality control
                        measures. Our automated testing procedures minimize human error, ensuring enhanced precision and reliability.
                        Additionally, we have a dedicated failure analysis team that investigates defects, identifies root causes,
                        and implements corrective measures to prevent future issues.
                    </p>
                </div>
            </div>


            {/* Innovation in Quality Management */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Innovation & Continuous Improvement</h2>
                <p className="text-gray-700 leading-relaxed">
                    We believe in the power of innovation to drive quality advancements. Our research and development team
                    constantly explores new methodologies and cutting-edge technologies to optimize our processes. By embracing
                    automation and data-driven decision-making, we enhance efficiency, reduce waste, and improve overall product
                    performance. Our continuous improvement model ensures that we stay ahead of industry trends and meet
                    the evolving needs of our customers.
                </p>
            </div>

            {/* Customer-Centric Approach */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Customer Satisfaction & Feedback</h2>
                <p className="text-gray-700 leading-relaxed">
                    Customer satisfaction is at the heart of our quality initiatives. We actively gather and analyze customer
                    feedback to refine our products and services. By fostering strong relationships with our clients, we
                    tailor solutions to meet their specific requirements and expectations. Our commitment to transparency and
                    responsiveness has earned us a reputation for delivering unparalleled quality and reliability.
                </p>
            </div>

            {/* Sustainability & Responsibility */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">Sustainability & Environmental Responsibility</h2>
                <p className="text-gray-700 leading-relaxed">
                    As part of our commitment to sustainability, we incorporate eco-friendly practices in our quality management
                    processes. We prioritize energy-efficient manufacturing, waste reduction, and the use of sustainable materials
                    wherever possible. Our goal is to not only meet high-quality standards but also to contribute positively
                    to the environment and society.
                </p>
            </div>
        </div>
    </>
};

export default Quality;