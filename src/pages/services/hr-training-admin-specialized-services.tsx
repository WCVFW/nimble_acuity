import React, { useState } from "react";

const HRTrainingAdminServices = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "Talent Sourcing & Recruiting",
      description:
        "Identify, attract, and engage top talent through targeted sourcing strategies, job postings, and candidate outreach."
    },
    {
      title: "Executive Search",
      description:
        "Conduct specialized recruitment for senior leadership and niche roles with discretion and market intelligence."
    },
    {
      title: "Background Checks & Verification",
      description:
        "Perform thorough employment, education, and reference verification as well as criminal and credit checks where required."
    },
    {
      title: "Onboarding & Orientation",
      description:
        "Design and deliver onboarding programs that ensure new hires integrate smoothly into organizational culture and processes."
    },
    {
      title: "HR Policy & Handbook Development",
      description:
        "Draft and update employee handbooks and HR policies to align with compliance, company values, and best practices."
    },
    {
      title: "Compensation & Benefits Benchmarking",
      description:
        "Analyze market pay data and benefits offerings to ensure competitive, fair, and equitable employee packages."
    },
    {
      title: "Time & Attendance Systems Admin",
      description:
        "Implement and manage attendance systems, ensuring accurate tracking of work hours, overtime, and compliance."
    },
    {
      title: "Employee Relations Case Management",
      description:
        "Support investigations, grievance resolution, and employee conflict mediation to maintain positive workplace culture."
    },
    {
      title: "Performance Management Process",
      description:
        "Design and administer performance reviews, goal-setting frameworks, and career progression programs."
    },
    {
      title: "LMS Setup & Course Authoring",
      description:
        "Configure Learning Management Systems and create digital learning modules for training and compliance."
    },
    {
      title: "Corporate Training & Workshops",
      description:
        "Deliver professional development workshops covering leadership, technical skills, compliance, and soft skills."
    },
    {
      title: "DEI Program Facilitation",
      description:
        "Develop and run Diversity, Equity & Inclusion initiatives, training, and awareness programs."
    },
    {
      title: "Multi-State Payroll Setup & Compliance",
      description:
        "Administer payroll across multiple states or countries, ensuring compliance with local labor and tax laws."
    },
    {
      title: "Visa/Immigration & Relocation Coordination",
      description:
        "Support visa applications, immigration compliance, and relocation logistics for employees and executives."
    },
    {
      title: "Travel Management & Expense Audits",
      description:
        "Oversee business travel bookings, policies, and expense auditing for cost efficiency and compliance."
    },
    {
      title: "Office Administration & Reception",
      description:
        "Provide reception, mailroom, and office management services to ensure smooth day-to-day operations."
    },
    {
      title: "Document Management & E-Filing",
      description:
        "Digitize, archive, and manage documents in secure e-filing systems for quick retrieval and compliance."
    },
    {
      title: "Meeting & Calendar Management",
      description:
        "Coordinate schedules, book meeting rooms, and provide administrative support for efficient time management."
    },
    {
      title: "Executive Assistance & Board Support",
      description:
        "Offer executive PA/EA support, board meeting logistics, and high-level administrative coordination."
    },
    {
      title: "P-Card Programs & Spend Control",
      description:
        "Set up purchasing card (P-card) programs, monitor transactions, and enforce spending controls."
    },
    {
      title: "Insurance Broking Coordination",
      description:
        "Coordinate with brokers for employee benefits, liability, and business insurance policies."
    },
    {
      title: "Business Insurance Claims Support",
      description:
        "Assist in preparing and managing insurance claims, ensuring timely and accurate settlements."
    },
    {
      title: "Grant Writing & Management",
      description:
        "Research opportunities, prepare grant proposals, and manage reporting for funded projects."
    },
    {
      title: "Fundraising & Donor Relations",
      description:
        "Design campaigns, build donor relationships, and manage fundraising events for nonprofits."
    },
    {
      title: "Nonprofit Charity Filings & Registry",
      description:
        "Handle compliance filings, registrations, and renewals required for nonprofit and charity operations."
    },
    {
      title: "Community Outreach & CSR Programs",
      description:
        "Plan and deliver Corporate Social Responsibility (CSR) programs and community engagement activities."
    },
    {
      title: "Strategy & Management Consulting",
      description:
        "Provide advisory support for corporate strategy, restructuring, and long-term business planning."
    },
    {
      title: "Change Management & Org Design",
      description:
        "Facilitate organizational transformation, workforce planning, and change adoption strategies."
    },
    {
      title: "QA & ISO Certification Consulting",
      description:
        "Support organizations in quality assurance initiatives and prepare for ISO and other certifications."
    },
    {
      title: "Professional Coaching & Mentoring",
      description:
        "Offer executive coaching, career mentoring, and leadership development tailored to individual needs."
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
          HR, Training, Admin & Specialized Professional Services
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          We provide end-to-end HR, Training, Administrative, and Professional 
          Services that help organizations attract top talent, build strong 
          workplace cultures, and run operations seamlessly. From recruitment 
          and onboarding to payroll, compliance, training, consulting, and 
          nonprofit support — our solutions are tailored to meet your evolving needs.
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

export default HRTrainingAdminServices;
