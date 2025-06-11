import { Box, Stack, Typography, Grid, Divider, useTheme, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import AOS from 'aos';
import Banner from '../../../utils/Banner'
import Ab from '../../../assets/images/aboutabnner.webp'
import A1 from '../../../assets/images/about.avif'
import OurMissionPage from '../ourmission/OurMissionPage'
import OurJourney from './OurJourney'
import WhatWeDo from './WhatWeDo'
import WhyChooseUs from '../../../components/home-components/WhyChooseUs'
import OurExpertise from './OurExpertise'
import OurTeam from './OurTeam'
import SustainabilitySection from './SustainabilitySection'
import ClientTestimonials from '../../../components/home-components/ClientTestimonials'
import Certifications from '../../../components/home-components/Certifications'
import { Title } from 'react-head'
import Infrastructure from './Infrastructure'
import Founders from './Founders'
import CertificateLicense from '../../../components/home-components/License'
import { FaCheckCircle } from 'react-icons/fa'
import Heading from '../../../components/heading/Heading'
import Clientele from '../../../components/home-components/Clientele';
import OrganizationChart from './OrganizationChart';

const AboutUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        AOS.init({
            duration: 1000,  // animation duration
            once: true,      // animation only once
        });
    }, []);

    const CheckPoint = ({ children }) => (
        <div className="flex justify-start items-center gap-x-2">
            <FaCheckCircle size={16} className="text-[var(--colorOne)]" />
            <span className="font-medium main-size">{children}</span>
        </div>
    );

    return (
        <>
            <Title>About Us</Title>
            <Box
                sx={{ width: '100%' }}
            >
                <div className='w-auto h-auto bannerCard'>
                    <a className='w-auto h-auto'>
                        <img src={isMobile ? "/banners/About-mobile.png" : "/banners/About.png"} alt="image" />
                    </a>
                </div>
            </Box>
            <Box>
                <Box sx={{ py: 3, px: { xs: 2, md: 4, lg: 6 } }}>
                    {/* Header */}

                    <Grid container spacing={3} alignItems="center" sx={{ overflow: 'hidden' }}>
                        {/* Text Content */}
                        <Grid item xs={12} md={7}  data-aos="fade-right">
                            <div className='flex justify-start items-center'>
                                <Heading startText='About' endText='Us' />
                            </div>
                            <Typography variant='body1' sx={{ mb: 1.5 }} className='main-size'>
                                Laxmi Electromech Pvt. Ltd. (LEPL) is a CPRI-approved and trusted name in the field of electrical and automation solutions.
                                With a strong commitment to quality and innovation, we specialize in the design, manufacturing, and implementation of
                                high-performance electrical panels and comprehensive industrial solutions. As a leading Industrial Electrical and Automation
                                Solution provider, we deliver reliable, customized services tailored to meet the unique needs of our clients across various industries.
                                Our areas of expertise include:
                            </Typography>
                            <CheckPoint>Electrical panels – Design, manufacturing, and commissioning</CheckPoint>
                            <CheckPoint>Industrial electrical solutions – Turnkey projects and system integration</CheckPoint>
                            <CheckPoint>Automation solutions – PLC, SCADA, HMI, and process automation</CheckPoint>
                        </Grid>


                        {/* Image Section */}
                        <Grid item xs={12} md={5}  data-aos="fade-left">
                            <Box sx={{ height: 300, width: "100%", borderRadius: 2, overflow: "hidden", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={'/images/about.png'} className='rounded-md' alt="About Us" style={{ width: "90%", objectFit: "cover" }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <OurMissionPage />
                {/* <Infrastructure /> */}
                {/* <OurJourney /> */}
                <Founders />
                {/* <WhatWeDo /> */}
                {/* <WhyChooseUs /> */}
                <OurExpertise />
                {/* <OurTeam /> */}
                <OrganizationChart />
                {/* <SustainabilitySection /> */}
                <ClientTestimonials />
                <Certifications />
                <Clientele />
                {/* <CertificateLicense/> */}
            </Box>
        </>
    )
}

export default AboutUs
