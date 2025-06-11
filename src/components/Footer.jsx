/* eslint-disable no-unused-vars */
import { Box, Button, Divider, Grid, IconButton, OutlinedInput, Stack, Typography, useTheme } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, Facebook, Instagram, LinkedIn, Send, Twitter } from '@mui/icons-material';
import FooterImg from '../assets/images/footer.jpg';
import { useMemo } from 'react';

const aboutLink = [
    { name: 'Home', route: '/' },
    { name: "About Us", route: '/about' },
    // { name: 'Our Products', route: '/category/electrical-automation/plc-control-panel' },
    // { name: 'Manufacturing Facility Machinery', route: '/manufacturing-facility-machinery' },
    { name: 'Plant and Machinery', route: '/plant-and-machinery' },
    { name: 'Our Clients', route: '/our-clients' },
    { name: "Career", route: '/career' },
    { name: 'Quality', route: '/quality' },
    // { name: "Blogs", route: '/blogs' },
    { name: 'Projects', route: '/projects' },
    // { name: "Contact Us", route: '/contact-us' },
];
const socialLinks = [
    { icon: Facebook, link: 'https://www.facebook.com/share/1D3ha3whwF/', name: 'Facebook' },
    { icon: Instagram, link: '#', name: 'Instagram' },
    { icon: Twitter, link: '#', name: 'Twitter' },
    { icon: LinkedIn, link: '#', name: 'LinkedIn' }
];
const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    const links = useMemo(() => [
        // { name: "Power Control Centre", route: "/manufacturing-ranges/power-control-centre" },
        { name: "MCC Panels", route: "/manufacturing-ranges/mcc-panels" },
        // { name: "Intelligent MCC Panels", route: "/manufacturing-ranges/intelligent-mcc-panels" },
        // { name: "DG Synchronization Panel", route: "/manufacturing-ranges/dg-synchronization-panel" },
        { name: "AMF Panels", route: "/manufacturing-ranges/auto-mains-failure-panels" },
        { name: "APFC Panels", route: "/manufacturing-ranges/automatic-power-factor-control-panels" },
        { name: "VFD Panels", route: "/manufacturing-ranges/vfd-panels" },
        // { name: "LV/MV Soft Starter Panels", route: "/manufacturing-ranges/lv-mv-soft-starter-panels" },
        // { name: "PLC Panel/ SCADA Panel", route: "/manufacturing-ranges/plc-panel-scada-panel" },
        { name: "Distribution Boards", route: "/manufacturing-ranges/distribution-boards" },
        { name: 'More...', route: "/manufacturing-ranges/power-control-centre" },
    ], []);

    const hoverStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: 1,
        py: 0.2,
        // color: theme.palette.info.light,
        color: '#000',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary.dark,
            transform: 'scale(1.05)',
        },
    };

    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            {
                !location.pathname.startsWith("/contact-us") ?
                    <Box
                        sx={{ background: 'white' }}
                    >
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{
                                // backgroundImage: `url('/images/footer-form-bg.png')`, // or .png / .webp
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('/images/footer-top-bg.jpg')`, // or .png / .webp
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <Grid item xs={12} sm={6} md={6}
                                sx={{
                                    px: { xs: 2, sm: 2, md: 2, lg: 6, xl: 6 },
                                    width: '100%',
                                }}
                            >
                                <Typography variant="h5" sx={{ color: "#fff" }}>Talk To Us Now For</Typography>
                                <Typography variant="body2" sx={{ color: "#fff" }}>
                                    Keep up-to-date with the latest in lighting.
                                </Typography>
                                <Link to={"/contact-us"}>
                                    <Button
                                        sx={{
                                            background: '#111827',
                                            color: 'white',
                                            borderRadius: '4px',
                                            fontSize: '14px',
                                            textTransform: 'none',
                                            px: 2,
                                            cursor: 'pointer',
                                            my: 0.5,
                                        }}
                                    // className='bg-gray-900'
                                    >Get a Quote</Button>
                                </Link>
                            </Grid>

                            {/* Location */}
                            <Grid item xs={12} sm={12} md={6}>
                                <iframe
                                    title="Our Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7831221681317!2d77.3679156!3d28.606282399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff9d9a29621%3A0xb9929d4a37f85697!2sLaxmi%20Electromech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1744623377193!5m2!1sen!2sin"
                                    width="100%"
                                    // height={110}
                                    height={150}
                                    // style={{ border: 0, borderRadius: "8px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Grid>
                        </Grid>
                    </Box> : null
            }
            <Box sx={{
                color: theme.palette.info.main,
                overflow: "hidden",
                // background: `url(${FooterImg}) no-repeat center/cover`,
                background: `url('/footer-bg.jpg') no-repeat center/cover`,
            }}>
                <Box sx={{
                    // background: 'rgba(0,0,0,0.9)', 
                    height: '100%', width: '100%', py: 3,
                    px: { xs: 2, sm: 2, md: 2, lg: 6, xl: 8 },
                }}>
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        // style={{
                        //     rowGap: '1.5rem', /* xs: 1.5 */
                        //     columnGap: '0.25rem', /* xs: 1 */
                        // }}
                    >
                        {/* About Section */}
                        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                            <div className='w-full flex flex-col justify-start items-start'>
                                <img src="/logo-remove.png" alt="image" className='w-full md:w-3/4' />
                                <Typography variant='body2' className='main-size' sx={{ color: '#000', mt: 2, mb: 1 }}>
                                    Laxmi Electromech Pvt. Ltd. specializes in electrical automation, panel manufacturing, and end-to-end EPC solutions, delivering reliable and innovative services across industries.
                                </Typography>
                                <Stack direction="row" spacing={0.5} sx={{ mx: 0, px: 0 }}>
                                    {socialLinks.map(({ icon: Icon, name }, index) => (
                                        <IconButton key={index} sx={{ color: '#000', '&:hover': { color: theme.palette.info.dark }, mx: 0, p: 0.5 }} aria-label={name}>
                                            <Icon sx={{ fontSize: '25px' }} />
                                        </IconButton>
                                    ))}
                                </Stack>
                            </div>
                        </div>

                        {/* About Links */}
                        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                Quick Link
                                <Divider sx={{ background: '#000' }} />
                            </Typography>
                            <Stack>
                                {aboutLink.map((list, index) => (
                                    <Stack key={index} direction={'row'} alignItems={'center'} sx={{ py: 0, my: 0 }}>
                                        <ChevronRight sx={{ color: '#000' }} />
                                        <Button onClick={() => navigate(list.route)} sx={hoverStyle} className='main-size !capitalize'>{list.name}</Button>
                                    </Stack>
                                ))}
                            </Stack>
                        </div>

                        {/* Manufacturing Links */}
                        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                Manufacturing
                                <Divider sx={{ background: '#000' }} />
                            </Typography>
                            <Stack>
                                {links.map((list, index) => (
                                    <Stack key={index} direction={'row'} alignItems={'center'} sx={{ py: 0, my: 0 }}>
                                        <ChevronRight sx={{ color: '#000' }} />
                                        <Button onClick={() => navigate(list.route)} sx={hoverStyle} className='main-size !capitalize'>{list.name}</Button>
                                    </Stack>
                                ))}
                            </Stack>
                        </div>

                        {/* Contact Info */}
                        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 main-size" style={{ color: '#000' }}>
                            <Typography variant='h5' color="primary" fontWeight="bold" textTransform="uppercase" mb={1}>
                                Contact Info
                                <Divider sx={{ background: '#000' }} />
                            </Typography>
                            <Typography variant='body2'>
                                <a href="https://maps.app.goo.gl/SeyMAJz3ZG4VdFj96" className='text-gray-900 hover:text-blue-700' target='_blank'>
                                    <strong>Registered Address:</strong> A-139, B-06, Gali No. 1, Madhu Vihar, I.P Extension, Delhi 110092
                                </a>
                            </Typography>
                            <Typography variant='body2'>
                                <a href="https://maps.app.goo.gl/Zy6Hcdn3unfpJdgp8" className='text-gray-900 block hover:text-blue-700' target='_blank'>
                                    <strong>Manufacturing Address:</strong> A-09, Sector-59, Noida, U.P – 201301
                                </a>
                            </Typography>
                            <Typography variant='body2'>
                                <span><strong>Email:</strong></span>
                                <a href='mailto:info@laxmielectromech.com' className='text-blue-600 hover:text-blue-700'>info@laxmielectromech.com</a>
                                <a href='mailto:apglaxmi2009@gmail.com' className='text-blue-600 block hover:text-blue-700'>apglaxmi2009@gmail.com</a>
                            </Typography>
                            <Typography variant='body2'>
                                <strong>Phone:</strong>
                                <a href="tel:+919811983451" className='text-gray-900 hover:text-blue-700'>+91-981-198-3451</a>,
                                <a href="tel:+919643401344" className='text-gray-900 hover:text-blue-700'>+91-964-340-1344</a>
                            </Typography>
                        </div>
                    </div>

                    <Divider sx={{ background: '#000', my: 2.5 }} />

                    {/* Footer Bottom Section */}
                    <Box sx={{ display: { md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', my: 0, color: '#000' }}>
                        <Typography variant="body2">
                            © {new Date().getFullYear()} <strong>Laxmi Electromech</strong>. All Rights Reserved.
                        </Typography>
                        <Typography variant='body2'>Designed & Developed by <a href='https://www.spiralehrsolutions.com/' target="_blank" className='hover:underline'>Spirale HR solutions Pvt. Ltd.</a></Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
