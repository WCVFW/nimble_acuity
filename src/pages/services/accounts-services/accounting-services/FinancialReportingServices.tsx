import React from "react";
<<<<<<< HEAD

const FinancialReportingServices = () => {
  return (
    <div className="bg-white text-[#006A7C] p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Nimble Acuity: Financial Reporting Services
      </h1>

      {/* Intro */}
      <p className="mb-4 text-gray-700">
        Get access to specialized financial reporting services from our finance and accounting
        experts.
      </p>
      <p className="mb-4 text-gray-700">
        Every organization needs financial reporting and analysis to assess its financial
        performance. Financial reports provide crucial insights into a company's performance,
        helping you understand how your business has fared during a specific period. These reports
        are essential for making informed business decisions.
      </p>
      <p className="mb-6 text-gray-700">
        Outsourcing financial reporting services to Nimble Acuity gives you access to professional,
        effective reporting and analysis. Our team of seasoned experts can help you make informed
        business decisions based on accurate and timely data.
      </p>

      {/* Services */}
      <h2 className="text-2xl font-semibold mb-4">
        Financial Reporting Services We Offer
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Income Statement Preparation and Analysis:</strong> We prepare and analyze income
          statements (profit and loss statements) summarizing costs, expenses, and revenue.
        </li>
        <li>
          <strong>Monthly Income Statement Preparation:</strong> Monthly reports summarizing
          information for the latest twelve-month period.
        </li>
        <li>
          <strong>Balance Sheet Preparation:</strong> Detailed balance sheets displaying equity,
          assets, and liabilities on a specific date.
        </li>
        <li>
          <strong>Statement of Cash Flow Preparation:</strong> Comprehensive summaries of cash flow
          activities, including investing, financing, and operating activities.
        </li>
        <li>
          <strong>Bank Reconciliation Report Preparation:</strong> Reports reconciling your cash
          balance with bank statements.
        </li>
        <li>
          <strong>Payroll Register Preparation:</strong> Registers detailing gross pay, taxes, and
          deductions for all employees in a given month.
        </li>
        <li>
          <strong>Journal Entry and Check Register Preparation:</strong> Registers of all checks
          issued during a month, tied to ledger accounts.
        </li>
        <li>
          <strong>Detailed General Ledger Report:</strong> Complete activity overview for a given
          month.
        </li>
        <li>
          <strong>Business Analysis Report:</strong> Key metrics from financial statements to
          evaluate performance.
        </li>
        <li>
          <strong>Financial Analysis Report:</strong> Balance sheet comparison with previous months
          to highlight changes in equity, assets, and liabilities.
        </li>
        <li>
          <strong>Operations Analysis Report:</strong> Comparison of sales, costs, and expenses by
          category, year-over-year.
        </li>
        <li>
          <strong>Additional Reports:</strong> Management, sales, sales tax, and purchase reports
          tailored to your business needs.
        </li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Why Choose Nimble Acuity?
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Affordable Pricing:</strong> Extremely cost-effective reporting solutions.
        </li>
        <li>
          <strong>High-Quality Services:</strong> ISO-certified, following the latest reporting best
          practices.
        </li>
        <li>
          <strong>Superb Infrastructure:</strong> Strong infrastructure and skilled resources ensure
          reliable delivery.
        </li>
        <li>
          <strong>Advanced Tools and Technologies:</strong> Latest financial reporting tools for
          cutting-edge solutions.
        </li>
        <li>
          <strong>Experienced Team:</strong> Extensive experience across a wide range of reporting
          solutions.
        </li>
        <li>
          <strong>Data Security:</strong> Strict compliance with global data security regulations.
        </li>
        <li>
          <strong>Short Turnaround:</strong> Fast delivery of reports, understanding the urgency of
          business timelines.
        </li>
      </ul>
=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialReportingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Financial Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to specialized financial reporting services from Nimble Acuity’s finance and accounting experts.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Every organization needs financial reporting and analysis to assess its financial performance. Financial reports provide crucial insights into how your company is performing, helping you evaluate results over a specific period.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These reports are essential for making informed business decisions and ensuring compliance. With structured, accurate reporting, you gain the ability to identify trends, risks, and opportunities for growth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsourcing financial reporting services to Nimble Acuity gives you access to professional, effective reporting and analysis from seasoned experts who deliver accurate and timely data.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Financial Reporting Services We Offer
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Income Statement Preparation &amp; Analysis</h4>
                <p className="text-gray-700">We prepare and analyze profit and loss statements summarizing costs, expenses, and revenues.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Monthly Income Statements</h4>
                <p className="text-gray-700">Timely reports summarizing the latest twelve-month financial performance.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Balance Sheet Preparation</h4>
                <p className="text-gray-700">Detailed balance sheets displaying equity, assets, and liabilities on a specific date.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Cash Flow Statements</h4>
                <p className="text-gray-700">Comprehensive summaries of cash movements across operating, investing, and financing activities.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Bank Reconciliation Reports</h4>
                <p className="text-gray-700">Ensure accuracy by reconciling your cash balances with bank statements.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Payroll Registers</h4>
                <p className="text-gray-700">Detailed monthly registers with gross pay, taxes, and deductions for employees.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Journal Entry &amp; Check Registers</h4>
                <p className="text-gray-700">Month-wise registers of all checks issued, tied directly to ledger accounts.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">General Ledger Reports</h4>
                <p className="text-gray-700">Complete activity overview of accounts for a given month.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Business Analysis Reports</h4>
                <p className="text-gray-700">Key financial statement metrics for evaluating overall performance.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Analysis Reports</h4>
                <p className="text-gray-700">Balance sheet comparisons highlighting changes in equity, assets, and liabilities.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Operations Analysis Reports</h4>
                <p className="text-gray-700">Year-over-year comparisons of sales, costs, and expenses by category.</p>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Additional Reports</h4>
                <p className="text-gray-700">Tailored management, sales, sales tax, and purchase reports as per business needs.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Extremely cost-effective reporting solutions.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified, following the latest reporting best practices.</li>
              <li><strong>Superb Infrastructure:</strong> Strong systems and skilled resources ensure reliability.</li>
              <li><strong>Advanced Tools:</strong> Use of modern financial reporting technologies.</li>
              <li><strong>Experienced Team:</strong> Wide expertise across diverse reporting solutions.</li>
              <li><strong>Data Security:</strong> Strict compliance with global regulations.</li>
              <li><strong>Quick Turnaround:</strong> Timely delivery aligned with business priorities.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Drive Better Decisions with Expert Financial Reporting
            </h3>
            <p className="text-gray-700 mb-6">
              From income statements to detailed analysis, our reporting services give you the clarity and confidence needed to make smarter business moves.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with Nimble Acuity</span> for structured, insightful, and reliable financial reporting. Contact us today to get started.
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

export default FinancialReportingServices;
