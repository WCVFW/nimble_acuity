import React from "react";

const ManagementAdvisoryServices = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Management Advisory Services
        </h2>
        <p className="text-lg text-gray-600">
          Nimble management advisory services to Nimble Acuity and enhance your business performance with expert insights, strategies, and actionable recommendations.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          Facing constant financial, competitive, and regulatory pressures? Outsourcing <span className="font-medium">management advisory services</span> ensures your organization gains access to high-level business intelligence, expert insights, and strategic guidance to solve complex business challenges.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium">Nimble Acuity</span> provides comprehensive management advisory solutions, including risk management, performance improvement, strategy formulation, digital transformation, and operations optimization, delivered by seasoned professionals with years of consulting and business experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          Management Advisory Services We Offer
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Financial Performance Improvement",
              desc: "Data-driven insights to forecast financial issues, enhance performance, and implement automation tools for the finance function."
            },
            {
              title: "Business Strategy Services",
              desc: "Formulate and optimize business strategies to respond to market shifts, capitalize on opportunities, and balance short-term and long-term goals."
            },
            {
              title: "Digital Transformation",
              desc: "Build digital solutions and strategies to increase operational potential, drive innovation, and adapt to evolving market trends."
            },
            {
              title: "Operations & Supply Chain Management",
              desc: "Optimize supply chains for cost efficiency, agility, risk management, and service excellence, enhancing competitive advantage."
            },
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

      {/* Related Services */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">
          Other Services You May Benefit From
        </h3>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700">
          {[
            "Financial Analysis Services",
            "Accounting Services",
            "Bookkeeping Services",
            "Payroll Processing Services"
          ].map((service, index) => (
            <li key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-[#006A7C] hover:text-white transition text-sm font-medium">
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">
          Why Choose Nimble Acuity for Management Advisory Services?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { title: "Affordable Services", desc: "Access seasoned management experts at a fraction of the cost of in-house teams or consulting firms." },
            { title: "Data Security", desc: "All shared business information remains confidential, protected with NDAs and robust protocols." },
            { title: "Quick Turnaround Times", desc: "Efficient execution ensures timely delivery of projects and advisory reports." },
            { title: "Superb Infrastructure", desc: "International-standard offices and modern tools enable top-quality advisory services." },
            { title: "Customized Solutions", desc: "Tailored advisory services designed to enhance efficiency, cut costs, and capitalize on opportunities." },
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

export default ManagementAdvisoryServices;
