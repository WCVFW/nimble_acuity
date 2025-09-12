import React from "react";
<<<<<<< HEAD

const RealEstateAccounting = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
           Real Estate Accounting Services
        </h2>
        <p className="text-lg text-gray-600">
          Overcome real estate accounting challenges with{" "}
          <span className="font-semibold text-[#006A7C]">
            Nimble Acuity’s comprehensive services
          </span>
          . From property managers to real estate firms, we help streamline
          financial functions, optimize processes, and boost profitability.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          Accounting in real estate can be complex and time-consuming. Tracking
          prepaid rental payments, managing capital accounts, reconciling
          mortgages, and ensuring compliance require specialized expertise.{" "}
          <span className="font-medium">
            Nimble Acuity understands these challenges
          </span>{" "}
          and provides tailored real estate accounting services that stabilize
          cash flow, lower overhead, and allow you to focus on your core
          business functions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          Our Real Estate Accounting Solutions
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Property Management Accounting",
              desc: "Optimize workflows and bookkeeping for seamless property management.",
            },
            {
              title: "Real Estate Investment Accounting",
              desc: "Streamline investment management by outsourcing transactions and reporting.",
            },
            {
              title: "Bookkeeping & Record-Keeping",
              desc: "Track financial transactions, receivables, and payables for better control.",
            },
            {
              title: "Commercial Real Estate Accounting",
              desc: "Manage lease accounting and commercial property records efficiently.",
            },
            {
              title: "Accounts Payable & Receivable",
              desc: "Handle invoices, receipts, and vendor management with accuracy.",
            },
            {
              title: "Cash Flow Analysis",
              desc: "Improve liquidity and ensure compliance with efficient cash management.",
            },
            {
              title: "Financial Reporting",
              desc: "Get timely, accurate reports and statements for real estate operations.",
            },
            {
              title: "Real Estate Tax Preparation",
              desc: "Accurate sales tax, periodic returns, and tax filing assistance.",
            },
            {
              title: "Tenant Accounting",
              desc: "Support for lease setup, move-ins, move-outs, and tenant payments.",
            },
            {
              title: "Payroll Processing",
              desc: "Reliable payroll solutions tailored for real estate firms.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
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
              title: "Industry Expertise",
              desc: "Years of experience managing real estate accounts for agents, firms, and investors.",
            },
            {
              title: "Tailored Solutions",
              desc: "Custom accounting processes designed to fit your property and business needs.",
            },
            {
              title: "Cost Savings",
              desc: "Lower overhead by outsourcing while improving efficiency and accuracy.",
            },
            {
              title: "Compliance & Accuracy",
              desc: "We ensure adherence to industry regulations while maintaining precise records.",
            },
            {
              title: "Scalable Services",
              desc: "From single properties to large portfolios, our solutions scale with your growth.",
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

export default RealEstateAccounting;
=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RealEstateAccounting = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Real Estate Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Overcome real estate accounting challenges with **Nimble Acuity’s comprehensive services**. From property managers to real estate firms, we help streamline financial functions, optimize processes, and boost profitability.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Accounting in real estate can be complex and time-consuming. Tracking prepaid rental payments, managing capital accounts, reconciling mortgages, and ensuring compliance require specialized expertise. **Nimble Acuity understands these challenges** and provides tailored real estate accounting services that stabilize cash flow, lower overhead, and allow you to focus on your core business functions.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Real Estate Accounting Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Property Management Accounting:</strong> Optimize workflows and bookkeeping for seamless property management.</li>
              <li><strong>Real Estate Investment Accounting:</strong> Streamline investment management by outsourcing transactions and reporting.</li>
              <li><strong>Bookkeeping & Record-Keeping:</strong> Track financial transactions, receivables, and payables for better control.</li>
              <li><strong>Commercial Real Estate Accounting:</strong> Manage lease accounting and commercial property records efficiently.</li>
              <li><strong>Accounts Payable & Receivable:</strong> Handle invoices, receipts, and vendor management with accuracy.</li>
              <li><strong>Cash Flow Analysis:</strong> Improve liquidity and ensure compliance with efficient cash management.</li>
              <li><strong>Financial Reporting:</strong> Get timely, accurate reports and statements for real estate operations.</li>
              <li><strong>Real Estate Tax Preparation:</strong> Accurate sales tax, periodic returns, and tax filing assistance.</li>
              <li><strong>Tenant Accounting:</strong> Support for lease setup, move-ins, move-outs, and tenant payments.</li>
              <li><strong>Payroll Processing:</strong> Reliable payroll solutions tailored for real estate firms.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Industry Expertise:</strong> Years of experience managing real estate accounts for agents, firms, and investors.</li>
              <li><strong>Tailored Solutions:</strong> Custom accounting processes designed to fit your property and business needs.</li>
              <li><strong>Cost Savings:</strong> Lower overhead by outsourcing while improving efficiency and accuracy.</li>
              <li><strong>Compliance & Accuracy:</strong> We ensure adherence to industry regulations while maintaining precise records.</li>
              <li><strong>Scalable Services:</strong> From single properties to large portfolios, our solutions scale with your growth.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Real Estate Finances Today
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert support you need to streamline your real estate accounting. Our tailored solutions and industry expertise help you boost profitability and focus on your core business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your real estate finances?</span>
              Contact us today to discuss your accounting needs and get started.
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us Today
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default RealEstateAccounting;
>>>>>>> shenbagavel
