import React from "react";

const CorporateAccountingServices = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Corporate Accounting Services
        </h2>
        <p className="text-lg text-gray-600">
          Keep track of accounting records, fixed assets, general ledgers, and more with our professional corporate accounting solutions.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          Efficiently managing fixed assets, general ledgers, cash books, and other accounting records is crucial for any organization. Outsourcing your <span className="font-medium">corporate accounting services</span> to experienced professionals ensures accuracy, compliance, and actionable insights for better financial decision-making.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium">Nimble Acuity</span> is a trusted corporate accounting services provider, equipped with highly qualified accountants and international-standard software to deliver precise and reliable accounting solutions tailored to your unique business needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          Our Corporate Accounting Services
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Management Reporting",
              desc: "Complete management accounting reporting, including journal support, monthly analysis, auditor liaison, and bank reconciliations to provide clear insights for decision-making.",
            },
            {
              title: "Statutory Accounting Services",
              desc: "Prepare statutory financial statements compliant with international standards and relevant legislation, ensuring timely management review and regulatory adherence.",
            },
            {
              title: "Project Management Services",
              desc: "Integrate your financial function with HR, budgeting, financial planning, and reporting to ensure cohesive project management and operational efficiency.",
            },
            {
              title: "Corporate Governance Services",
              desc: "Multifunctional corporate accounting and governance support including taxation, advisory, compliance, and governance services tailored to your organization.",
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
            "Bookkeeping Services",
            "Accounts Receivable Services",
            "Financial Analysis Services",
            "Invoice Processing Services",
          ].map((service, index) => (
            <li key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-[#006A7C] hover:text-white transition text-sm font-medium">
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">Why Choose Nimble Acuity for Corporate Accounting Services?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            { title: "Affordable Pricing Packages", desc: "Flexible, cost-effective solutions tailored to your business needs and budget." },
            { title: "Talented Accountants", desc: "Highly skilled professionals catering to all accounting requirements with expertise." },
            { title: "State-of-the-Art Infrastructure", desc: "International-standard offices and top accounting software tools ensure reliable services." },
            { title: "Easily Scalable Services", desc: "Resources and bandwidth to scale up accounting requirements as needed." },
            { title: "Short Turnaround Time", desc: "Delivery from multiple locations across time zones ensures timely completion of tasks." },
            { title: "Dedicated Manager", desc: "A single point of contact for all requests to streamline communication." },
            { title: "Round-the-Clock Support", desc: "24/7 support from sales, marketing, and customer service teams via phone or email." },
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

export default CorporateAccountingServices;
