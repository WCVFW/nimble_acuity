import React, { useState } from "react";


const LegalCorporateCompliance = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "Legal research & memoranda",
      description:
        "We deliver in-depth legal research tailored to healthcare and medtech needs. Our team reviews statutes, case law, and regulations to prepare precise memoranda that support compliance, corporate decision-making, and risk management."
    },
    {
      title: "Contract drafting (NDAs/MSAs/SOWs)",
      description:
        "Our experts draft NDAs, MSAs, and SOWs that safeguard intellectual property, clarify responsibilities, and ensure compliance with industry regulations. Every contract is customized to foster secure and efficient business relationships."
    },
    {
      title: "Contract review & redlining",
      description:
        "We carefully review contracts to highlight risks, compliance issues, and negotiation opportunities. Our redlining process ensures fair terms, legal protection, and alignment with healthcare and medtech regulations."
    },
    {
      title: "Corporate governance & board minutes",
      description:
        "We draft board resolutions, meeting minutes, and compliance records to strengthen corporate governance. Our services ensure accountability, transparency, and audit-readiness for regulated industries."
    },
    {
      title: "Entity formation & registration",
      description:
        "We assist in setting up new healthcare or medtech ventures with proper entity structuring, filings, and registrations. This ensures compliance with state, federal, and international requirements from day one."
    },
    {
      title: "Registered agent coordination",
      description:
        "Our team coordinates with registered agents to handle service of process, compliance notices, and legal correspondence. This keeps your organization responsive to regulatory authorities and avoids penalties."
    },
    {
      title: "Annual report / Statement of Information filings",
      description:
        "We manage accurate and timely filing of annual reports and information statements. This maintains your organization’s good standing and reflects any changes in corporate structure."
    },
    {
      title: "Compliance calendars & reminders",
      description:
        "We create compliance calendars to track licensing, filing, and regulatory deadlines. Automated reminders minimize missed obligations and strengthen continuous compliance."
    },
    {
      title: "Policy drafting (privacy, security, HR)",
      description:
        "We develop policies covering privacy, data security, and HR functions. For healthcare and medtech, this includes HIPAA, GDPR, and cybersecurity requirements that ensure regulatory alignment."
    },
    {
      title: "Employment docs (handbooks/offers) support",
      description:
        "We draft and review employee handbooks, offer letters, and HR documents that reflect compliance with healthcare regulations and labor laws while supporting organizational culture."
    },
    {
      title: "IP search & docketing support",
      description:
        "Our team conducts IP searches and manages docketing systems to safeguard innovations. This includes monitoring deadlines, filings, and competitor IP activity in healthcare and medtech."
    },
    {
      title: "Trademark filing assistance",
      description:
        "We help with trademark searches, filings, and renewals to protect brand identity. Our service ensures compliance with USPTO and international trademark authorities."
    },
    {
      title: "Litigation support & e-discovery processing",
      description:
        "We provide litigation assistance by organizing discovery materials, processing electronic data, and ensuring compliant handling of sensitive healthcare-related information."
    },
    {
      title: "Document review & coding",
      description:
        "Our team performs systematic document review and coding for compliance and legal projects, improving accuracy and accessibility of records."
    },
    {
      title: "Subpoena/records response coordination",
      description:
        "We manage subpoena requests by coordinating with legal teams, providers, and IT systems to ensure compliant and timely submission of records."
    },
    {
      title: "HIPAA/PCI/GDPR/CCPA compliance programs",
      description:
        "We design compliance frameworks that meet HIPAA, PCI, GDPR, and CCPA standards. Our programs include policies, employee training, and monitoring protocols."
    },
    {
      title: "Risk & compliance training content",
      description:
        "We develop tailored training content on compliance, ethics, and risk management. This helps employees understand obligations under healthcare regulations."
    },
    {
      title: "Regulatory license tracking",
      description:
        "We track and monitor regulatory licenses across multiple jurisdictions to ensure renewals are completed on time, reducing compliance risks."
    },
    {
      title: "Contract lifecycle management (CLM) admin",
      description:
        "We manage CLM platforms for contract storage, tracking, and renewals. This enhances visibility and reduces risks in the contract lifecycle."
    },
    {
      title: "Vendor due-diligence questionnaires",
      description:
        "We prepare and evaluate vendor due-diligence questionnaires, assessing compliance, security, and operational risks to support safe partnerships."
    },
    {
      title: "Data processing agreements management",
      description:
        "We draft and review data processing agreements (DPAs) in compliance with GDPR, HIPAA, and other data-sharing regulations, ensuring secure handling of sensitive data."
    },
    {
      title: "Immigration petition document assembly",
      description:
        "We support immigration petition preparation by assembling documentation for healthcare professionals, researchers, and medtech employees."
    },
    {
      title: "Lease abstraction & review support",
      description:
        "We summarize and review lease agreements, identifying obligations, renewals, and risks to help healthcare and medtech companies manage real estate effectively."
    },
    {
      title: "Corporate secretarial services",
      description:
        "We maintain statutory registers, prepare compliance filings, and manage corporate records to ensure proper governance and regulatory compliance."
    },
    {
      title: "Cap table & ESOP admin support",
      description:
        "We manage capitalization tables and employee stock option plans, ensuring accuracy for fundraising, investor relations, and compliance."
    },
    {
      title: "Notary scheduling coordination",
      description:
        "We coordinate notary services for contracts, affidavits, and compliance documents, ensuring timely and valid execution."
    },
    {
      title: "Ethics & hotline intake triage",
      description:
        "We manage ethics hotline reports and triage cases promptly while maintaining confidentiality and compliance with regulatory obligations."
    },
    {
      title: "Legal billing & matter management",
      description:
        "We support legal billing and matter management platforms to ensure cost transparency and effective allocation of legal resources."
    },
    {
      title: "Government filings & permits assistance",
      description:
        "We prepare and submit government filings and permits necessary for healthcare and medtech operations, ensuring accuracy and timeliness."
    },
    {
      title: "Whistleblower & investigation support",
      description:
        "We help organizations handle whistleblower reports and internal investigations lawfully and transparently, minimizing regulatory and reputational risks."
    }
  ];


  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      {/* Intro Section */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Legal, Corporate & Compliance
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our legal and compliance services are designed for healthcare and
          medtech organizations. From contract drafting to regulatory oversight,
          we provide reliable, end-to-end support that ensures compliance while
          enabling growth.
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

export default LegalCorporateCompliance;
