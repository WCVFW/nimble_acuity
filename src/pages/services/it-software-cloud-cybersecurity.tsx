import React, { useState } from "react";

const ITSoftwareCloudCybersecurity = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "IT Helpdesk & Desktop Support",
      description:
        "Provide end-user support for hardware, software, and troubleshooting issues. Ensures smooth daily operations and minimizes downtime for employees."
    },
    {
      title: "Managed Services (MSP) & Monitoring",
      description:
        "Proactively monitor IT infrastructure, servers, and networks to prevent issues. MSP services improve efficiency and reduce unexpected outages."
    },
    {
      title: "Network Design & Administration",
      description:
        "Plan, deploy, and manage secure and scalable networks, ensuring high availability, bandwidth optimization, and reliable connectivity."
    },
    {
      title: "VoIP/PBX Setup & Management",
      description:
        "Implement and maintain modern telephony systems, enabling cost-effective communication through VoIP and PBX platforms."
    },
    {
      title: "Cloud Migration (AWS/Azure/GCP)",
      description:
        "Seamlessly move applications, workloads, and data to cloud platforms, ensuring minimal disruption and maximum scalability."
    },
    {
      title: "Infrastructure-as-Code (Terraform)",
      description:
        "Automate infrastructure provisioning and configuration using IaC tools like Terraform, enabling consistency and faster deployments."
    },
    {
      title: "CI/CD Pipeline Setup",
      description:
        "Build automated integration and deployment pipelines to streamline software delivery, improve code quality, and accelerate releases."
    },
    {
      title: "SRE & Reliability Engineering",
      description:
        "Implement site reliability engineering practices to enhance uptime, scalability, and operational efficiency of critical systems."
    },
    {
      title: "Web/Mobile Application Development",
      description:
        "Design and build high-performing web and mobile applications tailored to business needs with modern frameworks and best practices."
    },
    {
      title: "API Development & Integration",
      description:
        "Develop secure and scalable APIs, integrate third-party services, and enable seamless data exchange across applications."
    },
    {
      title: "Microservices Architecture Consulting",
      description:
        "Guide businesses in adopting microservices to improve scalability, resilience, and flexibility in software systems."
    },
    {
      title: "Database Administration (SQL/NoSQL)",
      description:
        "Manage relational and non-relational databases, ensuring performance tuning, backups, and high availability."
    },
    {
      title: "Data Warehouse & ETL/ELT Pipelines",
      description:
        "Design and implement data pipelines to centralize information, enabling advanced analytics and business intelligence reporting."
    },
    {
      title: "Backup & Disaster Recovery",
      description:
        "Ensure business continuity with automated backups, redundancy strategies, and disaster recovery planning."
    },
    {
      title: "Identity & Access Management (SSO/MFA)",
      description:
        "Secure systems with strong authentication, single sign-on, and multi-factor authentication to protect sensitive resources."
    },
    {
      title: "Pen-Testing & Vulnerability Assessments",
      description:
        "Identify and address security weaknesses through penetration testing and vulnerability scanning to reduce cyber risks."
    },
    {
      title: "SOC Monitoring & Incident Response",
      description:
        "Provide 24/7 security monitoring, threat detection, and incident response to safeguard against cyberattacks."
    },
    {
      title: "Endpoint Protection & EDR Management",
      description:
        "Deploy endpoint protection and advanced EDR solutions to detect, prevent, and respond to threats on devices."
    },
    {
      title: "Patch Management & Hardening",
      description:
        "Regularly apply updates, security patches, and system hardening measures to reduce vulnerabilities and improve resilience."
    },
    {
      title: "MDM & Endpoint Lifecycle",
      description:
        "Implement mobile device management and oversee the full lifecycle of endpoints from deployment to retirement."
    },
    {
      title: "IT Asset Management & CMDB",
      description:
        "Maintain accurate records of IT assets and configuration management databases for improved visibility and efficiency."
    },
    {
      title: "IT Policy & SOP Documentation",
      description:
        "Develop clear IT policies and standard operating procedures to ensure compliance, consistency, and security."
    },
    {
      title: "Software Licensing Management",
      description:
        "Track and optimize software licenses to ensure compliance and reduce unnecessary expenses."
    },
    {
      title: "QA Automation & Test Management",
      description:
        "Automate software testing processes to improve quality assurance, reduce bugs, and speed up delivery cycles."
    },
    {
      title: "UX/UI Design & Prototyping",
      description:
        "Design user-friendly interfaces and interactive prototypes that enhance digital product usability and customer experience."
    },
    {
      title: "Robotic Process Automation (RPA)",
      description:
        "Automate repetitive business processes using RPA tools, improving efficiency and reducing human errors."
    },
    {
      title: "Low-Code / No-Code Solutions",
      description:
        "Enable rapid application development with low-code/no-code platforms, empowering business users to build apps quickly."
    },
    {
      title: "IoT Device Integration",
      description:
        "Connect and manage Internet of Things (IoT) devices, enabling real-time monitoring, automation, and analytics."
    },
    {
      title: "Blockchain Solution Prototyping",
      description:
        "Explore blockchain applications with prototyping services for secure, decentralized solutions and smart contracts."
    },
    {
      title: "SOC 2 / ISO 27001 Readiness & Audits",
      description:
        "Prepare organizations for SOC 2 and ISO 27001 compliance by assessing controls, implementing security measures, and assisting with audits."
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
          IT, Software, Cloud & Cybersecurity
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our IT, Software, Cloud & Cybersecurity services cover the full spectrum
          of modern technology needs—from infrastructure management and software development
          to cloud migration and advanced security operations. Explore our offerings
          designed to enhance scalability, security, and innovation.
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

export default ITSoftwareCloudCybersecurity;
