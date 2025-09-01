import React, { useState } from "react";

const MarketingSalesCreativeMedia = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const subtopics = [
    {
      title: "Brand Strategy & Positioning",
      description:
        "Define brand identity, messaging, and market positioning to create a strong, differentiated presence that resonates with target audiences."
    },
    {
      title: "Visual Identity & Logo Systems",
      description:
        "Design consistent visual branding elements, including logos, typography, and color systems, to ensure cohesive brand recognition."
    },
    {
      title: "Graphic Design & Collateral",
      description:
        "Produce high-quality marketing collateral such as brochures, presentations, and digital assets that align with brand guidelines."
    },
    {
      title: "Copywriting & Content Marketing",
      description:
        "Craft compelling written content across blogs, websites, ads, and campaigns to attract, engage, and convert customers."
    },
    {
      title: "Social Media Management",
      description:
        "Plan, schedule, and manage social media campaigns to increase engagement, build community, and grow brand awareness."
    },
    {
      title: "Influencer Marketing",
      description:
        "Partner with relevant influencers to expand reach, enhance credibility, and drive customer acquisition through authentic promotion."
    },
    {
      title: "SEO Audits & Optimization",
      description:
        "Perform SEO audits, keyword research, and on-page/off-page optimization to improve organic search rankings and visibility."
    },
    {
      title: "SEM/PPC Campaign Management",
      description:
        "Run paid search and display ad campaigns on platforms like Google Ads to generate qualified leads and maximize ROI."
    },
    {
      title: "App Store Optimization (ASO)",
      description:
        "Optimize app store listings with keywords, visuals, and reviews to improve app visibility and downloads."
    },
    {
      title: "Email Marketing & CRM Journeys",
      description:
        "Create personalized email campaigns and automated CRM journeys that nurture leads and strengthen customer relationships."
    },
    {
      title: "Marketing Automation (HubSpot/Marketo)",
      description:
        "Implement automation platforms to streamline lead nurturing, customer engagement, and campaign performance tracking."
    },
    {
      title: "CRO: Landing Pages & Funnels",
      description:
        "Design and optimize landing pages and sales funnels to increase conversions and reduce customer drop-offs."
    },
    {
      title: "Video Production & Editing",
      description:
        "Produce engaging videos for ads, explainer content, and storytelling campaigns that enhance brand communication."
    },
    {
      title: "Photography & Product Shoots",
      description:
        "Capture high-quality images for products, events, and brand visuals that elevate marketing and e-commerce presence."
    },
    {
      title: "Podcast Production",
      description:
        "Plan, record, and distribute professional podcasts to establish thought leadership and build audience engagement."
    },
    {
      title: "PR & Media Relations",
      description:
        "Build strong relationships with media outlets, secure press coverage, and manage public relations strategies."
    },
    {
      title: "Event Marketing & Trade Shows",
      description:
        "Plan and execute marketing for live events and trade shows to showcase brand offerings and generate leads."
    },
    {
      title: "Webinar Production & Moderation",
      description:
        "Host professional webinars with engaging content, moderation, and interactive features to connect with audiences."
    },
    {
      title: "Affiliate & Partner Marketing",
      description:
        "Manage affiliate programs and partnerships to expand reach, generate leads, and drive incremental sales."
    },
    {
      title: "Community Management",
      description:
        "Build and nurture online communities to foster engagement, customer loyalty, and peer-to-peer support."
    },
    {
      title: "Sales Enablement Materials",
      description:
        "Develop sales decks, case studies, and playbooks that empower sales teams with the resources to close deals."
    },
    {
      title: "SDR/Inside Sales & Appointment Setting",
      description:
        "Provide lead qualification and outbound calling services to book qualified appointments for sales teams."
    },
    {
      title: "Account-Based Marketing (ABM)",
      description:
        "Run personalized campaigns targeting high-value accounts with tailored messaging and multi-channel strategies."
    },
    {
      title: "Lead Scoring & Routing",
      description:
        "Implement lead scoring frameworks to prioritize prospects and route them effectively to the right sales reps."
    },
    {
      title: "Proposal Writing & RFP Responses",
      description:
        "Craft compelling proposals and structured RFP responses that increase the likelihood of winning new business."
    },
    {
      title: "DTC E-Commerce Growth Marketing",
      description:
        "Design data-driven growth strategies for direct-to-consumer brands to boost online sales and customer acquisition."
    },
    {
      title: "Marketplace (Amazon/Etsy/eBay) Ops",
      description:
        "Optimize product listings, manage advertising, and oversee marketplace operations to maximize visibility and sales."
    },
    {
      title: "Reputation Management & Reviews",
      description:
        "Monitor and respond to customer reviews, managing online reputation to build trust and credibility."
    },
    {
      title: "Analytics & Multi-Touch Attribution",
      description:
        "Track marketing performance across channels, using attribution models to identify which touchpoints drive conversions."
    },
    {
      title: "CAN-SPAM/CCPA Marketing Compliance",
      description:
        "Ensure marketing practices comply with regulations like CAN-SPAM and CCPA to reduce legal risks and maintain trust."
    }
  ];

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-6 py-20 flex flex-col items-center bg-gray-50">
      {/* Intro Section */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Marketing, Sales, Creative & Media
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our Marketing, Sales, Creative & Media services help businesses build strong brands,
          engage audiences, and accelerate growth. From strategy and design to campaigns
          and analytics, we provide end-to-end solutions to maximize impact and ROI.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {subtopics.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleCard(index)}
            className="relative cursor-pointer p-6 rounded-xl shadow-md bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {item.title}
            </h2>

            {/* Content */}
            <p
              className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {item.description}
            </p>

            {/* Arrow */}
            <span
              className={`absolute bottom-4 right-4 text-gray-400 text-xl transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingSalesCreativeMedia;
