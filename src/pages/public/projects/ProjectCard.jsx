import React from "react";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Card, CardContent, Typography, Button, useTheme, useMediaQuery } from "@mui/material";

const ProjectCard = React.memo(({ blog, handleClick }) => {
    const theme = useTheme();
    const handleCardClick = () => handleClick(blog.id);
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Card
            elevation={0}
            sx={{
                background: theme.palette.info.light,
                // height: "100%",
                height: isMobile ? 'auto' : '430px',
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease-in-out",
            }}
            data-aos="fade-up"
        >
            {/* Blog Image */}
            <Box
                sx={{
                    height: { xs: "220px", sm: "250px", md: "280px" }, // Adjusted height for better scaling
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "#f1f1f1", // Light background for empty spaces
                    background: "#ffffff", // Light background for empty spaces
                }}
                onClick={handleCardClick}
            >
                <Box
                    component="img"
                    src={blog.image}
                    alt="Project"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain", // Ensures entire image is visible
                        objectPosition: "center",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.05)",
                        },
                    }}
                />
            </Box>

            {/* Blog Content */}
            <CardContent
                sx={{
                    height: '100%',
                }}
                className="bg-blue-50"
            >
                <Typography
                    variant="body1"
                    fontWeight="bold"
                    onClick={handleCardClick}
                    sx={{ cursor: "pointer", "&:hover": { color: theme.palette.primary.main } }}
                    className="main-size"
                >
                    {blog.content}
                </Typography>
                <Button
                    variant="outlined"
                    sx={{ mt: 2 }}
                    endIcon={<KeyboardDoubleArrowRight />}
                    onClick={handleCardClick}
                >
                    Read More
                </Button>
            </CardContent>
        </Card>
    );
});

export default ProjectCard;
