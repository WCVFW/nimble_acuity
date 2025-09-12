import React from "react";
<<<<<<< HEAD

const VirtualBookkeeping: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="hero-section text-center max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-[#006A7C]">
          Virtual Bookkeeping Services for Your Business
        </h1>
        <p className="text-lg mb-4">
<<<<<<< HEAD
          Struggling to maintain accurate financial records? Leverage outsourced virtual bookkeeping services to update your books and generate precise financial reports.
=======
          Struggling to maintain accurate financial records? Leverage Nimbled virtual bookkeeping services to update your books and generate precise financial reports.
>>>>>>> Santhiya
        </p>
        <p className="text-lg">
          Nimble Acuity offers scalable, remote bookkeeping solutions. Our expert bookkeepers reconcile accounts, categorize transactions, and provide personalized insights for tax season and financial clarity.
        </p>
      </section>

      {/* Virtual Bookkeeping Services Section */}
      <section className="services-section py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-[#006A7C]">
            Virtual Bookkeeping Services We Offer
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Remote bookkeeping solutions tailored to help businesses of all sizes maintain accurate, up-to-date financial records.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Consolidating Financial Reports", desc: "Streamline and consolidate multiple financial reports to analyze data and forecast cash flow accurately." },
              { title: "Generating Balance Sheets", desc: "Create precise balance sheets to project cash flow and monitor your financial position remotely." },
              { title: "Online Tax Consultation", desc: "Plan, implement, and file taxes efficiently with flexible online tax consultation services." },
              { title: "Financial Reporting Services", desc: "Visualize your financial data with monthly budgets and expense reports for better decision-making." },
              { title: "Tracking Employee Expenses", desc: "Monitor reimbursements and employee expenses accurately while keeping records updated." },
              { title: "Automating Accounts Payable and Receivable", desc: "Customize workflows to automate AP/AR processes and integrate with your existing software." },
              { title: "Payroll Accounting", desc: "Manage salaries, bonuses, deductions, and tax administration efficiently." },
              { title: "Reconciliation Services", desc: "Resolve bank discrepancies and maintain accurate records with our remote reconciliation support." }
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
            Why Choose Nimble Acuity for Virtual Bookkeeping?
          </h2>
          <ul className="space-y-8">
            {[
              { title: "IFRS Compliance", desc: "All services comply with International Financial Reporting Standards (IFRS) for consistent financial statements." },
              { title: "Financial Data Security", desc: "Encrypted servers, secure VPNs, and multi-step security processes ensure your data remains protected." },
              { title: "Easy Scalability", desc: "Our solutions scale to match your business workload, including seasonal peaks." },
              { title: "24/7 Support", desc: "Access round-the-clock support via multiple communication channels for all your bookkeeping needs." },
              { title: "Reasonable Pricing", desc: "Flexible, project-based pricing ensures predictable costs tailored to your requirements." }
            ].map((item, idx) => (
              <li key={idx} className="p-6 rounded-2xl shadow hover:shadow-lg transition bg-gray-50">
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
            Additional Services You Can Benefit From
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Accounting Services", desc: "Analyze and interpret financial statements efficiently with our expert accounting solutions." },
              { title: "Bookkeeping Services", desc: "Track, organize, and maintain up-to-date books using advanced technology." },
              { title: "Accounts Receivable Services", desc: "Manage pending invoices and improve cash flow with timely collection strategies." },
              { title: "Accounts Payable Services", desc: "Automate and optimize payment workflows to ensure timely disbursements." },
              { title: "Tax Preparation Services", desc: "Prepare and update tax documents accurately to stay compliant and ready for filing." },
              { title: "Financial Analysis Services", desc: "Gain actionable insights by analyzing financial data to forecast profits and improve planning." }
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
          Streamline your remote bookkeeping, gain accurate financial insights, and focus on growing your business with Nimble Acuity's expert virtual bookkeeping services.
        </p>
      </section>

=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const VirtualBookkeeping: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4 text-center">
              Virtual Bookkeeping Services for Your Business
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Struggling to maintain accurate financial records? Leverage outsourced virtual bookkeeping services to update your books and generate precise financial reports.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mx-auto mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** offers scalable, remote bookkeeping solutions. Our expert bookkeepers reconcile accounts, categorize transactions, and provide personalized insights for tax season and financial clarity.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Virtual Bookkeeping Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Consolidating Financial Reports:</strong> Streamline and consolidate multiple financial reports to analyze data and forecast cash flow accurately.</li>
              <li><strong>Generating Balance Sheets:</strong> Create precise balance sheets to project cash flow and monitor your financial position remotely.</li>
              <li><strong>Online Tax Consultation:</strong> Plan, implement, and file taxes efficiently with flexible online tax consultation services.</li>
              <li><strong>Financial Reporting Services:</strong> Visualize your financial data with monthly budgets and expense reports for better decision-making.</li>
              <li><strong>Tracking Employee Expenses:</strong> Monitor reimbursements and employee expenses accurately while keeping records updated.</li>
              <li><strong>Automating Accounts Payable and Receivable:</strong> Customize workflows to automate AP/AR processes and integrate with your existing software.</li>
              <li><strong>Payroll Accounting:</strong> Manage salaries, bonuses, deductions, and tax administration efficiently.</li>
              <li><strong>Reconciliation Services:</strong> Resolve bank discrepancies and maintain accurate records with our remote reconciliation support.</li>
              <li><strong>Accounting Services:</strong> Analyze and interpret financial statements efficiently with our expert accounting solutions.</li>
              <li><strong>Bookkeeping Services:</strong> Track, organize, and maintain up-to-date books using advanced technology.</li>
              <li><strong>Accounts Receivable Services:</strong> Manage pending invoices and improve cash flow with timely collection strategies.</li>
              <li><strong>Accounts Payable Services:</strong> Automate and optimize payment workflows to ensure timely disbursements.</li>
              <li><strong>Tax Preparation Services:</strong> Prepare and update tax documents accurately to stay compliant and ready for filing.</li>
              <li><strong>Financial Analysis Services:</strong> Gain actionable insights by analyzing financial data to forecast profits and improve planning.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>IFRS Compliance:</strong> All services comply with International Financial Reporting Standards (IFRS) for consistent financial statements.</li>
              <li><strong>Financial Data Security:</strong> Encrypted servers, secure VPNs, and multi-step security processes ensure your data remains protected.</li>
              <li><strong>Easy Scalability:</strong> Our solutions scale to match your business workload, including seasonal peaks.</li>
              <li><strong>24/7 Support:</strong> Access round-the-clock support via multiple communication channels for all your bookkeeping needs.</li>
              <li><strong>Reasonable Pricing:</strong> Flexible, project-based pricing ensures predictable costs tailored to your requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Finances with Virtual Bookkeeping
            </h3>
            <p className="text-gray-700 mb-6">
              Streamline your remote bookkeeping, gain accurate financial insights, and focus on growing your business with Nimble Acuity's expert virtual bookkeeping services.
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

export default VirtualBookkeeping;
