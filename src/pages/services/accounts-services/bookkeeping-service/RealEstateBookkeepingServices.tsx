import React from "react";

const RealEstateBookkeepingServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="hero-section text-center max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-[#006A7C]">
          Specialized Bookkeeping for the Real Estate Industry
        </h1>
        <p className="text-lg mb-4">
          At Nimble Acuity, we provide specialized bookkeeping services for property managers, 
          real estate investors, and developers. Our core functions include rent roll reconciliation, 
          mortgage account management, tax services, CapEx and OpEx tracking, and financial forecasting.
        </p>
        <p className="text-lg">
          At Nimble Acuity, accuracy, streamlined processes, and regulatory compliance are at the 
          core of our financial management. We provide effective decision-making, optimal cash flow management, 
          tax reduction, and increased operational efficiency—leaving you more time to expand.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Our Comprehensive Real Estate Bookkeeping Services
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            We have designed our services to optimize financial and portfolio performance while following compliance 
            standards, especially Generally Accepted Accounting Principles (GAAP) and 
            International Financial Reporting Standards (IFRS).
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Accounts Payable Management", desc: "We ensure timely vendor payments and expense tracking, which minimizes late fees and errors." },
              { title: "Accounts Receivable Management", desc: "We provide accurate rent and payment tracking, automated reminders for overdue accounts, and improved cash flow." },
              { title: "Financial Reporting", desc: "We deliver customized profit & loss statements, in-depth balance sheets, and cash flow reports for transparent, real-time financial insights." },
              { title: "Bank Reconciliation", desc: "We reconcile your bank statements and records to detect and correct errors, enhancing the accuracy of your financial reporting." },
              { title: "Lease Abstraction", desc: "We review lease terms to identify key dates and obligations, simplifying lease management and ensuring compliance." },
              { title: "Property Management Accounting", desc: "We provide real-time tracking of property-related expenses and effective management of tenant billing and payments." },
              { title: "Tax Preparation", desc: "We organize financial records, maximize deductions, and ensure timely and accurate tax filings." },
              { title: "Budgeting and Forecasting", desc: "We create precise budgets for property expenses and dynamic forecasts based on market trends to support your long-term financial success." }
            ].map((service, idx) => (
              <div key={idx} className="service-item p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg mt-12">
            Optimize your real estate finances with the high accuracy of Nimble Acuity's account management and efficient real estate tax reporting. 
            Improve cash flow management by up to 30% by contacting us.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us-section py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Why Choose Nimble Acuity for Your Real Estate Company?
          </h2>
          <p className="text-center text-lg text-gray-600 mb-10">
            We have designed our bookkeeping for real estate services to provide maximum cash flow while 
            enhancing financial transparency and ensuring compliance. Here’s what makes us the best option:
          </p>
          
          <ul className="space-y-8">
            {[
              { title: "Precision on Accounts Reconciliation", desc: "We ensure more than 98% accuracy in bank and rent roll reconciliation, eliminating discrepancies that can affect cash flow or financial reporting." },
              { title: "Income Tax Reduction Planning", desc: "Our tax planning involves real estate-specific deductions, 1031 exchange tracking, and cost segregation benefits that increase profits while lowering taxable income." },
              { title: "Marketing Delinquent Accounts & Cash Collections", desc: "We implement automated rent tracking, which monitors late payments to enhance collection rates and reduce bad debts." },
              { title: "Lease Compliance & Abstraction", desc: "We extract vital lease data, determine rental payment obligations, and monitor important dates for landlords’ compliance with legal and financial obligations." },
              { title: "Proactive Financial Reporting for Investors", desc: "With our reports, you can understand your investment better through capitalization rate analysis, DSCR monitoring, and property profitability." },
              { title: "Compliance & Bookkeeping Accuracy", desc: "Our structured bookkeeping enables compliance with real estate tax law requirements, GAAP, and legal provisions, reducing risks for legal entities." }
            ].map((item, idx) => (
              <li key={idx} className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services-section py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Additional Services You Can Benefit From
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Accounts Receivable Services", desc: "Improve cash flow by automating invoicing, tracking rent, and proactive delinquency management to reduce arrears and improve liquidity." },
              { title: "Tax Preparation Services", desc: "Ensure compliance with comprehensive tax strategies, optimize real estate depreciation, and effectively plan capital gains to enhance deductions." },
              { title: "Financial Analysis Services", desc: "Achieve unparalleled financial understanding through sophisticated analysis of ratios, cash flow forecasting, and benchmarking real estate investment results of your firm for enhanced decisions." },
              { title: "Payroll Processing Services", desc: "Achieve automated payroll for your real estate and property management personnel with seamless access to tax withholding accuracy and contractor payments." }
            ].map((service, idx) => (
              <div key={idx} className="additional-service-item p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="client-success-stories-section py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Client Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="case-study-item p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
              <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">Cash Flow: A Triumph in Accounts Receivable</h3>
              <p className="text-gray-600 mb-4">
                Explore our compelling case study on Accounts Receivable Services, where Nimble Acuity partnered with small business owners to revolutionize their financial operations.
              </p>
              <a href="#" className="font-medium hover:underline text-[#006A7C]">Read more</a>
            </div>

            <div className="case-study-item p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
              <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">Efficiency: Transforming Bank Loan Processing</h3>
              <p className="text-gray-600 mb-4">
                Delve into our meticulous process of assessing loan eligibility and creating essential documentation. 
                This case study is a testament to our pioneering approach, which redefines efficiency in financial services.
              </p>
              <a href="#" className="font-medium hover:underline text-[#006A7C]">Read more</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action-section text-center py-12 bg-[#006A7C]">
        <p className="text-xl max-w-3xl mx-auto text-white">
          Minimize tax liabilities and improve cash flow with Nimble Acuity's professional real estate bookkeeping services. 
          Our audit-ready books will help you maximize your profitability.
        </p>
      </section>

    </div>
  );
};

export default RealEstateBookkeepingServices;
