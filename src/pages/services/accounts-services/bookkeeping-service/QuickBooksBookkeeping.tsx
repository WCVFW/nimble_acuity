import React from "react";

const QuickBooksBookkeeping: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="hero-section text-center max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-[#006A7C]">
          Expert QuickBooks Bookkeeping Services
        </h1>
        <p className="text-lg mb-4">
          Over 40% of business owners spend 80 hours a year on bookkeeping and tax liabilities. QuickBooks can drastically reduce this time, but to truly benefit, you need expert setup and management.
        </p>
        <p className="text-lg mb-4">
          Nimble Acuity provides QuickBooks bookkeeping services for businesses of all sizes. Our certified experts help you leverage QuickBooks to streamline financial operations and gain a clear financial picture.
        </p>
      </section>

      {/* QuickBooks Solutions Section */}
      <section className="services-section py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Our QuickBooks Bookkeeping Solutions
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Tailored QuickBooks solutions to ensure your books are always accurate and compliant.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "QuickBooks Accounting and Bookkeeping", desc: "Setup accounts, prepare invoices, record receipts, verify bills, track billable hours, and handle month-end/year-end closings." },
              { title: "QuickBooks Accounts Payable Services", desc: "Manage bills online, process payments, and ensure timely approvals for streamlined AP operations." },
              { title: "QuickBooks Accounts Receivable Services", desc: "Track AR, send estimates, record payments, manage collections, and generate cash flow reports." },
              { title: "QuickBooks Financial Reporting", desc: "Comprehensive reports including balance sheet, income statement, cash flow, general ledger, and fixed-asset accounts." },
              { title: "QuickBooks Payroll Services", desc: "Set up and manage payroll, calculate taxes, file tax forms, and generate year-end W-2 forms." },
              { title: "QuickBooks Bank and Credit Card Reconciliations", desc: "Reconcile accounts, match balances, and assist with multi-company account management." }
            ].map((service, idx) => (
              <div key={idx} className="service-item p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QuickBooks Process Section */}
      <section className="process-section py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Our QuickBooks Live Bookkeeping Process
          </h2>
          <ul className="space-y-8">
            {[
              { title: "Deep Dive", desc: "Analyze your business processes to understand your financial reporting requirements." },
              { title: "Software Selection", desc: "Select the right QuickBooks version and integrate with your existing applications." },
              { title: "Setup and Implementation", desc: "Configure accounts, payroll, and tax settings to ensure accuracy from day one." },
              { title: "Data Migration", desc: "Carefully import existing financial balances into QuickBooks." },
              { title: "Comprehensive Training", desc: "Train your team to effectively use QuickBooks and maximize its features." }
            ].map((step, idx) => (
              <li key={idx} className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Why Choose Nimble Acuity for QuickBooks Services?
          </h2>
          <ul className="space-y-8">
            {[
              { title: "Management of Diverse Needs", desc: "We handle bookkeeping for various industries, ensuring accuracy and compliance." },
              { title: "Security and Confidentiality", desc: "ISO-certified organization with NDA protection for your sensitive data." },
              { title: "Fast Turnaround Times", desc: "Timely service delivery to streamline your business operations." },
              { title: "Automation", desc: "Automate invoicing and financial statements to improve efficiency." },
              { title: "Expert Resources", desc: "Team includes CFAs, CPAs, and CAs proficient in QuickBooks." },
              { title: "Latest Software", desc: "We use the latest QuickBooks versions for maximum efficiency." },
              { title: "Scalable Services", desc: "Flexible and scalable services tailored to your needs." },
              { title: "Affordable Prices", desc: "Choose dedicated accountant at flat rate or hourly for cost-effective service." }
            ].map((item, idx) => (
              <li key={idx} className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="additional-services-section py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Additional Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Accounting Services", desc: "Ensure financial statements are error-free, covering wealth management, general accounting, and spreadsheet accounting." },
              { title: "Bookkeeping Services", desc: "Customized services from cash management to AR/AP reporting for accurate books." },
              { title: "Accounts Receivable Services", desc: "Manage invoices and accelerate cash inflow." },
              { title: "Accounts Payable Services", desc: "Optimize payments, automate processing, and eliminate duplication." },
              { title: "Tax Preparation Services", desc: "Ensure accurate documentation for improved tax positions and reduced errors." },
              { title: "Financial Analysis Services", desc: "Data-driven analysis to make smarter business decisions and reduce risk." }
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action-section text-center py-12 bg-[#006A7C]">
        <p className="text-xl max-w-3xl mx-auto text-white">
          Maximize your QuickBooks efficiency and ensure accurate, audit-ready financial records with Nimble Acuity's expert services. Let us handle your bookkeeping so you can focus on growing your business.
        </p>
      </section>

    </div>
  );
};

export default QuickBooksBookkeeping;
