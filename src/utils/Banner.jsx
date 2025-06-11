import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import { Box, Breadcrumbs, Stack, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = ({ title, image, height, titleVariant, text, overlayColor, spacingConfig, containerStyles }) => {
    const { palette, spacing } = useTheme();

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out' });
    }, []);

    return (
        <Box
            data-aos="fade-in"
            sx={{
                position: 'relative',
                mx: { xs: 0 },
                backgroundImage: `url(${image})`,
                height: height,
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: overlayColor,
                    zIndex: 1
                },
                zIndex: 0,
                ...containerStyles
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <Stack
                    spacing={1}
                    direction="column"
                    sx={{
                        px: { xl: spacing(spacingConfig.lg), lg: spacing(spacingConfig.lg), md: spacing(spacingConfig.md), sm: spacing(spacingConfig.sm), xs: spacing(spacingConfig.xs) },
                        py: { md: 15, xs: 12, xl: 15, lg: 15, sm: 12 },
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    data-aos="fade-up"
                >
                    <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: '#b71c1c' }} />} aria-label="breadcrumb">
                        <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: '#fdfdfd' }} to="/">Home</Link>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.light }}>
                            {text}
                        </Typography>
                    </Breadcrumbs>
                    <Typography
                        variant={titleVariant}
                        sx={{
                            color: '#FDFDFD',
                            fontSize: { md: '36px', xs: '30px' },
                            fontWeight: 'bold',
                        }}
                        data-aos="fade-up"
                    >
                        {title}
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default Banner;