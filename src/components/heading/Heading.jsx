import { Box, Divider, Typography, useTheme } from "@mui/material";

const Heading = ({
    startText = "",
    endText = "",
    justify = 'center',
    variant = 'h4',
    pb = 2,
    color = null,
}) => {
    const theme = useTheme();

    return <>
        <Box sx={{ pb: pb, display: 'flex', alignItems: 'center', justifyContent: justify }}>
            <Typography variant={variant} fontWeight="bold" textTransform={'uppercase'} sx={{ fontSize: '30px', ...(color ? { color } : {}) }}>
                {startText} <Typography component="span" sx={{ color: "#2457AA", fontWeight: "bold", fontSize: '30px' }} variant={variant}>{endText}</Typography>
                <Divider sx={{ background: '#2457AA', height: "3px", width: "50px" }} />
            </Typography>
        </Box>
    </>
}

export default Heading;