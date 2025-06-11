import React from "react";
import { Avatar, Box } from "@mui/material";

const PointerBox = ({ image, bgColor, textColor = "white", width = 200 }) => {
    return (
        <Box
            sx={{
                width: `${width}px`,
                height: "50px",
                position: "relative",
                backgroundColor: bgColor,
                display: "flex",
                padding: '10px',
                alignItems: "center",
                justifyContent: "center",
                color: textColor,
                fontWeight: "bold",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: 0,
                    height: 0,
                    borderLeft: `26px solid ${textColor}`,
                    borderTop: "26px solid transparent",
                    borderBottom: "26px solid transparent",
                },
                "&::before": {
                    content: '""',
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: 0,
                    height: 0,
                    borderRight: `25px solid ${textColor}`,
                    borderTop: "25px solid transparent",
                    borderBottom: "25px solid transparent",
                },
            }}
        >
            <Box sx={{ background: 'rgba(0,0,0,0.2)', borderRadius: '50px', height: '100px', width: '100px', fontSize: '100px' }}>
                <Avatar sx={{ background: '#fff', m: 1.3, p: 2, backdropFilter: 'blur(10px)', height: '80px', width: '80px', fontSize: '100px' }} src={image}></Avatar>
            </Box>
        </Box>
    );
};

export default PointerBox;
