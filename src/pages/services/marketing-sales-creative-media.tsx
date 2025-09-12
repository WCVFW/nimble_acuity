import React from "react";
import Imainmenu from "./Insurance BPO services/Imainmenu";

const MarketingSalesCreativeMedia: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Services for MGAs
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Adapt to change, capitalize on new opportunities, and accelerate growth with our insurance back-office services. Reduce costs, improve accuracy, and focus on generating better revenues.
        </p>
        <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Get Started Today
        </button>
      </section>

      {/* MGA Solutions */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">MGA Insurance Solutions We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Issuing Policies",
              desc: "Accurate issuance and prompt servicing for multiple carriers with expert clerical and technical support for Binding Units.",
            },
            {
              title: "Servicing Policies",
              desc: "Ensure timely renewals and servicing, following issuance instructions from underwriters with high-quality standards.",
            },
            {
              title: "Effective BU Assistance",
              desc: "Dedicated support for branch/binding units to quickly resolve queries and provide expert guidance.",
            },
            {
              title: "Consistent Customer Service",
              desc: "Highly trained professionals provide consistent, high-quality customer service aligned with insurance standards.",
            },
            {
              title: "Timely Documentation Updates",
              desc: "Prompt updates of all policy documentation, identification of missing information, and consistent SLA adherence.",
            },
            {
              title: "Constant Policy Monitoring",
              desc: "Review and monitor all company-issued policies and provide clerical support to underwriting teams as needed.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Other Services We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Underwriting",
            "Claims Management",
            "Policy Issuance",
            "Marketing",
            "Loss Control",
            "Binding",
            "Premium Collection",
            "Data Processing / Data Entry",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg text-center font-medium transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose Our Insurance Services for MGAs?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Streamlined Processes",
              desc: "Smooth issuing and renewing of policies with fully optimized internal workflows.",
            },
            {
              title: "High-Quality Policy",
              desc: "ISO-standard processes ensure superior quality services for your MGA operations.",
            },
            {
              title: "Data Security",
              desc: "Mandatory data security policies and confidentiality agreements safeguard your insurance data.",
            },
            {
              title: "Easy Scalability",
              desc: "Multiple delivery centers and skilled resources to handle fluctuating volumes efficiently.",
            },
            {
              title: "Faster Turnaround Time",
              desc: "Quick, high-quality services through multiple global delivery centers.",
            },
            {
              title: "Round-the-Clock Service",
              desc: "Experienced specialists available 24/7 for consistent MGA support.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Avail 1 WEEK FREE TRIAL on any Service!
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          TRY before you BUY! Experience our insurance services for MGAs firsthand and witness quick, reliable, and high-quality solutions.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Start Your Free Trial
        </button>
      </section>
    </div>
  );
};

export default MarketingSalesCreativeMedia;
