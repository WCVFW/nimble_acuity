import React from "react";
<<<<<<< HEAD

const FinancialAccountingAdvisory = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Financial Accounting Advisory Services
        </h2>
        <p className="text-lg text-gray-600">
          Robust and innovative solutions to help you navigate complex accounting and financial challenges effectively.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          Growing organizations face increasingly complex financial challenges. Legacy finance and accounting functions can hinder efficiency, productivity, and expansion into new markets. Outsourcing financial accounting advisory services helps streamline your finance operations, improve reporting accuracy, and reduce costs.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium">Nimble Acuity</span> is a trusted provider of financial accounting advisory services. Our team of versatile professionals implements creative solutions to enhance the efficiency of your financial systems while incorporating best practices to take your organization to the next level.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          Our Financial Accounting Advisory Solutions
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Business Process Outsourcing (BPO) Services",
              desc: "We manage your back-office finance and accounting processes, allowing your team to focus on high-value strategic tasks.",
            },
            {
              title: "Audit and Accounting Advisory Services",
              desc: "Industry-leading advisory for audits, statutory compliance, transaction support, and implementation guidance.",
            },
            {
              title: "Financial Reporting Services",
              desc: "Enhance efficiency in your accounting department through finance review, remediation, interim staffing, and integration support.",
            },
            {
              title: "Payroll Solutions",
              desc: "Expert payroll management that addresses all payroll requirements efficiently and accurately.",
            },
            {
              title: "Compliance Solutions",
              desc: "Ensure your finance function meets all regulatory requirements with accurate financial statements and filings.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
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
              title: "Affordable Pricing Options",
              desc: "Tailored solutions that fit your specific requirements without overspending.",
            },
            {
              title: "High-Quality Services",
              desc: "ISO-certified processes and industry best practices ensure top-quality advisory services.",
            },
            {
              title: "Superb Infrastructure",
              desc: "State-of-the-art facilities and tools support efficient and accurate service delivery.",
            },
            {
              title: "Latest Tools & Technologies",
              desc: "Proficiency with modern finance and accounting tools for customized solutions.",
            },
            {
              title: "Structured Process",
              desc: "Optimized workflows and procedures to enhance your finance function’s efficiency and productivity.",
            },
            {
              title: "Experienced Team",
              desc: "Seasoned professionals with expertise in designing and implementing best accounting practices.",
            },
            {
              title: "Data Security",
              desc: "Stringent data protection protocols ensure your sensitive financial information remains secure.",
            },
            {
              title: "Short Turnaround",
              desc: "Timely delivery of services, ensuring your financial operations stay on track.",
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">
                {reason.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialAccountingAdvisory;
=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const FinancialAccountingAdvisory = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Financial Accounting Advisory Services
            </h2>
            <p className="text-lg text-gray-600">
              Robust and innovative solutions to help you navigate complex accounting and financial challenges effectively.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Growing organizations face increasingly complex financial challenges. Legacy finance and accounting functions can hinder efficiency, productivity, and expansion into new markets. Outsourcing **financial accounting advisory services** helps streamline your finance operations, improve reporting accuracy, and reduce costs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a trusted provider of financial accounting advisory services. Our team of versatile professionals implements creative solutions to enhance the efficiency of your financial systems while incorporating best practices to take your organization to the next level.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Financial Accounting Advisory Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Business Process Outsourcing (BPO) Services:</strong> We manage your back-office finance and accounting processes, allowing your team to focus on high-value strategic tasks.</li>
              <li><strong>Audit and Accounting Advisory Services:</strong> Industry-leading advisory for audits, statutory compliance, transaction support, and implementation guidance.</li>
              <li><strong>Financial Reporting Services:</strong> Enhance efficiency in your accounting department through finance review, remediation, interim staffing, and integration support.</li>
              <li><strong>Payroll Solutions:</strong> Expert payroll management that addresses all payroll requirements efficiently and accurately.</li>
              <li><strong>Compliance Solutions:</strong> Ensure your finance function meets all regulatory requirements with accurate financial statements and filings.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Tailored solutions that fit your specific requirements without overspending.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified processes and industry best practices ensure top-quality advisory services.</li>
              <li><strong>Superb Infrastructure:</strong> State-of-the-art facilities and tools support efficient and accurate service delivery.</li>
              <li><strong>Latest Tools & Technologies:</strong> Proficiency with modern finance and accounting tools for customized solutions.</li>
              <li><strong>Structured Process:</strong> Optimized workflows and procedures to enhance your finance function’s efficiency and productivity.</li>
              <li><strong>Experienced Team:</strong> Seasoned professionals with expertise in designing and implementing best accounting practices.</li>
              <li><strong>Data Security:</strong> Stringent data protection protocols ensure your sensitive financial information remains secure.</li>
              <li><strong>Short Turnaround:</strong> Timely delivery of services, ensuring your financial operations stay on track.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Finances and Drive Growth
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expertise you need to navigate complex financial challenges. Our reliable and cost-effective advisory services help you streamline operations, improve accuracy, and position your organization for long-term success.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to optimize your financial operations?</span>
              Contact us today to discuss how our services can benefit your business.
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

export default FinancialAccountingAdvisory;
>>>>>>> shenbagavel
