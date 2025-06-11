/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Ab1 from "../../../assets/images/footer2.jpg";
import ServiceCard from "../../../utils/ServiceCard";
import Heading from "../../../components/heading/Heading";
import { FaCheckCircle } from "react-icons/fa";

import C1 from '../../../assets/images/automation.png';
import C2 from '../../../assets/images/epc.avif';
import C3 from '../../../assets/images/panel-manufacturing.png';
import C4 from '../../../assets/images/speed-control.jpg';

const CheckPoint = ({ children }) => (
    <div className="flex justify-start items-center gap-x-2">
        <FaCheckCircle size={16} className="text-[var(--colorOne)]" />
        <span className="font-medium main-size">{children}</span>
    </div>
);

const serviceData = [
    {
        id: 1,
        title: "Electrical Engineering",
        imagePath: C1,
        clipPath: 'right',
        details: (
            <div className="flex flex-col justify-start items-start gap-y-2">
                <p>
                    We offer cutting-edge electrical engineering and automation solutions designed to enhance
                    efficiency, ensure safety, and maximize productivity. Our systems are seamlessly integrated 
                    into existing infrastructure, delivering reliable performance across industrial and commercial environments.
                </p>
                <p>
                    From initial concept to final commissioning, our experienced team ensures that every solution 
                    meets the highest standards. We provide complete end-to-end services including custom panel 
                    design, programming, and smooth system integration tailored to your needs.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <CheckPoint>Custom Electrical System Design & Engineering</CheckPoint>
                    <CheckPoint>Precision Panel Manufacturing</CheckPoint>
                    <CheckPoint>Advanced PLC, HMI & SCADA Programming</CheckPoint>
                    <CheckPoint>Smooth Installation & Commissioning</CheckPoint>
                    <CheckPoint>Reliable Maintenance & System Upgrades</CheckPoint>
                </div>
            </div>
        ),
    },    
    {
        id: 2,
        title: "Plant Intelligent Systems",
        clipPath: 'left',
        imagePath: C2,
        details: (
            <div className="flex flex-col justify-start items-start gap-y-4">
                <p>
                    We specialize in delivering smart, integrated plant automation systems that enhance operational visibility, efficiency, and control. Leveraging advanced technologies and intelligent software, we enable plants to optimize performance, reduce downtime, and improve decision-making through real-time data insights and automated processes.
                </p>
                <p>
                    Our Plant Intelligent Systems are tailored to meet the unique demands of modern industrial facilities. From system architecture and hardware integration to software development and data analytics, we provide end-to-end solutions that ensure seamless automation and long-term scalability.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    <CheckPoint>Smart Monitoring & Control Systems</CheckPoint>
                    <CheckPoint>Real-Time Data Acquisition & Analytics</CheckPoint>
                    <CheckPoint>Customized SCADA & HMI Solutions</CheckPoint>
                    <CheckPoint>Industrial IoT Integration</CheckPoint>
                    <CheckPoint>Predictive Maintenance Capabilities</CheckPoint>
                    <CheckPoint>Energy Efficiency Optimization</CheckPoint>
                    <CheckPoint>Scalable & Future-Ready Architecture</CheckPoint>
                </div>
            </div>
        ),
    },    
    {
        id: 3,
        title: "Industrial Automation",
        clipPath: 'right',
        imagePath: C3,
        details: (
            <div className="flex flex-col justify-start items-start gap-y-4">
                <p>
                    We offer innovative industrial automation solutions designed to enhance efficiency, accuracy, and
                    productivity across manufacturing and process industries. Our systems leverage the latest in control
                    technologies to streamline operations, minimize human error, and enable seamless integration between
                    machinery and software platforms.
                </p>
                <p>
                    From automated production lines to intelligent monitoring systems, we deliver customized automation
                    strategies that ensure real-time control, data-driven decision-making, and scalable growth. Our
                    expertise spans a wide range of industrial sectors, delivering smart solutions that evolve with your business.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    <CheckPoint>Fully Integrated Automation Systems</CheckPoint>
                    <CheckPoint>PLC, HMI & SCADA Programming</CheckPoint>
                    <CheckPoint>Intelligent Process Control</CheckPoint>
                    <CheckPoint>IoT-Enabled Industrial Monitoring</CheckPoint>
                </div>
            </div>
        ),
    },    
    {
        id: 4,
        title: "Speed Control Devices",
        // clipPath: 'left',
        imagePath: C4,
        details: (
            <div className="flex flex-col justify-start items-start gap-y-4">
                <p>
                    Our speed control devices are engineered to provide precise and reliable control over motor speeds across a wide range of industrial applications. These devices help optimize energy usage, reduce wear and tear, and improve the overall efficiency of your operations.
                </p>
                <p>
                    From Variable Frequency Drives (VFDs) to Soft Starters and Servo Controllers, we offer customized solutions that adapt to your specific load requirements. Our products ensure smooth acceleration, deceleration, and speed regulation, enhancing both process control and equipment lifespan.
                </p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    <CheckPoint>Variable Frequency Drives (VFDs)</CheckPoint>
                    <CheckPoint>Soft Starters for Smooth Motor Control</CheckPoint>
                    <CheckPoint>Servo Drives & Controllers</CheckPoint>
                    <CheckPoint>Energy-Efficient Speed Regulation</CheckPoint>
                </div>
            </div>
        ),
    },      
];

const OurServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                background: '#f1f2f9',
                py: 2,
                px: { md: 2, lg: 4, xl: 4, xs: 2 },
            }}
        >
            <Heading startText="Cost Effective" endText="Services" />
            <Grid container alignItems="center">
                {serviceData.map((service, index) => (
                    <Grid
                        container
                        key={index}
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        sx={{
                            flexDirection: {
                                md: index % 2 === 0 ? "row" : "row-reverse",
                            },
                            alignItems: "center",
                        }}
                    >
                        <Grid item xs={12}>
                            <ServiceCard
                                title={service.title}
                                imagePath={service.imagePath}
                                clipPath={service?.clipPath}
                                details={service.details}
                                layout={index % 2 === 0 ? "row" : "row-reverse"}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurServices;
