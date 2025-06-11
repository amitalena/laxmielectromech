import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { Verified, Speed, SupportAgent, Insights } from "@mui/icons-material";
import Heading from "../heading/Heading";

const uniqueSellingPoints = [
    {
        title: "Proven Expertise",
        description: "Years of experience in delivering cutting-edge solutions.",
        icon: <Verified fontSize="medium" sx={{ color: "white" }} />,
    },
    {
        title: "Fast & Efficient",
        description: "Quick turnaround times with top-tier quality assurance.",
        icon: <Speed fontSize="medium" sx={{ color: "white" }} />,
    },
    {
        title: "24/7 Support",
        description: "Dedicated customer support available round the clock.",
        icon: <SupportAgent fontSize="medium" sx={{ color: "white" }} />,
    },
    // {
    //     title: "Data-Driven Insights",
    //     description: "Leveraging AI & analytics for smarter decision-making.",
    //     icon: <Insights fontSize="medium" sx={{ color: "white" }} />,
    // },
];

const WhyChooseUs = () => {
    return (
        <Box
            sx={{
                py: 5,
                px: { md: 2, lg: 4, xl: 4, xs: 2 },
                backgroundImage: `url('/images/banners/banner1.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: "relative",
                color: "white", // Ensure text is visible
            }}
        >
            {/* Overlay for better readability */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay
                }}
            />

            {/* Content Wrapper */}
            <Box sx={{ position: "relative", zIndex: 2 }}>
                <Heading startText="Why" endText="Choose Us?" />

                <Grid container spacing={4} justifyContent="center">
                    {uniqueSellingPoints.map((point, index) => (
                        // <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex" }}>
                        <Grid item xs={12} sm={4} md={4} key={index} sx={{ display: "flex" }}>
                            <Card
                                sx={{
                                    textAlign: "center",
                                    p: 2,
                                    borderRadius: '10px !important',
                                    boxShadow: 4,
                                    transition: "0.4s",
                                    overflow: 'hidden',
                                    bgcolor: "white",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "150px", // Set height to 180px
                                    flexGrow: 1,
                                    "&:hover": { boxShadow: 8, transform: "translateY(-7px)" },
                                }}
                                className="border-l-[5px] overflow-hidden border-solid border-l-[#f97316] hover:!bg-gray-200"
                            >
                                <Box
                                    sx={{
                                        width: 40, // Adjusted for better fit
                                        height: 40, // Adjusted for better fit
                                        borderRadius: "50%",
                                        // bgcolor: "primary.main",
                                        background: '#f97316',
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mx: "auto",
                                        mb: 1,
                                        p: 0.8, // Padding for better spacing
                                    }}
                                >
                                    {point.icon}
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 1 }}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1rem" }}>
                                        {point.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" mt={0.5} sx={{ fontSize: "0.85rem" }}>
                                        {point.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default WhyChooseUs;
