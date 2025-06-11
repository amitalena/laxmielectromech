// src/components/QualityProcess.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from '../heading/Heading';

const QualityProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const Arrow = () => (
    <span className="text-orange-500 mr-2">➤</span>
  );

  return (
    <section className="w-full px-4 md:px-8 py-3 bg-[linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.4)),url('/images/categoryBg.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
      <div className='w-full flex justify-center items-center'>
        <Heading
          startText="Quality"
          endText="Processes"
          justify="start"
          pb={0}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-center gap-6">
        {/* QA Section - Animate from Left */}
        <div data-aos="fade-right">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">QUALITY ASSURANCE (QA):</h2>
          <ul className="space-y-2 main-size">
            <li className="flex items-start"><Arrow /><span><strong>ISO Certification:</strong> Adherence to ISO 9001 standards ensures consistent quality and continuous improvement throughout our organizational processes.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Rigorous Inspections:</strong> Comprehensive checks from procurement to packaging guarantee every component meets our quality benchmarks.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Automated Testing:</strong> Implementation of modern automated systems eliminates manual errors and improves accuracy in our deliverables.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Documentation & Audits:</strong> Systematic documentation and regular internal audits ensure process transparency and traceability of quality metrics.</span></li>
          </ul>
        </div>

        {/* Image - Animate from Top */}
        <div className="flex justify-center w-full h-full" data-aos="fade-up">
          <div className="relative w-full h-full  overflow-hidden">
            <img src="/images/quality-control.png" alt="Quality Control Process" className="w-full h-full" />
          </div>
        </div>

        {/* QC Section - Animate from Right */}
        <div data-aos="fade-left">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">QUALITY CONTROL (QC):</h2>
          <ul className="space-y-2 main-size">
            <li className="flex items-start"><Arrow /><span><strong>Batch Testing:</strong> Selective testing of each production batch ensures consistent product performance and regulatory compliance.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Failure Analysis:</strong> Root cause analysis of any defects helps in continuous process improvement and customer satisfaction.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Customer Feedback:</strong> Active incorporation of customer feedback into the product lifecycle strengthens trust and reliability.</span></li>
            <li className="flex items-start"><Arrow /><span><strong>Final Product Verification:</strong> All finished products undergo a final round of checks to verify functionality, durability, and performance standards.</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;
