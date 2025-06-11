import { Box, Button, Card, CardContent, Divider, Grid, Stack, TextField, Typography, IconButton, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { Map, Headset, Drafts, Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

import GoogleMap from './GoogleMap';

import { Title } from 'react-head';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';

const ContactUs = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // Hover Styles
    const hoverStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 1,
        color: '#939393',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.main,
            transform: 'scale(1.05)',
        },
    };

    const hoverStyle1 = {
        height: '85px',
        width: '85px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
        },
    };

    // Contact Cards Data
    const contactCards = [
        {
            icon: <Map />,
            title: 'Location',
            details: <>
                <div className='text-center main-size'>
                    <a href="https://maps.app.goo.gl/SeyMAJz3ZG4VdFj96" className='text-white block hover:text-blue-300' target='_blank'>Registered Address: A-139, B-06, Gali No. 1, Madhu Vihar, I.P Extension, Delhi 110092</a>
                    <a href="https://maps.app.goo.gl/Zy6Hcdn3unfpJdgp8" className='text-white block hover:text-blue-300' target='_blank'>Manufacturing Address: A-09, Sector-59, Noida, U.P – 201301</a>
                </div>
            </>,
            // details: ['Registered Address: A-139, B-06, Gali No. 1,', ' Madhu Vihar, I.P Extension, Delhi 110092', 'Manufacturing Address: A-09, Sector-59, Noida, U.P – 201301'],
            background: '/contact-us-images/1.png',
        },
        // { icon: <Drafts />, title: 'Send an Email', details: ['info@laxmielectromech.com', 'Sap@laxmielectromech.com', 'apglaxmi2009@gmail.com'] },
        {
            icon: <Drafts />, title: 'Send an Email', 
            details: <>
                <div className="text-center main-size">
                    <a href='mailto:info@laxmielectromech.com' className='text-white block hover:text-blue-300'>info@laxmielectromech.com</a>
                    <a href='mailto:apglaxmi2009@gmail.com' className='text-white block hover:text-blue-300'>apglaxmi2009@gmail.com</a>
                </div>
            </>,
            background: '/contact-us-images/2.png',
            // details: ['info@laxmielectromech.com', 'apglaxmi2009@gmail.com'],
        },
        { 
            icon: <Headset />, title: 'Contact Us', 
            details: <>
                <div className="text-center main-size">
                    <a href="tel:+919643401345" className='text-white hover:text-blue-300'>+91-96434-01345</a>
                </div>
            </>,
            background: '/contact-us-images/3.png',
            // details: ['+91-96434-01345'] 
        },
    ];

    return (
        <>
            <Title>Contact Us</Title>
            <div
                className='w-auto h-auto bannerCard'
            >
                <a className="w-auto h-auto">
                    <img src={isMobile ? "/banners/Contact-Us-mobile.png" : "/banners/Contact-Us.png"} alt="image" style={{ width: '100%', height: 'auto' }} />
                </a>
            </div>
            {/* Contact Information */}
            {/* <Box sx={{ py: 2, px: { lg: 12, md: 2, sm: 2, xs: 2 }, background: theme.palette.info.main }}> */}
            <Box sx={{ py: 2, px: { lg: 6, md: 2, sm: 2, xs: 2 }, background: theme.palette.info.main }}>
                <Grid container spacing={2} justifyContent="space-between" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    {contactCards.map((card, index) => (
                        <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
                            {/* <Card elevation={0} sx={{ background: '#FFFFFF', flexGrow: 1 }}>
                                <CardContent>
                                    <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                                        <Box sx={{ ...hoverStyle1, background: theme.palette.error.main, color: '#fff', p: 1 }}>
                                            {card.icon}
                                        </Box>
                                        <Box sx={{ p: 2, color: theme.palette.primary.main, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <Typography variant="h5" fontWeight="bold">{card.title}</Typography>
                                            {card.details.map((detail, i) => (
                                                <Typography variant="body2" color="info.dark" key={i} sx={{ textAlign: 'center'}}>{detail}</Typography>
                                            ))}
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card> */}
                            <ContactCard
                                {...card}
                            />
                        </Grid>
                    ))}
                </Grid>

                {/* Contact Form & Sidebar */}
                <Grid container spacing={2} sx={{ py: 2, alignItems: 'stretch' }}>
                    {/* Contact Form */}
                    <Grid item lg={7} xl={8} xs={12} sx={{ display: 'flex' }}>
                        <ContactForm />
                    </Grid>

                    {/* Sidebar */}
                    <Grid item lg={5} xl={4} xs={12} sx={{ display: 'flex' }}>
                        <GoogleMap />
                        {/* <Box sx={{ background: theme.palette.info.light, flex: 1 }}>
                            <Card elevation={0} sx={{ p: { lg: 4, xs: 2 }, background: '#FDFDFD', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography variant="h4" fontWeight="bold">Get in Touch</Typography>
                                    <Typography variant="body1" sx={{ pl: 0.8 }} className='main-size'>
                                        Have any questions or need assistance? Contact us today, and our team will be happy to help.
                                        Whether you’re looking for more information, need technical support, or just want to share feedback,
                                        our dedicated team is here to assist you every step of the way.
                                        Reach out via email, phone, or follow us on social media to stay updated on the latest news, updates, and special offers.
                                        We value your input and look forward to hearing from you!
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box> */}
                    </Grid>
                </Grid>

                {/* Google Map */}
                {/* <Box><GoogleMap /></Box> */}
            </Box>
        </>
    );
};

export default ContactUs;
