import React from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqsData from "../../constants/faqs";
import Heading from "../heading/Heading";
import HTMLLoad from "../loadData/HTMLLoad";
import FAQsForm from "./FAQsForm";

const FAQs = () => {
    const theme = useTheme();
    const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container
            maxWidth="xl"
            sx={{
                py: 4,
                px: { xs: 2, md: 4, lg: 6 },
                backgroundImage:
                    "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4)), url('/images/categoryBg.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // 👈 Add this line
                borderRadius: 2,
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                {/* FAQs Section */}
                <div className="flex flex-col justify-start items-start">
                    <Heading startText="FAQs -" endText="Frequently Asked Questions" pb={2} />
                    <Box display="flex" flexDirection="column" gap={2} className="w-full">
                        {faqsData.map((faq, index) => (
                            <Accordion
                                key={index}
                                disableGutters
                                disableRipple
                                square
                                sx={{
                                    border: "none",
                                    boxShadow: "none",
                                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                                    backdropFilter: "blur(10px)",
                                    "&:before": { display: "none" },
                                    borderRadius: "8px",
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ transition: '0.3s' }} />}
                                    sx={{
                                        background: 'white',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                                        borderRadius: '8px',
                                        transition: 'all 0.3s ease-in-out',

                                        '&:hover': {
                                            background: '#2457AA',
                                            color: 'white',

                                            '.MuiSvgIcon-root': {
                                                color: 'white', // 👈 change arrow color on hover
                                            },
                                        },

                                        '&.Mui-expanded': {
                                            background: '#2457AA',
                                            color: 'white',

                                            '.MuiSvgIcon-root': {
                                                color: 'white', // 👈 change arrow color when expanded
                                            },
                                        },
                                    }}
                                >
                                    <Typography variant="body1" className="main-size">
                                        {index + 1}. {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography component="div" sx={{ whiteSpace: "pre-line" }}>
                                        <HTMLLoad htmlData={faq.answer} />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </div>

                {/* Form Section */}
                <div className="flex justify-start w-full h-full items-start">
                    <div className="w-full rounded-lg overflow-hidden shadow-[0px_0px_2px_2px_#e0e0e0]">
                        <FAQsForm />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FAQs;
