import { Box, Typography, Grid, Card, CardContent, Divider, useTheme } from "@mui/material";
import RecyclingIcon from '@mui/icons-material/Recycling';
import PublicIcon from "@mui/icons-material/Public";
import Heading from "../../../components/heading/Heading";

const SustainabilitySection = () => {
    const theme = useTheme();
    return (
        <Box sx={{ py: 3, px: { xs: 3, sm: 6 } }}>
            <Grid container spacing={4} alignItems="center">
                {/* Text Content */}
                <Grid item xs={12} md={6}>
                    {/* <Box sx={{ pb: 0, display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                        <Typography variant="h4" fontWeight="bold">
                            Sustainability <Typography component="span" sx={{ color: "primary.main", fontWeight: "bold" }} variant="h4">& Responsibility</Typography>
                            <Divider sx={{ background: theme.palette.primary.deep, height: "3px", width: "50px" }} />
                        </Typography>
                    </Box> */}
                    <Heading
                        startText="Sustainability"
                        endText="& Responsibility"
                        justify="start"
                        variant="h4"
                        pb={0}
                    />

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                        Eco-friendly Initiatives & Corporate Social Responsibility (CSR)
                    </Typography>

                    <Card sx={{ mt: 3, px: 3, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
                        <RecyclingIcon sx={{ fontSize: 50, color: "#2E7D32", mr: { xs: 0, sm: 2 }, mb: { xs: 1, sm: 0 } }} />
                        <CardContent sx={{ textAlign: { xs: "center", sm: "left", my: 0 } }}>
                            <Typography variant="h6" fontWeight="bold">
                                Eco-friendly Initiatives
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                We prioritize sustainability by implementing energy-efficient solutions, reducing carbon footprints, and promoting renewable energy.
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ mt: 2, px: 3, py: 0, display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center" }}>
                        <PublicIcon sx={{ fontSize: 50, color: "#1565C0", mr: { xs: 0, sm: 2 }, mb: { xs: 1, sm: 0 } }} />
                        <CardContent sx={{ textAlign: { xs: "center", sm: "left" } }}>
                            <Typography variant="h6" fontWeight="bold">
                                Corporate Social Responsibility (CSR)
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our CSR programs focus on community development, education, and environmental conservation for a better future.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Side Image */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <img
                            src="https://media.istockphoto.com/id/1392287714/photo/human-hand-holding-green-environmental-tree-esg-icon-society-and-governance-sustainable.jpg?s=612x612&w=0&k=20&c=eizRb7vZJkLd7-G5snKtONtM-AXisIcyuGMjiCpg0wE="
                            alt="Our Expertise"
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                borderRadius: "15px",
                                boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SustainabilitySection;
