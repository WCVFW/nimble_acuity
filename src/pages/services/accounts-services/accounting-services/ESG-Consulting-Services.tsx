import React from "react";
<<<<<<< HEAD

const ESGConsultingServices = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
          ESG Consulting Services
        </h2>
        <p className="text-lg text-gray-600">
          Create and improve your Environmental, Social, and Governance (ESG) investment strategies with Nimble Acuity.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-gray-700 leading-relaxed mb-6">
          ESG factors are increasingly important for businesses seeking to enhance sustainability, profitability, and stakeholder trust. Leveraging ESG effectively requires structured analysis, implementation, and reporting.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium">Nimble Acuity</span> provides comprehensive ESG consulting services to help companies improve disclosure quality, assess sustainability performance, bridge operational gaps, and build resilience for long-term business continuity.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8 text-center">
          ESG Consulting Services We Offer
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Data Aggregation and Analysis",
              desc: "Compile, normalize, and analyze ESG data across bonds, equities, and over 1,000 indicators. Perform ESG controversy research and extract actionable insights for stakeholders.",
            },
            {
              title: "ESG Consulting for Corporates",
              desc: "Conduct gap analysis and as-is assessments to provide sustainable competitive advantage. Evaluate sector-specific ESG indicators, disclosure processes, and governance structures.",
            },
            {
              title: "ESG Consulting for Capital Markets",
              desc: "Provide as-is assessments and portfolio evaluations across ESG parameters. Help capital market participants ensure stability and resilience during volatile periods.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Services */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">
          Other Services You May Benefit From
        </h3>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700">
          {[
            "Financial Analysis Services",
            "Accounting Services",
            "Bookkeeping Services",
            "Payroll Processing Services",
          ].map((service, index) => (
            <li key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-[#006A7C] hover:text-white transition text-sm font-medium">
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#006A7C] mb-8">Why Choose Nimble Acuity for ESG Consulting?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Affordable ESG Consulting",
              desc: "Access expert ESG consulting services at a fraction of the cost of other firms.",
            },
            
            {
              title: "Quick Turnaround",
              desc: "Projects delivered on time with efficient workflows.",
            },
            {
              title: "World-Class Infrastructure",
              desc: "Our ESG consultants use modern offices, tools, and technologies to deliver superior services.",
            },
            {
              title: "Customized Solutions",
              desc: "Tailored ESG services aligned with your sustainability goals, efficiency improvements, and cost optimization.",
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold text-[#006A7C] mb-2">{reason.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESGConsultingServices;
=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const ESGConsultingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ESG Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Create and improve your Environmental, Social, and Governance (ESG) investment strategies with Nimble Acuity.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ESG factors are increasingly important for businesses seeking to enhance sustainability, profitability, and stakeholder trust. Leveraging ESG effectively requires structured analysis, implementation, and reporting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** provides comprehensive ESG consulting services to help companies improve disclosure quality, assess sustainability performance, bridge operational gaps, and build resilience for long-term business continuity.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ESG Consulting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Aggregation and Analysis:</strong> Compile, normalize, and analyze ESG data across bonds, equities, and over 1,000 indicators. Perform ESG controversy research and extract actionable insights for stakeholders.</li>
              <li><strong>ESG Consulting for Corporates:</strong> Conduct gap analysis and as-is assessments to provide sustainable competitive advantage. Evaluate sector-specific ESG indicators, disclosure processes, and governance structures.</li>
              <li><strong>ESG Consulting for Capital Markets:</strong> Provide as-is assessments and portfolio evaluations across ESG parameters. Help capital market participants ensure stability and resilience during volatile periods.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for ESG Consulting?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable ESG Consulting:</strong> Access expert ESG consulting services at a fraction of the cost of other firms.</li>
              <li><strong>Quick Turnaround:</strong> Projects delivered on time with efficient workflows.</li>
              <li><strong>World-Class Infrastructure:</strong> Our ESG consultants use modern offices, tools, and technologies to deliver superior services.</li>
              <li><strong>Customized Solutions:</strong> Tailored ESG services aligned with your sustainability goals, efficiency improvements, and cost optimization.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Embrace Sustainability and Drive Growth
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides the expert guidance you need to navigate the evolving ESG landscape. Our comprehensive services help you improve transparency, enhance performance, and build a resilient business for the future.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Ready to enhance your ESG strategy?</span>
              Contact us today to discuss your sustainability goals and how we can help you achieve them.
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

export default ESGConsultingServices;
>>>>>>> shenbagavel
