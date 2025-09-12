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
        href: "#",
        dropdown: {
            subheading: "Custom Software Services",
            subheadingHref: "",
            links: [
                { text: "", href: "" },
            ],
        },
    },
    {
        title: "Mobile App",
        href: "#",
        dropdown: {
            subheading: "Mobile App Services",
            subheadingHref: "",
            links: [
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
            subheading: "",
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
    <div className="flex justify-center items-center max-w-7xl mx-auto">
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

      {/* Desktop Navigation Centered */}
      <ul className="hidden md:flex space-x-6">
        {megaMenuData.map((item, index) => {
          const isLast = index === megaMenuData.length - 1;

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