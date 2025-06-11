import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const ServiceCard = ({ title, imagePath, details, layout, imageWidth, imageHeight, clipPath = null }) => {
    return (
        <Card
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column", // Stack vertically on small screens
                    md: layout, // Use layout prop (row or row-reverse) on medium screens+
                },
                // alignItems: { xs: "center", md: "flex-start" }, // Center on small screens
                alignItems: 'center', // Center on small screens
                maxWidth: "100%", // Prevent overflow
            }}
        >
            <CardMedia
                component="img"
                image={imagePath}
                alt={title}
                sx={{
                    m: 2, // Margin around the image
                    width: imageWidth || { xs: "90%", sm: "70%", md: "40%" }, // Use prop or fallback
                    height: imageHeight || { xs: "200px", md: "auto" }, // Use prop or fallback
                    objectFit: "cover", // Ensure image scales properly without distortion
                    borderRadius: 1, // Optional: slight rounding for aesthetics
                    ...(
                        clipPath === 'left' ? {
                            clipPath: 'polygon(28% 0, 100% 1%, 100% 100%, 0 100%, 15% 50%)'
                        }: clipPath === 'right' ? {
                            clipPath: 'polygon(0 0, 98% 0, 87% 44%, 73% 100%, 0% 100%)'
                        }: {}
                    )
                }}
            />
            <CardContent
                sx={{
                    flex: 1, // Take remaining space
                    p: 2, // Consistent padding
                }}
            >
                <Typography variant="h5" color="var(--colorOne)" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1" className="main-size">
                    {details}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;
