import React, { useState } from "react";
import DSMainMenu from "./Data science services/mainmenu";

interface Subtopic {
  id: number;
  title: string;
  description: string;
}

interface Section {
  title: string;
  subtopics: Subtopic[];
}

const outsourcingSections: Section[] = [
  {
    title: "1) Strategy & Readiness",
    subtopics: [
      { id: 1, title: "Current-state process mapping & workload baselining", description: "Conduct a thorough analysis of existing processes, workflows, and workloads across departments. Establish baseline metrics for productivity, efficiency, and resource allocation to identify areas for optimization before outsourcing." },
      { id: 2, title: "Nimbleability assessment (risk/criticality matrix)", description: "Evaluate processes for suitability for outsourcing using a risk and criticality matrix. Assess operational, compliance, and business continuity risks to ensure safe and strategic outsourcing decisions." },
      { id: 3, title: "Make-vs-buy & target operating model design", description: "Determine which activities should remain in-house versus Nimbled. Design a target operating model that balances cost, efficiency, scalability, and strategic alignment." },
      { id: 4, title: "Business case, TCO/NPV & savings model", description: "Develop a comprehensive business case outlining total cost of ownership, net present value, and projected savings. Include qualitative and quantitative benefits to support executive decision-making." },
      { id: 5, title: "Demand forecasting & capacity planning assumptions", description: "Analyze historical data and business trends to forecast workload demand. Align workforce and technology capacity plans to ensure service levels are met during transitions." },
      { id: 6, title: "Policy & governance framework for outsourcing", description: "Establish policies, governance structures, and oversight mechanisms to manage outsourcing initiatives. Include reporting, compliance checks, and escalation procedures for risk management." },
    ],
  },
  {
    title: "2) Location & Vendor Strategy",
    subtopics: [
      { id: 7, title: "Country/city screening (cost, talent, stability, time-zone)", description: "Evaluate potential outsourcing locations based on labor costs, talent availability, political stability, regulatory environment, and time-zone compatibility to ensure operational effectiveness." },
      { id: 8, title: "Site visits & capability due diligence", description: "Conduct on-site assessments of vendor facilities and operations. Evaluate infrastructure, processes, technology, and workforce capabilities to ensure alignment with service requirements." },
      { id: 9, title: "Longlist/shortlist creation; vendor profiling", description: "Develop longlists and shortlists of potential vendors with detailed profiles including service offerings, past performance, financial stability, and strategic fit." },
      { id: 10, title: "RFI/RFP design, run, and scoring matrix", description: "Create Requests for Information/Proposal with clear requirements. Use scoring matrices to objectively evaluate vendor responses based on capability, cost, and alignment with business goals." },
      { id: 11, title: "Reference checks & pilot scoping", description: "Validate vendor capabilities through reference checks and small-scale pilots. Assess vendor responsiveness, quality, and alignment with desired service levels before full-scale engagement." },
      { id: 12, title: "Impact-sourcing & diversity criteria definition", description: "Incorporate impact-sourcing and diversity metrics into vendor selection. Promote social responsibility while achieving business objectives and compliance requirements." },
    ],
  },
  {
    title: "3) Commercials & Contracting",
    subtopics: [
      { id: 13, title: "Pricing model design (FTE/unit/outcome/gainshare)", description: "Define pricing models that align with business goals and risk appetite. Consider fixed FTE, per-unit pricing, outcome-based, or gain-sharing agreements." },
      { id: 14, title: "SLA/OLA & KPI suite with baselines/targets", description: "Develop service-level and operational-level agreements with measurable KPIs. Establish baselines and targets to ensure accountability and continuous improvement." },
      { id: 15, title: "MSA/SOW drafting and negotiation support", description: "Draft Master Service Agreements and Statements of Work with clear scopes, responsibilities, and terms. Support negotiation to protect interests and ensure operational clarity." },
      { id: 16, title: "Benchmarking, indexation & change-control clauses", description: "Include benchmarking, price indexation, and change-control mechanisms in contracts to manage cost, performance, and evolving business requirements." },
      { id: 17, title: "Penalties, earn-backs, and service-credit mechanics", description: "Define contractual penalties, earn-backs, and service credits to incentivize performance and manage risks effectively." },
      { id: 18, title: "Exit/termination, step-in & IP/work-for-hire protections", description: "Ensure contracts cover exit strategies, step-in rights, and intellectual property ownership to safeguard organizational interests." },
    ],
  },
  {
    title: "4) Legal, Regulatory & Compliance",
    subtopics: [
      { id: 19, title: "Data-protection mapping (CCPA/GDPR/HIPAA/PCI)", description: "Identify and map all personal data flows and regulatory obligations. Ensure compliance with global data protection laws to mitigate legal and reputational risks." },
      { id: 20, title: "Cross-border data transfer (SCCs, DPA annexes)", description: "Manage international data transfers using Standard Contractual Clauses and Data Processing Agreement annexes to meet legal requirements." },
      { id: 21, title: "Sanctions/OFAC & export-control screening", description: "Screen vendors and transactions for compliance with sanctions lists, OFAC regulations, and export control laws to reduce risk exposure." },
      { id: 22, title: "Labor/employment & co-employment risk review", description: "Assess legal compliance regarding employment, labor, and co-employment risks across jurisdictions to prevent legal disputes." },
      { id: 23, title: "PE/tax-nexus & regulatory license checks", description: "Review tax, permanent establishment, and licensing obligations to ensure regulatory compliance and avoid penalties." },
      { id: 24, title: "Third-party risk management (TPRM) setup", description: "Establish a TPRM framework to monitor vendor risk, compliance adherence, and operational performance on an ongoing basis." },
    ],
  },
  {
    title: "5) Transition & Knowledge Transfer (KT)",
    subtopics: [
      { id: 25, title: "End-to-end transition plan & PMO", description: "Develop a detailed transition plan covering timelines, milestones, and responsibilities. Ensure oversight by PMO for smooth execution." },
      { id: 26, title: "SOP creation; process maps & controls", description: "Document Standard Operating Procedures, process maps, and internal controls to support knowledge transfer and operational consistency." },
      { id: 27, title: "Shadow–assist–own model; acceptance criteria", description: "Implement a phased approach where the vendor shadows, assists, and then takes ownership, with defined acceptance criteria at each stage." },
      { id: 28, title: "Hypercare, parallel run & stabilization gates", description: "Provide hypercare support and run parallel operations to stabilize services post-transition, with defined gates for monitoring progress." },
      { id: 29, title: "Access provisioning, environment readiness", description: "Ensure timely provisioning of system access and readiness of technical and operational environments for seamless onboarding." },
      { id: 30, title: "Training curriculum & certification tracking", description: "Deliver structured training programs and maintain certification tracking to ensure employees are competent and compliant." },
    ],
  },

  {
    title: "6) Operating Model & Delivery Setup",
    subtopics: [
      { id: 31, title: "Global delivery model (hub/spoke/follow-the-sun)", description: "Design and implement a delivery model across multiple geographies. Use hub-and-spoke or follow-the-sun approaches to optimize efficiency, coverage, and responsiveness." },
      { id: 32, title: "Workforce planning, rosters & leave policy alignment", description: "Develop workforce plans, scheduling rosters, and leave policies aligned with operational requirements to maintain service continuity and productivity." },
      { id: 33, title: "Work routing/queue design and WFM setup", description: "Configure work routing and queuing systems. Set up workforce management tools to balance workload, ensure SLA compliance, and optimize resource utilization." },
      { id: 34, title: "Quality framework (QA plans, scorecards)", description: "Establish a robust quality assurance framework with clear QA plans, performance scorecards, and metrics to continuously monitor service delivery standards." },
      { id: 35, title: "Seat/facility planning & secure zones (clean desk/paperless)", description: "Plan physical workspace, seating, and secure zones to support operations. Implement clean desk and paperless policies to ensure security and efficiency." },
      { id: 36, title: "Asset logistics & inventory controls", description: "Manage assets and inventory across sites. Maintain tracking, security, and logistics to ensure availability and prevent losses." },
    ],
  },
  {
    title: "7) Technology, Integration & Security",
    subtopics: [
      { id: 37, title: "Network/VPN design; VDI/DaaS rollout", description: "Design secure network architecture, VPN connectivity, and implement Virtual Desktop Infrastructure or Desktop-as-a-Service for remote operations." },
      { id: 38, title: "SSO/MFA & privileged access management", description: "Implement single sign-on, multi-factor authentication, and privileged access management to protect critical systems and sensitive data." },
      { id: 39, title: "CRM/ERP/ITSM/API integrations & data flows", description: "Integrate enterprise systems such as CRM, ERP, and ITSM, ensuring secure and efficient data flows across platforms." },
      { id: 40, title: "CCaaS/telephony configuration (IVR, call recording)", description: "Configure cloud contact center solutions including IVR, call routing, and recording to deliver seamless customer interactions." },
      { id: 41, title: "Monitoring/observability dashboards & logging", description: "Set up monitoring dashboards, observability tools, and logging mechanisms to track performance, detect anomalies, and enable proactive management." },
      { id: 42, title: "DLP, encryption, secure file transfer & MFT", description: "Enforce data loss prevention, encryption, secure file transfer protocols, and managed file transfer solutions to safeguard data." },
    ],
  },
  {
    title: "8) Service Management & Performance",
    subtopics: [
      { id: 43, title: "ITIL processes (Incident/Request/Change/Problem)", description: "Implement ITIL-aligned processes for incident, service request, change, and problem management to ensure standardized service operations." },
      { id: 44, title: "XLAs (experience metrics) in addition to SLAs", description: "Measure experience-level agreements alongside SLAs to ensure both technical and user experience expectations are met." },
      { id: 45, title: "Forecasting, capacity & shrinkage models", description: "Use forecasting models to anticipate workload demand, plan workforce capacity, and account for shrinkage due to absences or attrition." },
      { id: 46, title: "Surge/seasonality playbooks & overflow models", description: "Develop playbooks for seasonal or surge demand, and set up overflow handling mechanisms to maintain service quality during peak periods." },
      { id: 47, title: "Continuous improvement (Lean/Six Sigma/RPA) backlog", description: "Maintain a continuous improvement backlog using Lean, Six Sigma, and RPA initiatives to enhance efficiency and service quality over time." },
      { id: 48, title: "Benefits tracking & savings realization validation", description: "Track cost savings, operational benefits, and value realization from outsourcing engagements to ensure objectives are met." },
    ],
  },
  {
    title: "9) People, Culture & Change",
    subtopics: [
      { id: 49, title: "Stakeholder comms & change-impact assessments", description: "Communicate effectively with stakeholders and conduct change-impact assessments to anticipate challenges and ensure smooth adoption." },
      { id: 50, title: "Retained org design & role charters", description: "Define retained organization structures and role charters to clarify responsibilities, accountabilities, and governance for in-house teams." },
      { id: 51, title: "Cross-cultural training & collaboration norms", description: "Provide cross-cultural training and establish collaboration norms to ensure effective teamwork across global teams." },
      { id: 52, title: "L&D pathway; skill matrices & certification plans", description: "Develop learning and development pathways, define skill matrices, and track certification plans to enhance workforce capabilities." },
      { id: 53, title: "Travel/visa planning; onsite–offshore exchange", description: "Manage international travel, visa requirements, and onsite-offshore exchange programs to support operational continuity and collaboration." },
      { id: 54, title: "Engagement surveys & action plans", description: "Conduct employee engagement surveys, analyze results, and implement action plans to improve morale, retention, and productivity." },
    ],
  },
  {
    title: "10) Governance, Risk, BCP/DR & Lifecycle",
    subtopics: [
      { id: 55, title: "Multilevel governance (operational reviews, QBRs, steering)", description: "Implement multilevel governance including operational reviews, quarterly business reviews, and steering committees for oversight and strategic alignment." },
      { id: 56, title: "Balanced scorecard & vendor health index", description: "Use balanced scorecards and vendor health indices to track performance, risks, and strategic alignment of outsourcing partners." },
      { id: 57, title: "Risk register, KRIs & remediation tracking", description: "Maintain a risk register, define key risk indicators, and track remediation actions to proactively manage vendor and operational risks." },
      { id: 58, title: "Business continuity & disaster-recovery tests", description: "Conduct regular business continuity and disaster recovery tests to ensure operational resilience and rapid recovery from disruptions." },
      { id: 59, title: "Rebid/renewal strategy, benchmarking & renegotiation", description: "Plan contract rebids, renewals, and benchmarking exercises to optimize vendor performance and cost-effectiveness over the lifecycle." },
      { id: 60, title: "Exit/transition back or to new vendor; knowledge repatriation", description: "Manage exit strategies, knowledge repatriation, and transition planning when moving back in-house or to a new outsourcing partner." },
    ],
  },

];


