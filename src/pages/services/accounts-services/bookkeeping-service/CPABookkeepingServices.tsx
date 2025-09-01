import React from "react";

const CPABookkeepingServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="hero-section text-center max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-[#006A7C]">
          CPA Bookkeeping Services from Nimble Acuity
        </h1>
        <p className="text-lg mb-4">
          Accurate accounting records play a pivotal role in reflecting your business's performance. Bookkeeping is the foundation for capturing these records. Yet, many businesses struggle to manage their cash flow due to a lack of qualified and experienced bookkeepers.
        </p>
        <p className="text-lg mb-4">
          Are you finding it challenging to meet your financial obligations? Is inefficient bookkeeping hindering your ability to plan for future investments? Our CPA bookkeeping services will help you overcome all these challenges.
        </p>
        <p className="text-lg">
          Nimble Acuity has extensive experience in providing world-class CPA bookkeeping solutions to businesses globally. We streamline processes, centralize client information, and provide tech-driven services for full financial control.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Our CPA Bookkeeping Solutions
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Our team of seasoned CPAs delivers world-class solutions to help you maintain precise financial records.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Inventory Bookkeeping", desc: "Get all your stock accounted for and recorded, enabling accurate forecasting of future expenditures." },
              { title: "Accounts Receivable Bookkeeping", desc: "Meticulously record credit transactions and track payments to ensure timely receipts." },
              { title: "Sales Bookkeeping", desc: "Track all business revenue inflows to provide a precise understanding of your revenue position." },
              { title: "Cash Account Bookkeeping", desc: "Record all cash inflows and outflows to maintain a complete ledger of transactions." },
              { title: "Loans Payable Bookkeeping", desc: "Manage loans payable account for an up-to-date status and clear breakdown of obligations." },
              { title: "Purchase Account Bookkeeping", desc: "Track all purchased goods and materials to understand overall mandatory expenses." },
              { title: "Payroll Expenses Bookkeeping", desc: "Maintain detailed payroll records including wages, deductions, and taxes." },
              { title: "Retained Earnings Bookkeeping", desc: "Get a clear status of total profits reinvested into your business from a given financial year." }
            ].map((service, idx) => (
              <div key={idx} className="service-item p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
                <h3 className="text-xl font-semibold mb-3 text-[#006A7C]">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Our CPA Bookkeeping Process
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Our services are based on the core principles of bookkeeping: every debit must have an equal credit, and all accounts must balance at the end of each period.
          </p>

          <ul className="space-y-8">
            {[
              { title: "Bucket Debits and Credits", desc: "Analyze every financial transaction and assign it to the appropriate accounts." },
              { title: "Record Entries", desc: "Enter debit and credit figures in the correct journal entries as soon as transactions occur." },
              { title: "Update Ledgers", desc: "Ensure every journal entry is accurately posted to the corresponding ledger accounts." },
              { title: "Tally Entries", desc: "Adjust and match entries after the close of each accounting period to ensure accuracy." }
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
            Why Choose Nimble Acuity for CPA Bookkeeping?
          </h2>
          <ul className="space-y-8">
            {[
              { title: "Expert Bookkeepers", desc: "Easy access to a global network of experienced CPA bookkeepers." },
              { title: "Need-Specific Software", desc: "Select and integrate the best bookkeeping software matched to your needs." },
              { title: "Regular Updates", desc: "Books updated regularly according to a strategic schedule for accuracy." },
              { title: "Categorized Expenses", desc: "Expenditures and earnings are neatly organized for easy statement generation." },
              { title: "Standard Procedures", desc: "Optimized bookkeeping procedures ensure fundamental principles are always followed." },
              { title: "Optimized Operations", desc: "Digital dashboards and centralized management ensure efficiency." },
              { title: "Steady Cash Flow", desc: "Gain complete control over your cash flow with real-time financial insights." },
              { title: "Cost-Effective Services", desc: "High-quality services at competitive prices, superior to hiring an in-house team." }
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
      <section className="additional-services-section py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Additional Services from Nimble Acuity
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Financial Accounting Services", desc: "Prepare and audit financial statements, plan budgets, and assess business costs." },
              { title: "Accounts Receivable Services", desc: "Register and reconcile cash inflows, monitor key metrics." },
              { title: "Accounts Payable Services", desc: "Ensure all dues and expenses are paid on time." },
              { title: "Tax Preparation Services", desc: "Calculate tax dues and prepare returns in a compliant manner." },
              { title: "Financial Analysis Services", desc: "Prepare comprehensive financial analysis statements for better planning." },
              { title: "Payroll Processing Services", desc: "Ensure paychecks are accurate and issued on time." },
              { title: "Software Accounting Implementation", desc: "Assist in evaluating, purchasing, and integrating accounting applications." }
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-white">
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
          Gain full control over your finances and optimize cash flow with Nimble Acuity's professional CPA bookkeeping services. 
          Let us help you maintain accurate, audit-ready books and streamline your accounting processes.
        </p>
      </section>

    </div>
  );
};

export default CPABookkeepingServices;
