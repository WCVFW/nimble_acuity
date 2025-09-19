import React from "react";
import ESmainmenu from "./Engineering-services/ESmainmenu";

const GlobalOutsourcingProgram: React.FC = () => {
  const services = [
    {
      title: "Architectural 3D Modeling, Drafting, and Rendering Services",
      description:
        "Convert concepts into stunning visual representations, streamline design iterations, and accelerate project approvals.",
    },
    {
      title: "Civil 3D Modeling, Drafting, and Rendering Services",
      description:
        "Navigate the complexities of your civil engineering projects with precision and ensure project success.",
    },
    {
      title: "Structural 3D Modeling, Drafting, and Rendering Services",
      description:
        "Fortify construction projects with engineered models and detailed drafts to ensure structural integrity and optimize material usage.",
    },
    {
      title: "BIM Services",
      description:
        "Get intelligent 3D models that enable you to plan, design, evaluate, and manage construction projects efficiently.",
    },
    {
      title: "Revit Services",
      description:
        "Foster collaboration, streamline workflows, and ensure flawless execution from design to construction with Revit capabilities.",
    },
    {
      title: "CAD Services",
      description:
        "Ideate and iterate designs to transform concepts into reality and adhere to industry standards with our versatile CAD services.",
    },
    {
      title: "CAD Conversion Services",
      description:
        "Transition effortlessly between formats/systems to leverage legacy designs and collaborate across platforms.",
    },
    {
      title: "2D Drafting Services",
      description:
        "Translate concepts into high-quality drawings to create a solid foundation and facilitate stakeholder communication.",
    },
    {
      title: "Millwork Drafting Services",
      description:
        "From custom cabinetry to intricate detailing, craft detailed millwork drafts for perfect form and function.",
    },
    {
      title: "Retail Store Design Services",
      description:
        "Combine engineering expertise with creative vision to deliver functional and aesthetic store layouts.",
    },
    {
      title: "MEP Services",
      description:
        "Integrate mechanical, electrical, and plumbing systems for energy efficiency, compliance, and comfort while minimizing costs.",
    },
    {
      title: "3D Modeling for OEM Manufacturers",
      description:
        "Bring concepts to life, expedite prototyping, reduce design flaws, and accelerate time-to-market.",
    },
    {
      title: "3D Modeling for Visual Merchandising Manufacturers",
      description:
        "Transform ideas into captivating visualizations that showcase products in diverse settings and boost engagement.",
    },
    {
      title: "AutoCAD Drafting Services",
      description:
        "Create meticulous designs ensuring precision, compliance, and accuracy in every project.",
    },
    {
      title: "CAD Design Services",
      description:
        "Empower your design process with sophisticated CAD solutions to drive efficiency and project success.",
    },
    {
      title: "Mechanical Engineering",
      description: "Samples",
    },
    {
      title: "Architectural Services",
      description: "Samples",
    },
  ];

  const benefits = [
    {
      title: "Immaculate Workflow and Quality Assurance",
      description:
        "Structured workflows and multi-step quality checks ensure high-quality engineering solutions.",
    },
    {
      title: "Engineering Project Management Process",
      description:
        "Periodic assessments and metrics review help deliver maximum value in every project.",
    },
    {
      title: "Cutting-edge Engineering Tools and Software",
      description:
        "Leverage advanced tools to improve accuracy, efficiency, and compliance in all projects.",
    },
    {
      title: "World-class Infrastructure",
      description:
        "Well-equipped workstations and disaster recovery centers ensure reliability and seamless operations.",
    },
    {
      title: "Global Delivery Centers",
      description:
        "Multi-locational outsourcing breaks geographical barriers and delivers consistent value worldwide.",
    },
    {
      title: "Project Management Software for Engineering",
      description:
        "Track productivity, identify issues, and solve problems efficiently with our project management tools.",
    },
    {
      title: "Flexible Pricing Model",
      description:
        "Pay only for what you leverage, including tools, engineer expertise, and project complexity.",
    },
  ];

  const renderSection = (
    title: string,
    items: { title: string; description: string }[]
  ) => (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        </header>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-blue-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Engineering Solutions We Offer</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Auity provides multidisciplinary engineering solutions that assure quality, safety, and efficiency in all projects. Our skilled engineers drive innovation, reliability, and project success.
        </p>
      </section>

      {/* Services Section */}
      {renderSection("Our Engineering Services", services)}

      {/* Benefits Section */}
      {renderSection("Why Choose Nimble Auity?", benefits)}

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-16 bg-blue-600 text-white text-center rounded-t-3xl">
        <h2 className="text-4xl font-bold mb-4">Partner with Nimble Auity Today</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Get in touch with our experts to implement advanced engineering solutions and drive project efficiency and excellence.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default GlobalOutsourcingProgram;
