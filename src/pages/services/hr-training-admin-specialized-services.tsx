<<<<<<< HEAD
import React from "react";
import {
  Cpu,
  BarChart3,
  Brain,
  Database,
  LineChart,
  Bot,
  Activity,
  Layers,
  MessageSquare,
  Workflow,
  Server,
  Building2,
} from "lucide-react";
import DSMainMenu from "./Data science services/mainmenu";

const services = [
  { name: "Data Engineering Services", icon: Database },
  { name: "Data Science Consulting", icon: BarChart3 },
  { name: "Artificial Intelligence", icon: Brain },
  { name: "Business Intelligence", icon: LineChart },
  { name: "Data Analytics", icon: Activity },
  { name: "Business Analytics", icon: Building2 },
  { name: "Machine Learning", icon: Cpu },
  { name: "Deep Learning", icon: Layers },
  { name: "NLP Services", icon: MessageSquare },
  { name: "Robotic Process Automation", icon: Workflow },
  { name: "Big Data Services", icon: Server },
];

const applications = [
  "Industrial Optimization",
  "B2B & B2C Big Data Solutions",
  "Product Implementation",
  "Project Development",
  "Solution Configuration & Administration",
  "Consulting & Advisory",
  "Solution-as-a-Service",
  "Corporate Training",
  "API Development & Integration",
];

const deploymentModels = {
  "Statistical Models": [
    "Bayesian Inference",
    "Descriptive Statistics",
    "ARIMA",
    "ARMA",
  ],
  "Machine Learning": [
    "Supervised Learning (Regression)",
    "Unsupervised Learning (Clustering)",
    "Reinforcement Learning (Q-learning)",
  ],
  "Deep Learning": [
    "Deep Q-Network",
    "Recurrent & Convolutional Neural Networks",
    "Bayesian Deep Learning",
    "Generative Adversarial Networks",
  ],
};

const technologies = {
  "Programming Languages": [
    "Python",
    "R",
    "SQL",
    "Julia",
    "JavaScript",
    "Scala",
    "Java",
    "Go",
    "MATLAB",
    "C/C++",
    "SAS",
  ],
  Libraries: [
    "TensorFlow",
    "NumPy",
    "SciPy",
    "Pandas",
    "Matplotlib",
    "Keras",
    "Scikit-Learn",
    "PyTorch",
    "Scrapy",
    "BeautifulSoup",
  ],
  Frameworks: ["Django", "OpenCV", "Caffe", "Apache MXNet", "TensorFlow"],
  Platforms: ["Hadoop", "Luigi", "Google Maps API", "Cloud (Distributed Setup)"],
  Others: ["MongoDB", "OCR Tools", "Route Optimization Algorithm", "amCharts"],
};

const industries = [
  "Sales & Marketing",
  "E-commerce & mCommerce",
  "Gaming & Entertainment",
  "Data Centers",
  "Logistics & Supply Chain",
  "Retail Management",
  "Enterprise Management",
  "Healthcare & Life Sciences",
  "Telecom & Networking",
  "Manufacturing & Distribution",
  "Automotive",
  "Training & Education",
  "HR Management",
  "Aviation & Aerospace",
  "Cyber Security",
  "Oil & Gas",
  "Chemical Manufacturing",
  "Customer Analytics",
  "Finance",
  "Insurance",
  "Recruitment",
];

const DataScienceSolutions: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <DSMainMenu/>
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Data Science Solutions We Offer
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Unlock business potential with AI, Machine Learning, and Big Data.
          Discover insights, optimize operations, and accelerate growth with our
          expert-driven solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Services */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map(({ name, icon: Icon }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
            >
              <Icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium text-gray-800">{name}</h3>
            </div>
          ))}
        </div>

        {/* Applications */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Data Science Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-blue-50 px-4 py-3 rounded-xl border border-blue-100 text-gray-800 hover:bg-blue-100 transition"
            >
              {app}
            </div>
          ))}
        </div>

        {/* Deployment Models */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Deployment Models & Techniques
        </h2>
        <div className="space-y-6 mb-16">
          {Object.entries(deploymentModels).map(([category, items], idx) => (
            <div key={idx} className="bg-white shadow rounded-2xl p-6">
              <h3 className="text-2xl font-medium text-blue-700 mb-3">
                {category}
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Technologies We Leverage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {Object.entries(technologies).map(([category, items], idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-white border rounded-full text-gray-700 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Industry Sectors We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl shadow-sm px-4 py-3 text-center text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition"
            >
              {industry}
            </div>
          ))}
        </div>
=======
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
>>>>>>> shenbagavel
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default DataScienceSolutions;
=======
export default HRTrainingAdminServices;
>>>>>>> shenbagavel
