import React from "react";

const CostAccounting = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Cost Accounting Services
        </h2>
        <p className="text-lg text-gray-600">
          Accurate financial records are the backbone of a successful business. 
          With Nimble Acuity, you gain the insights needed to track, evaluate, 
          and optimize profits — while saving costs compared to hiring full-time 
          professionals.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          Nimble Acuity is a trusted provider of cost accounting services for businesses 
          of all sizes. With years of experience and a skilled team of accounting 
          professionals, we ease the burden of managing cost accounting so you can 
          focus on growing your business with confidence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        {[
          {
            title: "Cost Accounting System",
            desc: "We establish tailored cost accounting systems that ensure precise profit estimates, cost control, and smarter financial decision-making.",
          },
          {
            title: "Accounting Records",
            desc: "Our experts handle the creation, maintenance, and updating of records to help you maximize profits and avoid costly errors.",
          },
          {
            title: "Auditing",
            desc: "Regular audits ensure your cost accounting records remain error-free and compliant with industry standards.",
          },
          {
            title: "Reports & Analysis",
            desc: "We provide detailed cost analysis reports to highlight improvement areas and support effective resource allocation.",
          },
          {
            title: "Performance Management",
            desc: "Our specialists use data-driven insights to optimize your business’s resource allocation, leading to higher performance and profitability.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-[#006A7C] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-6 text-center">
          Our Cost Accounting Process
        </h3>
        <ol className="space-y-6">
          {[
            {
              step: "Analysis",
              desc: "We start by analyzing your business requirements and create a detailed project scope with timelines and pricing.",
            },
            {
              step: "Data Entry",
              desc: "Once approved, our team processes your files and inputs data for accurate analysis.",
            },
            {
              step: "Analysis & Reporting",
              desc: "We conduct a deep cost analysis and generate comprehensive reports tailored to your business.",
            },
            {
              step: "Delivery",
              desc: "The final report is securely delivered, including our recommendations to optimize costs and performance.",
            },
          ].map((stage, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
            >
              <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-[#006A7C] text-white font-bold rounded-full">
                {index + 1}
              </span>
              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {stage.step}
                </h4>
                <p className="text-gray-600 text-sm">{stage.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">
          Why Choose Nimble Acuity?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Affordable Pricing",
              desc: "Our services are cost-effective, ensuring that businesses of all sizes can benefit from professional expertise.",
            },
            {
              title: "Flexible Solutions",
              desc: "Our offerings are customizable to meet your specific needs without compromising industry compliance.",
            },
            {
              title: "Professional Expertise",
              desc: "Our team consists of carefully selected, highly skilled accountants with proven industry experience.",
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">
                {reason.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostAccounting;
