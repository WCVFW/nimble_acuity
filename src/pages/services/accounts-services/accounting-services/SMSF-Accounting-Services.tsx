import React from "react";
<<<<<<< HEAD

const SMSFAccountingServices = () => {
  return (
    <div className="bg-white text-[#006A7C] p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">
        SMSF Accounting Services
      </h1>

      {/* Intro */}
      <p className="mb-4 text-gray-700">
        Focus on your core areas and stay competitive by choosing our high-quality
        SMSF accounting services.
      </p>
      <p className="mb-6 text-gray-700">
        Are you looking for a way to reduce costs and increase productivity in your
        Self-Managed Super Fund (SMSF) accounting and taxation? Is administering your
        SMSF becoming too complex to handle in-house? Partnering with an experienced
        and reliable third-party provider of SMSF accounting services can ease your
        workload.
      </p>
      <p className="mb-6 text-gray-700">
        Nimble Acuity has a team of SMSF accountants with extensive experience in
        delivering comprehensive SMSF services. We use advanced accounting systems
        and software to prepare detailed reports that meet APRA reporting standards.
        Our strong work review process and streamlined procedures ensure we consistently
        deliver high-quality services with quick turnaround times.
      </p>

      {/* Services */}
      <h2 className="text-2xl font-semibold mb-4">Our SMSF Accounting Services</h2>
      <p className="mb-4 text-gray-700">
        Nimble Acuity is a leading SMSF accounting service provider that can assist
        you with a wide range of SMSF accounting solutions, including:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Fund Administration:</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Processing member admission, retirement, and roll-over components.</li>
            <li>Maintaining pension records and preparing pension schedules.</li>
            <li>Posting and processing SMSF transactions.</li>
            <li>Rolling over existing SMSF balances into new books.</li>
            <li>Preparing annual SMSF financial statements, including operating statements and statements of financial position.</li>
          </ul>
        </li>

        <li>
          <strong>Taxation and Compliance:</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Preparing annual SMSF tax returns based on member details and financial statements.</li>
            <li>Lodging annual SMSF tax returns online after obtaining auditor approval.</li>
            <li>Managing correspondence with the Australian Tax Office.</li>
            <li>Generating relevant reports, such as investment summaries and income reports.</li>
            <li>Preparing member benefit statements that include taxable and non-taxable components.</li>
            <li>Facilitating the creation of actuarial certificates when required.</li>
          </ul>
        </li>

        <li>
          <strong>SMSF Audit Support:</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Organizing and managing SMSF documents for future reference.</li>
            <li>Providing expert advice on SMSF compliance status.</li>
            <li>Alerting trustees on fund status changes.</li>
            <li>Ensuring SIS audit compliance and preparing audit work papers.</li>
            <li>Informing auditors about any missing compliance-related items.</li>
          </ul>
        </li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Nimble Acuity for SMSF Accounting?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li><strong>Affordable Pricing:</strong> Our SMSF accounting solutions are extremely cost-effective, providing you with a high return on investment.</li>
        <li><strong>Data Security:</strong> We take the security of your SMSF data seriously, with stringent processes in place to ensure your information is always safe.</li>
        <li><strong>High-Quality Services:</strong> As an ISO-certified provider, we use multi-level quality checks to consistently deliver the highest quality services.</li>
        <li><strong>Superb Infrastructure:</strong> We equip our professionals with modern offices and powerful computers, enabling them to provide highly robust services.</li>
        <li><strong>Advanced Tools and Technologies:</strong> Our team uses the latest and best accounting software to provide cutting-edge SMSF accounting services.</li>
        <li><strong>Structured Process:</strong> We follow a streamlined and disciplined process for all our service deliveries.</li>
        <li><strong>Experienced Team:</strong> Our team is backed by extensive experience in providing a wide range of finance and accounting services to a global clientele.</li>
        <li><strong>Short Turnaround:</strong> We always deliver our services on time, understanding how critical time can be for your business.</li>
      </ul>
=======
import AccountsHeader from "@/pages/services/accounts-services/accounting-services/AccountsHeader";

const SMSFAccountingServices = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 min-h-screen">
      <AccountsHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              SMSF Accounting Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your Self-Managed Super Fund (SMSF) accounting, reduce costs, and ensure compliance with Nimble Acuity’s expert support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to ease the workload of administering your SMSF? Partnering with an experienced and reliable provider can help you focus on your core business and stay competitive. Nimble Acuity offers comprehensive SMSF accounting and taxation services to meet your needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of dedicated SMSF accountants uses advanced accounting systems and software to prepare detailed reports that meet APRA reporting standards. With a strong work review process and streamlined procedures, we consistently deliver high-quality services with quick turnaround times, ensuring you get accurate, timely financials.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our SMSF Accounting Solutions
            </h3>
            <p className="text-gray-700 mb-6">
              We offer an end-to-end range of services to simplify your SMSF accounting, taxation, and compliance.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">
                  Fund Administration
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Process member admission, retirement, and roll-overs.</li>
                  <li>Maintain pension records and prepare pension schedules.</li>
                  <li>Post and process all SMSF transactions.</li>
                  <li>Prepare annual financial statements, including operating statements and statements of financial position.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">
                  Taxation and Compliance
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Prepare and lodge annual SMSF tax returns.</li>
                  <li>Manage correspondence with the Australian Tax Office (ATO).</li>
                  <li>Generate relevant reports, such as investment summaries and income reports.</li>
                  <li>Facilitate the creation of required actuarial certificates.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#006A7C] mb-2">
                  SMSF Audit Support
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Organize and manage SMSF documents for future reference.</li>
                  <li>Provide expert advice on SMSF compliance status.</li>
                  <li>Ensure SIS audit compliance and prepare audit work papers.</li>
                  <li>Inform auditors about any missing compliance-related items.</li>
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
              <li><strong>Cost-Effective:</strong> Our affordable pricing provides a high return on your investment.</li>
              <li><strong>Data Security:</strong> We use stringent processes to ensure your SMSF data is always safe and secure.</li>
              <li><strong>Premium Quality:</strong> As an ISO-certified provider, we use multi-level quality checks to deliver consistent, high-quality services.</li>
              <li><strong>Advanced Tools & Technology:</strong> Our team is equipped with the latest accounting software and powerful infrastructure for reliable service.</li>
              <li><strong>Experienced Team:</strong> Our professionals have extensive experience in providing finance and accounting services to a global clientele.</li>
              <li><strong>Structured Process:</strong> We follow a streamlined and disciplined process to ensure every delivery is on time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify Your SMSF Accounting Today
            </h3>
            <p className="text-gray-700 mb-6">
              With Nimble Acuity, you can rest assured that your SMSF accounting is in expert hands, allowing you to focus on your financial goals.
            </p>
            <p className="text-gray-700 mb-8">
              <span className="font-medium">Partner with us for peace of mind and precision in your SMSF finances.</span> Contact us today to learn more about our services.
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

<<<<<<< HEAD
export default SMSFAccountingServices;
=======
export default SMSFAccountingServices;
>>>>>>> shenbagavel
