import { Box } from "@mui/material";

const FooterTopLayer = () => {
    return (
        <Box
            sx={{
                background: 'linear-gradient(120deg, #1C85C6 0%, #0F5B99 100%)',
                px: { xs: 2, sm: 2, md: 2, lg: 6, xl: 6 },
                py: 3,
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap', // optional, handles responsiveness better
            }}
        >
            <Box sx={{ width: { xs: '100%', md: '70%' } }}>
                <p className="text-white">lorem</p>
            </Box>

            <Box
                sx={{
                    width: { xs: '100%', md: '30%' },
                    backgroundColor: 'red', // for debugging
                }}
            >
                <h2>hello</h2>
            </Box>
        </Box>
    );
};

export default FooterTopLayer;
