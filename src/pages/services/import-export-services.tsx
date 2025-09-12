import { useNavigate } from "react-router-dom";

import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import NavigationMenu from "./import-export/MegaMenu";

const Programs = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto min-h-screen text-gray-900 overflow-hidden">
      
      <NavigationMenu/>
      <h1 className="text-4xl font-bold mb-8 text-center">
        Nimble Corporate Finance Support Services
      </h1>

      <section className="mb-12">
        <p className="text-lg leading-relaxed">
          Nimble Acuity offers a comprehensive range of corporate finance support
          services, designed to help organizations navigate complex financial, legal,
          and strategic challenges. Whether you're raising capital, pursuing
          acquisitions, managing compliance, or optimizing financial performance, our
          team delivers high-impact support backed by decades of domain expertise.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Our Corporate Finance Support?
        </h2>
        <p className="text-lg leading-relaxed">
          With over 20 years of experience, Nimble Acuity (Nimble Acuity) empowers businesses
          through data-driven strategies, specialized financial research, and hands-on
          support across corporate transactions. Our goal is to reduce risk, improve
          decision-making, and drive long-term value creation for our clients in sectors
          like telecom, healthcare, retail, energy, technology, and manufacturing.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Core Service Offerings</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Mergers & Acquisitions (M&A) Support</h3>
            <ul className="list-disc list-inside">
              <li>Target screening and peer analysis</li>
              <li>Buyer/seller identification</li>
              <li>Pitch books, presentations, and CIMs</li>
              <li>Valuation modeling and synergy assessments</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Project Finance Advisory</h3>
            <ul className="list-disc list-inside">
              <li>Feasibility analysis and financial modeling</li>
              <li>Public-private partnership evaluation</li>
              <li>Capital sourcing and debt structuring</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Capital Markets & Investment Strategy</h3>
            <ul className="list-disc list-inside">
              <li>Equity and debt capital advisory</li>
              <li>Credit rating and interest rate evaluation</li>
              <li>Pre-IPO and stock performance analysis</li>
              <li>Debt vs equity analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Financial Data Management</h3>
            <ul className="list-disc list-inside">
              <li>Large-scale database consolidation and structuring</li>
              <li>Due diligence data room setup</li>
              <li>Ongoing data updates and compliance management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Competitive & Industry Intelligence</h3>
            <ul className="list-disc list-inside">
              <li>Competitor benchmarking and trend tracking</li>
              <li>Sector-specific financial modeling</li>
              <li>Sensitivity analysis and market forecasting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Cash Flow & Tax Advisory</h3>
            <ul className="list-disc list-inside">
              <li>Cash transaction reporting and forecasting</li>
              <li>Tax compliance and reporting standards guidance</li>
              <li>Cross-border tax strategy and legal updates</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Additional Support Services</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Sourcing and comparing financing options</li>
          <li>Event-based newsletters and market alerts</li>
          <li>Regulatory compliance across jurisdictions</li>
          <li>Custom research and reporting in multiple languages</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Nimble to Nimble Acuity?</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>
            <strong>Global delivery model</strong> with time zone flexibility
          </li>
          <li>
            <strong>Deep industry knowledge</strong> and specialized consultants
          </li>
          <li>
            <strong>End-to-end support</strong> across the financial transaction lifecycle
          </li>
          <li>
            <strong>Cost-effective solutions</strong> with no compromise on quality
          </li>
          <li>
            <strong>Multilingual reporting</strong> to serve global markets seamlessly
          </li>
        </ul>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Let’s Accelerate Your Financial Growth
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          By outsourcing your corporate finance support to India, you gain a strategic
          advantage — faster turnaround times, lower operational costs, and access to
          expert advisory under one roof.
        </p>
        <p className="mt-6 text-lg font-semibold text-blue-700 cursor-pointer hover:underline">
          Contact Nimble Acuity today to explore how we can support your financial objectives through tailored, high-quality corporate finance solutions.
        </p>
      </section>
    </div>
  );
};
export default Programs;
