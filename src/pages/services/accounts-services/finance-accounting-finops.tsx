import React, { useState } from "react";

interface MegaMenuLink {
  text: string;
  href: string;
}

interface MegaMenuDropdown {
  subheading: string;
  subheadingHref: string;
  links: MegaMenuLink[];
}

interface MegaMenuItem {
  title: string;
  href?: string;
  dropdown?: MegaMenuDropdown;
}

const megaMenuData: MegaMenuItem[] = [
  {
    title: "Bookkeeping Services",
    dropdown: {
      subheading: "Bookkeeping Services",
      subheadingHref: "/financial/Nimble-bookkeeping-services/",
      links: [
        { text: "Real Estate Bookkeeping", href: "/services/finance-accounting-finops/Real-EstateBookkeeping-Services" },
        { text: "Accounting Setup Services", href: "/services/finance-accounting-finops/Accounting-Setup-Services" },
        { text: "Bookkeeping Services for CPA Firms", href: "/services/finance-accounting-finops/CPA-Bookkeeping-Services" },
        { text: "Bookkeeping Services for Small Businesses", href: "/services/finance-accounting-finops/SmallBusiness-Bookkeeping" },
        { text: "QuickBooks Bookkeeping Services", href: "/services/finance-accounting-finops/QuickBooks-Bookkeeping" },
        { text: "Virtual Bookkeeping Services", href: "/services/finance-accounting-finops/Virtual-Bookkeeping" },
      ],
    },
  },
  {
    title: "Accounting Services",
    dropdown: {
      subheading: "Accounting Services",
      subheadingHref: "/financial/Nimbled-accounting-services/",
      links: [
        { text: "Valuation Advisory Services", href: "/services/finance-accounting-finops/accounting-service/Valuation-Advisory-service" },
        { text: "Cost Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Cost-Accounting-service" },
        { text: "Accounting Automation Services", href: "/services/finance-accounting-finops/accounting-service/Accounting-Automation-services" },
        { text: "Real Estate Accounting Services", href: "/services/finance-accounting-finops/accounting-service/RealEstate-Accounting-services" },
        { text: "Wealth Management Services", href: "/services/finance-accounting-finops/accounting-service/Wealth-Management-service" },
        { text: "Financial Accounting Advisory Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Accounting-Advisory-sesrvice" },
        { text: "Ledger Management Services", href: "/services/finance-accounting-finops/accounting-service/Ledger-Management-Services" },
        { text: "General Accounting Services", href: "/services/finance-accounting-finops/accounting-service/General-Accounting-Services" },
        { text: "ESG Consulting Services", href: "/services/finance-accounting-finops/accounting-service/ESG-Consulting-Services" },
        { text: "Corporate Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Corporate-Accounting-Services" },
        { text: "Fixed Asset Management Services", href: "/services/finance-accounting-finops/accounting-service/Fixed-Asset-Management-Services" },
        { text: "Management Avisory Services", href: "/services/finance-accounting-finops/accounting-service/Management-Advisory-Services" },
        { text: "Management Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Management-Accounting-Services" },
        { text: "Construction Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Construction-Accounting-Services" },
        { text: "Fixed Asset Auditing Services", href: "/services/finance-accounting-finops/accounting-service/Fixed-Asset-Auditing-Services" },
        { text: "Internal Audit Services", href: "/services/finance-accounting-finops/accounting-service/Internal-Audit-Services" },
        { text: "Portfolio Investor Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Portfolio-Investor-Accounting-service" },
        { text: "Post-Merger Integration Services", href: "/services/finance-accounting-finops/accounting-service/PostMerger-Integration-service" },
        { text: "Compliance Audit Services", href: "/services/finance-accounting-finops/accounting-service/Compliance-Audit-service" },
        { text: "Fixed Asset Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Fixed-Asset-Accounting-service" },
        { text: "Accounting Services for Startups", href: "/services/finance-accounting-finops/accounting-service/Startup-Accounting-service" },
        { text: "Cloud Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Cloud-Accounting-Services" },
        { text: "Cleanup And Historic Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Accounting-Cleanup-Services" },
        { text: "Model Risk Management Services", href: "/services/finance-accounting-finops/accounting-service/ModelRiskManagementServices" },
        { text: "Auditing Services", href: "/services/finance-accounting-finops/accounting-service/Audit-Support-Services" },
        { text: "CFO Services", href: "/services/finance-accounting-finops/accounting-service/CFO-Services" },
        { text: "Fiduciary Services", href: "/services/finance-accounting-finops/accounting-service/Fiduciary-Services" },
        { text: "Finance Transformation Services", href: "/services/finance-accounting-finops/accounting-service/Finance-Transformation-Services" },
        { text: "Record to Report Services", href: "/services/finance-accounting-finops/accounting-service/RecordToReport-Services" },
        { text: "Business Advisory Services", href: "/services/finance-accounting-finops/accounting-service/Business-Advisory-Services" },
        { text: "Forensic Audit Services", href: "/services/finance-accounting-finops/accounting-service/Forensic-Audit-Services" },
        { text: "Order Management Services", href: "/services/finance-accounting-finops/accounting-service/Order-Management-Services" },
        { text: "Accounting Services For Dental Practices", href: "/services/finance-accounting-finops/accounting-service/Dental-Accounting-Services" },
        { text: "Write-up Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Writeup-Services" },
        { text: "SMSF Accounting Services", href: "/services/finance-accounting-finops/accounting-service/SMSF-Accounting-Services" },
        { text: "Retail Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Retail-Accounting-Services" },
        { text: "Financial Reporting", href: "/services/finance-accounting-finops/accounting-service/Financial-Reporting-Services" },
        { text: "Small Business Accounting Services", href: "/services/finance-accounting-finops/accounting-service/SmallBusiness-Accounting-Services" },
        { text: "Forensic Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Forensic-Accounting-Services" },
        { text: "Accounts Reconciliation Services", href: "/services/finance-accounting-finops/accounting-service/Accounts-Reconciliation-Services" },
        { text: "Financial Budgeting Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Budgeting-Services" },
        { text: "Automotive Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Automotive-Accounting-Services" },
        { text: "Bank & Credit Reconciliation Services", href: "/services/finance-accounting-finops/accounting-service/BankCredit-Reconciliation-service"},
        { text: "Cash Flow Forecasting Services", href: "/services/finance-accounting-finops/accounting-service/CashFlow-Forecasting-services"},
        { text: "Restaurant Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Restaurant-Accounting-services"},
        { text: "Cash Flow Management Services", href: "/services/finance-accounting-finops/accounting-service/CashFlow-Management-services"},
        { text: "Financial Controller Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Controller-services"},
        { text: "Electrical Contractors Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Electrical-Contractors-Accounting-services"},
        { text: "Financial Statement Preparation Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Statements-Services"},
        { text: "SPAC Transaction Services", href: "/services/finance-accounting-finops/accounting-service/Spac-Transaction-Services"},
        { text: "Financial Investigations Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Investigations-Services"},


        { text: "Preparing Financial Statements", href: "/financial/accounting/preparing-financial-statements.asp" },
        { text: "Customer Order Processing Services", href: "/financial/customer-order-processing.asp" },
        { text: "Manual Journal Entry Services", href: "/financial/accounting/manual-journal-entry-services.asp" },
        { text: "Invoice Processing Services", href: "/financial/accounting/invoice-processing-services.asp" },
        { text: "Virtual Accountant Services", href: "/financial/accounting/virtual-accountant-services.asp" },
        { text: "Spend Analysis Services", href: "/financial/financial-analysis/spend-analysis-services.asp" },
        { text: "Financial Analysis for Banking Industry", href: "/financial/financial-analysis/banking-financial-analysis-services.asp" },
        { text: "Invoice Factoring Services", href: "/financial/accounting/invoice-factoring-services.asp" },
        { text: "Virtual CFO Services", href: "/financial/accounting/virtual-cfo-services.asp" },
        { text: "QuickBooks Clean Up Services", href: "/financial/accounting-software/quickbooks-clean-up-services.asp" },
        { text: "Cost Accounting Services", href: "/financial/accounting/cost-accounting-services.asp" },
        { text: "Wealth Management Services", href: "/financial/accounting/wealth-management-services.asp" },
        { text: "General Accounting Services", href: "/financial/accounting/general-accounting-services.asp" },
        { text: "Fixed Asset Management Services", href: "/financial/financial-analysis/fixed-asset-management-services.asp" },
        { text: "Construction Accounting Services", href: "/financial/accounting/construction-accounting-services.asp" },
        { text: "Portfolio Investor Accounting Services", href: "/financial/accounting/portfolio-investor-accounting-services.asp" },
        { text: "Fixed Asset Accounting Services", href: "/financial/accounting/fixed-asset-accounting-services.asp" },
        { text: "Cleanup and Historic Accounting Services", href: "/financial/accounting/cleanup-and-historic-accounting-services.asp" },
        { text: "CFO Services", href: "/financial/accounting/cfo-services.asp" },
        { text: "Record to Report Services", href: "/financial/accounting/record-to-report-services.asp" },
        { text: "Order Management Services", href: "/financial/financial-analysis/order-management-services.asp" },
        { text: "SMSF Accounting Services", href: "/financial/accounting/smsf-accounting-services.asp" },
        { text: "Small Business Accounting Services", href: "/financial/accounting/small-business-accounting-services.asp" },
        { text: "Financial Budgeting Services", href: "/financial/accounting/financial-budgeting-services.asp" },
        { text: "Cash Flow Forecasting Services", href: "/financial/accounting/cash-flow-forecasting-services.asp" },
        { text: "Financial Controller Services", href: "/financial/accounting/financial-controller-services.asp" },
        { text: "SPAC Transaction Services", href: "/financial/accounting/spac-transaction-services.asp" },
        { text: "XBRL Filing Services", href: "/financial/accounting/xbrl-filing-services.asp" },
        { text: "Corporate Secretarial Services", href: "/financial/accounting/corporate-secretarial-services.asp" },
        { text: "Real Estate Financial Statement Reporting Services", href: "/financial/accounting/real-estate-financial-statement-reporting-services.asp" },
        { text: "Xero Accounting Services", href: "/financial/accounting-software/xero-accounting-services.asp" },
        { text: "General Ledger Accounting Services", href: "/financial/accounting/general-ledger-accounting-services.asp" },
        { text: "LIBOR Transition Services", href: "/financial/financial-analysis/libor-transition-services.asp" },
        { text: "Fixed Asset Reconciliation Services", href: "/financial/financial-analysis/fixed-asset-reconciliation-services.asp" },
        { text: "BAS Services", href: "/financial/accounting/bas-services.asp" },
        { text: "Transaction Support Services", href: "/financial/accounting/transaction-support-services.asp" },
        { text: "Accounting Automation Services", href: "/financial/accounting/accounting-automation-services.asp" },
        { text: "Financial Accounting Advisory Services", href: "/financial/accounting/financial-accounting-advisory-services.asp" },
        { text: "ESG Consulting Services", href: "/financial/esg-consulting-services.asp" },
        { text: "Management Advisory Services", href: "/financial/financial-analysis/management-advisory-services.asp" },
        { text: "Fixed Asset Auditing Services", href: "/financial/accounting/fixed-asset-auditing-services.asp" },
        { text: "Post Merger Integration Services", href: "/financial/financial-analysis/post-merger-integration-services.asp" },
        { text: "Accounting Services for Startups", href: "/financial/accounting/accounting-services-startups.asp" },
        { text: "Model Risk Management Services", href: "/financial/financial-analysis/model-risk-management-services.asp" },
        { text: "Fiduciary Services", href: "/financial/accounting/fiduciary-services.asp" },
        { text: "Business Advisory Services", href: "/financial/accounting/business-advisory-services.asp" },
        { text: "Accounting Services for Dental Practices", href: "/financial/accounting/accounting-services-for-dental-practices.asp" },
        { text: "Retail Accounting Services for eCommerce", href: "/financial/accounting/retail-accounting-services.asp" },
        { text: "Forensic Accounting Services", href: "/financial/accounting/forensic-accounting-services.asp" },
        { text: "Automotive Accounting Services", href: "/financial/accounting/automotive-accounting-services.asp" },
        { text: "Restaurant Accounting Services", href: "/financial/accounting/restaurant-accounting-services.asp" },
        { text: "Electrical Contractors Accounting Services", href: "/financial/accounting/electrical-contractors-accounting-services.asp" },
        { text: "Financial Investigations Services", href: "/financial/accounting/financial-investigations-services.asp" },
        { text: "Business Recovery Services", href: "/financial/accounting/business-recovery-services.asp" },
        { text: "Transaction Advisory Services", href: "/financial/accounting/transaction-advisory-services.asp" },
        { text: "Trucking Accounting Services", href: "/financial/accounting/trucking-accounting-services.asp" },
        { text: "Global Accounting Services", href: "/financial/accounting/global-accounting-services.asp" },
        { text: "Excel Accounting Services", href: "/financial/accounting/excel-accounting-services.asp" },
        { text: "Year-end Accounting Services", href: "/financial/accounting/year-end-accounting-services.asp" },
        { text: "Cloud Financial Management Services", href: "/financial/accounting/cloud-financial-management-services.asp" },
        { text: "Fractional CFO Services", href: "/financial/accounting/fractional-cfo-services.asp" },
      ],
    },
  },

  {
    title: "Accounts Payable",
    href: "/financial/accounts-payable-service/",
  },
  {
    title: "Accounts Receivable",
    dropdown: {
      subheading: "Accounts Receivable",
      subheadingHref: "/financial/accounts-receivable-service/",
      links: [
        { text: "Real Estate Accounts Receivable", href: "/financial/accounts-receivable/real-estate-accounts-receivable.asp" },
        { text: "Accounts Receivable Factoring Services", href: "/financial/accounts-receivable/accounts-receivable-factoring-services.asp" },
        { text: "AR Aging Report Creation Services", href: "/financial/accounts-receivable/accounts-receivable-aging-report-creation.asp" },
      ],
    },
  },
  {
    title: "Tax Preparation",
    dropdown: {
      subheading: "Tax Preparation",
      subheadingHref: "/financial/Nimble-tax-preparation-services/",
      links: [
        { text: "Tax and Regulatory Services", href: "/financial/tax-preparation/tax-and-regulatory-services.asp" },
        { text: "ProSeries Tax Processing Services", href: "/financial/tax-preparation/proseries-tax-processing-services.asp" },
        { text: "H&R Block Tax Cut Processing Services", href: "/financial/tax-preparation/h-and-r-block-tax-cut-processing-services.asp" },
        { text: "Vat Return Services", href: "/financial/tax-preparation/vat-return-services.asp" },
        { text: "Tax Processing Services", href: "/financial/tax-processing-services.asp" },
      ],
    },
  },
  {
    title: "CPA services",
    dropdown: {
      subheading: "Tax Preparation",
      subheadingHref: "/financial/Nimble-tax-preparation-services/",
      links: [
        { text: "Tax and Regulatory Services", href: "/financial/tax-preparation/tax-and-regulatory-services.asp" },
        { text: "ProSeries Tax Processing Services", href: "/financial/tax-preparation/proseries-tax-processing-services.asp" },
        { text: "H&R Block Tax Cut Processing Services", href: "/financial/tax-preparation/h-and-r-block-tax-cut-processing-services.asp" },
        { text: "Vat Return Services", href: "/financial/tax-preparation/vat-return-services.asp" },
        { text: "Tax Processing Services", href: "/financial/tax-processing-services.asp" },
      ],
    },
  },
  {
    title: "Financial Analysis",
    dropdown: {
      subheading: "Tax Preparation",
      subheadingHref: "/financial/Nimble-tax-preparation-services/",
      links: [
        { text: "Tax and Regulatory Services", href: "/financial/tax-preparation/tax-and-regulatory-services.asp" },
        { text: "ProSeries Tax Processing Services", href: "/financial/tax-preparation/proseries-tax-processing-services.asp" },
        { text: "H&R Block Tax Cut Processing Services", href: "/financial/tax-preparation/h-and-r-block-tax-cut-processing-services.asp" },
        { text: "Vat Return Services", href: "/financial/tax-preparation/vat-return-services.asp" },
        { text: "Tax Processing Services", href: "/financial/tax-processing-services.asp" },
      ],
    },
  },
  {
    title: "Payroll Services",
    dropdown: {
      subheading: "Tax Preparation",
      subheadingHref: "/financial/Nimble-tax-preparation-services/",
      links: [
        { text: "Tax and Regulatory hello", href: "/financial/tax-preparation/tax-and-regulatory-services.asp" },
        { text: "ProSeries Tax Processing Services", href: "/financial/tax-preparation/proseries-tax-processing-services.asp" },
        { text: "H&R Block Tax Cut Processing Services", href: "/financial/tax-preparation/h-and-r-block-tax-cut-processing-services.asp" },
        { text: "Vat Return Services", href: "/financial/tax-preparation/vat-return-services.asp" },
        { text: "Tax Processing Services", href: "/financial/tax-processing-services.asp" },
      ],
    },
  },
];

