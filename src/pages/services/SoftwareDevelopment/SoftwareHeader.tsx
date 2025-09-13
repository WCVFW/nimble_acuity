import { useState } from "react";

interface DropdownLink {
  text: string;
  href: string;
}

interface DropdownMenu {
  subheading: string;
  subheadingHref: string;
  links: DropdownLink[];
}

interface MegaMenuItem {
  title: string;
  href: string;
  dropdown?: DropdownMenu;
}


const megaMenuData: MegaMenuItem[] = [
  {
    title: "Custom Software",
    href: "/services/ITServices/CustomSoftwareDevelopment",
    dropdown: {
      subheading: "Custom Software Services",
      subheadingHref: "/services/ITServices/CustomSoftwareDevelopment",
      links: [
        { text: "Embedded Software Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/EmbeddedSoftwareDevelopment" },
        { text: "Algorithm Analysis and Design Services", href: "/services/ITServices/CustomSoftwareDevelopment/AlgorithmAnalysisDesign" },
        { text: "High Fidelity Design Services", href: "/services/ITServices/CustomSoftwareDevelopment/HighFidelityDesign" },
        { text: "OTT App Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/OTTAppDevelopment" },
        { text: "Rest API Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/RestAPIDevelopment" },
        { text: "Interactive Kiosk Software Development", href: "/services/ITServices/CustomSoftwareDevelopment/InteractiveKioskSoftwareDevelopment" },
        { text: "Firmware Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/FirmwareDevelopment" },
        { text: "LMS Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/LMSDevelopmentServices" },
        { text: "IoT Analytics Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/IoTAnalyticsDevelopment" },
        { text: "Device Drivers Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/DeviceDriversDevelopment" },
        { text: "MVP Software Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/MVPDevelopment" },
        { text: "Android TV Application Development", href: "/services/ITServices/CustomSoftwareDevelopment/AndroidTVAppDevelopment" },
        { text: "Sitecore Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/SitecoreDevelopment" },
        { text: "Software Modernization Services", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareModernization" },
        { text: "Bespoke Software Development", href: "/services/ITServices/CustomSoftwareDevelopment/BespokeSoftwareDevelopment" },
        { text: "Template Design Service Offerings", href: "/services/ITServices/CustomSoftwareDevelopment/CustomTemplateDesign" },
        { text: "BSP Development", href: "/services/ITServices/CustomSoftwareDevelopment/BSPDevelopment" },
        { text: "Chromecast App Development", href: "/services/ITServices/CustomSoftwareDevelopment/ChromecastAppDevelopment" },
        { text: "Software Requirement Analysis", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareRequirementAnalysis" },
        { text: "HMI Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/HMIDevelopment" },
        { text: "Elixir Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/ElixirDevelopment" },
        { text: "Software Architecture Design", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareArchitectureDesign" },
        { text: "Customer Information System", href: "/services/ITServices/CustomSoftwareDevelopment/CISasService" },
        { text: "Ethereum Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/EthereumDevelopment" },
        { text: "IoT as a Services", href: "/services/ITServices/CustomSoftwareDevelopment/IoTasAService" },
        { text: "FileMaker Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/FileMakerDevelopment" },
        { text: "Full Stack Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/FullStackDevelopment" },
        { text: "Software Product Development", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareProductDevelopment" },
        { text: "ML Consulting Services", href: "/services/ITServices/CustomSoftwareDevelopment/MachineLearningConsulting" },
        { text: "IEO Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/IeoDevelopmentServices" },
        { text: "Software Programming Services", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareProgramming" },
        { text: "IoT App Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/IotAppDevelopment" },
        { text: "Interactive Prototype Services", href: "/services/ITServices/CustomSoftwareDevelopment/InteractivePrototypeServices" },
        { text: "Desktop Application Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/DesktopApplicationDevelopment" },
        { text: "NopCommerce Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/NopcommerceDevelopment" },
        { text: "Legacy Application Modernization Services", href: "/services/ITServices/CustomSoftwareDevelopment/LegacyApplicationModernization" },
        { text: "Agile Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/AgileSoftwareDevelopment" },
        { text: "Nearshore Software Development", href: "/services/ITServices/CustomSoftwareDevelopment/NearshoreSoftwareDevelopment" },
        { text: "Liferay Application Development", href: "/services/ITServices/CustomSoftwareDevelopment/LiferayDevelopment" },
        { text: "Game Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/GameDevelopmentServices" },
        { text: "Software Research and Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareRndServices" },
        { text: "Matlab Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/MatlabDevelopmentServices" },
        { text: "Software Maintenance and Support Services", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareMaintenanceServices" },
        { text: "Offshore Software Solutions", href: "/services/ITServices/CustomSoftwareDevelopment/OffshoreSoftwareDevelopment" },
        { text: "PoC Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/PocDevelopment" },
        { text: "Chatbot Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/ChatbotDevelopment" },
        { text: "Core Modernization", href: "/services/ITServices/CustomSoftwareDevelopment/CoreModernizationServices" },
        { text: "STO Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/StoDevelopmentServices" },
        { text: "Product Management Services", href: "/services/ITServices/CustomSoftwareDevelopment/ProductManagementServices" },
        { text: "Payment Gateway Integration", href: "/services/ITServices/CustomSoftwareDevelopment/PaymentGatewayIntegrationServices" },
        { text: "Application Development Solutions", href: "/services/ITServices/CustomSoftwareDevelopment/ApplicationDevelopmentServices" },
        { text: "Application Lifecycle Management Services", href: "/services/ITServices/CustomSoftwareDevelopment/ApplicationLifecycleManagementServices" },
        { text: "NFT Marketplace Development", href: "/services/ITServices/CustomSoftwareDevelopment/NFTMarketplaceDevelopmentServices" },
        { text: "Image Recognition Software", href: "/services/ITServices/CustomSoftwareDevelopment/RecognitionSoftwareDevelopmentServices" },
        { text: "Digital Interactive Services", href: "/services/ITServices/CustomSoftwareDevelopment/DigitalInteractiveServices" },
        { text: "Software Product Engineering", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareProductEngineering" },
        { text: "Fraud Detection Software", href: "/services/ITServices/CustomSoftwareDevelopment/FraudDetectionSoftwareDevelopmentServices" },
        { text: "Application Re-engineering Services", href: "/services/ITServices/CustomSoftwareDevelopment/ApplicationReengineeringServices" },
        { text: "VR Prototyping Services", href: "/services/ITServices/CustomSoftwareDevelopment/VRPrototypingServices" },
        { text: "Business Application Development", href: "/services/ITServices/CustomSoftwareDevelopment/BusinessApplicationDevelopment" },
        { text: "ICO Development Services", href: "/services/ITServices/CustomSoftwareDevelopment/ICODevelopmentServices" },
        { text: "Software Development Services For Startups", href: "/services/ITServices/CustomSoftwareDevelopment/SoftwareDevelopmentForStartups" },
        { text: "Fintech Software Solutions", href: "/services/ITServices/CustomSoftwareDevelopment/FintechSoftwareDevelopmentServices" },
      ],
    },
  },
  {
    title: "Mobile App",
    href: "/services/ITServices/MobileAppDevelopmentServices",
    dropdown: {
      subheading: "Mobile App Development",
      subheadingHref: "/services/ITServices/MobileAppDevelopmentServices",
      links: [
        { text: "Android App Development", href: "/services/ITServices/MobileAppDevelopmentServices/AndroidAppDevelopmentServices" },
        { text: "Xamarin App Development", href: "/services/ITServices/MobileAppDevelopmentServices/XamarinAppDevelopmentServices" },
        { text: "Fintech App Development", href: "/services/ITServices/MobileAppDevelopmentServices/FintechAppDevelopmentServices" },
        { text: "React Native App Development", href: "/services/ITServices/MobileAppDevelopmentServices/ReactNativeDevelopmentServices" },
        { text: "J2ME App Development", href: "/services/ITServices/MobileAppDevelopmentServices/J2MEAppDevelopmentServices" },
        { text: "Rapid Application Development", href: "/services/ITServices/MobileAppDevelopmentServices/RapidApplicationDevelopmentServices" },
        { text: "iOS App Development", href: "" },
        { text: "Mobile Commerce Development", href: "/services/ITServices/MobileAppDevelopmentServices/MobileCommerceDevelopmentServices" },
        { text: "Kotlin App Development", href: "/services/ITServices/MobileAppDevelopmentServices/KotlinAppDevelopmentServices" },
        { text: "iOS App Maintenance Services", href: "" },
        { text: "Arabic App Development", href: "" },
        { text: "Xcode App Development", href: "" },
        { text: "Wearable App Development", href: "" },
        { text: "iPad App Development", href: "" },
        { text: "Titanium App Development", href: "" },
        { text: "Native App Development", href: "" },
        { text: "HTML5 Mobile App Development", href: "" },
        { text: "HoloLens App Development", href: "" },
        { text: "iPhone App Development", href: "" },
        { text: "Swift App Development", href: "" },
        { text: "jQuery App Development", href: "" },
        { text: "Apple Watch App Development", href: "" },
        { text: "PhoneGap App Development", href: "" },
        { text: "On-demand App Development", href: "" },
        { text: "Mobile App Design Services", href: "" },
        { text: "iBeacon App Development", href: "" },
        { text: "Dating App Development ", href: "" },
        { text: "Hybrid App Development", href: "" },
        { text: "Flutter App Development", href: "" },
        { text: "Android App Maintenance Services", href: "" },
        { text: "Ionic Mobile App Development", href: "" },
        { text: "Cross-platform App Development", href: "" },
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Application",
    href: "#",
    dropdown: {
      subheading: "Application",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Web Development",
    href: "#",
    dropdown: {
      subheading: "",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Service Now",
    href: "#",
    dropdown: {
      subheading: "Service Now",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Azure Services",
    href: "#",
    dropdown: {
      subheading: "Azure Services",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Microsoft Services",
    href: "#",
    dropdown: {
      subheading: "Microsoft Services",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "E-Commerce Development",
    href: "#",
    dropdown: {
      subheading: "E-Commerce Development",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Cloud Services",
    href: "#",
    dropdown: {
      subheading: "Cloud Services",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "IT Staffing",
    href: "#",
    dropdown: {
      subheading: "IT Staffing",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Software Testing",
    href: "#",
    dropdown: {
      subheading: "Software Testing",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "IMS",
    href: "#",
    dropdown: {
      subheading: "IMS",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Enterprise",
    href: "#",
    dropdown: {
      subheading: "Enterprise",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Technologies",
    href: "#",
    dropdown: {
      subheading: "Technologies",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Digital Transformation",
    href: "#",
    dropdown: {
      subheading: "Digital Transformation",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Network Infrastructure",
    href: "#",
    dropdown: {
      subheading: "Network Infrastructure",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Database Services",
    href: "#",
    dropdown: {
      subheading: "Database Services",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Industries",
    href: "#",
    dropdown: {
      subheading: "Industries",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Other Services",
    href: "#",
    dropdown: {
      subheading: "Other Services",
      subheadingHref: "",
      links: [
        { text: "", href: "" },
      ],
    },
  },

]


const SoftwareHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-20 px-4 md:px-6 py-4">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <div className="relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                {megaMenuData.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || "#"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Centered - First Row */}
        <ul className="hidden md:flex justify-center gap-x-6 mb-3">
          {megaMenuData.slice(0, 10).map((item, index) => {
            const isLast = index === megaMenuData.slice(0, 10).length - 1;

            return (
              <li
                key={index}
                className="relative group px-1 py-1 cursor-pointer hover:text-[#006A7C] transition-colors duration-200"
              >
                <a
                  href={item.href}
                  className="font-medium text-black text-sm whitespace-nowrap"
                >
                  {item.title}
                </a>

                {item.dropdown && (
                  <div
                    className={`absolute top-full mt-4 min-w-[22rem] max-w-[40rem] bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  ${isLast ? "right-0" : index === 0 ? "left-2" : "left-1/3 -translate-x-1/3"}`}
                  >
                    {/* Subheading */}
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h4 className="font-bold text-[#006A7C] text-lg">
                        <a href={item.dropdown.subheadingHref}>
                          {item.dropdown.subheading}
                        </a>
                      </h4>
                    </div>

                    {/* Scrollable Links */}
                    <div className="max-h-[400px] overflow-y-auto p-6">
                      <ul className="grid grid-cols-2 gap-3">
                        {item.dropdown.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className="block text-sm text-gray-800 px-2 py-1 rounded-md hover:bg-[#006A7C] hover:text-white transition"
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Navigation Centered - Second Row */}
        <ul className="hidden md:flex justify-center gap-x-6">
          {megaMenuData.slice(10).map((item, index) => {
            const isLast = index === megaMenuData.slice(10).length - 1;

            return (
              <li
                key={index}
                className="relative group px-1 py-1 cursor-pointer hover:text-[#006A7C] transition-colors duration-200"
              >
                <a
                  href={item.href}
                  className="font-medium text-black text-sm whitespace-nowrap"
                >
                  {item.title}
                </a>

                {item.dropdown && (
                  <div
                    className={`absolute top-full mt-4 min-w-[22rem] max-w-[40rem] bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  ${isLast ? "right-0" : index === 0 ? "left-2" : "left-1/3 -translate-x-1/3"}`}
                  >
                    {/* Subheading */}
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h4 className="font-bold text-[#006A7C] text-lg">
                        <a href={item.dropdown.subheadingHref}>
                          {item.dropdown.subheading}
                        </a>
                      </h4>
                    </div>

                    {/* Scrollable Links */}
                    <div className="max-h-[400px] overflow-y-auto p-6">
                      <ul className="grid grid-cols-2 gap-3">
                        {item.dropdown.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className="block text-sm text-gray-800 px-2 py-1 rounded-md hover:bg-[#006A7C] hover:text-white transition"
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );



};

export default SoftwareHeader;