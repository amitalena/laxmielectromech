import { Box, Typography, Grid } from "@mui/material";
import HoverEffectCard from "./HoverEffectCard";

const ProductSection3 = () => {
    return (
        <Box component={'section'} sx={{ width: '100%' }}>
            <Typography variant="h4" fontWeight={600} mb={3}>
                Dive deeper into control panel builders’ world
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <HoverEffectCard
                        title="Cutting build time by 66% and costs by almost 30%"
                        description="Deep dive into smarter machines and digital transformation for time savings and cost efficiency."
                        image="https://www.se.com/dam-assets/Oarumc-Twou14d6uDUUxIA/382KpIzRg-tPxSWJkUXAqA/BUILDER.IO%7CSquare/4.%20island%20upclose%20top%20view%20e_BUILDER.IOSquare.webp"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <HoverEffectCard 
                        title="Maximize your business and machine performance"
                        description="Stay smart with the world’s bestselling motor control solutions."
                        image="https://www.se.com/dam-assets/5deZ9hmfqPu3lk2QGYr7sA/PKVkvMindrdnXnv5Dejf7g/BUILDER.IO%7CSquare/998-21960900-TeSys%20Deca-Onsite%20pictures-Design%20and%20Operation_BUILDER.IOSquare.webp"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <HoverEffectCard 
                        title="HVAC and R equipments technical guide"
                        description="Learn how to select motor starters for your HVAC and R (refrigeration) equipment."
                        image="https://www.se.com/dam-assets/wzlYSKNCLVeraMBaQDWFCg/LWIfIH84HfoK1JimcczuKA/BUILDER.IO%7CSquare/GettyImages-1156867081_BUILDER.IOSquare.webp"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <HoverEffectCard 
                        title="Become a motor management expert"
                        description="Go through the selection and design phases of our motor management solutions."
                        image="https://www.se.com/dam-assets/TdmOGCEGtkQ9O4L35HaWGg/c-Z-jKf7OdbkoEynz0hHMg/BUILDER.IO%7CSquare/GettyImages-1419181199_BUILDER.IOSquare.webp"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductSection3;
