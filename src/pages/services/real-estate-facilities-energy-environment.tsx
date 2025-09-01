import React, { useState } from "react";

const RealEstateFacilitiesEnergy = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "Brokerage Support & Comps Research",
      description:
        "Assist with property market analysis, comparable sales research, and transaction documentation to support brokerage activities."
    },
    {
      title: "Lease Abstraction & Administration",
      description:
        "Extract key terms, obligations, and financial data from leases and maintain ongoing administration for compliance and renewals."
    },
    {
      title: "Site Selection & Market Studies",
      description:
        "Evaluate potential sites with demographic, economic, and competitor analysis to guide strategic real estate decisions."
    },
    {
      title: "Zoning & Permit Research",
      description:
        "Investigate zoning regulations, building codes, and permitting requirements to ensure compliance for new developments."
    },
    {
      title: "Space Planning & CAD Drafting",
      description:
        "Provide CAD-based layouts and space utilization planning to optimize workplace efficiency and functionality."
    },
    {
      title: "Fit-Out / Project Management",
      description:
        "Oversee construction, renovation, and office fit-out projects, ensuring timelines, budgets, and quality standards are met."
    },
    {
      title: "Facilities Maintenance (Hard/Soft)",
      description:
        "Manage both technical (HVAC, electrical, plumbing) and soft (cleaning, reception) facility services for smooth operations."
    },
    {
      title: "Janitorial & Hygiene Services",
      description:
        "Deliver routine cleaning, disinfection, and hygiene services to maintain safe, healthy, and welcoming environments."
    },
    {
      title: "Security Guarding & Patrol",
      description:
        "Provide on-site security personnel, access control, and patrol services to ensure safety and asset protection."
    },
    {
      title: "CCTV/Access Control Monitoring",
      description:
        "Implement and monitor CCTV systems and access control platforms to safeguard facilities against unauthorized entry."
    },
    {
      title: "HVAC Maintenance & Commissioning",
      description:
        "Service and commission HVAC systems to optimize performance, extend equipment life, and ensure occupant comfort."
    },
    {
      title: "Building Automation Admin (BAS)",
      description:
        "Administer and optimize Building Automation Systems (BAS) for energy efficiency, security, and facility performance."
    },
    {
      title: "Energy Audits & Benchmarking",
      description:
        "Conduct audits to measure energy use, identify inefficiencies, and benchmark performance against industry standards."
    },
    {
      title: "Solar PV O&M",
      description:
        "Manage operations and maintenance of solar photovoltaic systems, ensuring maximum energy yield and ROI."
    },
    {
      title: "EV Charging Station Operations",
      description:
        "Oversee the installation, operation, and maintenance of EV charging infrastructure to support sustainable mobility."
    },
    {
      title: "Utility Data Management & ENERGY STAR",
      description:
        "Track and analyze utility usage, benchmark with ENERGY STAR tools, and implement reduction strategies."
    },
    {
      title: "Waste Management & Recycling",
      description:
        "Design waste segregation, recycling, and disposal programs to meet compliance and sustainability goals."
    },
    {
      title: "Landscape & Groundskeeping",
      description:
        "Maintain outdoor spaces with landscaping, irrigation, and seasonal groundskeeping for aesthetic appeal."
    },
    {
      title: "Snow/Ice Removal (Where Relevant)",
      description:
        "Provide timely snow plowing, salting, and ice removal services to ensure safe and accessible facilities."
    },
    {
      title: "Fire/Life-Safety Inspections",
      description:
        "Perform routine inspections of fire alarms, sprinklers, extinguishers, and emergency systems for compliance."
    },
    {
      title: "Environmental Consulting & CEQA Support",
      description:
        "Support environmental impact assessments, CEQA reporting, and compliance with environmental regulations."
    },
    {
      title: "Air/Water Quality Testing",
      description:
        "Conduct regular testing of indoor air and water quality to ensure occupant health and regulatory compliance."
    },
    {
      title: "HazMat Handling Coordination",
      description:
        "Coordinate hazardous materials handling, disposal, and compliance with OSHA and EPA standards."
    },
    {
      title: "ESG Strategy & Reporting",
      description:
        "Develop ESG frameworks, collect sustainability data, and prepare CSR/ESG reports for stakeholders."
    },
    {
      title: "Real-Estate Valuation Support",
      description:
        "Assist with appraisal processes, financial modeling, and due diligence to support accurate property valuations."
    },
    {
      title: "Title & Escrow Coordination",
      description:
        "Coordinate title searches, insurance, and escrow services to facilitate smooth real estate transactions."
    },
    {
      title: "Property Management & HOA Support",
      description:
        "Provide property administration, tenant relations, and HOA governance support for residential and commercial assets."
    },
    {
      title: "Tenant Communications & Portals",
      description:
        "Implement digital tenant portals for rent collection, service requests, and communication management."
    },
    {
      title: "Move-In/Out Coordination",
      description:
        "Manage logistics for tenant onboarding and move-outs, ensuring smooth transitions with minimal disruption."
    },
    {
      title: "Disaster Restoration Services",
      description:
        "Coordinate rapid-response services for fire, flood, and storm damage, restoring properties to operational condition."
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
          Real Estate, Facilities, Energy & Environment
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our Real Estate, Facilities, Energy & Environment services ensure
          organizations operate efficiently, sustainably, and in compliance with
          regulations. From brokerage and lease administration to facility
          management, energy efficiency, and ESG reporting, we provide
          comprehensive support across the real estate and environmental
          lifecycle.
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
              className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {item.description}
            </p>

            {/* Arrow */}
            <span
              className={`absolute bottom-4 right-4 text-gray-400 text-xl transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
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

export default RealEstateFacilitiesEnergy;
