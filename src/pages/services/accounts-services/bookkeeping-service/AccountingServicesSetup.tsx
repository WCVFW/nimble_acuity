import React from 'react';

const NimbleAcuityAccountingServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#006A7C] mb-6">
            Is your business in need of specialized accounting assistance?
          </h1>
          <p className="mb-4">
            Are you finding it difficult to hire and train the right team of professionals to manage your complex financial needs? 
            The most efficient solution is to partner with an experienced accounting services provider.
          </p>
          <p className="mb-4">
            Nimble Acuity is a leading accounting services provider that offers comprehensive solutions for businesses of all sizes. 
            Our team consists of highly skilled and experienced accountants who can handle all your requirements with precision and ease. 
            We leverage the latest tools and technologies to deliver exceptional service and help you achieve financial clarity.
          </p>
        </div>

        <hr className="border-[#006A7C] my-12" />

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#006A7C] mb-6">Our Accounting Services</h2>
          <p className="mb-6">
            Nimble Acuity provides a wide range of accounting services designed to meet the unique needs of your business. 
            We take the time to understand your specific challenges and goals, offering customized solutions that drive success. 
            Here are some of the key services we provide:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <span className="text-[#006A7C] font-semibold">Financial Accounting & Reporting</span>: 
              We handle your day-to-day financial accounting, ensuring accuracy and compliance.
            </li>
            <li>
              <span className="text-[#006A7C] font-semibold">Tax Planning & Compliance</span>: 
              Our experts help you navigate the complexities of tax laws.
            </li>
            <li>
              <span className="text-[#006A7C] font-semibold">Payroll Processing</span>: 
              We offer end-to-end payroll services, from calculating wages to managing tax withholdings.
            </li>
            <li>
              <span className="text-[#006A7C] font-semibold">Bookkeeping</span>: 
              We keep your financial records organized and up-to-date.
            </li>
            <li>
              <span className="text-[#006A7C] font-semibold">Business Advisory</span>: 
              Strategic guidance to help you make informed business decisions.
            </li>
          </ul>
        </section>

        <hr className="border-[#006A7C] my-12" />

        {/* Why Choose Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#006A7C] mb-6">Why Choose Nimble Acuity?</h2>
          <p className="mb-6">
            Partnering with Nimble Acuity offers numerous benefits that can help streamline your financial operations and give you a competitive edge.
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li><span className="text-[#006A7C] font-semibold">Cost-Effective Solutions</span>: Flexible pricing models tailored to your needs.</li>
            <li><span className="text-[#006A7C] font-semibold">Data Security</span>: Protecting your sensitive financial information with state-of-the-art security.</li>
            <li><span className="text-[#006A7C] font-semibold">Unmatched Expertise</span>: Experienced accountants with deep industry knowledge.</li>
            <li><span className="text-[#006A7C] font-semibold">Scalable Services</span>: Easily scale up or down based on your requirements.</li>
            <li><span className="text-[#006A7C] font-semibold">Dedicated Support</span>: A dedicated account manager as your single point of contact.</li>
            <li><span className="text-[#006A7C] font-semibold">Quick Turnaround</span>: Streamlined processes ensure timely delivery of services.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-[#006A7C] text-white p-10 rounded-xl shadow-lg">
          <p className="mb-4">
            Nimble Acuity is a leader in providing top-tier accounting and financial services. 
            Our mission is to help businesses like yours succeed by taking the complexity out of financial management.
          </p>
          <p className="mb-6">
            If you're looking for a trusted partner to handle your accounting needs, you've come to the right place.
          </p>
          <a
            href="#contact"
            className="bg-white text-[#006A7C] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Contact us today
          </a>
        </section>
      </div>
    </div>
  );
};

export default NimbleAcuityAccountingServices;
