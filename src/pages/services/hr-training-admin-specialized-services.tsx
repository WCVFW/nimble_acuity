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
      </div>
    </div>
  );
};

export default DataScienceSolutions;
