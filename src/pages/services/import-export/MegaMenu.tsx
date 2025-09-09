import React, { useEffect, useRef, useState } from "react";

// ---------- Types ----------
interface MenuLink {
    label: string;
    href: string;
    isHeading?: boolean;
}

interface MenuSection {
    title: string;
    description: string;
    mainHref: string;
    links: MenuLink[];
}

interface DropdownItem {
    label: string;
    href: string;
}

interface DropdownProps {
    title: string;
    heading: string;
    headingHref: string;
    description: string;
    descriptionLinkText: string;
    descriptionHref: string;
    items: DropdownItem[];
}

// ---------- Data ----------
const menuData: MenuSection[] = [
    {
        title: "Financial Research",
        description:
            "We offer specialized research & analysis services. Get more information on our financial research services and sub-services.",
        mainHref: "/kpo/financial-research.asp",
        links: [
            { label: "Corporate Finance Support", href: "/kpo/financialanalysis/corporate-finance-support-services.asp" },
            { label: "Asset Management Support", href: "/kpo/financialanalysis/asset-management-support-services.asp" },
            { label: "Business Valuation Services", href: "/kpo/financialanalysis/business-valuation-services.asp" },
            { label: "Investment Research", href: "/kpo/financialanalysis/investment-research.asp" },
            { label: "DTC Eligibility Services", href: "/kpo/dtc-eligibility-services.asp" },
            { label: "IFRS Reporting Services", href: "/kpo/ifrs-reporting-services.asp" },
            { label: "Buy Side Equity Research Services", href: "/kpo/financialanalysis/buy-side-equity-research-services.asp" },
            { label: "Sell Side Research", href: "/kpo/financialanalysis/sell-side-research-services.asp" },
            { label: "Fixed Income Research", href: "/kpo/financialanalysis/fixed-income-research-services.asp" },
            { label: "Investment Banking Support", href: "/kpo/financialanalysis/investment-banking-support-services.asp" },
            { label: "Credit Research", href: "/kpo/financialanalysis/credit-research.asp" },
            { label: "Investment Memorandum Consultation", href: "/kpo/financialanalysis/investment-memorandum-consultation.asp" },
            { label: "Equity Research", href: "/kpo/financialanalysis/equity-research.asp" },
            { label: "Financial Research and Analysis Services", href: "/kpo/financialanalysis/financial-analysis.asp" },
            { label: "Financial Modeling", href: "/kpo/financial-research/financial-modeling.asp" },
            { label: "Financial Advisory", href: "/kpo/financialanalysis/financial-advisory-services.asp" },
            { label: "Forex Market Research Services", href: "/kpo/financialanalysis/forex-market-research-services.asp" },
            { label: "Financial Risk Analysis Services", href: "/kpo/financialanalysis/financial-risk-analysis-services.asp" },
            { label: "Gap Analysis Services", href: "/kpo/financialanalysis/gap-analysis-services.asp" },
            { label: "Financial Feasibility Analysis Services", href: "/kpo/financial-feasibility-analysis-services.asp" },
            { label: "Credit Risk Modeling Services", href: "/kpo/credit-risk-modeling-services.asp" },
            { label: "Predictive Financial Analytics Services", href: "/kpo/predictive-financial-analytics-services.asp" },
            { label: "IFRS Valuation Services", href: "/kpo/ifrs-valuation-services.asp" },
            { label: "Qualitative Data Analysis Services", href: "/kpo/qualitative-data-analysis-services.asp" },
        ],
    },
    {
        title: "Market Research",
        description:
            "We offer specialized research & analysis services. Get more information on our market research services and sub-services.",
        mainHref: "/kpo/market-research-services.asp",
        links: [
            { label: "Market Basket Analysis Services", href: "/kpo/market-basket-analysis-services.asp" },
            { label: "CATI Web Surveys", href: "/kpo/cati-web-surveys.asp" },
            { label: "News Abstraction Services", href: "/kpo/news-abstraction-services.asp" },
            { label: "Market Feasibility Study", href: "/kpo/market-feasibility-study.asp" },
            { label: "Market Sales Analysis Services", href: "/kpo/market-sales-analysis-services.asp" },
            { label: "Data Analysis", href: "/kpo/data-analysis.asp" },
            { label: "Qualitative Research Services", href: "/kpo/qualitative-research-services.asp" },
            { label: "Verbatim Coding Services", href: "/kpo/verbatim-coding-services.asp" },
            { label: "Healthcare Market Research Services", href: "/kpo/healthcare-market-research-services.asp" },
            { label: "Real Estate Market Research Services", href: "/kpo/real-estate-market-research-services.asp" },
            { label: "Restaurant Market Research Services", href: "/kpo/restaurant-market-research-services.asp" },
            { label: "Agriculture Market Research Services", href: "/kpo/agriculture-market-research-services.asp" },
            { label: "Market Sizing Research Services", href: "/kpo/market-sizing-research-services.asp" },
            { label: "Industry Analysis", href: "/kpo/industry-analysis-services.asp" },
            { label: "Online Market Research", href: "/kpo/online-market-research.asp" },
            { label: "Brand Research Services", href: "/kpo/brand-research-services.asp" },
            { label: "Call Center Surveys", href: "/kpo/marketresearch/call-center-surveys.asp" },
            { label: "Market Research Surveys", href: "/kpo/marketresearch/market-research-surveys.asp" },
            { label: "Marketing Questionnaire Design", href: "/kpo/marketresearch/questionnaire-design.asp" },
            { label: "Newsletter Services", href: "/kpo/newsletter-service.asp" },
            { label: "Syndicated Research", href: "/kpo/webresearch/syndicated-research.asp" },
            { label: "SWOT Analysis", href: "/kpo/swot-analysis.asp" },
            { label: "Fabric Market Research Services", href: "/kpo/fabric-market-research-services.asp" },
            { label: "Insurance Market Research Services", href: "/kpo/insurance-market-research-services.asp" },
            { label: "Survey Programming Services", href: "/kpo/survey-programming-services.asp" },
            { label: "Time Series Analysis Services", href: "/kpo/time-series-analysis-services.asp" },
            { label: "Exploratory Data Analysis Services", href: "/kpo/exploratory-data-analysis-services.asp" },
            { label: "Quantitative Data Analysis Services", href: "/kpo/quantitative-data-analysis-services.asp" },
            { label: "Market Segmentation Analysis Services", href: "/kpo/market-segmentation-analysis-services.asp" },
            { label: "Healthcare Market Segmentation Services", href: "/kpo/healthcare-market-segmentation-services.asp" },
            { label: "PESTEL Analysis Services", href: "/kpo/pestel-analysis-services.asp" },
            { label: "Statistical Analysis Services", href: "/kpo/statistical-analysis-services.asp" },
            { label: "Product Research Services", href: "/kpo/product-research-services.asp" },
            { label: "Open-end Coding Market Research Services", href: "/kpo/open-end-coding-services.asp" },
            { label: "Amazon Product Research Services", href: "/kpo/amazon-product-research-services.asp" },
            { label: "Consumer Market Research Services", href: "/kpo/consumer-market-research-services.asp" },
            { label: "Customer Segmentation Services", href: "/DataManagement/customer-segmentation-services.asp" },
        ]
    },
    {
        title: "Business Research",
        description:
            "We offer specialized research & analysis services. Get more information on our Business Research Services and sub-services.",
        mainHref: "/kpo/business-research.asp",
        links: [
            { label: "Competitor Benchmarking Services", href: "/kpo/competitor-benchmarking-services.asp" },
            { label: "Business Benchmarking Services", href: "/kpo/business-benchmarking-services.asp" },
            { label: "Primary & Secondary Research Services", href: "/kpo/business-research/primary-secondary-research.asp" },
            { label: "Custom Research Reports", href: "/kpo/research-reports.asp" },
            { label: "Media Research", href: "/kpo/business-research/media-research-services.asp" },
            { label: "Business Market Research", href: "/business-research/business-market-research.asp" },
            { label: "Company Profiling", href: "/kpo/CompanyProfilePreparation.asp" },
            { label: "Business Development Support", href: "/business-research/business-development-support.asp" },
            { label: "Social Media Monitoring", href: "/kpo/marketresearch/social-media-monitoring.asp" },
            { label: "Perceptual Mapping", href: "/kpo/perceptual-mapping.asp" },
            { label: "Competitor Analysis", href: "/kpo/competitor-analysis.asp" },
            { label: "Industry Profiling Services", href: "/business-research/industry-profiling.asp" },
            { label: "Trend Analysis", href: "/kpo/services/trend-analysis.asp" },
            { label: "Competitive Business Analysis", href: "/kpo/business-research/competitive-business-analysis.asp" },
            { label: "Business Plans", href: "/business-research/business-plans.asp" },
            { label: "Business Intelligence Dashboard Visualization", href: "/kpo/business-intelligence-dashboard-visualization.asp" },
            { label: "Benchmarking Services", href: "/kpo/benchmarking-services.asp" },
            { label: "Performance Benchmarking Services", href: "/kpo/performance-benchmarking-services.asp" },
            { label: "IT Benchmarking Services", href: "/kpo/it-benchmarking-services.asp" },
            { label: "Healthcare Benchmarking Services", href: "/kpo/healthcare-benchmarking-services.asp" },
            { label: "Data Benchmarking Services", href: "/kpo/data-benchmarking-services.asp" },
            { label: "Cross Tabulation Analysis Services", href: "/kpo/cross-tabulation-analysis-services.asp" },
            { label: "Integrated Business Planning Services", href: "/kpo/integrated-business-planning-services.asp" },
            { label: "Benchmarking Analytics Services", href: "/kpo/benchmarking-analytics-services.asp" },
            { label: "Property Risk Management Services", href: "/kpo/property-risk-management-services.asp" },
            { label: "Account-based Marketing Services", href: "/kpo/account-based-marketing-services.asp" },
            { label: "Business Modeling Services", href: "/kpo/business-modeling-services.asp" },
        ],
    },
    {
        title: "Pharmaceutical Research",
        description:
            "We offer specialized research & analysis services. Get more information on our pharmaceutical research services and sub-services.",
        mainHref: "/kpo/pharmaceutical-research.asp",
        links: [
            {
                label: "Intellectual Property and Open Innovation",
                href: "/kpo/pharmaceutical-research/intellectual-property-open-innovation.asp",
            },
            {
                label: "Market Forecast and Analysis Services",
                href: "/kpo/pharmaceutical-research/market-forecast-analysis.asp",
            },
            {
                label: "Competitive Intelligence Research Services",
                href: "/kpo/pharmaceutical-research/competitive-intelligence-research-services.asp",
            },
            {
                label: "Medical Writing Support Services",
                href: "/kpo/pharma/medical-writing-support-services.asp",
            },
            {
                label: "Key Opinion Leaders",
                href: "/kpo/services/key-opinion-leaders.asp",
            },
            {
                label: "Patent Landscape Analysis",
                href: "/kpo/pharma/patent-landscape-analysis.asp",
            },
            {
                label: "Market Landscape and Assessment Services",
                href: "/kpo/pharmaceutical-research/market-landscape-assessment-services.asp",
            },
            {
                label: "Image Analysis Services",
                href: "/kpo/pharma/image-analysis-services.asp",
            },
        ],
    },
    {
        title: "Scientific Research",
        description:
            "We offer specialized research & analysis services. Get more information on our Scientific Research services and sub-services.",
        mainHref: "/kpo/scientific-research/scientific-research-services.asp",
        links: [
            {
                label: "Crystallography Research Services",
                href: "/kpo/scientific-research/crystallography-research-services.asp",
            },
            {
                label: "Life Science Informatics Services",
                href: "/kpo/scientific-research/life-science-informatics-services.asp",
            },
            {
                label: "Scientific Data Mining Services",
                href: "/kpo/scientific-research/scientific-data-mining-services.asp",
            },
            {
                label: "Structural Biology Services",
                href: "/kpo/scientific-research/structural-biology-services.asp",
            },
        ],
    },
    {
        title: "Research Reports",
        description:
            "We offer specialized research & analysis services. Get more information on our research report services and sub-services.",
        mainHref: "/kpo/research-report-services.asp",
        links: [
            {
                label: "Market Research Report Services",
                href: "/kpo/financial-research/market-research-report-services.asp",
            },
            {
                label: "Financial Research Reports",
                href: "/kpo/financial-research/financial-research-reports.asp",
            },
            {
                label: "Macroeconomics Reports Services",
                href: "/kpo/financial-research/macroeconomics-reports-services.asp",
            },
            {
                label: "Microeconomics Reports Services",
                href: "/kpo/microeconomics-reports-services.asp",
            },
            {
                label: "Commodities and Real Estate Reports",
                href: "/kpo/commodities-and-real-estate-reports-services.asp",
            },
            {
                label: "Market Trends Reports Services",
                href: "/kpo/market-trends-report-services.asp",
            },
            {
                label: "Structured Finance Reports Services",
                href: "/kpo/structured-finance-reports-services.asp",
            },
            {
                label: "Report Automation Services",
                href: "/kpo/report-automation-services.asp",
            },
            {
                label: "Syndicated Research Reports",
                href: "/kpo/syndicated-research-report-services.asp",
            },
        ],
    },
    {
        title: "Articles",
        description:
            "Our research & analysis resources are comprehensive and well-researched. Check out our research & analysis articles.",
        mainHref: "/kpo/articles/",
        links: [
            // Financial Research Articles
            { label: "Financial Research Articles", href: "#" },
            {
                label: "Why Outsource Financial Analysis?",
                href: "/kpo/financialanalysis/whyo2i.asp",
            },
            {
                label:
                    "Key B2B Financial Services Marketing Trends to Future-proof Your Business",
                href: "/kpo/articles/b2b-marketing-trends-to-future-proof-your-financial-services.asp",
            },

            // General Articles
            { label: "General Articles", href: "#" },
            {
                label: "Transforming Business Processes with Image Analysis Services",
                href: "/kpo/articles/image-analysis-transforming-business.asp",
            },
            {
                label:
                    "The Influence of Technological Advancements on Pharmaceutical Services",
                href: "/kpo/articles/the-influence-of-technology-on-pharmaceutical-services.asp",
            },
            {
                label:
                    "The Value of Competitive Analytics Benchmarking in B2B Leadership",
                href: "/kpo/articles/competitive-analytics-benchmarking-in-b2b-growth.asp",
            },
            {
                label:
                    "The Evolution of Business Research Services and Business Intelligence",
                href: "/kpo/articles/business-research-services-and-future-of-business-intelligence.asp",
            },
            {
                label: "Insider Tips to Benchmark Your Business Like a Pro",
                href: "/kpo/articles/tips-to-benchmark-your-business.asp",
            },
            {
                label:
                    "Benchmarking And How It Improves the Quality of Healthcare",
                href: "/kpo/articles/the-definitive-guide-to-healthcare-and-benchmarking.asp",
            },
            {
                label:
                    "The Power of Data - How Research Services Drive Informed Decision-Making",
                href: "/kpo/articles/power-of-data-informed-decision-making.asp",
            },
            {
                label:
                    "How to Stay Ahead of Your Competitors by Outsourcing Research & Analysis Services",
                href: "/kpo/articles/how-to-stay-ahead-of-your-competitors-by-outsourcing-research-analysis-services.asp",
            },
            {
                label:
                    "Revolutionary Growth of Research and Analysis Industry in the Next Decade",
                href: "/kpo/articles/revolutionary-growth-of-research-and-analysis-industry-in-next-decade.asp",
            },
            {
                label: "Outsourcing Research Services",
                href: "/kpo/articles/outsourcing-research-analysis-services.asp",
            },
            {
                label: "Research & Analysis Outsourcing Center",
                href: "/kpo/knowledge-process-outsourcing-knowledge-center.asp",
            },
            {
                label: "Research & Analysis in India",
                href: "/kpo/articles/kpo-india-advantage.asp",
            },
            {
                label: "Research Process Outsourcing (RPO)",
                href: "/kpo/research-process-outsourcing.asp",
            },
            {
                label: "Knowledge Process Outsourcing",
                href: "/kpo/articles/what-is-knowledge-process-outsourcing.asp",
            },
            {
                label: "Logistic Regression Analysis",
                href: "/kpo/articles/logistic-regression-analysis.asp",
            },
            {
                label: "Research Services Outsourcing",
                href: "/kpo/articles/kpo-areas.asp",
            },
            {
                label: "Research Services - Apprehensions",
                href: "/kpo/articles/kpo-apprehensions.asp",
            },
            {
                label: "Why Outsource Web Research to O2I",
                href: "/kpo/webresearch/whyo2i.asp",
            },
            {
                label: "7 Reasons to Outsource Desk & Web Research",
                href: "/kpo/desk-web-research.asp",
            },
        ],
    }
    // ... add your other sections here (Business Research, Pharma, etc.)

];


// ---------- DropdownMenu Component --------

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
const NavigationMenu: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ul className="flex items-center justify-between space-x-8 py-4">
                    {menuData.map((section, idx) => (
                        <DropdownMenu
                            key={idx}
                            title={section.title}
                            heading={section.title}
                            headingHref={section.mainHref}
                            description={section.description}
                            descriptionLinkText={`${section.title} services and sub-services`}
                            descriptionHref={section.mainHref}
                            items={section.links}
                        />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavigationMenu;