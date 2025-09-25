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

const testimonials = [
  { name: "Jane Doe", role: "CEO, Acme Corp", feedback: "Their IT consulting transformed our workflow efficiency." },
  { name: "John Smith", role: "CTO, BetaTech", feedback: "Cloud integration was smooth, professional, and effective." }
];

const Home: React.FC = () => {
  return (
    <div className="bg-white font-sans text-[#006A7C] overflow-x-hidden">

      {/* Hero Section with floating shapes */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E6F3F5]/80 to-white overflow-hidden">
        {/* Animated blobs */}
        {/* Animated background blobs */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#00A7BB]/30 rounded-full blur-3xl float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#006A7C]/30 rounded-full blur-3xl float-fast"></div>



        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
            Modern IT Solutions for Your Business1
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

      {/* Services Section with hover card effects */}
      {/* <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10 animate-fade-in">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gradient-to-t from-[#00A7BB]/10 to-white border border-gray-200 rounded-xl shadow-lg transform transition hover:-translate-y-3 hover:shadow-2xl">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#006A7C]">{service.icon}</div>
                <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>                                  
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section with connected line effect */}
      <section className="py-16 bg-gradient-to-r from-[#006A7C] to-[#00A7BB] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-white animate-fade-in">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-white/90 border border-gray-200 rounded-lg p-6 relative z-10 shadow-lg hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#006A7C] text-white">
                  {step.icon}
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#006A7C]">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.description}</p>
                {/* Connecting lines */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-black/30 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section with gradient hover */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Client Feedback</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-gradient-to-t from-[#00A7BB]/10 to-white border border-gray-200 rounded-xl shadow-md transform transition hover:scale-105 hover:shadow-2xl text-left">
                <p className="italic text-gray-700 mb-4">"{t.feedback}"</p>
                <div className="text-right">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>    
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with gradient */}
      <section className="py-16 bg-[#E6F3F5] text-[#006A7C] text-center relative overflow-hidden">
        <h2 className="text-3xl font-semibold mb-4 animate-fade-in">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-6 text-[#004F5A] animate-fade-in delay-200">
          Partner with us for innovative IT solutions tailored to your needs.
        </p>
        <Link
          to="/contact"
          className="bg-[#006A7C] text-white px-6 py-3 rounded-md hover:bg-[#004F5A] transition inline-flex items-center animate-fade-in delay-400"
        >
          Contact Us <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </section>


      {/* Animations */}
      <style>
        {`
          @keyframes floatAcross {
  0%   { transform: translate(-50%, -50%) translateX(-40%) translateY(-30%); }
  25%  { transform: translate(-50%, -50%) translateX(40%) translateY(-30%); }
  50%  { transform: translate(-50%, -50%) translateX(40%) translateY(30%); }
  75%  { transform: translate(-50%, -50%) translateX(-40%) translateY(30%); }
  100% { transform: translate(-50%, -50%) translateX(-40%) translateY(-30%); }
}

.float-slow {
  animation: floatAcross 25s ease-in-out infinite;
  opacity: 0.25; /* lighter visibility */
}

.float-fast {
  animation: floatAcross 18s ease-in-out infinite reverse;
  opacity: 0.15; /* even lighter */
}


        `}
      </style>

    </div>
  );
};

export default Home;
