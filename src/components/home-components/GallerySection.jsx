import "./gallery.scss";
import GalleryCard from "../cards/GalleryCard";
import Heading from "../heading/Heading";

const GallerySection = () => {
    return (
        <>
            <section class="my-section  product-gallery py-2 px-4 md:px-8">
                <Heading startText="Our" endText="Gallery" />
                <div class="container-fluid">
                    <div class="row">
                        <div class="grid-wrapper">

                            {/* <div class="grid-box">
                                <div className="product-gallery-text w-full min-w-0">
                                    <div className="h2-wrapper">
                                        <h2>
                                            <span className="font-semibold uppercase text-[25px] md:text-[28px] leading-tight">
                                                Our Gallery
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div> */}
                            <div class="grid-box">
                                <GalleryCard
                                    image="/images/laxmi-services/AMF-Panel.png"
                                    href="/manufacturing-ranges/auto-mains-failure-panels"
                                    title="AMF Panel"
                                    className="w-full h-auto"
                                    description="AMF Panels ensure automatic power switch to generators during mains failure, providing uninterrupted power supply."
                                />
                            </div>

                            <div class="grid-box wide">
                                <GalleryCard
                                    // image="/images/plc-control-image.png"
                                    // image="/images/laxmi-services/layout-1.jpg"
                                    image="/images/laxmi-services/bg-section.jpg"
                                    href="/manufacturing-ranges/plc-panel-scada-panel"
                                    title="PLC / SCADA Panel"
                                    className="w-full h-auto"
                                    description="We specialize in manufacturing advanced technology-based Programmable Logic Controller (PLC) and Supervisory Control & Data Acquisition (SCADA) systems for industrial automation."
                                />
                            </div>

                            <div class="grid-box">
                                <GalleryCard
                                    image="/images/laxmi-services/mcc-panel.jpg"
                                    href="/manufacturing-ranges/intelligent-mcc-panels"
                                    title="Intelligent MCC Panels"
                                    className="w-full h-auto"
                                    description="We offer a wide range of intelligent MCC (Motor Control Centre) panels in various designs and sizes. "
                                />
                            </div>
                            <div class="grid-box tall">

                                <GalleryCard
                                    image="/images/laxmi-services/Motor-Control-MCC.png"
                                    href="/manufacturing-ranges/mcc-panels"
                                    title="Motor Control Centre (MCC)"
                                    className="w-full h-auto"
                                    description="We manufacture MCC (Motor Control Center) panels tailored to specific applications, either based on our design or customer requirements."
                                />
                            </div>
                            <div class="grid-box wide">
                                <GalleryCard
                                    // image="/images/laxmi-services/hmi-touch-panel-image.jpg"
                                    image="/images/laxmi-services/soft-started-image.jpg"
                                    href="/manufacturing-ranges/lv-mv-soft-starter-panels"
                                    title="Soft Starter Panels"
                                    className="w-full h-auto"
                                    description="We supply high-quality LV/MV soft starter panels designed to eliminate high inrush current and start-up torque on every start."
                                />
                            </div>

                            <div class="grid-box tall">
                                <GalleryCard
                                    // image="/images/laxmi-services/automation-control-panel-2.jpg"
                                    image="/images/laxmi-services/distribution-board.png"
                                    href="/manufacturing-ranges/distribution-boards"
                                    title="Distribution Boards"
                                    className="w-full h-auto"
                                    description="Distribution boards are electrical wiring arrangements that distribute current from a single source of supply to various circuits."
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GallerySection;