import React, { useEffect, useRef, useState } from "react";

// ---------- Types ----------
interface MenuLink {
    label: string;
    href: string;
    isHeading?: boolean;
}

interface MenuSection {
    title: string;
    description?: string;
    mainHref: string;
    links: MenuLink[];
}

interface DropdownItem {
    label: string;
    href: string;
}

interface DropdownProps {
    title: string;
    heading?: string;
    headingHref: string;
    description?: string;              // optional
    descriptionLinkText?: string;      // optional
    descriptionHref?: string;          // optional
    items: DropdownItem[];
}



// ---------- Data ----------
// ---------- Data ----------
const MenuLink: MenuSection[] = [
{
  title: "Services for Insurance Agencies",
  description: "Explore a wide range of services designed to streamline operations and improve efficiency for insurance agencies.",
  mainHref: "/insurance/insurance-services-for-agencies.asp",
  links: [
    { label: "Insurance Eligibility Management Services", href: "/insurance/insurance-eligibility-management-services.asp" },
    { label: "Loss Run Processing Services", href: "/insurance/loss-run-processing-services.asp" },
    { label: "Insurance Quote Summary and Proposal", href: "/insurance/insurance-quote-summary-proposal.asp" },
    { label: "Document Imaging and Indexing Service", href: "/insurance/documentation-indexing-services.asp" },
    { label: "Insurance Accounting and Billing Services", href: "/insurance/insurance-accounting-services.asp" },
    { label: "Certificate Of Insurance (COI)", href: "/insurance/certificate-of-insurance-services.asp" },
    { label: "Insurance Policy Management / Policy Checking and Administration", href: "/insurance/policy-administration.asp" },
    { label: "Insurance Renewal Exposure Summary Services", href: "/insurance/insurance-renewal-exposure-summary-services.asp" },
    { label: "Claims Administration", href: "/insurance/insurance-claims-administration.asp" },
    { label: "Insurance Agency Management", href: "/insurance/insurance-agency-management-services.asp" },
    { label: "Insurance Bookkeeping and Forensic Accounting", href: "/insurance/insurance-bookkeeping-forensic-accounting-services.asp" },
    { label: "Public Policy Engagement Services", href: "/insurance/public-policy-engagement-services.asp" },
    { label: "Policy Owner Services", href: "/insurance/policy-owner-services.asp" },
    { label: "Insurance Credentialing Services", href: "/insurance/insurance-credentialing-services.asp" },
    { label: "Back-Office Automation for Insurance Companies", href: "/insurance/back-office-support-for-insurance-companies.asp" },
    { label: "Insurance Underwriting Services", href: "/insurance/insurance-underwriting-services.asp" },
  ],
},
{
  title: "Services for Insurance Carriers",
  description: "Comprehensive services tailored to meet the operational and administrative needs of insurance carriers.",
  mainHref: "/insurance/carriers.asp",
  links: [
    { label: "Loss Run Processing for Insurance Carriers", href: "/insurance/loss-run-processing-for-insurance-carriers.asp" },
    { label: "Insurance Billing & Accounts Receivable Services", href: "/insurance/billing-accounts-receivable-services.asp" },
    { label: "Policy Issuance Services", href: "/insurance/policy-issuance-services.asp" },
    { label: "Life/Annuity Insurance Claims Management", href: "/insurance/life-annuity-insurance-claims-management.asp" },
    { label: "Insurance Claims Management for Property and Casualty", href: "/insurance/insurance-claims-management-for-property-casualty.asp" },
    { label: "ACORD Forms Processing Services", href: "/insurance/acord-forms-processing-services.asp" },
    { label: "New Business Setup Services", href: "/insurance/new-business-setup-services.asp" },
    { label: "Insurance Renewals Processing", href: "/insurance/insurance-renewals-processing-services.asp" },
    { label: "Insurance Claims Management", href: "/insurance/insurance-claims-management-for-carriers.asp" },
    { label: "Policy Administration, Maintenance, & Servicing", href: "/insurance/policy-administration-maintenance-servicing.asp" },
  ],
},
{
  title: "Services for MGAs",
//   description: "Customized insurance services for Managing General Agents (MGAs) to streamline operations and improve efficiency.",
  mainHref: "/insurance/mga.asp",
  links: [],
},

{
  title: "Insurance Back Office Support",
  description: "Comprehensive back-office support services for insurance companies, including data entry, underwriting, claims management, and analytics.",
  mainHref: "/insurance/insurance-back-office-operations.asp",
  links: [
    { label: "CAQH Profile Services for Insurance Credentialing", href: "/insurance/caqh-profile-services-for-insurance-credentialing.asp" },
    { label: "Insurance Prospect and Market Research", href: "/insurance/insurance-prospect-market-research.asp" },
    { label: "Insurance Appointment Setting Services", href: "/insurance/insurance-appointment-setting-services.asp" },
    { label: "Insurance Commission Management", href: "/insurance/insurance-commission-management-services.asp" },
    { label: "Insurance Data Entry", href: "/insurance/insurance-data-services.asp" },
    { label: "Insurance Endorsements", href: "/insurance/insurance-endorsements.asp" },
    { label: "Insurance BPO Customer Support", href: "/insurance/insurance-bpo-customer-support-services.asp" },
    { label: "Insurance Reporting", href: "/insurance/insurance-reporting-services.asp" },
    { label: "Underwriting for Property and Casualty Insurance", href: "/insurance/underwriting-services-for-property-casualty-insurance.asp" },
    { label: "Life/Annuity Insurance Underwriting", href: "/insurance/life-annuity-insurance-underwriting-services.asp" },
    { label: "Catastrophe Modeling for Insurance", href: "/insurance/catastrophe-modeling-for-insurance.asp" },
    { label: "Warranty Claims Management", href: "/insurance/warranty-claims-management-services.asp" },
    { label: "Business Process Management (BPM) for Insurance", href: "/insurance/business-process-management-bpm-for-insurance.asp" },
    { label: "Insurance Software", href: "/insurance/insurance-software-development-services.asp" },
    { label: "Insurance Analytics Services", href: "/insurance/insurance-analytics-services.asp" },
    { label: "QQCatalyst Management Services", href: "/insurance/qqcatalyst-management-services.asp" },
    { label: "Insurance Operations Services", href: "/insurance/insurance-operations-services.asp" }
  ],
},
{
  title: "Articles",
  description: "Explore insightful articles on insurance outsourcing, claims management, and data analytics in the insurance industry.",
  mainHref: "/insurance/articles/",
  links: [
    { label: "Why Should You Outsource Insurance Services to a Professional Service Provider?", href: "/insurance/articles/why-outsource-insurance-services-to-professional-service-provider.asp" },
    { label: "All You Need to Know About Insurance Claims", href: "/insurance/articles/all-you-need-to-know-about-insurance-claims.asp" },
    { label: "Top 6 Ways Data Analytics is Transforming the Insurance Industry", href: "/insurance/articles/6-ways-data-analytics-transforming-insurance-industry.asp" },
    { label: "All You Need to Know about E-filing of US DOT", href: "/insurance/articles/all-you-need-to-know-about-e-filing-of-us-dot.asp" }
  ],
},
{
  title: "Case Studies",
  description: "Explore our customer success stories showcasing customized insurance solutions and back-office support for clients worldwide.",
  mainHref: "/insurance/case-studies/",
  links: [
    { label: "O2I’s Insurance Back-office Support Helped a Florida-based Insurance Giant Scale with Cost Efficiency", href: "/insurance/case-studies/back-office-support-to-florida-based-insurance-agency.asp" },
    { label: "Outsource2india Provided Back-office Support to a Texas-based Insurance Agency", href: "/insurance/case-studies/back-office-support-for-texas-client.asp" },
    { label: "Outsource2india Helped a Brokerage Consulting Firm With Policy Checking", href: "/insurance/case-studies/policy-checking-for-brokerage-consulting-firm.asp" },
    { label: "Outsource2india Provided Business Processing Services to an Insurance Firm", href: "/insurance/case-studies/business-processing-to-insurance-firm.asp" },
    { label: "Outsource2india Provided Policy Checking Services to a Leading Insurance Company", href: "/insurance/case-studies/policy-checking-services-to-insurance-company.asp" },
    { label: "Insurance Policy Checking Services for NY-based Insurance Service Provider", href: "/insurance/case-studies/policy-checking-new-york-client.asp" },
    { label: "Complete Insurance Back-Office Solutions for Renowned Health Insurance Company", href: "/insurance/case-studies/insurance-back-office-solutions-healthcare-provider.asp" },
    { label: "Streamlined Back-office Operations for Miami-based Client", href: "/insurance/case-studies/back-office-operations-miami-client.asp" },
    { label: "Maintenance of Insurance Accounts for US-based Insurance Agency", href: "/financial/case-studies/maintaining-insurance-accounts.asp" }
  ],
},


    // ... add your other sections here (Business Research, Pharma, etc.)

];

