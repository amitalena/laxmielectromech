import { FaLightbulb } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeCards = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="py-3 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3">

            <div className="flex justify-start items-center gap-x-5 px-6 py-5 bg-[#3c3c3c] text-white group transition-transform duration-500">
                <FaCalendarCheck
                    size={35}
                    className="text-gray-100 transition-transform duration-500 group-hover:rotate-[360deg]"
                />
                <div className="flex flex-col justify-start items-start overflow-hidden">
                    <h2
                        className="font-bold text-[18px] text-white"
                        data-aos="fade-right"
                        data-aos-once="true"
                    >About Us</h2>
                    <p
                        className=" text-white text-[12px]"
                        data-aos="fade-right"
                        data-aos-once="true"
                    >Laxmi Electromech Pvt. Ltd. (LEPL) is a CPRI-approved and trusted name in the field of electrical and automation solutions.</p>
                </div>

            </div>

            <div className="flex items-center gap-x-5 group px-6 py-5 bg-gray-200 text-black transition-transform duration-500">
                <FaLightbulb
                    size={25}
                    className="text-blue-700 transition-transform duration-500 group-hover:rotate-[360deg]"
                />
                <div className="flex flex-col">
                    <h2 className="font-bold text-lg text-black"
                        data-aos="fade-right"
                        data-aos-once="true"
                    >Creative Solutions</h2>
                    <p className="text-sm text-[13px]"
                        data-aos="fade-right"
                        data-aos-once="true"
                    >Driving innovation with smart, efficient, and forward-thinking solutions.</p>
                </div>
            </div>

            <div className="flex justify-start items-center gap-x-5 px-6 py-5 bg-gray-100 group transition-transform duration-500">
                <MdOutlineElectricBolt
                    size={35}
                    className="text-black transition-transform duration-500 group-hover:rotate-[360deg]"
                />
                <div className="flex flex-col justify-start items-start">
                    <h2 className="font-bold text-[20px] text-black"
                        data-aos="fade-right"
                        data-aos-once="true"
                    >Tagline Ideas</h2>
                    <p className="text-[13px]"
                        data-aos="fade-right"
                        data-aos-once="true"
                    >Empowering technology to transform industries and enhance everyday life.</p>
                </div>
            </div>
        </section>
    );
};

export default HomeCards;
