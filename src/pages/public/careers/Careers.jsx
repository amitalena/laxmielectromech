import { Title } from "react-head";
import Heading from "../../../components/heading/Heading";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import { useMediaQuery, useTheme } from "@mui/material";
import CareerForm from "./CareerForm";
import { useEffect } from "react";

const Careers = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const employees = [
        {
            name: "Software Engineer",
            description: "We are looking for an experienced software engineer to join our development team. You will work on exciting projects using modern technologies.",
        },
        {
            name: "Product Manager",
            description: "Lead cross-functional teams to design and develop innovative products. Manage project timelines and collaborate with stakeholders.",
        },
        {
            name: "UI/UX Designer",
            description: "Create user-friendly interfaces and improve user experience. Work closely with developers to implement intuitive designs.",
        },
        {
            name: "Marketing Specialist",
            description: "Develop and execute marketing strategies to drive brand awareness and lead generation. Analyze market trends and customer insights.",
        },
        {
            name: "HR Manager",
            description: "Manage recruitment, employee engagement, and performance management. Foster a positive workplace culture and ensure compliance with policies.",
        },
        {
            name: "Customer Support Representative",
            description: "Provide excellent customer service by resolving inquiries and issues. Ensure a seamless experience for our customers.",
        },
    ];

    return (
        <>
            <Title>Careers at Our Company</Title>
            <div className="w-auto h-auto bannerCard">
                <a className="w-auto h-auto">
                    <img
                        src={isMobile ? "/banners/Career-mobile.png" : "/banners/Career.png"}
                        alt="Career Banner"
                        className="w-full"
                    />
                </a>
            </div>
            <div className="w-full py-3 px-4 lg:px-12 bg-gray-50">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4"
                    data-aos="fade-up"
                    data-aos-offset="100"
                >
                    Career
                </h1>
                <p className="text-[17px] text-gray-700 leading-relaxed text-center mb-8 mx-auto"
                    data-aos="fade-up"
                    data-aos-offset="100"
                >
                    We're always on the lookout for passionate, driven individuals who are ready to grow, innovate, and make a real impact. If you're eager to be part of a dynamic team that values talent and ambition — we’d love to hear from you!
                </p>


                {/* Why Work With Us Section */}
                <section className="mb-12 flex flex-col sm:flex-row justify-center w-full items-center gap-6 overflow-hidden">
                    <div className="sm:w-1/2 w-full flex justify-start items-start flex-col"
                        data-aos="fade-right"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                    >
                        <Heading startText="Why Work" endText="With Us?" pb={1} />
                        <p className="text-gray-800 text-[17px] leading-relaxed">
                            We offer competitive salaries and benefits, providing our employees with financial security and growth opportunities. Our company fosters a culture of continuous learning, ensuring that every team member has access to career development resources. We prioritize work-life balance with a flexible and supportive work environment, allowing employees to thrive both professionally and personally. Our inclusive and collaborative company culture promotes teamwork and innovation, ensuring that every voice is heard.
                        </p>
                    </div>
                    <div className="sm:w-1/2 w-full flex justify-center items-center"
                        data-aos="fade-left"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                    >
                        <img
                            src="/images/work-with-us-header.png"
                            alt="Why Work With Us"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                </section>

                <CareerForm />
            </div>
        </>
    );
};

export default Careers;