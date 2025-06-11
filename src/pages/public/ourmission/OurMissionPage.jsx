import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Card, CardContent, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import PointerBox from "../../../utils/PointerBox";
import Img1 from '../../../assets/icons/goal.png';
import Img2 from '../../../assets/icons/binocular.png';
import Img3 from '../../../assets/icons/value.png';

const OurMissionPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        AOS.init({
            duration: 500, // Duration of animation
            once: true, // Ensures animation runs only once
            easing: "ease-in-out",
        });
    }, []);

    const sections = [
        {
            image: Img2,
            title: "Our Vision",
            // bgColor: "green",
            // bgColor1: "#ffffff",
            bgColor: "#4b5563",
            bgColor1: "rgba(0,0,0,0.1)",
            // content: "We aim to deliver innovative electrical and automation solutions that ensure safety, efficiency, and sustainability. Our goal is to provide expert services that integrate advanced technology for a smarter future.",
            content: 'To be the trusted and dependable partner for comprehensive electrical and automation solutions, dedicated to delivering innovative technologies and services that drive operational efficiency, environmental sustainability, and sustainable growth.'
        },
        {
            image: Img1,
            title: "Our Mission",
            bgColor: "blue",
            bgColor1: "#e3f2fd",
            // content: "Our mission is to lead industries with cutting-edge automation and control solutions. We strive to advance electrical engineering for a long-term global impact while empowering businesses with customized energy-efficient solutions.",
            content: 'To empower our customers to achieve their goals by delivering reliable, efficient, and sustainable electrical and automation solutions, while promoting a culture of continuous improvement and excellence.',
        },
        {
            image: Img3,
            title: "Our Values",
            // bgColor: "purple",
            // bgColor1: "#f3e5f5",
            bgColor: "#4b5563",
            bgColor1: "rgba(0,0,0,0.1)",
            // content: "We uphold integrity, transparency, and ethical responsibility in all our business dealings. Our commitment to quality, reliability, and service excellence drives us forward, while innovation and sustainability remain at the core of our continuous improvement efforts.",
            content: 'We prioritize customer satisfaction through innovation, excellence, and reliable service. Committed to sustainability, we foster teamwork, integrity, and transparency. With a focus on quality, we adapt quickly to change, ensuring precision in all we do.',
        },
    ];

    return (
        <Box sx={{
            py: 2,
            pt: 4,
            px: { md: 2, lg: 4, xl: 4, xs: 2 },
            background: '#f1f2f9',
        }}>
            <Grid container spacing={3} 
            className="text-gray-500"
            >
                {sections.map((section, index) => (
                    <Grid item xs={12} lg={4} key={index} sx={{ pb: 0 }}>
                        <Box sx={{ pt: 1, position: "relative" }} data-aos="fade-up">
                            <PointerBox
                                bgColor={section.bgColor}
                                image={section.image}
                                textColor="white"
                                width="80%"
                                sx={{
                                    position: "absolute",
                                    top: "-20px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    zIndex: 9999,
                                }}
                            />
                            <Card sx={{ background: section.bgColor1, px: 3, pt: 1, height: isMobile ? 'auto' : '195px', color: section.color ? section.color: 'black' }} elevation={0}>
                                <CardContent>
                                    <Stack spacing={0.5}>
                                        <Typography variant="h4" textAlign="center" sx={{ fontSize: '30px' }}>{section.title}</Typography>
                                        <Typography variant="body2" textAlign="center">
                                            {section.content}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurMissionPage;