const FinanceAccountingFinOps = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      {/* Header and Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-20 px-4 md:px-6 py-4">
        <div className="flex justify-between md:justify-start items-center max-w-7xl mx-auto">
          {/* Mobile hamburger menu */}
          <div className="relative md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                {megaMenuData.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || "#"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation with Mega Menu */}
          <ul className="hidden md:flex space-x-4">
            {megaMenuData.map((item, index) => {
              const isLast = index === megaMenuData.length - 1; // check if last item

              return (
                <li
                  key={index}
                  className="relative group px-2 py-1 cursor-pointer hover:text-[#006A7C] transition-colors duration-200"
                >
                  <a href={item.href} className="font-medium text-black">
                    {item.title}
                  </a>

                  {item.dropdown && (
                    <div
                      className={`absolute top-full mt-4 min-w-[22rem] max-w-[40rem] bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
            ${isLast ? "right-0" : "left-1/3 -translate-x-1/3"}`}
                    >
                      {/* Subheading */}
                      <div className="px-6 py-3 border-b border-gray-100">
                        <h4 className="font-bold text-[#006A7C] text-lg">
                          <a href={item.dropdown.subheadingHref}>
                            {item.dropdown.subheading}
                          </a>
                        </h4>
                      </div>

                      {/* Scrollable Links */}
                      <div className="max-h-[400px] overflow-y-auto p-6">
                        <ul className="grid grid-cols-2 gap-3">
                          {item.dropdown.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                href={link.href}
                                className="block text-sm text-gray-800 px-2 py-1 rounded-md hover:bg-[#006A7C] hover:text-white transition"
                              >
                                {link.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>


        </div>
      </nav>

      {/* Main Content Section */}
      <div className="pt-24 px-4 md:px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#006A7C] mb-8">
          Finance, Accounting & FinOps Solutions
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
          From daily transactions to high-level strategy, our services are designed to streamline your financial operations, ensure compliance, and drive business growth.
        </p>

        <div className="space-y-12">
          {/* Core Accounting & Bookkeeping */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">Core Accounting & Bookkeeping</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              These are the foundational services that keep your financial records accurate and up-to-date. We handle everything from Bookkeeping & General Ledger to Accounts Payable and Accounts Receivable processing. Our team also manages Payroll processing and ensures that all bank and cash reconciliations are completed accurately and on time, giving you a clear, real-time view of your company's financial health.
            </p>
          </section>

          {/* Tax & Compliance */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">Tax & Compliance</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Navigating tax regulations can be complex. Our tax services simplify this process by managing Payroll tax filings, Sales & use tax compliance, and Income tax preparation. We also provide expert Tax planning advisory to minimize your liabilities and offer specialized support for 1099/1096 compliance and Grants & fund accounting for nonprofits.
            </p>
          </section>

          {/* Financial Planning & Analysis (FP&A) */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">Financial Planning & Analysis (FP&A)</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Effective financial planning is key to strategic decision-making. Our FP&A services include providing a Fractional/Virtual CFO for executive-level guidance, developing robust Budgeting & forecasting models, and creating detailed Financial modeling for scenario analysis. We also deliver insightful Management reporting (MIS) and perform meticulous Cost accounting to help you understand and control your expenses.
            </p>
          </section>

          {/* Audit, Risk & Compliance */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">Audit, Risk & Compliance</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We help you maintain financial integrity and mitigate risk. Our team offers Audit preparation & support, conducts thorough Internal audit & SOX testing, and provides expert Credit risk assessment. We also ensure that your financial statements are transparent and accurate by assisting with complex accounting standards like Revenue recognition (ASC 606).
            </p>
          </section>

          {/* Financial Operations (FinOps) & Process Optimization */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">Financial Operations (FinOps) & Process Optimization</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Efficiency is paramount in modern finance. Our FinOps services focus on streamlining your workflows from end-to-end. We manage Vendor master data, handle all aspects of Customer billing & invoicing, and enforce Expense management & policy enforcement. By designing and optimizing your Procure-to-Pay (P2P) and Order-to-Cash (O2C) processes, we help improve cash flow and reduce operational costs.
            </p>
          </section>

          {/* Advanced & Strategic Services */}
          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-[#006A7C] mb-4">Advanced & Strategic Services</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For businesses ready to scale, we offer strategic support that leverages technology and new operational models. Our services include end-to-end ERP finance implementation for major platforms like NetSuite and SAP, and we can guide you through the Finance shared services (SSC) setup to centralize operations, improve consistency, and boost overall efficiency.
            </p>
          </section>
        </div>
      </div>

    </div>
  );
};

export default FinanceAccountingFinOps;