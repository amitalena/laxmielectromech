import { useEffect, useState, useRef } from "react";
import { Box, Grid, Stack, Typography, useTheme, Card, CardMedia, CardContent, Breadcrumbs, Divider, useMediaQuery } from "@mui/material";
import { AccessTime, KeyboardDoubleArrowRight } from "@mui/icons-material";
import { format, parseISO, isValid } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import S1 from '../assets/images/footer.webp';
import LatestBlogCard from "../pages/public/blogs/LatestBlogCard";

const BlogComponent = ({ blog, latestBlogs }) => {
    const { palette, breakpoints } = useTheme();
    const navigate = useNavigate();
    const descriptionRef = useRef(null); // Ref for description
    const isMobile = useMediaQuery(breakpoints.down("md"));

    const formattedDate = isValid(parseISO(blog.createDate))
        ? format(parseISO(blog.createDate), "MMM dd, yyyy")
        : "Invalid Date";
    const [mainBlog, setMainBlog] = useState(blog);
    const [latestPosts, setLatestPosts] = useState(latestBlogs);

    useEffect(() => {
        setMainBlog(blog);
    }, [blog]);

    useEffect(() => {
        if (descriptionRef.current) {
            descriptionRef.current.innerHTML = mainBlog.description; // Set innerHTML
        }
    }, [mainBlog.description]); // Update when description changes

    const handleClick = (selectedBlog) => {
        localStorage.setItem("Blog", JSON.stringify(selectedBlog));
        setMainBlog(selectedBlog);

        const updatedLatest = latestBlogs.filter(item => item.id !== selectedBlog.id);
        setLatestPosts(updatedLatest);

        navigate(`/singleblog/${selectedBlog.id}`);
    };

    return (
        <>
            {/* <Banner
                title="Blogs"
                image={S1}
                height={{ sm: '40vh', md: '40vh', xs: '40vh', lg: '50vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(30,57,81,0.7)"
                spacingConfig={{ lg: 12, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Single Blogs"
            /> */}
            <Box
                sx={{ width: '100%' }}
            >
                <img src={isMobile ? "/banners/blog-banner-mobile.png" : "/banners/blog-banner.png"} alt="image" style={{ width: '100%', height: 'auto' }} />
            </Box>

            <Box sx={{ background: "#F1F2F9", py: 1, px: { md: 2, lg: 6, xl: 6, xs: 2 }, position: 'relative' }}>
                <Box sx={{ p: 1, my: 2, background: palette.info.light }}>
                    <Breadcrumbs separator={<KeyboardDoubleArrowRight sx={{ color: palette.primary.main }} />} aria-label="breadcrumb">
                        <Link style={{ fontWeight: 'bold', textDecoration: 'none', color: palette.primary.main }} to="/">Home</Link>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: palette.info.deep }}>
                            {mainBlog.title}
                        </Typography>
                    </Breadcrumbs>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} lg={8}>
                        <Card elevation={0} sx={{ height: "auto", p: { xs: 2, sm: 2, md: 2, lg: 3, xl: 3 }, overflow: "hidden" }}>
                            <CardMedia component="img" image={mainBlog.imagePath} alt="Main Blog Image"
                                sx={{ height: "60vh", width: "100%" }}
                            />
                            <CardContent>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <AccessTime />
                                    <Typography variant="body2">{formattedDate}</Typography>
                                    <Divider sx={{ background: "#333", height: "15px", width: "0px" }} orientation="vertical" />
                                    <Typography variant="body2">{mainBlog.createdBy}</Typography>
                                </Stack>

                                <Stack spacing={2} mt={1}>
                                    <Typography variant="h4" fontWeight="bold">{mainBlog.title}</Typography>
                                    <div ref={descriptionRef}></div> {/* Set innerHTML here */}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid
                        item xs={12} lg={4}
                        sx={{
                            alignSelf: "start", // Ensures it doesn't shrink
                            position: "sticky",
                            top: "100px" // Adjust based on your layout
                        }}
                    >
                        <Card elevation={0} sx={{ p: 2, mb: 1 }}>
                            <Stack spacing={1}>
                                <Typography variant="h4">Categories</Typography>
                                <Typography sx={{ color: palette.info.dark }}> {mainBlog.categories}</Typography>
                            </Stack>
                        </Card>

                        <Card elevation={0} sx={{ p: 2 }}>
                            <Typography variant="h4" sx={{ my: 2 }}>Recent Posts</Typography>
                            <Box
                                sx={{
                                    height: '260px',
                                    overflowY: 'auto',  // Ensures scrolling works correctly
                                    display: "block",   // Allows child elements to flow naturally
                                    gap: 2,
                                    minWidth: 0         // Prevents flexbox overflow issues
                                }}
                            >
                                {latestPosts.slice(0, 4).map((latestBlog) => (
                                    <LatestBlogCard
                                        key={latestBlog.id}
                                        blog={latestBlog}
                                        title={latestBlog.title}
                                        createDate={latestBlog.createDate}
                                        image={latestBlog.imagePath}
                                        onClick={() => handleClick(latestBlog)}
                                    />
                                ))}
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default BlogComponent;
