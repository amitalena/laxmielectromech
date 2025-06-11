const WelcomeMessageSection = () => {
    return (
        <section
            className="relative min-h-[300px] bg-cover bg-fixed bg-center text-white flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/banners/section-banner.png')", // Replace with your image path
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* <h3 className="text-[20px]">Welcome</h3> */}
                <h2 className="text-[32px] font-bold uppercase">
                    Laxmi Electromech Pvt. Ltd.
                </h2>
                <p className="text-base main-size text-gray-100">
                    Laxmi Electromech Pvt. Ltd. is a leading provider of comprehensive electrical solutions, specializing in electrical automation, panel manufacturing, and EPC contracts. With a strong commitment to innovation, quality, and customer satisfaction, we deliver tailored solutions that meet the unique needs of our clients. Our team of experts has years of experience in designing, manufacturing, and installing electrical panels, automation systems, and EPC solutions for various industries, including industrial, commercial, and infrastructure projects.
                </p>
            </div>
        </section>
    );
};

export default WelcomeMessageSection;