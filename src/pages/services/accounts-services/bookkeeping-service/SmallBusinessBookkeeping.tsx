import React from "react";
<<<<<<< HEAD

const SmallBusinessBookkeeping: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="hero-section text-center max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-[#006A7C]">
          Bookkeeping Services for Small Businesses
        </h1>
        <p className="text-lg mb-4">
          In the dynamic world of small business, maintaining accurate financial records is crucial. At Nimble Acuity, we provide professional bookkeeping services tailored specifically for small businesses, ensuring expert, efficient, and error-free financial management.
        </p>
        <p className="text-lg mb-4">
          From recording daily transactions, reconciling bank accounts, producing financial statements, to managing accounts payable and receivable, we handle all tasks with meticulous attention to detail. Our services help you focus on core business operations while we manage your finances.
        </p>
        <p className="text-lg">
          Our certified professionals uphold the highest standards of integrity and confidentiality, providing reliable, timely, and accurate financial information.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Our Small Business Bookkeeping Solutions
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            We offer a comprehensive suite of solutions designed to streamline your financial operations and enhance business success.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Accounts Payable Management", desc: "Automate invoice management for timely payments and improved credit standing." },
              { title: "Accounts Receivable Management", desc: "Streamline billing and ensure timely collection of outstanding payments." },
              { title: "Expense Tracking and Reporting", desc: "Monitor and analyze expenditures to identify inefficiencies and optimize costs." },
              { title: "Payroll Processing", desc: "Handle wage calculations, deductions, and employee benefits with precision." },
              { title: "Financial Statement Preparation", desc: "Compile income statements, balance sheets, and cash flow reports for visibility." },
              { title: "Tax Preparation Support", desc: "Ensure accurate and optimized tax filings, maintaining compliance." },
              { title: "Cash Flow Analysis", desc: "Examine inflows and outflows to manage expenses and optimize revenue." },
              { title: "Budgeting and Forecasting", desc: "Create detailed financial maps for goal setting and resource allocation." },
              { title: "Customized Reporting", desc: "Generate visually engaging, real-time reports for timely decisions." },
              { title: "Inventory Management", desc: "Integrate data with real-time updates and automated replenishment for efficient inventory control." },
              { title: "Audit Preparation Support", desc: "Provide consultations, documentation management, and pre-audit evaluations for a stress-free audit experience." }
            ].map((service, idx) => (
              <div key={idx} className="service-item p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Why Choose Nimble Acuity for Your Small Business?
          </h2>
          <ul className="space-y-8">
            {[
              { title: "Accuracy", desc: "Meticulous attention to detail guarantees precise financial records." },
              { title: "Time Savings", desc: "Reclaim valuable time to focus on strategic activities and business growth." },
              { title: "Scalability", desc: "Flexible services adapt to your changing business needs." },
              { title: "Reduced Compliance Risks", desc: "Stay compliant with tax regulations and financial standards." },
              { title: "Access to Experts", desc: "Seasoned accountants and financial experts provide guidance and insights." },
              { title: "Consistency and Reliability", desc: "Dependable, on-time financial support for peace of mind." },
              { title: "Improved Financial Planning", desc: "Gain data and insights to make informed financial decisions." },
              { title: "Audit Preparedness", desc: "Maintain organized and compliant records for audit readiness." },
              { title: "Objective Financial Advice", desc: "Receive impartial financial guidance for better business decisions." },
              { title: "Data Security", desc: "Strict standards ensure protection of sensitive financial data." },
              { title: "Flexible Pricing", desc: "Cost-effective services tailored to your budget and needs." },
              { title: "Virtual Bookkeeping Services", desc: "Remote management with experienced professionals." },
              { title: "QuickBooks Bookkeeping Services", desc: "Maximize the potential of QuickBooks for accurate accounting." },
              { title: "Virtual CFO Services", desc: "Access strategic financial guidance from experienced CFOs." }
            ].map((item, idx) => (
              <li key={idx} className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action-section text-center py-12 bg-[#006A7C]">
        <p className="text-xl max-w-3xl mx-auto text-white">
          Empower your small business with Nimble Acuity's professional bookkeeping services. 
          Gain accurate, timely, and audit-ready financial records while focusing on growing your business.
        </p>
      </section>

=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const SmallBusinessBookkeeping: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              Bookkeeping Services for Small Businesses
            </h2>
            <p className="text-lg text-gray-600 text-center">
              In the dynamic world of small business, maintaining accurate financial records is crucial. At Nimble Acuity, we provide professional bookkeeping services tailored specifically for small businesses, ensuring expert, efficient, and error-free financial management.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              From recording daily transactions, reconciling bank accounts, producing financial statements, to managing accounts payable and receivable, we handle all tasks with meticulous attention to detail. Our services help you focus on core business operations while we manage your finances. Our certified professionals uphold the highest standards of integrity and confidentiality, providing reliable, timely, and accurate financial information.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Small Business Bookkeeping Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accounts Payable Management:</strong> Automate invoice management for timely payments and improved credit standing.</li>
              <li><strong>Accounts Receivable Management:</strong> Streamline billing and ensure timely collection of outstanding payments.</li>
              <li><strong>Expense Tracking and Reporting:</strong> Monitor and analyze expenditures to identify inefficiencies and optimize costs.</li>
              <li><strong>Payroll Processing:</strong> Handle wage calculations, deductions, and employee benefits with precision.</li>
              <li><strong>Financial Statement Preparation:</strong> Compile income statements, balance sheets, and cash flow reports for visibility.</li>
              <li><strong>Tax Preparation Support:</strong> Ensure accurate and optimized tax filings, maintaining compliance.</li>
              <li><strong>Cash Flow Analysis:</strong> Examine inflows and outflows to manage expenses and optimize revenue.</li>
              <li><strong>Budgeting and Forecasting:</strong> Create detailed financial maps for goal setting and resource allocation.</li>
              <li><strong>Customized Reporting:</strong> Generate visually engaging, real-time reports for timely decisions.</li>
              <li><strong>Inventory Management:</strong> Integrate data with real-time updates and automated replenishment for efficient inventory control.</li>
              <li><strong>Audit Preparation Support:</strong> Provide consultations, documentation management, and pre-audit evaluations for a stress-free audit experience.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Your Small Business?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accuracy:</strong> Meticulous attention to detail guarantees precise financial records.</li>
              <li><strong>Time Savings:</strong> Reclaim valuable time to focus on strategic activities and business growth.</li>
              <li><strong>Scalability:</strong> Flexible services adapt to your changing business needs.</li>
              <li><strong>Reduced Compliance Risks:</strong> Stay compliant with tax regulations and financial standards.</li>
              <li><strong>Access to Experts:</strong> Seasoned accountants and financial experts provide guidance and insights.</li>
              <li><strong>Consistency and Reliability:</strong> Dependable, on-time financial support for peace of mind.</li>
              <li><strong>Improved Financial Planning:</strong> Gain data and insights to make informed financial decisions.</li>
              <li><strong>Audit Preparedness:</strong> Maintain organized and compliant records for audit readiness.</li>
              <li><strong>Objective Financial Advice:</strong> Receive impartial financial guidance for better business decisions.</li>
              <li><strong>Data Security:</strong> Strict standards ensure protection of sensitive financial data.</li>
              <li><strong>Flexible Pricing:</strong> Cost-effective services tailored to your budget and needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Empower Your Small Business with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Empower your small business with Nimble Acuity's professional bookkeeping services. Gain accurate, timely, and audit-ready financial records while focusing on growing your business.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to take control of your small business finances?</span>
              Contact us today to discuss your bookkeeping needs and get started.
            </p>
            <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
              Contact Us Today
            </button>
          </div>

        </div>
      </section>
>>>>>>> shenbagavel
    </div>
  );
};

export default SmallBusinessBookkeeping;
