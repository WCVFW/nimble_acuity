import React from "react";

const AccountingAutomation = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          Accounting Automation Services
        </h2>
        <p className="text-lg text-gray-600">
          Are you a growing business facing challenges in scaling up, managing
          daily processes, or automating your accounting system? With Nimble
          Acuity’s automation expertise, you can streamline reporting,
          forecasting, budgeting, and operations — saving costs while improving
          accuracy and efficiency.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          Nimble Acuity is a trusted provider of{" "}
          <span className="font-semibold text-[#006A7C]">
            accounting automation services
          </span>
          . We help you select and implement the right tools tailored to your
          company’s unique needs. With deep expertise in{" "}
          <span className="font-medium">Robotic Process Automation (RPA)</span>{" "}
          and financial technology, we deliver automation solutions that have
          been tested and proven across industries. Whether you need partial or
          full automation, we’ll help you improve workflows and achieve reliable
          results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        {[
          {
            title: "Procure-to-Pay Automation",
            desc: "Digitize contract management, automate approvals, eliminate paperwork, and track orders in real-time. Gain visibility into invoices, receipts, and spending insights.",
          },
          {
            title: "Order-to-Cash Automation",
            desc: "Speed up cash flow and revenue cycles with automated alerts, reduced delays, improved accuracy, and faster customer communication.",
          },
          {
            title: "Financial Analysis Automation",
            desc: "Streamline reporting, reduce budget cycle times, and automate data collection for faster, more accurate decision-making.",
          },
          {
            title: "Payroll Automation",
            desc: "Automate payroll calculations, tax deductions, timekeeping, and reporting. Eliminate errors and ensure timely payments with ease.",
          },
          {
            title: "Automated Reporting",
            desc: "Improve visibility and compliance with automated report generation, reconciliations, and KPI monitoring — reducing tax liability.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-[#006A7C] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">
          Why Choose Nimble Acuity for Automation?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Proven Expertise",
              desc: "Years of hands-on experience in finance automation and RPA implementation across industries.",
            },
            {
              title: "Tailored Solutions",
              desc: "Every automation plan is customized to meet your unique business needs and goals.",
            },
            {
              title: "Scalable Systems",
              desc: "We design solutions that adapt to your business growth and changing financial operations.",
            },
            {
              title: "Cost Savings",
              desc: "By reducing manual tasks, you cut overhead costs and free up resources for strategic priorities.",
            },
            {
              title: "Accuracy & Compliance",
              desc: "Automation minimizes errors, improves compliance, and enhances reporting reliability.",
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">
                {reason.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountingAutomation;
