import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OrganizationChart = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="w-full px-4 py-8 lg:px-8 overflow-hidden">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center"
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                >
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        Our Organizational Structure
                    </h1>
                    <p className="text-gray-600 text-[15px] mb-4">
                        Laxmi Electromech Private Limited operates with a well-defined organizational structure that ensures efficient operations across all departments. Our leadership team, headed by Operation Manager Mr. Ashish Gupta, oversees the company's strategic direction while specialized departments handle their respective functions with expertise.
                    </p>
                    <p className="text-gray-600 text-[15px] mb-4">
                        The Sales & Marketing team, jointly managed by Mr. A.P. Gupta and Mr. Ashish Gupta, drives our business growth, while Mr. Keshav Kumar leads the Finance & Administration department. Our production operations are managed by Mr. Hariom Choudhary, supported by dedicated teams in Quality Control, Warehouse & Logistics, Fabrication, and Project Management.
                    </p>
                    <p className="text-gray-600 text-[15px]">
                        This structured approach enables us to deliver high-quality electromechanical solutions while maintaining operational excellence and customer satisfaction across all our projects.
                    </p>
                </div>

                <div className="flex justify-center md:justify-end"
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                >
                    <img
                        src="/images/organization-chart.jpg"
                        alt="Laxmi Electromechanic Organization Chart"
                        className="w-full max-w-xl border rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrganizationChart;