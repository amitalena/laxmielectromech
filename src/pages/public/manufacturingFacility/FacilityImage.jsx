import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FacilityImage = ({
    src = "",
    index = 0,
    title = "",
}) => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return <>
        <div
            className="overflow-hidden border group border-solid h-[350px] border-gray-300 rounded-md text-white bg-center"
            style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), url('/plant-and-machinery-background.png')",
            }}
            data-aos="zoom-in"
            data-aos-once="true"
        >
            <div className="w-full h-full p-2 flex flex-col justify-center items-center gap-y-2 backdrop-blur-[2px]">
                <img src={src} alt={`Fabrication Plant Machine ${index + 1}`} className="w-[250px] object-contain transform group-hover:scale-110 transition-transform duration-300" />
                <h2 className="font-bold">{title}</h2>
            </div>
        </div>
    </>
}

export default FacilityImage;