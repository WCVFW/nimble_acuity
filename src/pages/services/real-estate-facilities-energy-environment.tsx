import React from "react";
import CCmainmenu from "./Call-center-services/CCmainmenu";

const RealEstateFacilitiesEnergy: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-green-100 py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Outsource Inbound Call Center Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Leverage the benefits of our inbound call center services. Experience seamless technical support, efficient product handling, enhanced customer engagement, and high customer satisfaction.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Get a FREE QUOTE!
        </button>
        <p className="mt-2 text-sm text-gray-600">
          Will outsourcing work for you? Know in 24 hours!
        </p>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Request a Quote</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Enter your requirements*"
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Enter Captcha"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition"
            >
              Submit
            </button>
            <p className="text-sm text-gray-500 mt-2 text-center">
              We respect your privacy. Our Policy.
            </p>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Customer-centric Inbound Call Center Services
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700 mb-6">
          Our inbound call center services don’t just answer calls; we use incoming calls as opportunities to increase customer satisfaction. All our clients have achieved up to 48.8% improvements in call resolutions through our Define, Measure, Analyze, Improve, and Control (DMAIC) approach, powered by statistics-based root cause elimination. Drawing from 23+ years of industry expertise and Lean Six Sigma practices, we use standardized workflows, Critical to Quality (CTQ)-based escalation routes, and real-time performance tracking to remove inefficiencies and improve customer experiences.
        </p>
        <p className="max-w-4xl mx-auto text-gray-700">
          Mapping the Voice of the Customer (VoC) to CTQ protocols enables us to reduce variability and facilitate quicker, more reliable inbound call service delivery, which increases First Call Resolution (FCR) rates and boosts your Customer Satisfaction Scores (CSAT). Features like intelligent routing and built-in workflow automation enable you to tackle fluctuating call volumes and assign the right agent to complicated support needs. Our Quality Assurance (QA) team continuously monitors the quality of inbound call assistance to ensure high service standards and schedules regular agent training programs.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-green-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Improve Business Performance with Our Advanced Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Customer Service Support", description: "Standardize call handling processes by eliminating Non-Value-Added (NVA) steps to reduce repeat calls, accelerate resolution times, and provide standardized experiences." },
            { title: "After-hours and Overflow Call Handling", description: "Switch to predictive volume modeling and value stream mapping to create load-balancing call routing strategies that adjust in real time to manage fluctuating call volumes." },
            { title: "Survey and Market Research", description: "Apply Customer Value Added (CVA), Business value Added (BVA), and NVA mapping techniques, powered by Vale Stream Mapping (VSM), in your campaigns to speed up data capture and reduce respondent fatigue." },
            { title: "Lead Qualification Services", description: "Create lead qualification metrics specific to your customer base and pre-qualify leads, minimizing misroutes and maximizing conversion rates." },
            { title: "24/7 Help Desk Support", description: "Implement tiered resolution frameworks that use DMAIC-based root cause analysis techniques to minimize Mean Time to Resolution (MTTR) and maximize agent performance." },
            { title: "Multi-language Support", description: "Engage multi-lingual staff and get custom call-handling templates to deliver uniform customer experiences across geographies." },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Customer Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Nimble Delivered Appointment Setting Services to a Mortgage Lender", description: "Leading UK Motorcycle Insurance Provider Streamlines Operations with Comprehensive Call Center Services. Nimble developed a customized solution that effectively managed the client's increasing volume of customer interactions and technical support needs." },
            { title: "Nimble Provided Appointment Setting Services for a US-based Mortgage Lender", description: "Successful Inbound Call Service Implementation for Prominent Indian Medical Coaching Center Leads to 100% Project Success." },
          ].map((story, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow">
              <h3 className="font-semibold text-xl mb-3">{story.title}</h3>
              <p className="text-gray-700">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 bg-green-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Customer Service Approach with Nimble
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          When you partner with Nimble, you are not merely adding capacity; you are elevating your capabilities. Try our inbound call center solutions now to experience the change.
        </p>
        <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default RealEstateFacilitiesEnergy;
