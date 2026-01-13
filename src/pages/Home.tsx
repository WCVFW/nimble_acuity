import React from "react";
import { ArrowRight, BarChart3, Users, Zap, Star, RefreshCcw, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: <BarChart3 className="h-10 w-10 text-white" />, title: "IT Consulting", description: "Expert advice to modernize IT strategy." },
  { icon: <Users className="h-10 w-10 text-white" />, title: "Cloud Solutions", description: "Seamless cloud integration for growth." },
  { icon: <Zap className="h-10 w-10 text-white" />, title: "Software Development", description: "Custom software tailored to your business." },
  { icon: <Star className="h-10 w-10 text-white" />, title: "Cybersecurity", description: "Advanced protection for your business." },
];

const processSteps = [
  { icon: <RefreshCcw className="h-6 w-6 text-white" />, title: "Consult", description: "Understand requirements & goals." },
  { icon: <Calendar className="h-6 w-6 text-white" />, title: "Plan", description: "Strategize with clear roadmap." },
  { icon: <Settings className="h-6 w-6 text-white" />, title: "Deliver", description: "Execute & optimize solutions." },
];

// --- 2 ROWS CONCEPT DATA ---
// Row 1 Logos (10 unique PNGs)
const row1Logos = [
  "/images/hc1.png", "/images/hc2.png", "/images/hc3.png", "/images/hc4.png", "/images/hc5.png",
  "/images/hc6.png", "/images/hc7.png", "/images/hc8.png", "/images/hc9.png", "/images/hc10.png"
];

// Row 2 Logos (10 different unique PNGs)
const row2Logos = [
  "/images/hc11.png", "/images/hc12.png", "/images/hc13.png", "/images/hc14.png", "/images/hc15.png",
  "/images/hc16.png", "/images/hc17.png", "/images/hc18.png", "/images/hc19.png", "/images/hc20.png"
];

const Home: React.FC = () => {
  return (
    <div className="bg-white font-sans text-[#006A7C] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E6F3F5]/80 to-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#00A7BB]/30 rounded-full blur-3xl float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#006A7C]/30 rounded-full blur-3xl float-fast"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
            Modern IT Solutions for Your Business
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-200">
            End-to-end services from consulting to cloud, software, and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <Link to="/services" className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-full bg-gradient-to-r from-[#006A7C] to-[#00A7BB] text-white shadow-lg hover:scale-105 transition-transform">
              Explore Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-full text-[#006A7C] border-2 border-[#006A7C] hover:bg-[#006A7C] hover:text-white transition-transform hover:scale-105">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-[#006A7C] to-[#00A7BB] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-white animate-fade-in">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-white/90 border border-gray-200 rounded-lg p-6 relative z-10 shadow-lg hover:scale-105 transition-transform">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#006A7C] text-white">{step.icon}</div>
                <h3 className="text-lg font-medium mb-2 text-[#006A7C]">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.description}</p>
                {i < processSteps.length - 1 && <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-black/30 transform translate-x-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR CLIENTS: 2 ROWS SCROLLING SECTION --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-semibold">Our Happy Clients</h2>
        </div>

        <div className="relative flex flex-col gap-8">
          
          {/* Row 1: Right to Left (Scrolls normally) */}
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {/* We duplicate the array to create the infinite loop effect */}
            {[...row1Logos, ...row1Logos].map((logo, i) => (
              <div key={`r1-${i}`} className="flex-none w-48 px-8 flex items-center justify-center">
                <img src={logo} alt="Client Logo" className="h-12 object-contain  hover:grayscale-0 hover:opacity-100 transition duration-300" />
              </div>
            ))}
          </div>

          {/* Row 2: Left to Right (Reverse direction) */}
          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
            {[...row2Logos, ...row2Logos].map((logo, i) => (
              <div key={`r2-${i}`} className="flex-none w-48 px-8 flex items-center justify-center">
                <img src={logo} alt="Client Logo" className="h-12 object-contain  hover:grayscale-0 hover:opacity-100 transition duration-300" />
              </div>
            ))}
          </div>

          {/* Fade Effect on Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E6F3F5] text-[#006A7C] text-center relative overflow-hidden">
        <h2 className="text-3xl font-semibold mb-4 animate-fade-in">Ready to Transform Your Business?</h2>
        <p className="mb-6 text-[#004F5A] animate-fade-in delay-200">Partner with us for innovative IT solutions tailored to your needs.</p>
        <Link to="/contact" className="bg-[#006A7C] text-white px-6 py-3 rounded-md hover:bg-[#004F5A] transition inline-flex items-center animate-fade-in delay-400">
          Contact Us <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }

          .animate-scroll-left {
            animation: scrollLeft 35s linear infinite;
          }

          .animate-scroll-right {
            animation: scrollRight 35s linear infinite;
          }

          @keyframes floatAcross {
            0%   { transform: translate(-50%, -50%) translateX(-40%) translateY(-30%); }
            100% { transform: translate(-50%, -50%) translateX(-40%) translateY(-30%); }
          }
          .float-slow { animation: floatAcross 25s ease-in-out infinite; opacity: 0.25; }
          .float-fast { animation: floatAcross 18s ease-in-out infinite reverse; opacity: 0.15; }
        `}
      </style>
    </div>
  );
};

export default Home;