import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    "IT Consulting",
    "Cloud Solutions",
    "Software Development",
    "Cybersecurity"
  ];

  return (
    <footer className="bg-[#006A7C] text-white relative overflow-hidden">
      {/* Floating background blobs for effect */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#00A7BB]/20 rounded-full filter blur-3xl animate-blob opacity-70"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#00A7BB]/20 rounded-full filter blur-3xl animate-blob-delay opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nimble Acuity</h3>
            <p className="text-[#E6F3F5] leading-relaxed">
              Delivering smart IT solutions that empower businesses to innovate, grow, and stay secure.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:text-[#00A7BB] transition">
                <Mail size={18} className="text-[#00A7BB]" />
                <span>info@nimbleacuity.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-[#00A7BB] transition">
                <Phone size={18} className="text-[#00A7BB]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-[#00A7BB] transition">
                <MapPin size={18} className="text-[#00A7BB]" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-[#00A7BB] transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#00A7BB] mt-12 pt-6 text-center text-[#E6F3F5]">
          <p>
            &copy; {new Date().getFullYear()} Nimble Acuity. All rights reserved.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob { 
            0%, 100% { transform: translate(0px,0px) scale(1); }
            33% { transform: translate(30px,-50px) scale(1.1); }
            66% { transform: translate(-20px,20px) scale(0.9); }
          }
          .animate-blob { animation: blob 8s infinite; }
          .animate-blob-delay { animation: blob 10s infinite 2s; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
