import { FaRegCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeWhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const points = [
        "Comprehensive electrical solutions under one roof – Panels, Automation, and EPC.",
        "Expertise in custom-designed automation systems for critical infrastructure.",
        "Unmatched quality, safety, and reliability across all product categories.",
        "Sustainable, energy-efficient, and innovative solutions that empower industries."
    ];

    const Point = ({ item = "" }) => {
        return (
            <div className="w-full flex bg-white overflow-hidden text-gray-900 rounded-md shadow-md py-3 px-4 justify-start items-center gap-x-2 main-size">
                <FaRegCheckCircle
                    size={16} className="text-[var(--colorOne)]"
                    data-aos="zoom-in"
                    data-aos-offset="100"
                />
                <span
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                >{item}</span>
            </div>
        );
    };

    return (
        // <section className="w-full bg-gray-500 !text-gray-50">
        <section className="w-full !text-gray-50"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/why-choose-bg.png')`
            }}

        >
            <div className="bg-[url('/images/curve.png')] bg-cover bg-bottom grid md:grid-cols-2 gap-6 justify-center items-center w-full h-full px-4 md:px-12 py-4">
                <div className="flex flex-col justify-start w-full items-start gap-y-2">
                    <h2 className="font-bold text-white text-[28px]">Why Choose Us?</h2>
                    <p className="main-size">
                        At Laxmi Electromech Pvt. Ltd., we deliver innovative, reliable electrical and automation solutions that drive operational excellence. Backed by decades of expertise, we blend cutting-edge technology with a customer-centric approach to provide tailored, high-performance solutions across diverse industries.
                    </p>
                    <div className="w-full grid grid-cols-1 gap-y-2">
                        <div className="flex justify-start items-center main-size gap-x-2">
                            <div className="bg-white rounded-full p-1 text-[var(--colorOne)]">
                                <MdEmail size={16} className="text-gray-500" />
                            </div>
                            <span>info@laxmielectromech.com, apglaxmi2009@gmail.com</span>
                        </div>
                        <div className="flex justify-start items-center main-size gap-x-2">
                            <div className="bg-white rounded-full p-1 text-[var(--colorOne)]">
                                <IoIosCall size={16} className="text-gray-500" />
                            </div>
                            <span>+91-96434-01345</span>
                        </div>
                        <div className="flex justify-start items-center main-size gap-x-2">
                            <div className="bg-white rounded-full p-1 text-[var(--colorOne)]">
                                <IoLocationSharp size={16} className="text-gray-500" />
                            </div>
                            <span>
                                <p>Registered Address: A-139, B-06, Gali No. 1, Madhu Vihar, I.P Extension, Delhi 110092</p>
                                <p>Manufacturing Address: A-09, Sector-59, Noida, U.P - 201301</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-y-3">
                        {points.map((item, index) => (
                            <Point key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeWhyChooseUs;
