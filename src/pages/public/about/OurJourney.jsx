import { Container, Typography, Grid, Card, CardContent, Box, Divider, useTheme } from "@mui/material";

const OurJourney = () => {
    const theme = useTheme();
    return (
        <Container sx={{ py: 5, width: "100%", textAlign: "center" }}>
            <Box sx={{ pb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" fontWeight="bold">
                    Our <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">Journey</Typography>
                    <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {/* Company History and Milestones */}
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            p: 2,
                            borderRadius: 3,
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                            color: "#fff",
                            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    color: "#ffcc00",
                                }}
                            >
                                Company History & Milestones
                            </Typography>
                            <Typography variant="body1">
                                Laxmi Electromech Pvt. Ltd. was established with a vision to
                                provide innovative electrical solutions. Over the years, we have
                                expanded into electrical automation, panel manufacturing, and
                                EPC contracts, achieving milestones that set us apart.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Evolution and Growth */}
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            p: 2,
                            borderRadius: 3,
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                            color: "#fff",
                            background: "linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)",
                        }}
                    >
                        <CardContent>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase",
                                    color: "#00e676",
                                }}
                            >
                                Evolution & Growth
                            </Typography>
                            <Typography variant="body1">
                                From a modest beginning, we have grown into a trusted provider
                                of comprehensive electrical solutions. Our expertise spans
                                across industrial, commercial, and infrastructure projects with
                                continuous innovation and a customer-centric approach.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurJourney;
