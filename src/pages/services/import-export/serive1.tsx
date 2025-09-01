import React, { useState } from "react";

const ImportExportServices1 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    { title: "Market Research & Product–Market Fit", description: "Conduct thorough market research to assess product-market alignment, demand trends, and competitive landscape." },
    { title: "Supplier Sourcing & Vetting", description: "Identify and vet suppliers through factory audits, reference checks, and quality assessments to ensure reliability." },
    { title: "Samples, Specs, Lab Testing", description: "Manage sample approval, specifications, and compliance lab testing (ASTM/CPSC/FDA where applicable)." },
    { title: "HS Classification, Duty/Tax & Landed-Cost Modeling", description: "Determine HS codes, estimate duties/taxes, and model landed costs for accurate pricing and compliance." },
    { title: "MOQ, Price & Incoterms Negotiation", description: "Negotiate minimum order quantities, pricing, and Incoterms (FOB/CIF/DDP, etc.) with suppliers." },
    { title: "Contracts & Quality Clauses", description: "Draft contracts with quality clauses, AQL plans, IP protection, and confidentiality agreements." },
    { title: "Production QC: PPI/During/Pre-Shipment", description: "Oversee product inspections at pre-production, during production, and pre-shipment stages." },
    { title: "Packaging, Labeling & Barcode Setup", description: "Set up packaging, labeling, and barcodes including COO, fiber/content labels, and UPC codes." },
    { title: "Compliance Files Management", description: "Ensure compliance with CPSIA, FTC textile/care labels, Lacey Act for plant products, and FDA for foods/cosmetics." },
    { title: "Freight Planning & Booking", description: "Plan shipments via sea/air, LCL/FCL, and book carriers or consolidators efficiently." },
    { title: "Cargo Insurance & Claims", description: "Arrange cargo insurance and handle any claims to protect shipments against loss or damage." },
    { title: "U.S. Filings & Customs Coordination", description: "Manage ISF 10+2 filings, AMS submissions, customs bond, and CBP entry coordination." },
    { title: "Documentation Preparation", description: "Prepare commercial invoices, packing lists, BL/AWB, and certificates of origin." },
    { title: "Port/CFS Handling & Delivery", description: "Coordinate port/CFS handling, drayage, and delivery to 3PL or FBA centers." },
    { title: "Duty Drawback & Recordkeeping", description: "Manage duty drawback processes and maintain proper export/import records." },
    { title: "Indian Export Compliance", description: "Handle IEC, LUT/Bond (zero-rated GST), and map RoDTEP/RoSCTL benefits." },
    { title: "Payment Terms & Trade Finance", description: "Support LC, DP/DA, TT payments, and FX hedging for secure international transactions." },
    { title: "E-Commerce Readiness", description: "Prepare products for FBA/FBM, retail carton specs, and fulfillment readiness." },
    { title: "Returns & After-Sales Logistics", description: "Manage returns handling, after-sales logistics, and customer support processes." },
    { title: "Ongoing Vendor Management & Value Engineering", description: "Continuously monitor vendor performance and implement cost-down/value engineering initiatives." }
  ];

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      {/* Intro Section */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Import–Export Services (Execution Catalog)
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          We provide end-to-end import-export services, covering market research, supplier sourcing, compliance, logistics, trade finance, and ongoing vendor management. 
          Our solutions ensure seamless global trade execution and operational efficiency.
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

export default ImportExportServices1;
