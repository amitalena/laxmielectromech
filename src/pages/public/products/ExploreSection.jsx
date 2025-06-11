import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductCard from "./ProductCard";

const ExploreSection = () => {
    const buttonStyle = {
        outline: 'none',
        border: '1px solid gray',
        color: 'gray',
    }

    return <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                width: '100%',
                gap: 1,
            }}
        >
            <Typography
                variant="h2"
                component={'h2'}
                fontSize={30}
            >
                Explore control panel builder offer
            </Typography>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography>Products</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Button variant="outlined" sx={{ px: 1, minWidth: 'auto' }} style={buttonStyle}>
                        <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                    </Button>
                    <Button variant="outlined" sx={{ px: 1, minWidth: 'auto' }} style={buttonStyle}>
                        <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                    </Button>
                </Box>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard href="/product-category/456677" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard href="/product-category/456677" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard href="/product-category/456677" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard href="/product-category/456677" />
                </Grid>
            </Grid>
        </Box>
    </>
}

export default ExploreSection;