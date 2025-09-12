import React from "react";
<<<<<<< HEAD

const RetailAccountingServices = () => {
  return (
    <div className="bg-white text-[#006A7C] p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        Retail Accounting Services
      </h1>

      {/* Intro */}
      <p className="mb-4 text-gray-700">
        Are you a retail owner looking to streamline your accounting functions? Leverage our
        services to save costs and improve your bottom line.
      </p>
      <p className="mb-6 text-gray-700">
        We fast-track your business growth by analyzing and improving all accounting functions.
        Our retail accounting process covers every significant parameter of your business,
        including expenses, income, assets, and liabilities. By partnering with us, you can gain
        real-time financial insights, increased visibility into your profits, and accelerated
        functions through automated tasks.
      </p>
      <p className="mb-6 text-gray-700">
        We offer dependable, robust, and fast services to retail firms, with a focus on providing
        relentless, around-the-clock support. Partner with us for a smooth outsourcing experience.
      </p>

      {/* Services */}
      <h2 className="text-2xl font-semibold mb-4">Retail Accounting Solutions</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Bookkeeping Services:</strong> We record all year-round transactions, maintain
          ledger accounts for sales, purchases, and expenses, and prepare financial statements,
          including balance sheets and P&L statements.
        </li>
        <li>
          <strong>Point of Sale (POS) Accounting:</strong> We offer comprehensive solutions for POS
          transactions, from tracking cash register entries to providing IT support for electronic
          terminals. We also help track pricing and purchase trends.
        </li>
        <li>
          <strong>Inventory Management Services:</strong> Our experts optimize and manage all
          components of your inventory operations to drive efficiency. Our capabilities include
          inventory strategy, supply chain data management, logistics, and planning and forecasting.
        </li>
        <li>
          <strong>Sales Tax Compliance Services:</strong> We help you stay on top of your sales tax
          compliance by diligently gathering data, populating taxes, and filing returns to prevent
          peak-season bottlenecks.
        </li>
        <li>
          <strong>Financial Reporting Services:</strong> We gather your organization's data and
          convert it into useful and easy-to-read reports, helping you make better, smarter, and
          more efficient financial decisions.
        </li>
        <li>
          <strong>Cash Flow Management Services:</strong> We help reduce stress and ensure maximum
          growth by predicting cash movements within your business, helping you cut costs, and
          running credit checks on vendors to prevent defaults.
        </li>
        <li>
          <strong>Additional Services:</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Accounts Payable</li>
            <li>Accounts Receivable</li>
            <li>Retail Accounting Software Solutions</li>
            <li>Retail Financial Management</li>
            <li>Audit Support Services</li>
          </ul>
        </li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Nimble Acuity?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Compliance & Data Security:</strong> We stay updated on all legal and professional
          accounting standards and keep your data extremely safe.
        </li>
        <li>
          <strong>Cost-Effective Services:</strong> Our services are highly cost-effective, and we
          customize our offerings based on your specific needs and challenges.
        </li>
        <li>
          <strong>Premium Quality:</strong> We are ISO 9001:2015-certified and implement
          industry-leading best practices to provide top-quality accounting services.
        </li>
        <li>
          <strong>Modern Infrastructure & Tools:</strong> Our skilled accounting professionals
          leverage world-class infrastructure and the latest accounting tools to ensure consistency.
        </li>
        <li>
          <strong>Expertise & Experience:</strong> Our team has significant experience working with
          retail companies across various verticals, providing best-in-class services with quick
          turnaround times.
        </li>
        <li>
          <strong>Scalable Growth:</strong> We provide scalability to meet your exclusive business
          needs as you grow.
        </li>
      </ul>
=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const RetailAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Retail Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline retail accounting, gain real-time financial visibility, and improve your bottom line with Nimble Acuity’s expert support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you a retail owner looking to optimize accounting functions? We help you reduce costs and make faster, smarter decisions with accurate, timely financials.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our retail accounting process covers every key parameter—expenses, income, assets, and liabilities—so you get clearer profitability, stronger controls, and accelerated workflows through automation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With dependable, around-the-clock support and scalable engagement models, we make outsourcing smooth and effective for growing retail businesses.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Retail Accounting Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              Comprehensive, end-to-end services tailored to the realities of multi-location, omni-channel retail.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Bookkeeping Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Record year-round transactions and maintain ledgers for sales, purchases, and expenses.</li>
                  <li>Prepare financial statements, including balance sheet and profit &amp; loss.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Point of Sale (POS) Accounting</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Reconcile POS transactions and cash register entries.</li>
                  <li>Provide IT coordination for electronic terminals.</li>
                  <li>Track pricing and purchase trends for margin insights.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Inventory Management</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Optimize inventory strategy and supply chain data management.</li>
                  <li>Support logistics, planning, and demand forecasting.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Sales Tax Compliance</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Gather and validate tax data, populate returns, and file on time.</li>
                  <li>Prevent peak-season bottlenecks with streamlined workflows.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Financial Reporting</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Translate raw data into clear, decision-ready reports and dashboards.</li>
                  <li>Provide KPI tracking for sales, margins, and cash conversion.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Cash Flow Management</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Forecast cash movements and identify cost-reduction opportunities.</li>
                  <li>Run vendor credit checks to minimize default risks.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">Additional Services</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Accounts Payable</li>
                  <li>Accounts Receivable</li>
                  <li>Retail Accounting Software Solutions</li>
                  <li>Retail Financial Management</li>
                  <li>Audit Support Services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Compliance &amp; Data Security:</strong> Up-to-date with professional standards; stringent controls keep your data safe.</li>
              <li><strong>Cost-Effective:</strong> Flexible, tailored pricing aligned to your retail footprint and volumes.</li>
              <li><strong>Premium Quality:</strong> ISO 9001:2015 practices for consistent, high-quality outputs.</li>
              <li><strong>Modern Infrastructure &amp; Tools:</strong> World-class systems and current accounting tech for reliability.</li>
              <li><strong>Retail Expertise:</strong> Deep experience across categories and formats with quick turnaround times.</li>
              <li><strong>Scalable Growth:</strong> Services that expand seamlessly as your business grows.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Power Your Retail Growth with Better Numbers
            </h3>
            <p className="text-gray-700 mb-6">
              From POS reconciliation to inventory and tax, we deliver accurate, on-time retail accounting so you can focus on sales and customer experience.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with Nimble Acuity to gain clarity, control, and confidence in your finances.</span> Contact us to discuss your retail accounting needs.
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

export default RetailAccountingServices;