// ---------- DropdownMenu Component ----------
const DropdownMenu: React.FC<DropdownProps> = ({
    title,
    heading,
    headingHref,
    description,
    descriptionLinkText,
    descriptionHref,
    items,
}) => {
    const [alignRight, setAlignRight] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handlePosition = () => {
            if (dropdownRef.current) {
                const rect = dropdownRef.current.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                setAlignRight(rect.right > viewportWidth); // If overflow, align right
            }
        };

        handlePosition();
        window.addEventListener("resize", handlePosition);
        return () => window.removeEventListener("resize", handlePosition);
    }, []);

    return (
        <li className="relative group">
            {/* Menu Trigger */}
            <button
                type="button"
                className="px-5 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg"
            >
                {title}
            </button>

            {/* Dropdown */}
            <div
                ref={dropdownRef}
                className={`
          absolute top-full mt-3 z-50 p-6
          opacity-0 scale-95 -translate-y-2
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
          pointer-events-none group-hover:pointer-events-auto
          bg-white/95 backdrop-blur-lg rounded-2xl
          border border-gray-100 shadow-xl
          overflow-auto max-h-[500px]
          transition-all duration-300 ease-out
          ${alignRight ? "right-0" : "left-0"}
          
          /* Responsive widths */
          w-[90vw] sm:w-[420px] md:w-[560px] lg:w-[720px] xl:w-[900px]
        `}
            >
                {/* Title & Description */}
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        <a
                            href={headingHref}
                            className="hover:text-blue-600 transition-colors duration-200"
                        >
                            {heading}
                        </a>
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {description}{" "}
                        <a
                            href={descriptionHref}
                            className="text-blue-500 font-medium hover:underline transition-colors duration-200"
                        >
                            {descriptionLinkText}
                        </a>
                        .
                    </p>
                </div>

                {/* Grid of Labels - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {items.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2 rounded-lg text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </li>
    );
};

// ---------- Main Menu Component ----------
const Imainmenu: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ul className="flex items-center justify-between space-x-8 py-4">
                    {MenuLink.map((section, idx) =>
                        idx === 2 ? (
                            // ✅ Render simple link instead of dropdown
                            <li key={idx}>
                                <a
                                    href={section.mainHref}
                                    className="px-5 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                                >
                                    {section.title}
                                </a>
                            </li>
                        ) : (
                            // ✅ Render dropdown for all other items
                            <DropdownMenu
                                key={idx}
                                title={section.title}
                                heading={section.title}
                                headingHref={section.mainHref}
                                description={section?.description}
                                descriptionLinkText={`${section.title} services and sub-services`}
                                descriptionHref={section.mainHref}
                                items={section.links}
                            />
                        )
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Imainmenu




