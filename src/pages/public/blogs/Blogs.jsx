import React, { useCallback, useState } from 'react'
import { blogData } from './blogData';
import { useNavigate } from 'react-router-dom';
import { Box, Pagination, Stack, useMediaQuery, useTheme } from '@mui/material';
import Ab from '../../../assets/images/blog.avif'
import BlogCard from '../../../utils/BlogCard';
import { Grid } from '@mui/material';
import Banner from '../../../utils/Banner';
import { Title } from 'react-head';

const Blogs = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const itemsPerPage = 8;
    const [page, setPage] = useState(1);

    // Paginated Data
    const paginatedData = blogData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    // Memoized Click Handler
    const handleClick = useCallback((id) => {
        navigate(`/singleblog/${id}`);
    }, [navigate]);

    // Pagination Handler
    const handlePageChange = useCallback((_, value) => {
        setPage(value);
    }, []);

    return (
        <>
            <Title>Blogs</Title>
            {/* <Banner
                title="Blog"
                image={Ab}
                // height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '40vh', xl: '40vh' }}
                height={{ sm: '35vh', md: '45vh', xs: '40vh', lg: '50vh', xl: '50vh' }}
                titleVariant="h2"
                overlayColor="rgba(0,0,0, 0.7)"
                spacingConfig={{ xl: 6, lg: 6, md: 2, xs: 1 }}
                containerStyles={{ overflow: "hidden" }}
                text="Blogs"
            /> */}
            <Box
                sx={{ width: '100%' }}
            >
                <img src={isMobile ? "/banners/blog-banner-mobile.png" : "/banners/blog-banner.png"} alt="image" style={{ width: '100%', height: 'auto' }} />
            </Box>
            {/* <Box sx={{ background: "#F1F2F9", py: 2, px: { md: 2, lg: 12, xl: 12, xs: 2 } }}> */}
            <Box sx={{ background: "#F1F2F9", py: 2, px: { md: 2, lg: 6, xl: 6, xs: 2 } }}>
                <Grid container spacing={2}>
                    {paginatedData.slice(0, 6).map((blog) => (
                        <Grid key={blog.id} item xs={12} sm={6} md={6} lg={4}>
                            <BlogCard blog={blog} handleClick={handleClick} />
                        </Grid>
                    ))}
                </Grid>


                {/* Pagination */}
                <Stack alignItems="center" sx={{ my: 3 }}>
                    <Pagination
                        count={Math.ceil(blogData.length / itemsPerPage)}
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        sx={{
                            "& .Mui-selected": { backgroundColor: theme.palette.primary.main, color: theme.palette.info.main },
                        }}
                    />
                </Stack>
            </Box>
        </>
    )
}

export default Blogs