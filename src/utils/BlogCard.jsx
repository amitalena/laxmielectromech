import React from "react";
import { AccessTime, KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Stack, Typography, Button, useTheme } from "@mui/material";
import { format, isValid, parseISO } from "date-fns";

const BlogCard = React.memo(({ blog, handleClick }) => {
    const theme = useTheme();

    const formattedDate = isValid(parseISO(blog.createDate))
        ? format(parseISO(blog.createDate), "MMM dd, yyyy")
        : "Invalid Date";

    const handleCardClick = () => handleClick(blog.id);

    return (
        <Card
            elevation={0}
            sx={{
                background: theme.palette.info.light,
                height: "100%",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease-in-out",
            }}
            data-aos="fade-up"
        >
            {/* Blog Image */}
            <Box
                sx={{

                    height: { xs: "200px", sm: "250px", md: "250px" },
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.3s ease-out",
                }}
                onClick={handleCardClick}
            >
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                        backgroundImage: `url(${blog.imagePath})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(32, 122, 163, 0.43)",
                            opacity: 0,
                            transition: "opacity 0.3s ease-out",
                            "&:hover": { opacity: 1 },
                        }}
                    />
                </Box>
            </Box>
            {/* Author & Comments */}
            <Box sx={{ pt: 2, px: 2 }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <AccessTime />
                    <Typography variant="body2">{formattedDate}</Typography>
                    <Divider
                        sx={{
                            background: "#333",
                            height: "15px",
                            width: "0px",
                        }}
                        orientation="vertical"
                    />
                    <Typography variant="body2">{blog.createdBy}</Typography>
                </Stack>
            </Box>

            {/* Blog Content */}
            <CardContent>
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    onClick={handleCardClick}
                    sx={{ cursor: "pointer", "&:hover": { color: theme.palette.primary.main } }}
                >
                    {blog.title}
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

export default BlogCard;
