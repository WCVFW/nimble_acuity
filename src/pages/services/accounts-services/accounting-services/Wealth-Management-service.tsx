import React from "react";

const WealthManagement = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Wealth Management Services
        </h2>
        <p className="text-lg text-gray-600">
          Make sound financial decisions by partnering with{" "}
          <span className="font-semibold text-[#006A7C]">
            Nimble Acuity’s expert wealth managers
          </span>
          , who help you align strategies with your financial goals.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          In today’s dynamic business environment, financial planning and risk
          mitigation are more important than ever. Business owners are under
          constant pressure to allocate resources wisely and adapt to changing
          demands. This is where outsourcing wealth management delivers
          significant value — by standardizing operations, strategically
          allocating resources, reducing costs, and maximizing growth.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With extensive industry expertise,{" "}
          <span className="font-medium">Nimble Acuity</span> partners with
          clients to transform their financial strategy, ensure compliance, and
          optimize wealth allocation. Our trusted team combines technology,
          insight, and proven strategies to deliver results with quick
          turnaround and exceptional service.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          Our Wealth Management Solutions
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Research & Analytics",
              desc: "In-depth financial research and analysis to ensure strategies are based on solid insights.",
              sub: [
                "New Business Pitch Books",
                "Fund Research",
                "Portfolio Measurement",
                "CRM Support",
                "Client Investment Research",
              ],
            },
            {
              title: "Investment Research",
              desc: "Market and portfolio analysis with risk assessments to guide informed, goal-driven investment decisions.",
              sub: [
                "Market Analysis",
                "Portfolio Performance Review",
                "Risk Assessment",
                "Manager Identification",
              ],
            },
            {
              title: "Compliance Support",
              desc: "Comprehensive compliance checks to reduce risk and ensure adherence to trust account regulations.",
              sub: [
                "Document Review",
                "Regulatory Compliance",
                "Audit & Litigation Risk Mitigation",
                "Technology-Compatible Compliance Docs",
              ],
            },
            {
              title: "Asset Management",
              desc: "Mitigate risk and grow asset value with tailored strategies and in-depth financial analysis.",
              sub: [
                "Micro & Macro Research",
                "Risk Reduction Strategies",
                "Asset Appreciation Planning",
                "End-to-End Wealth Management",
              ],
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {service.desc}
              </p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                {service.sub.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">
          Why Choose Nimble Acuity?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Proven Expertise",
              desc: "Decades of experience in wealth and asset management across industries.",
            },
            {
              title: "Customized Strategies",
              desc: "Tailored financial planning that aligns with your unique business goals.",
            },
            {
              title: "Risk Mitigation",
              desc: "Proactive strategies to reduce financial risks and ensure compliance.",
            },
            {
              title: "Technology-Driven",
              desc: "Modern solutions that integrate analytics, compliance, and automation.",
            },
            {
              title: "End-to-End Support",
              desc: "From research to reporting, we manage every aspect of wealth management.",
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

export default WealthManagement;
