import "./services.css";

// icons
import { IoBuildOutline } from "react-icons/io5";
import { TbPlant2 } from "react-icons/tb";
import { GiRobotGrab } from "react-icons/gi";
import { MdOutlineSpeed } from "react-icons/md";
import Heading from "../heading/Heading";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurServices = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const IconWrap = ({
        children,
    }) => {
        return <>
            <div className="inline-block icon h-16 w-16">
                <div className="w-full h-full flex justify-center items-center text-white">
                    {children}
                </div>
            </div>
        </>
    }
    return (
        <div className="flex flex-col justify-center items-center -space-y-3 gap-y-4 py-6">
            <Heading startText="Cost Effective" endText="Services" pb={0} />
            <div className="service-area bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 overflow-hidden">
                        {/* Electrical Engineering */}
                        <div className="service-card transition-all duration-700 transform hover:scale-105"
                            data-aos="fade-right"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="service-item text-center p-6 shadow-md rounded-lg bg-gray-50">
                                <div className="service-icon mb-4">
                                    {/* <img src="assets/images/logo/repair.png" alt="Expert Consultation" className="mx-auto h-16 w-16" /> */}
                                    <IconWrap>
                                        <IoBuildOutline size={28} />
                                    </IconWrap>
                                </div>
                                <h5 className="text-lg font-semibold mb-2">Electrical Engineering</h5>
                                <p className="text-gray-600 text-sm">Advanced electrical solutions tailored for industrial and commercial applications.</p>
                            </div>
                        </div>

                        {/* Plant Intelligent Systems */}
                        <div className="service-card transition-all duration-700 transform hover:scale-105"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="service-item text-center p-6 shadow-md rounded-lg bg-gray-50">
                                <div className="service-icon mb-4">
                                    {/* <img src="assets/images/logo/repair.png" alt="Expert Consultation" className="mx-auto h-16 w-16" /> */}
                                    <IconWrap>
                                        <TbPlant2 size={28} />
                                    </IconWrap>
                                </div>
                                <h5 className="text-lg font-semibold mb-2">Plant Intelligent Systems</h5>
                                <p className="text-gray-600 text-sm">Enhancing efficiency with smart systems tailored for modern plant environments.</p>
                            </div>
                        </div>

                        {/* Industrial Automation */}
                        <div className="service-card transition-all duration-700 transform hover:scale-105"
                            data-aos="fade-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine"
                        >
                            <div className="service-item text-center p-6 shadow-md rounded-lg bg-gray-50">
                                <div className="service-icon mb-4">
                                    {/* <img src="assets/images/logo/repair.png" alt="Expert Consultation" className="mx-auto h-16 w-16" /> */}
                                    <IconWrap>
                                        <GiRobotGrab size={28} />
                                    </IconWrap>
                                </div>
                                <h5 className="text-lg font-semibold mb-2">Industrial Automation</h5>
                                <p className="text-gray-600 text-sm">Automating processes for improved productivity, safety, and accuracy.</p>
                            </div>
                        </div>

                        {/* Speed Control Devices */}
                        <div className="service-card transition-all duration-700 transform hover:scale-105"
                        data-aos="fade-left"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        >
                            <div className="service-item text-center p-6 shadow-md rounded-lg bg-gray-50">
                                <div className="service-icon mb-4">
                                    {/* <img src="assets/images/logo/repair.png" alt="Expert Consultation" className="mx-auto h-16 w-16" /> */}
                                    <IconWrap>
                                        <MdOutlineSpeed size={28} />
                                    </IconWrap>
                                </div>
                                <h5 className="text-lg font-semibold mb-2">Speed Control Devices</h5>
                                <p className="text-gray-600 text-sm">Precise speed control solutions to optimize equipment performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
