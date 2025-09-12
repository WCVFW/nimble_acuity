import React from "react";
<<<<<<< HEAD

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

=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const CPABookkeepingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              CPA Bookkeeping Services from Nimble Acuity
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Accurate accounting records are the foundation of your business's performance. Yet, many businesses struggle with managing cash flow due to a lack of qualified bookkeepers. Our CPA bookkeeping services will help you overcome these challenges.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has extensive experience in providing world-class **CPA bookkeeping solutions** to businesses globally. We streamline processes, centralize client information, and provide tech-driven services for full financial control.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our CPA Bookkeeping Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Inventory Bookkeeping:</strong> Get all your stock accounted for and recorded, enabling accurate forecasting of future expenditures.</li>
              <li><strong>Accounts Receivable Bookkeeping:</strong> Meticulously record credit transactions and track payments to ensure timely receipts.</li>
              <li><strong>Sales Bookkeeping:</strong> Track all business revenue inflows to provide a precise understanding of your revenue position.</li>
              <li><strong>Cash Account Bookkeeping:</strong> Record all cash inflows and outflows to maintain a complete ledger of transactions.</li>
              <li><strong>Loans Payable Bookkeeping:</strong> Manage loans payable account for an up-to-date status and clear breakdown of obligations.</li>
              <li><strong>Purchase Account Bookkeeping:</strong> Track all purchased goods and materials to understand overall mandatory expenses.</li>
              <li><strong>Payroll Expenses Bookkeeping:</strong> Maintain detailed payroll records including wages, deductions, and taxes.</li>
              <li><strong>Retained Earnings Bookkeeping:</strong> Get a clear status of total profits reinvested into your business from a given financial year.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our CPA Bookkeeping Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Bucket Debits and Credits:</strong> Analyze every financial transaction and assign it to the appropriate accounts.</li>
              <li><strong>Record Entries:</strong> Enter debit and credit figures in the correct journal entries as soon as transactions occur.</li>
              <li><strong>Update Ledgers:</strong> Ensure every journal entry is accurately posted to the corresponding ledger accounts.</li>
              <li><strong>Tally Entries:</strong> Adjust and match entries after the close of each accounting period to ensure accuracy.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Expert Bookkeepers:</strong> Easy access to a global network of experienced CPA bookkeepers.</li>
              <li><strong>Need-Specific Software:</strong> Select and integrate the best bookkeeping software matched to your needs.</li>
              <li><strong>Regular Updates:</strong> Books updated regularly according to a strategic schedule for accuracy.</li>
              <li><strong>Categorized Expenses:</strong> Expenditures and earnings are neatly organized for easy statement generation.</li>
              <li><strong>Standard Procedures:</strong> Optimized bookkeeping procedures ensure fundamental principles are always followed.</li>
              <li><strong>Optimized Operations:</strong> Digital dashboards and centralized management ensure efficiency.</li>
              <li><strong>Steady Cash Flow:</strong> Gain complete control over your cash flow with real-time financial insights.</li>
              <li><strong>Cost-Effective Services:</strong> High-quality services at competitive prices, superior to hiring an in-house team.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Optimize Your Finances with CPA Bookkeeping
            </h3>
            <p className="text-gray-700 mb-6">
              Gain full control over your finances and optimize cash flow with Nimble Acuity's professional CPA bookkeeping services. Let us help you maintain accurate, audit-ready books and streamline your accounting processes.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to simplify your financial management?</span>
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

<<<<<<< HEAD
export default CPABookkeepingServices;
=======
export default CPABookkeepingServices;
>>>>>>> shenbagavel
