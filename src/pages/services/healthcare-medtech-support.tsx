import React, { useState } from "react";

const HealthcareMedTechSupport = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "Medical Billing & Claims Submission",
      description:
        "Prepare and submit accurate medical claims to insurance providers, ensuring timely reimbursement for healthcare services.",
    },
    {
      title: "CPT/ICD-10 Coding",
      description:
        "Assign appropriate procedural (CPT) and diagnosis (ICD-10) codes to patient encounters for billing and regulatory compliance.",
    },
    {
      title: "Charge Capture Audits",
      description:
        "Review and audit captured charges to ensure accuracy, completeness, and maximized revenue capture for healthcare providers.",
    },
    {
      title: "Denial Management & Appeals",
      description:
        "Analyze denied claims, identify root causes, and manage appeals to secure appropriate reimbursement.",
    },
    {
      title: "Eligibility & Benefits Verification",
      description:
        "Confirm patient insurance coverage, benefits, and co-pay requirements before services are rendered to reduce claim denials.",
    },
    {
      title: "Prior Authorization Coordination",
      description:
        "Obtain necessary approvals from insurance providers before specific procedures or treatments to ensure coverage.",
    },
    {
      title: "Payment Posting & Reconciliation",
      description:
        "Record payments received from insurers and patients, reconcile accounts, and ensure accurate financial reporting.",
    },
    {
      title: "Provider Credentialing & Enrollment",
      description:
        "Assist healthcare providers with credentialing and enrollment processes for insurance panels and networks.",
    },
    {
      title: "Scheduling & RCM Coordination",
      description:
        "Coordinate patient appointments and manage Revenue Cycle Management (RCM) workflows to optimize operational efficiency.",
    },
    {
      title: "Medical Transcription & Scribing",
      description:
        "Convert physician notes and patient encounters into accurate electronic records, supporting clinical documentation.",
    },
    {
      title: "Clinical Documentation Improvement (CDI) Support",
      description:
        "Assist in enhancing clinical documentation quality to ensure accurate coding, compliance, and reimbursement.",
    },
    {
      title: "Telehealth Support Desk",
      description:
        "Provide technical and operational support for telehealth platforms, ensuring smooth virtual patient encounters.",
    },
    {
      title: "Patient Intake & Call Center",
      description:
        "Manage patient registration, scheduling, and inbound inquiries, enhancing patient experience and workflow efficiency.",
    },
    {
      title: "Medical Records Release (ROI)",
      description:
        "Handle requests for patient medical record releases in compliance with HIPAA and organizational policies.",
    },
    {
      title: "HIPAA Training & Audits",
      description:
        "Conduct training sessions and audits to ensure staff compliance with HIPAA privacy and security regulations.",
    },
    {
      title: "DME Billing Support",
      description:
        "Manage billing for durable medical equipment (DME), including claim submission and reimbursement tracking.",
    },
    {
      title: "Dental Billing Support",
      description:
        "Provide billing and coding support for dental practices, ensuring accurate claims and timely payments.",
    },
    {
      title: "Behavioral Health Billing Support",
      description:
        "Assist behavioral health providers with specialized billing, coding, and claims management requirements.",
    },
    {
      title: "Revenue Integrity Audits",
      description:
        "Conduct audits to ensure that charges, coding, and billing processes align with regulations and maximize revenue capture.",
    },
    {
      title: "MIPS/MACRA Quality Reporting Support",
      description:
        "Assist providers in reporting quality measures and compliance under MIPS/MACRA programs for performance-based reimbursement.",
    },
    {
      title: "Healthcare Analytics & Dashboards",
      description:
        "Design and maintain analytical dashboards to provide actionable insights into clinical, operational, and financial performance.",
    },
    {
      title: "Population Health Data Management",
      description:
        "Collect and analyze population health data to identify trends, improve care outcomes, and support strategic planning.",
    },
    {
      title: "HIE Integration Support",
      description:
        "Assist with Health Information Exchange (HIE) integration to ensure seamless sharing of patient information across systems.",
    },
    {
      title: "EHR Implementation/Admin (Epic/Cerner/etc.)",
      description:
        "Support implementation, configuration, and administration of electronic health record (EHR) systems for healthcare organizations.",
    },
    {
      title: "HL7/LIS Interfacing Support",
      description:
        "Provide technical support for Health Level 7 (HL7) and Laboratory Information System (LIS) integrations, ensuring data interoperability.",
    },
    {
      title: "Clinical Trial Data Coordination",
      description:
        "Manage collection, verification, and reporting of clinical trial data, ensuring accuracy and regulatory compliance.",
    },
    {
      title: "Device Complaint Handling & Vigilance",
      description:
        "Track and manage medical device complaints, reporting adverse events, and ensuring regulatory compliance with vigilance requirements.",
    },
    {
      title: "Healthcare Marketing Compliance Review",
      description:
        "Review marketing materials and campaigns for healthcare organizations to ensure compliance with industry regulations.",
    },
    {
      title: "Coding Education & Provider Training",
      description:
        "Conduct training sessions for healthcare providers and staff to enhance coding accuracy and billing efficiency.",
    },
    {
      title: "Physician Liaison & Referral Management",
      description:
        "Coordinate physician relationships, referrals, and communications to optimize patient care and operational workflows.",
    },
  ];

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      {/* Intro Section */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Healthcare & MedTech Support Services
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our Healthcare & MedTech support services are designed to streamline clinical, administrative, and revenue cycle operations.
          From medical billing and coding to telehealth support and clinical trial coordination, we provide end-to-end solutions
          that ensure compliance, optimize workflows, and enhance patient care.
          Explore each service below to see how we can support your healthcare organization.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {subtopics.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            className="relative cursor-pointer p-6 rounded-xl shadow-md bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {item.title}
            </h2>

            {/* Content */}
            <p
              className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${activeIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              {item.description}
            </p>

            {/* Arrow */}
            <span
              className={`absolute bottom-4 right-4 text-gray-400 text-xl transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
            >
              ▼
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareMedTechSupport;