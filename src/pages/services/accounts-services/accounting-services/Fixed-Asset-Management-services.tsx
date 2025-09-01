import React from "react";

const FixedAssetManagement = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Fixed Asset Management Services
        </h2>
        <p className="text-lg text-gray-600">
          Track, manage, and optimize your fixed assets with expert solutions from Nimble Acuity, ensuring compliance, accuracy, and cost-efficiency.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          Managing fixed assets can be complex as your business grows. Outsourcing <span className="font-medium">fixed asset management services</span> ensures proper tracking, verification, depreciation management, and overall asset optimization.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium">Nimble Acuity</span> offers end-to-end fixed asset management solutions, using advanced software and professional expertise to streamline operations and maximize ROI.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          Our Fixed Asset Management Services
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Asset Audit", desc: "Review fixed assets for compliance and optimization, with recommendations for improvement." },
            { title: "Asset Verification & Tagging", desc: "Physical checks and RFID/barcode tagging for accurate asset tracking." },
            { title: "Asset Tracking", desc: "Real-time tracking of assets using advanced systems to maintain organization." },
            { title: "Comprehensive Asset Management Systems", desc: "Integrated software solutions to manage assets and inventory efficiently." },
            { title: "Inventory Management", desc: "Track inventories, value, and shelf-life to prevent spoilage or obsolescence." },
            { title: "RFID & Barcode Solutions", desc: "Advanced tagging technology for grouping, locating, and auto-identification of assets." },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          Our Fixed Asset Management Process
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Requirement Discovery", desc: "Identify your business needs and create project scope." },
            { title: "Requirement Analysis", desc: "Assess and analyze asset data for insights." },
            { title: "Strategy Development", desc: "Create a customized management strategy for your assets." },
            { title: "Service Implementation", desc: "Execute verification, tagging, tracking, and reporting." },
            { title: "Final Reporting", desc: "Deliver secure, detailed reports with actionable insights." },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">Why Choose Nimble Acuity for Fixed Asset Management?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { title: "Data Security", desc: "Complete confidentiality and robust data protection protocols." },
            { title: "Affordable Services", desc: "Flexible pricing without compromising service quality." },
            { title: "Quick Turnaround", desc: "Timely delivery, even under tight deadlines." },
            { title: "Dedicated Project Manager", desc: "Single point of contact for seamless communication." },
            { title: "24/7 Support", desc: "Round-the-clock assistance via phone, email, or chat." },
          ].map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">{reason.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixedAssetManagement;
