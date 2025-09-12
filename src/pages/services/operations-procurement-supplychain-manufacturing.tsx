import React, { useState } from "react";

const OpsProcurementSupplyChain = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "Demand Planning & Forecasting",
      description:
        "Use historical data, market intelligence, and predictive analytics to forecast demand accurately, minimizing stockouts and excess inventory."
    },
    {
      title: "S&OP Facilitation",
      description:
        "Support Sales & Operations Planning (S&OP) by aligning demand, supply, and financial goals for cross-functional decision-making."
    },
    {
      title: "Strategic Sourcing & RFx",
      description:
        "Manage RFIs, RFPs, and RFQs to identify the best suppliers, negotiate competitive contracts, and drive cost savings."
    },
    {
      title: "Supplier Qualification & Audits",
      description:
        "Evaluate and audit suppliers for compliance, capacity, and quality to ensure reliable and ethical supply chain partners."
    },
    {
      title: "Purchase Order Management",
      description:
        "Oversee end-to-end PO processes, including creation, approval, tracking, and reconciliation, ensuring timely fulfillment."
    },
    {
      title: "Inventory Control & Cycle Counts",
      description:
        "Maintain optimal inventory levels with cycle counting, stock reconciliation, and real-time monitoring to reduce shrinkage."
    },
    {
      title: "Warehouse Setup & Optimization",
      description:
        "Design efficient warehouse layouts, implement racking systems, and optimize material flow for maximum productivity."
    },
    {
      title: "3PL Selection & Management",
      description:
        "Identify and manage third-party logistics partners to enhance delivery speed, cost efficiency, and geographic reach."
    },
    {
      title: "Transportation Planning",
      description:
        "Develop cost-effective transportation strategies, balancing service levels with carrier performance and freight costs."
    },
    {
      title: "Route Optimization & Last-Mile",
      description:
        "Leverage routing algorithms and GPS tracking to improve delivery efficiency and enhance last-mile customer experience."
    },
    {
      title: "Import/Export Documentation",
      description:
        "Prepare and manage international trade documents to ensure smooth customs clearance and compliance with regulations."
    },
    {
      title: "Customs Brokerage Coordination",
      description:
        "Collaborate with customs brokers to handle duties, tariffs, and trade compliance for global shipments."
    },
    {
      title: "Quality Management System (QMS) Setup",
      description:
        "Implement ISO-compliant QMS frameworks to standardize quality processes and meet regulatory requirements."
    },
    {
      title: "Lean/Six Sigma Process Improvement",
      description:
        "Apply Lean and Six Sigma methodologies to eliminate waste, reduce variation, and continuously improve operations."
    },
    {
      title: "SOP Drafting & Training",
      description:
        "Document Standard Operating Procedures (SOPs) and provide training to ensure consistent execution across teams."
    },
    {
      title: "Production Scheduling Support",
      description:
        "Assist in scheduling production runs, balancing demand, resource availability, and capacity constraints."
    },
    {
      title: "Maintenance Planning (CMMS)",
      description:
        "Implement Computerized Maintenance Management Systems (CMMS) to plan preventive maintenance and reduce downtime."
    },
    {
      title: "Packaging Design & Compliance (Prop 65)",
      description:
        "Develop packaging that is cost-effective, sustainable, and compliant with safety regulations like California Prop 65."
    },
    {
      title: "Product Lifecycle Management (PLM) Admin",
      description:
        "Manage PLM systems to track product development, revisions, and compliance documentation across the lifecycle."
    },
    {
      title: "Spare-Parts Planning",
      description:
        "Forecast and manage spare-parts inventory to minimize downtime and ensure equipment availability."
    },
    {
      title: "Reverse Logistics & Returns",
      description:
        "Set up efficient return and refurbishment processes that maximize value recovery and customer satisfaction."
    },
    {
      title: "Vendor-Managed Inventory (VMI)",
      description:
        "Enable suppliers to monitor and replenish inventory automatically, reducing stockouts and carrying costs."
    },
    {
      title: "Asset Tracking & RFID",
      description:
        "Deploy RFID and IoT solutions to monitor asset locations, usage, and lifecycle status in real time."
    },
    {
      title: "OSHA Compliance Support",
      description:
        "Ensure workplace safety by implementing OSHA standards, conducting audits, and training employees."
    },
    {
      title: "Food Safety (HACCP) Program Support",
      description:
        "Design and maintain Hazard Analysis and Critical Control Points (HACCP) programs for safe food production."
    },
    {
      title: "Cold-Chain Monitoring",
      description:
        "Implement IoT-based monitoring to maintain temperature control across cold-chain logistics for sensitive products."
    },
    {
      title: "Sustainable Sourcing & Circularity",
      description:
        "Adopt sustainable sourcing practices and promote circular economy models for reduced environmental impact."
    },
    {
      title: "Utility Bill Audit & Recovery",
      description:
        "Audit utility bills to identify overcharges and recover funds, while optimizing ongoing consumption costs."
    },
    {
      title: "Business Continuity Planning",
      description:
        "Develop resilience strategies to maintain operations during disruptions, ensuring minimal downtime."
    },
    {
      title: "Operations Analytics Dashboards",
      description:
        "Create real-time dashboards with KPIs to monitor operations, procurement, and supply chain performance."
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
          Operations, Procurement, Supply Chain & Manufacturing Support
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our Operations, Procurement, Supply Chain & Manufacturing Support services help organizations
          streamline processes, optimize sourcing, and enhance efficiency across the entire value chain.
          From demand planning and logistics to compliance, safety, and sustainability, we enable businesses
          to operate with resilience, cost control, and agility.
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

export default OpsProcurementSupplyChain;
