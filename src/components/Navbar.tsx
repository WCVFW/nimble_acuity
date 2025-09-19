import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = {
  name: string;
  href: string;
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState<boolean>(false);
  const location = useLocation();

  const navigation: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services: NavItem[] = [
    { name: "Finance, Accounting & FinOps", href: "/services/finance-accounting-finops" },
    { name: "Creative design", href: "/services/legal-corporate-compliance" },
    { name: "Healthcare BPO", href: "/services/healthcare-BPO-Service" },
    { name: "Data Services", href: "/services/it-software-cloud-cybersecurity" },
    { name: "Mortgage Service", href: "/services/MortgageService" },
    { name: "Insurance BPO Services", href: "/services/marketing-sales-creative-media" },
    { name: "Software Development", href: "/services/SoftwareDevelopment" }, 
    { name: "Photo Editing", href: "/services/operations-procurement-supplychain-manufacturing" },
    { name: "Call Center Services", href: "/services/real-estate-facilities-energy-environment" },
    { name: "Data sciences", href: "/services/hr-training-admin-specialized-services" },
    { name: "Engineering services", href: "/services/global-outsourcing-offshoring" },
    { name: "Research and analysis", href: "/services/import-export-services" },
  ];

  const isActive = (href: string): boolean => location.pathname === href;
  const isServicesPage = location.pathname.includes("/services");

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-[#006A7C]">
              Nimble Acuity
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center relative">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {/* Home Link */}
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#006A7C] ${isActive("/") ? "text-[#006A7C]" : "text-gray-900"
                  }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >

                <Link
                  to="/services">
                  <button
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-[#006A7C] ${isServicesPage ? "text-[#006A7C]" : "text-gray-900"
                      }`}
                  >
                    Services <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                </Link>

                {/* Centered Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg
                             p-6 sm:p-8 w-max min-w-[320px] max-w-full lg:max-w-[700px]
                             transform transition-all duration-300 ease-in-out origin-top
                             ${isServicesDropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className={`block px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base border-b border-gray-100 last:border-none
                                   transition-colors duration-200 ease-in-out hover:pl-6 hover:bg-[#006A7C] hover:text-white rounded-md text-gray-900`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Navigation Links */}
              {navigation.slice(1).map((item: NavItem) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#006A7C] ${isActive(item.href) ? "text-[#006A7C]" : "text-gray-900"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center z-50">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-max-h duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen" : "max-h-0"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            {/* Nav Links */}
            {navigation.map((item: NavItem) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-[#006A7C] rounded-md ${isActive(item.href) ? "text-[#006A7C] bg-gray-100" : "text-gray-900"
                  }`}
                onClick={handleMobileLinkClick}
              >
                {item.name}
              </Link>
            ))}

            {/* Services (Mobile Dropdown) */}
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-[#006A7C] hover:bg-gray-100 rounded-md"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Services <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-max-h duration-300 ease-in-out ${isServicesDropdownOpen ? "max-h-screen" : "max-h-0"}`}>
                <div className="space-y-1">
                  {services.map((service: NavItem) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className={`block pl-6 pr-3 py-2 text-sm transition-colors hover:bg-[#006A7C] hover:text-white rounded-md ${isActive(service.href)
                          ? "text-[#006A7C] bg-gray-50"
                          : "text-gray-900"
                        }`}
                      onClick={handleMobileLinkClick}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