const GlobalOutsourcingProgram = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [activeSubtopic, setActiveSubtopic] = useState<{ [key: number]: number | null }>({});

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };
  
  const toggleSubtopic = (sectionIndex: number, subIndex: number) => {
    setActiveSubtopic((prev) => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === subIndex ? null : subIndex,
    }));
  };

    return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      {/* Intro Section */}
      <DSMainMenu/>
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Global Outsourcing / Offshoring Program Management
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          We provide end-to-end program management services for global outsourcing
          and offshoring initiatives. From strategy and location planning to contracts,
          compliance, and operational delivery — our framework ensures efficiency,
          risk mitigation, and performance excellence.
        </p>
      </div>

      {/* Sections */}
      <div className="w-full max-w-6xl flex flex-col gap-6">
        {outsourcingSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-white rounded-xl border border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            {/* Section Heading */}
            <div
              className="p-6 flex justify-between items-center"
              onClick={() => toggleSection(sectionIndex)}
            >
              <h2 className="text-lg font-semibold text-gray-900">
                {section.title}
              </h2>
              <span
                className={`text-gray-400 text-xl transform transition-transform duration-300 ${
                  activeSection === sectionIndex ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </div>

            {/* Subtopics */}
            <div
              className={`px-6 pb-6 transition-all duration-300 overflow-hidden ${
                activeSection === sectionIndex
                  ? "max-h-[5000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.subtopics.map((sub, subIndex) => (
                  <div
                    key={sub.id}
                    className="bg-white border border-gray-100 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
                  >
                    {/* Subtopic Header */}
                    <div
                      className="p-4 flex justify-between items-center"
                      onClick={() => toggleSubtopic(sectionIndex, subIndex)}
                    >
                      <h3 className="font-semibold text-gray-900">{sub.title}</h3>
                      <span
                        className={`text-gray-400 text-lg transform transition-transform duration-300 ${
                          activeSubtopic[sectionIndex] === subIndex ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▼
                      </span>
                    </div>

                    {/* Subtopic Content */}
                    <div
                      className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                        activeSubtopic[sectionIndex] === subIndex
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 text-sm">{sub.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default GlobalOutsourcingProgram;
