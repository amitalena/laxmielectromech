import { Title } from "react-head";
import FacilityImage from "./FacilityImage";
import Heading from "../../../components/heading/Heading";
import { useMediaQuery, useTheme } from "@mui/material";

const ManufacturingFacilityMachinery = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const images = [
        {
            title: 'Oven',
            src: "/images/product-images/power-plant/1.png",
        },
        {
            title: 'Powder Paint Spray Gun (2 Sets)',
            src: "/images/product-images/power-plant/2.png",
        },
        {
            title: 'Powder Painting Booth',
            src: "/images/product-images/power-plant/3.png",
        }
    ];

    const images2 = [
        "https://www.ooitech.com/upload/Image/20210422/20210422105618_92214.jpg",
        "https://www.assemblymag.com/ext/resources/Issues/2020/August/solar/asb0820solar1.jpg",
        "https://www.energetica-india.net/images/noticias/iiKqwHkl1dATeZXJOZXZZKLBDb2AlMGhDC7mYPCahNPH9ZrIaEVv8Kg.jpg",
        "https://www.shutterstock.com/image-photo/asian-mature-man-engineer-safety-600nw-2421474087.jpg",
    ];

    const images3 = [
        {
            title: 'Laser Cutting Machine 1.5 Kw',
            src: "/images/product-images/fabrication-plant/1.png",
        },
        {
            title: 'Cnc Hydraulic Press Brake 160 Ton',
            src: "/images/product-images/fabrication-plant/2.png",
        },
        {
            title: 'Shearing Machine 2500 Mm',
            src: "/images/product-images/fabrication-plant/3.png",
        },
        {
            title: 'Screw Compressor 20 Hp',
            src: "/images/product-images/fabrication-plant/4.png",
        },
        {
            title: 'Power Press 10 Ton & 15 Ton',
            src: "/images/product-images/fabrication-plant/5.png",
        },
        {
            title: 'Mig Welding (4 Nos)',
            src: "/images/product-images/fabrication-plant/6.png",
        },
        {
            title: 'Argon Welding',
            src: "/images/product-images/fabrication-plant/7.png",
        },
    ];

    return (
        <>
            <Title>Plant & Machinery</Title>
            <div className='w-auto h-auto bannerCard'>
                <a className='w-auto h-auto'>
                    <img src={isMobile ? "/banners/Plant-&-Machinery-mobile.png" : "/banners/Plant-&-Machinery.png"} alt="image" />
                </a>
            </div>
            <div className="w-full py-6 px-2 lg:px-12">
                <Heading startText="Plant &" endText="Machinery" />
                <p className="text-center text-gray-700 mx-auto mb-10">
                    Our state-of-the-art plant and machinery are equipped with advanced fabrication and power coating systems, ensuring precision, efficiency, and high-quality production to meet diverse industrial needs.
                </p>


                <section className="mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...images3, ...images].map((item, index) => (
                            <FacilityImage key={index} {...item} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default ManufacturingFacilityMachinery;
