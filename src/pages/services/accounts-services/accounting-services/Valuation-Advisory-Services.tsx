import React from "react";

const ValuationAdvisory = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Valuation Advisory Services
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          At <span className="font-semibold text-[#006A7C]">Nimble Acuity</span>, we provide 
          holistic valuation advisory services by following globally accepted 
          methodologies and best practices. Our team of finance, accounting, 
          litigation, and tax experts deliver solutions with transparency and clarity—empowering 
          you to manage risks, maximize value, and make confident business decisions.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Card */}
        <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#006A7C] mb-3">
            Business Valuation Services
          </h3>
          <p className="text-gray-600">
            We evaluate capital sources, company development stages, and industry 
            factors to provide accurate and reliable business valuations.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#006A7C] mb-3">
            Derivatives & Share-Based Compensation
          </h3>
          <p className="text-gray-600">
            Valuations using Black-Scholes, Monte Carlo, and binomial lattice models 
            for equity awards, derivatives, and share-based compensation.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#006A7C] mb-3">
            Intellectual Property & Intangible Assets
          </h3>
          <p className="text-gray-600">
            Valuation for IP and intangible assets—covering insurance, tax, financial 
            reporting, and impairment testing.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#006A7C] mb-3">
            Tax Valuation
          </h3>
          <p className="text-gray-600">
            Legal and business valuations, cost segregation, estate & gift tax valuations, 
            and purchase price allocations.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#006A7C] mb-3">
            Business Combinations
          </h3>
          <p className="text-gray-600">
            Expert support for mergers & acquisitions through accurate 
            purchase price allocations and valuation issue resolution.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-[#006A7C] mb-3">
            Strategic Value Advisory
          </h3>
          <p className="text-gray-600">
            Identify opportunities, optimize growth strategies, and enhance 
            company value for informed decision-making.
          </p>
        </div>
      </div>

      {/* Additional Services */}
      <div className="max-w-4xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-6 text-center">
          Other Services You May Benefit From
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 font-medium text-center">
          <li className="bg-gray-50 py-3 px-4 rounded-lg shadow-sm">Bookkeeping Services</li>
          <li className="bg-gray-50 py-3 px-4 rounded-lg shadow-sm">Tax Preparation Services</li>
          <li className="bg-gray-50 py-3 px-4 rounded-lg shadow-sm">Financial Analysis Services</li>
          <li className="bg-gray-50 py-3 px-4 rounded-lg shadow-sm">Payroll Processing Services</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-5xl mx-auto mt-20">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-6 text-center">
          Why Choose Nimble Acuity?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Flexible Pricing Options",
              desc: "Affordable, customizable pricing—you only pay for the services you need."
            },
            {
              title: "Information Security",
              desc: "Stringent measures to protect your data with complete confidentiality."
            },
            {
              title: "State-of-the-Art Infrastructure",
              desc: "Equipped with the latest systems and software for reliable valuations."
            },
            {
              title: "Operational Transparency",
              desc: "We maintain full compliance with industry norms and regulations."
            },
            {
              title: "Scalability",
              desc: "Easily scale services up or down without compromising on quality."
            },
            {
              title: "24/7 Availability",
              desc: "Round-the-clock customer support via phone, email, or messages."
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuationAdvisory;
