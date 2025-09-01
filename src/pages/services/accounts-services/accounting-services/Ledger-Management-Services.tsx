import React from "react";

const LedgerManagementServices = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Ledger Management Services
        </h2>
        <p className="text-lg text-gray-600">
          Reduce the risk of debts and improve cash flow by outsourcing your ledger management to experienced professionals.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          Managing ledgers effectively is crucial for optimizing cash flow and reducing financial risks. Outsourcing ledger management allows your business to focus on growth while ensuring financial accuracy and compliance.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium">Nimble Acuity</span> offers expert ledger management services with highly skilled professionals and state-of-the-art software. We deliver accurate, reliable, and scalable services tailored to meet your unique business needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          Our Ledger Management Solutions
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Fixed Period Ledger Management",
              desc: "Ideal for temporary staff shortages, we provide ledger management for fixed or short periods with precision and reliability.",
            },
            {
              title: "Full-Service Ledger Management",
              desc: "Comprehensive ledger management services using the latest tools, customized to your business requirements for maximum efficiency.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">
          Why Choose Nimble Acuity?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Flexible Pricing",
              desc: "Cost-effective, customizable pricing options to fit your business needs and budget.",
            },
            {
              title: "High-Quality Services",
              desc: "ISO-certified processes ensure error-free and top-quality ledger management services.",
            },
            {
              title: "Certified Accountants",
              desc: "Experienced and qualified accountants handle all your accounting requirements with ease.",
            },
            {
              title: "World-Class Infrastructure",
              desc: "Access to cutting-edge ledger management software, tools, and workspaces.",
            },
            {
              title: "Highly Scalable Services",
              desc: "Scale team size and resources according to your business needs without compromising quality.",
            },
            {
              title: "Quick Turnaround Time",
              desc: "Delivery centers across multiple time zones ensure timely and efficient service delivery.",
            },
            {
              title: "Single Point of Contact (SPOC)",
              desc: "A dedicated project manager to handle all your needs efficiently and transparently.",
            },
            {
              title: "24/7 Customer Support",
              desc: "Round-the-clock support via email or phone to resolve any issues promptly.",
            },
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

      {/* Related Services */}
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-6">
          Other Services You May Benefit From
        </h3>
        <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
          {[
            "Financial Analysis Services",
            "Accounting Services",
            "Bookkeeping Services",
            "Payroll Processing Services",
          ].map((service, index) => (
            <li key={index} className="hover:text-[#006A7C] cursor-pointer">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LedgerManagementServices;
