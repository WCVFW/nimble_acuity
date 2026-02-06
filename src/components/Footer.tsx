import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Updated to match the paths used in your Navbar
  const services = [
    { name: "Finance, Accounting & FinOps", href: "/services/finance-accounting-finops" },
    { name: "Software Development", href: "/services/SoftwareDevelopment" },
    { name: "Healthcare BPO", href: "/services/healthcare-BPO-Service" },
    { name: "Data Services", href: "/services/it-software-cloud-cybersecurity" },
  ];

  return (
    <footer className="bg-[#006A7C] text-white relative overflow-hidden">
      {/* Floating background blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#00A7BB]/20 rounded-full filter blur-3xl animate-blob opacity-70"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#00A7BB]/20 rounded-full filter blur-3xl animate-blob-delay opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About */}
          <div>
            <Link to="/" className="flex items-center text-[#006A7C]">
                <img 
                  src="/images/naflogo.png" 
                  alt="Nimble Acuity" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
            <p className="text-[#E6F3F5] leading-relaxed">
              Delivering smart IT solutions that empower businesses to innovate, grow, and stay secure.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:text-[#00A7BB] transition cursor-pointer">
                <Mail size={18} className="text-[#00A7BB]" />
                <span>info@nimbleacuity.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-[#00A7BB] transition cursor-pointer">
                <Phone size={18} className="text-[#00A7BB]" />
                <span>+1 (510) 945-9514</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-[#00A7BB] transition cursor-pointer">
                <MapPin size={18} className="text-[#00A7BB]" />
                <span>710, Lakeway drive, Sunnyvale, California, USA 94087</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="hover:text-[#00A7BB] transition text-[#E6F3F5]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#00A7BB]/30 mt-12 pt-6 text-center text-[#E6F3F5]">
          <p>
            &copy; {new Date().getFullYear()} Nimble Acuity. All rights reserved.
          </p>
        </div>
      </div>

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