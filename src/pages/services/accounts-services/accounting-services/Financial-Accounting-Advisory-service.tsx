import React from "react";

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
