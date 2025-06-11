import { Box, Typography } from "@mui/material";

const HoverEffectCard = ({
    title = "",
    description = "",
    image = "",
}) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '400px',
                borderRadius: '8px',
                overflow: 'hidden',
                background: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                "&:hover .description": {
                    maxHeight: "100px", // Expand height on hover
                    opacity: 1, // Make text visible
                    // padding: 2, // Add padding when shown
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    background: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
                    padding: 2,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                }}
            >
                <Typography variant="h5" sx={{ color: 'white'}} fontWeight={800}>{title}</Typography>
                
                {/* Description Box with Hidden Effect */}
                <Box
                    className="description"
                    sx={{
                        maxHeight: "0px", // Initially hidden
                        overflow: "hidden",
                        transition: "max-height 0.4s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s",
                        opacity: 0, // Initially invisible
                        color: 'white',
                        width: '100%',
                    }}
                >
                    <Typography>{description}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default HoverEffectCard;
