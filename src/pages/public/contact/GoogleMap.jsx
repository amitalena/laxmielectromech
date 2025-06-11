import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

const GoogleMap = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box
                    sx={{
                        width: '100%',
                        height: isMobile ? '400px': '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7831221681317!2d77.3679156!3d28.606282399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff9d9a29621%3A0xb9929d4a37f85697!2sLaxmi%20Electromech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1744623377193!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </Box>
            </Grid>
        </Grid>
    );
};

export default GoogleMap;
