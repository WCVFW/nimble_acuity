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
        { text: "iOS App Development", href: "/services/ITServices/MobileAppDevelopmentServices/iOSAppDevelopmentServices" },
        { text: "Mobile Commerce Development", href: "/services/ITServices/MobileAppDevelopmentServices/MobileCommerceDevelopmentServices" },
        { text: "Kotlin App Development", href: "/services/ITServices/MobileAppDevelopmentServices/KotlinAppDevelopmentServices" },
        { text: "iOS App Maintenance Services", href: "/services/ITServices/MobileAppDevelopmentServices/IosAppMaintenanceServices" },
        { text: "Arabic App Development", href: "/services/ITServices/MobileAppDevelopmentServices/ArabicAppDevelopmentServices" },
        { text: "Xcode App Development", href: "/services/ITServices/MobileAppDevelopmentServices/XcodeAppDevelopmentServices" },
        { text: "Wearable App Development", href: "/services/ITServices/MobileAppDevelopmentServices/WearableAppDevelopmentServices" },
        { text: "iPad App Development", href: "/services/ITServices/MobileAppDevelopmentServices/IpadAppDevelopmentServices" },
        { text: "Titanium App Development", href: "/services/ITServices/MobileAppDevelopmentServices/TitaniumAppDevelopmentServices" },
        { text: "Native App Development", href: "/services/ITServices/MobileAppDevelopmentServices/NativeAppDevelopmentServices" },
        { text: "HTML5 Mobile App Development", href: "/services/ITServices/MobileAppDevelopmentServices/Html5MobileAppDevelopmentServices" },
        { text: "HoloLens App Development", href: "/services/ITServices/MobileAppDevelopmentServices/HoloLensAppDevelopmentServices" },
        { text: "iPhone App Development", href: "/services/ITServices/MobileAppDevelopmentServices/IPhoneAppDevelopmentServices" },
        { text: "Swift App Development", href: "/services/ITServices/MobileAppDevelopmentServices/SwiftAppDevelopmentServices" },
        { text: "jQuery App Development", href: "/services/ITServices/MobileAppDevelopmentServices/JQueryAppDevelopmentServices" },
        { text: "Apple Watch App Development", href: "/services/ITServices/MobileAppDevelopmentServices/AppleWatchAppDevelopmentServices" },
        { text: "PhoneGap App Development", href: "/services/ITServices/MobileAppDevelopmentServices/PhoneGapAppDevelopmentServices" },
        { text: "On-demand App Development", href: "/services/ITServices/MobileAppDevelopmentServices/OnDemandServicesAppDevelopment" },
        { text: "Mobile App Design Services", href: "/services/ITServices/MobileAppDevelopmentServices/MobileAppDesignServices" },
        { text: "iBeacon App Development", href: "/services/ITServices/MobileAppDevelopmentServices/IBeaconAppDevelopment" },
        { text: "Dating App Development ", href: "/services/ITServices/MobileAppDevelopmentServices/DatingAppDevelopment" },
        { text: "Hybrid App Development", href: "/services/ITServices/MobileAppDevelopmentServices/HybridAppDevelopment" },
        { text: "Flutter App Development", href: "/services/ITServices/MobileAppDevelopmentServices/FlutterAppDevelopment" },
        { text: "Android App Maintenance Services", href: "/services/ITServices/MobileAppDevelopmentServices/AndroidAppMaintenance" },
        { text: "Ionic Mobile App Development", href: "/services/ITServices/MobileAppDevelopmentServices/IonicAppDevelopment" },
        { text: "Cross-platform App Development", href: "/services/ITServices/MobileAppDevelopmentServices/CrossPlatformAppDevelopment" },
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Application",
    href: "/services/ITServices/ApplicationServices",
    dropdown: {
      subheading: "Application Development Service",
      subheadingHref: "/services/ITServices/ApplicationServices",
      links: [
        { text: "ADA Compliance Services", href: "/services/ITServices/ApplicationServices/ADACompliance" },
        { text: "Hedera Hashgraph Development", href: "/services/ITServices/ApplicationServices/HederaDevelopment" },
        { text: "Odoo Development Services", href: "/services/ITServices/ApplicationServices/OdooDevelopment" },
        { text: "API Development Services", href: "/services/ITServices/ApplicationServices/APIDevelopment" },
        { text: "Hyperledger Development Services", href: "/services/ITServices/ApplicationServices/HyperledgerDevelopment" },
        { text: "Pimcore Development Services", href: "/services/ITServices/ApplicationServices/PimcoreDevelopment" },
        { text: "API Management Services", href: "/services/ITServices/ApplicationServices/APIManagement" },
        { text: "Kony App Development ", href: "/services/ITServices/ApplicationServices/KonyDevelopment" },
        { text: "Python Development Services", href: "/services/ITServices/ApplicationServices/PythonDevelopment" },
        { text: "Application Modernization Services", href: "/services/ITServices/ApplicationServices/ApplicationModernization" },
        { text: "LAMP Development Services", href: "/services/ITServices/ApplicationServices/LAMPDevelopment" },
        { text: "Svelte JS Development Services", href: "/services/ITServices/ApplicationServices/SvelteDevelopment" },
        { text: "AR Game Development", href: "/services/ITServices/ApplicationServices/ARGameDevelopment" },
        { text: "Laravel Development", href: "/services/ITServices/ApplicationServices/LaravelDevelopment" },
        { text: "API Integration Services", href: "/services/ITServices/ApplicationServices/APIIntegration" },
        { text: "DApps Development Services", href: "/services/ITServices/ApplicationServices/DAppsDevelopment" },
        { text: "Linux Software Development", href: "/services/ITServices/ApplicationServices/LinuxDevelopment" },
        { text: "Unity 3D Game Development", href: "/services/ITServices/ApplicationServices/UnityDevelopment" },
        { text: "Dart Development Services", href: "/services/ITServices/ApplicationServices/DartDevelopment" },
        { text: "Motion UI Development Services", href: "/services/ITServices/ApplicationServices/MotionUIDevelopment" },
        { text: "Application Support and Maintenance Services", href: "/services/ITServices/ApplicationServices/ApplicationSupport" },
        { text: "GraphQL Development Services", href: "/services/ITServices/ApplicationServices/GraphQLDevelopment" },
        { text: "Objective C Development Services", href: "/services/ITServices/ApplicationServices/ObjectiveCDevelopment" },
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Web Development",
    href: "/services/ITServices/WebDevelopment",
    dropdown: {
      subheading: "Web Development Service",
      subheadingHref: "/services/ITServices/WebDevelopment",
      links: [
        { text: "Scala Development Services", href: "/services/ITServices/WebDevelopment/ScalaDevelopment" },
        { text: "Landing Page Design Services", href: "/services/ITServices/WebDevelopment/LandingPageDesign" },
        { text: "WordPress Migration Services", href: "/services/ITServices/WebDevelopment/WordPressMigration" },
        { text: "PHP Development Services", href: "/services/ITServices/WebDevelopment/PHPDevelopment" },
        { text: "Progressive Web App Development", href: "/services/ITServices/WebDevelopment/PWA" },
        { text: "WordPress Plugin Development", href: "/services/ITServices/WebDevelopment/WordPressPlugin" },
        { text: "Ruby on Rails Development", href: "/services/ITServices/WebDevelopment/RubyOnRails" },
        { text: "Web Application Development", href: "/services/ITServices/WebDevelopment/WebApplication" },
        { text: "WordPress Support and Maintenance Services", href: "/services/ITServices/WebDevelopment/WordPressSupport" },
        { text: "Joomla Development Services", href: "/services/ITServices/WebDevelopment/JoomlaDevelopment" },
        { text: "Bootstrap Web Development ", href: "/services/ITServices/WebDevelopment/BootstrapDevelopment" },
        { text: "WordPress Theme Development", href: "/services/ITServices/WebDevelopment/WordPressTheme" },
        { text: "Responsive Web Design Services", href: "/services/ITServices/WebDevelopment/ResponsiveWebDesign" },
        { text: "Django Web Development", href: "/services/ITServices/WebDevelopment/DjangoDevelopment" },
        { text: "WordPress Website Development", href: "/services/ITServices/WebDevelopment/WordPressDevelopment" },
        { text: "UI/UX Design Services", href: "/services/ITServices/WebDevelopment/UiUxDevelopment" },
        { text: "DotNetNuke Development Services", href: "/services/ITServices/WebDevelopment/DotNetNukeDevelopment" },
        { text: "Zend Development Services", href: "/services/ITServices/WebDevelopment/ZendDevelopment" },
        { text: "Website Maintenance Services", href: "/services/ITServices/WebDevelopment/WebsiteMaintenance" },
        { text: "Flask Web Development Services", href: "/services/ITServices/WebDevelopment/FlaskDevelopment" },
        { text: "ASP.NET Development Services", href: "/services/ITServices/WebDevelopment/AspNetDevelopment" },
        { text: "Website Migration Services", href: "/services/ITServices/WebDevelopment/WebsiteMigration" },
        { text: "Gatsby Development Services", href: "/services/ITServices/WebDevelopment/GatsbyDevelopment" },
        { text: "WebSocket Development Services", href: "/services/ITServices/WebDevelopment/WebSocketDevelopment" },
        { text: "Wireframe Design Services", href: "/services/ITServices/WebDevelopment/WireframeDesign" },
        { text: "Golang Web Development Services", href: "/services/ITServices/WebDevelopment/GolangDevelopment" },
        { text: "Opencart Web Development Services", href: "/services/ITServices/WebDevelopment/OpenCartDevelopment" },
        { text: "Kentico CMS Development Services", href: "/services/ITServices/WebDevelopment/KenticoDevelopment" },
        { text: "Drupal Development Services", href: "/services/ITServices/WebDevelopment/DrupalDevelopment" },
        { text: "Mobile Website Design Services", href: "/services/ITServices/WebDevelopment/MobileWebsiteDesign" },
        { text: "Rich Internet Application Development", href: "/services/ITServices/WebDevelopment/RiaDevelopment" },
        { text: "Single Page Application Development Services", href: "/services/ITServices/WebDevelopment/SpaDevelopment" },
        { text: "Parallax Web Design Services", href: "/services/ITServices/WebDevelopment/ParallaxDesign" },
        { text: "Sitefinity CMS Development Services", href: "/services/ITServices/WebDevelopment/SitefinityDevelopment" },
        { text: "E-commerce Website Development", href: "/services/ITServices/WebDevelopment/EcommerceDevelopment" },
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Service Now",
    href: "/services/ITServices/ServiceNow",
    dropdown: {
      subheading: "Service Now",
      subheadingHref: "/services/ITServices/ServiceNow",
      links: [
        { text: "ServiceNow Consulting Services", href: "/services/ITServices/ServiceNow/ServiceNowConsulting" },
        { text: "ServiceNow HR Service Delivery", href: "/services/ITServices/ServiceNow/HrServiceNow" },
        { text: "ServiceNow Change and Release Management Services", href: "/services/ITServices/ServiceNow/ServiceNowChange" },
        { text: "ServiceNow IT Operations Management Services", href: "/services/ITServices/ServiceNow/ServiceNowITOM" },
        { text: "ServiceNow Resource Management Services", href: "/services/ITServices/ServiceNow/ServiceNowResourceManagement" },
        { text: "ServiceNow App Development Services", href: "/services/ITServices/ServiceNow/ServiceNowAppDevelopment" },
        { text: "ServiceNow Customer Service Management Services", href: "/services/ITServices/ServiceNow/ServiceNowCSM" },
        { text: "ServiceNow Migration Services", href: "/services/ITServices/ServiceNow/ServiceNowMigration" },
        { text: "ServiceNow ITBM", href: "/services/ITServices/ServiceNow/ServiceNowITBM" },
        { text: "ServiceNow Integration Services", href: "/services/ITServices/ServiceNow/ServiceNowIntegration" },
        { text: "ServiceNow ITSM Solutions", href: "/services/ITServices/ServiceNow/ServiceNowITSM" },
        { text: "ServiceNow Security Operations Services", href: "/services/ITServices/ServiceNow/ServiceNowSecOps" },
        { text: "", href: "" }, 
      ],
    },
  },
  {
    title: "Azure Services",
    href: "/services/ITServices/AzureConsulting",
    dropdown: {
      subheading: "Azure consulting Services",
      subheadingHref: "/services/ITServices/AzureConsulting",
      links: [
        { text: "Azure Managed Services", href: "/services/ITServices/AzureConsulting/AzureManagedServices" },
        { text: "Azure integration services", href: "/services/ITServices/AzureConsulting/AzureIntegration" },
        { text: "Azure cloud consulting services", href: "/services/ITServices/AzureConsulting/AzureCloudConsulting" },
        { text: "Azure Migration Services", href: "/services/ITServices/AzureConsulting/AzureMigration" },
        { text: "Azure Application Development Services", href: "/services/ITServices/AzureConsulting/AzureApplicationDevelopment" },
        { text: "Azure Synapse Analytics Services", href: "/services/ITServices/AzureConsulting/AzureSynapseAnalytics" },
      ],
    },
  },
  {
    title: "Microsoft Services",
    href: "/services/ITServices/MicrosoftConsulting",
    dropdown: {
      subheading: "Microsoft consulting Services",
      subheadingHref: "/services/ITServices/MicrosoftConsulting",
      links: [
        { text: "Microsoft Power Automate Consulting Service", href: "/services/ITServices/MicrosoftConsulting/MicrosoftPowerAutomate" },
        { text: "SharePoint Development Services", href: "/services/ITServices/MicrosoftConsulting/SharePointDevelopment" },
        { text: "Microsoft SharePoint Services", href: "/services/ITServices/MicrosoftConsulting/MicrosoftSharePoint" },
        { text: "PowerApps Consulting Services", href: "/services/ITServices/MicrosoftConsulting/PowerAppsConsulting" },
        { text: "Power BI Services", href: "/services/ITServices/MicrosoftConsulting/PowerBIServices" },
        { text: "Microsoft Dynamics 365 Services", href: "/services/ITServices/MicrosoftConsulting/MicrosoftDynamics" },
        { text: "Microsoft Dynamics 365 Customization and Setup Services", href: "/services/ITServices/MicrosoftConsulting/MicrosoftDynamicsCustomization" },
        { text: "Microsoft Office 365 Services", href: "/services/ITServices/MicrosoftConsulting/MicrosoftOffice365" },
        { text: " Microsoft Stack Development Services", href: "/services/ITServices/MicrosoftConsulting/MicrosoftStackDevelopment" },
        { text: "Microsoft Teams Consulting Services", href: "/services/ITServices/MicrosoftConsulting/MicrosoftTeamsConsulting" },
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "E-Commerce Development",
    href: "/services/ITServices/ECommerceDevelopment",
    dropdown: {
      subheading: "E-Commerce Development",
      subheadingHref: "/services/ITServices/ECommerceDevelopment",
      links: [
        { text: "3dcart Development Services", href: "/services/ITServices/ECommerceDevelopment/ThreeDCartDevelopment" },
        { text: "Prestashop Web Development Services", href: "/services/ITServices/ECommerceDevelopment/PrestashopDevelopment" },
        { text: "Virtuemart Development Services", href: "/services/ITServices/ECommerceDevelopment/VirtuemartDevelopment" },
        { text: "BigCommerce Development Services", href: "/services/ITServices/ECommerceDevelopment/BigCommerceDevelopment" },
        { text: "Shopify Development Services", href: "/services/ITServices/ECommerceDevelopment/ShopifyDevelopment" },
        { text: "WooCommerce Development Services", href: "/services/ITServices/ECommerceDevelopment/WooCommerceDevelopment" },
        { text: "CS Cart Development Services", href: "/services/ITServices/ECommerceDevelopment/CsCartDevelopment" },
        { text: "Spree Commerce Development Services", href: "/services/ITServices/ECommerceDevelopment/SpreeCommerceDevelopment" },
        { text: "OsCommerce Development Services", href: "/services/ITServices/ECommerceDevelopment/OsCommerceDevelopment" },
        { text: "Squarespace Development Services", href: "/services/ITServices/ECommerceDevelopment/SquarespaceDevelopment" },
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Cloud Services",
    href: "/services/ITServices/CloudConsulting",
    dropdown: {
      subheading: "Cloud Services",
      subheadingHref: "/services/ITServices/CloudConsulting",
      links: [
        { text: "Hybrid Cloud Services", href: "/services/ITServices/CloudConsulting/HybridCloudServices" },
        { text: "Multi-Cloud Management Services", href: "/services/ITServices/CloudConsulting/MultiCloudManagement" },
        { text: "Multi-cloud Services", href: "/services/ITServices/CloudConsulting/MultiCloudServices" },
        { text: "Cloud Business Transformation Services", href: "/services/ITServices/CloudConsulting/CloudBusinessTransformation" },
        { text: "Alibaba Cloud Computing Services", href: "/services/ITServices/CloudConsulting/AlibabaCloudServices" },
        { text: "IBM Cloud Managed Services", href: "/services/ITServices/CloudConsulting/IbmCloudManagedServices" },
        { text: "Cloud Security Services", href: "/services/ITServices/CloudConsulting/CloudSecurityServices" },
        { text: "Cloud Integration Services", href: "/services/ITServices/CloudConsulting/CloudIntegrationServices" },
        { text: "Managed Application Services", href: "/services/ITServices/CloudConsulting/ManagedApplicationServices" },
        { text: "Alexa Skill Development Services", href: "/services/ITServices/CloudConsulting/AlexaSkillDevelopmentServices" },
        { text: "Cloud Monitoring Services", href: "/services/ITServices/CloudConsulting/CloudMonitoringServices" },
        { text: "BSS Transformation Services", href: "/services/ITServices/CloudConsulting/BSSTransformationServices" },
        { text: "AWS Application Integration Services", href: "/services/ITServices/CloudConsulting/AWSApplicationIntegrationServices" },
        { text: "Cloud Application Development Services", href: "/services/ITServices/CloudConsulting/CloudApplicationDevelopmentServices" },
        { text: "Containerization Services", href: "/services/ITServices/CloudConsulting/ContainerizationServices" },
        { text: "Cloud Computing Application Development Services", href: "/services/ITServices/CloudConsulting/CloudComputingApplicationDevelopmentServices" },
        { text: "Office 365 Setup and Migration Services", href: "/services/ITServices/CloudConsulting/Office365SetupAndMigrationServices" },
        { text: "Amazon Redshift Services", href: "/services/ITServices/CloudConsulting/AmazonRedshiftServices" },
        { text: "Data Warehouse as a Service", href: "/services/ITServices/CloudConsulting/DataWarehouseServices" },
        { text: "Cloud Migration Services", href: "/services/ITServices/CloudConsulting/CloudMigrationServices" },
        { text: "Cloud Optimization Services", href: "/services/ITServices/CloudConsulting/CloudOptimizationServices" },
        { text: "Adobe Creative Cloud Services", href: "/services/ITServices/CloudConsulting/AdobeCreativeCloudServices" },
        { text: "Digital Workplace Services", href: "/services/ITServices/CloudConsulting/DigitalWorkplaceServices" },
        { text: "Cloud Native Application Development Services", href: "/services/ITServices/CloudConsulting/CloudNativeAppDevelopmentServices" },
        { text: "Oracle Cloud Services", href: "/services/ITServices/CloudConsulting/OracleCloudServices" },
        { text: "Amazon Web Services", href: "/services/ITServices/CloudConsulting/AmazonWebServices" },
        { text: "Cloud Enablement Services", href: "/services/ITServices/CloudConsulting/CloudEnablementServices" },
        { text: "Snowflake Data Warehouse Services", href: "/services/ITServices/CloudConsulting/SnowflakeDataWarehouseServices" },
        { text: "Infrastructure as a Service", href: "/services/ITServices/CloudConsulting/InfrastructureAsAService" },
        { text: "Toktiv - Business VoIP Phone Service", href: "/services/ITServices/CloudConsulting/ToktivBusinessVoip" },
        { text: "Hybrid Infrastructure Managed Services", href: "/services/ITServices/CloudConsulting/HybridInfrastructureManagedServices" },
        { text: "Platform as a Service (PaaS)", href: "/services/ITServices/CloudConsulting/PlatformAsAService" },
        { text: "Virtual Desktop Infrastructure (VDI) Services", href: "/services/ITServices/CloudConsulting/VirtualDesktopInfrastructure" },
      ],
    },
  },
  {
    title: "IT Staffing",
    href: "/services/ITServices/ITStaffingServices",
    dropdown: {
      subheading: "IT Staffing",
      subheadingHref: "/services/ITServices/ITStaffingServices",
      links: [
        { text: "Hire Angular Developers", href: "/services/ITServices/ITStaffingServices/HireAngularDevelopers" },
        { text: "Hire WordPress Developers", href: "/services/ITServices/ITStaffingServices/ITStaffingForWordPress" },
        { text: "Hire Maximo Developers", href: "/services/ITServices/ITStaffingServices/HireMaximoDevelopers" },
        { text: "Hire Node.js Developers", href: "/services/ITServices/ITStaffingServices/HireNodeJSDevelopers" },
        { text: "Drupal Developers", href: "/services/ITServices/ITStaffingServices/ITStaffingForDrupal" },
        { text: "Hire Spring Boot Developers", href: "/services/ITServices/ITStaffingServices/HireSpringBootDevelopers" },
        { text: "Hire OpenCart Developers", href: "/services/ITServices/ITStaffingServices/HireOpenCartDevelopers" },
        { text: "Web Developers", href: "/services/ITServices/ITStaffingServices/ITStaffingForWebDevelopers" },
        { text: "Hire Elixir Developers", href: "/services/ITServices/ITStaffingServices/HireElixirDevelopers" },
        { text: "LAMP Developers", href: "/services/ITServices/ITStaffingServices/ITStaffingForLAMP" },
        { text: "PHP Developers", href: "/services/ITServices/ITStaffingServices/DedicatedPHPDevelopers" },
        { text: "Kony App Developers", href: "/services/ITServices/ITStaffingServices/HireKonyAppDevelopers" },
        { text: "Java Developers", href: "/services/ITServices/ITStaffingServices/JavaStaffing" },
        { text: "Hire Magento Developers", href: "/services/ITServices/ITStaffingServices/MagentoDevelopers" },
        { text: "Hire Express JS Developers", href: "/services/ITServices/ITStaffingServices/ExpressJSDevelopers" },
        { text: "Microsoft SQL, ASP.NET", href: "/services/ITServices/ITStaffingServices/MicrosoftStaffing" },
        { text: "Hire Augmented Reality Developers", href: "/services/ITServices/ITStaffingServices/ARDevelopers" },
        { text: "Hire Golang Developers", href: "/services/ITServices/ITStaffingServices/GolangDevelopers" },
        { text: "SEO, SEM & SMO", href: "/services/ITServices/ITStaffingServices/DigitalMarketingStaffing" },
        { text: "Hire Python Developers", href: "/services/ITServices/ITStaffingServices/PythonDevelopers" },
        { text: "Hire Svelte JS Developers", href: "/services/ITServices/ITStaffingServices/SvelteJSDevelopers" },
        { text: "Android App Developers", href: "/services/ITServices/ITStaffingServices/AndroidDevelopers" },
        { text: "Hire iOS Developers", href: "/services/ITServices/ITStaffingServices/IosDevelopers" },
        { text: "Hire Nuxt.js Developers", href: "/services/ITServices/ITStaffingServices/NuxtJSDevelopers" },
        { text: "Graphic Designers", href: "/services/ITServices/ITStaffingServices/WebDesignStaffing" },
        { text: "Hire iPad App Developers", href: "/services/ITServices/ITStaffingServices/IpadAppDevelopers" },
        { text: "Hire ReactJS Developers", href: "/services/ITServices/ITStaffingServices/ReactJSDevelopers" },
        { text: "Mobile App Developers", href: "/services/ITServices/ITStaffingServices/MobileAppDevelopers" },
        { text: "Hire Blockchain Developers", href: "/services/ITServices/ITStaffingServices/BlockchainDevelopers" },
        { text: "Hire Flutter Developers", href: "/services/ITServices/ITStaffingServices/FlutterDevelopers" },
        { text: "Oracle Application Developers", href: "/services/ITServices/ITStaffingServices/OracleDevelopers" },
        { text: "Hire Swift Developers", href: "/services/ITServices/ITStaffingServices/SwiftDevelopers" },
        { text: "Oracle Database Administrators", href: "/services/ITServices/ITStaffingServices/OracleDBA" },
        { text: "Hire iPhone App Developers", href: "/services/ITServices/ITStaffingServices/IPhoneAppDevelopers" },
      ],
    },
  },
  {
    title: "Software Testing",
    href: "/services/ITServices/SoftwareTestingServices",
    dropdown: {
      subheading: "Software Testing",
      subheadingHref: "/services/ITServices/SoftwareTestingServices",
      links: [
        { text: "Regression Testing Services", href: "/services/ITServices/SoftwareTestingServices/RegressionTestingServices" },
        { text: "Software Testing Services", href: "/services/ITServices/SoftwareTestingServices/SoftwareTestingServices" },
        { text: "Network Testing Services", href: "/services/ITServices/SoftwareTestingServices/NetworkTestingServices" },
        { text: "Testing Knowledge Management Services", href: "/services/ITServices/SoftwareTestingServices/TestingKnowledgeManagementServices" },
        { text: "Acceptance Test Driven Development Services", href: "/services/ITServices/SoftwareTestingServices/AcceptanceTestDrivenDevelopmentServices" },
        { text: "Continuous Integration Services", href: "/services/ITServices/SoftwareTestingServices/ContinuousIntegrationServices" },
        { text: "Reliability Testing Services", href: "/services/ITServices/SoftwareTestingServices/ReliabilityTestingServices" },
        { text: "Independent Testing Services", href: "/services/ITServices/SoftwareTestingServices/IndependentTestingServices" },
        { text: "Managed Testing Services", href: "/services/ITServices/SoftwareTestingServices/ManagedTestingServices" },
        { text: "Compatibility Testing Services", href: "/services/ITServices/SoftwareTestingServices/CompatibilityTestingServices" },
        { text: "Beta Testing Services", href: "/services/ITServices/SoftwareTestingServices/BetaTestingServices" },
        { text: "Mainframe Testing Services", href: "/services/ITServices/SoftwareTestingServices/MainframeTestingServices" },
        { text: "Stress Testing Services", href: "/services/ITServices/SoftwareTestingServices/StressTestingServices" },
        { text: "DevOps Testing Services", href: "/services/ITServices/SoftwareTestingServices/DevOpsTestingServices" },
        { text: "Managed Crowd Testing Services", href: "/services/ITServices/SoftwareTestingServices/ManagedCrowdTestingServices" },
        { text: "Compliance Testing Services", href: "/services/ITServices/SoftwareTestingServices/ComplianceTestingServices" },
        { text: "Network Penetration Testing Services", href: "/services/ITServices/SoftwareTestingServices/NetworkPenetrationTesting" },
        { text: "SOA and Web Services Testing", href: "/services/ITServices/SoftwareTestingServices/SoaWebServicesTesting" },
        { text: "Localization Testing Services", href: "/services/ITServices/SoftwareTestingServices/LocalizationTesting" },
        { text: "Service Oriented Architecture Testing Services", href: "/services/ITServices/SoftwareTestingServices/SoaTesting" },
        { text: "Test Automation Services", href: "/services/ITServices/SoftwareTestingServices/TestAutomationServices" },
        { text: "Load Testing Services", href: "/services/ITServices/SoftwareTestingServices/LoadTesting" },
        { text: "Selenium Testing Services", href: "/services/ITServices/SoftwareTestingServices/SeleniumTesting" },
        { text: "Types of Software Testing", href: "/services/ITServices/SoftwareTestingServices/TypesOfSoftwareTesting" },
        { text: "Volume Testing Services", href: "/services/ITServices/SoftwareTestingServices/VolumeTesting" },
        { text: "Robot Framework Testing Services", href: "/services/ITServices/SoftwareTestingServices/RobotFrameworkTesting" },
        { text: "Testing Services for Industries", href: "/services/ITServices/SoftwareTestingServices/IndustryTestingServices" },
        { text: "Recovery Testing Services", href: "/services/ITServices/SoftwareTestingServices/RecoveryTesting" },
        { text: "Billing Testing Services", href: "/services/ITServices/SoftwareTestingServices/BillingTesting" },
        { text: "E-Commerce Testing Services", href: "/services/ITServices/SoftwareTestingServices/ECommerceTesting" },
        { text: "Installation Testing Services", href: "/services/ITServices/SoftwareTestingServices/InstallationTesting" },
        { text: "EDI Testing Services", href: "/services/ITServices/SoftwareTestingServices/EDITesting" },
        { text: "Embedded Testing Services", href: "/services/ITServices/SoftwareTestingServices/EmbeddedTesting" },
        { text: "ETL Testing Services", href: "/services/ITServices/SoftwareTestingServices/ETLTesting" },
        { text: "Usability Testing Services", href: "/services/ITServices/SoftwareTestingServices/UsabilityTesting" },
        { text: "Mobile Application Testing", href: "/services/ITServices/SoftwareTestingServices/MobileApplicationTesting" },
        { text: "Soak Testing Services", href: "/services/ITServices/SoftwareTestingServices/SoakTesting" },
        { text: "Outcome-based Testing Services", href: "/services/ITServices/SoftwareTestingServices/OutcomeBasedTesting" },
        { text: "Computer System Validation Services", href: "/services/ITServices/SoftwareTestingServices/ComputerSystemValidation" },
        { text: "Performance Testing Services", href: "/services/ITServices/SoftwareTestingServices/PerformanceTesting" },
        { text: "Happy Path Testing Services", href: "/services/ITServices/SoftwareTestingServices/HappyPathTesting" },
        { text: "Desktop Application Testing Services", href: "/services/ITServices/SoftwareTestingServices/DesktopApplicationTesting" },
        { text: "Scalability Testing Services", href: "/services/ITServices/SoftwareTestingServices/ScalabilityTesting" },
        { text: "API Testing Services", href: "/services/ITServices/SoftwareTestingServices/APITesting" },
        { text: "Mobile Testing Services", href: "/services/ITServices/SoftwareTestingServices/MobileTesting" },
        { text: "SAP Testing Services", href: "/services/ITServices/SoftwareTestingServices/SAPTesting" },
        { text: "Website Testing Services", href: "/services/ITServices/SoftwareTestingServices/WebsiteTesting" },
        { text: "External Network Penetration Testing Services", href: "/services/ITServices/SoftwareTestingServices/ExternalPenetrationTesting" },
        { text: "Backward Compatibility Testing Services", href: "/services/ITServices/SoftwareTestingServices/BackwardCompatibilityTesting" },
        { text: "CRM Testing Services", href: "/services/ITServices/SoftwareTestingServices/CrmTestingServices" },
        { text: "Internal Network Penetration Testing Services", href: "/services/ITServices/SoftwareTestingServices/InternalNetworkPenetrationTesting" },
        { text: "Browser Compatibility Testing Services", href: "/services/ITServices/SoftwareTestingServices/BrowserCompatibilityTesting" },
        { text: "Smoke Testing Services", href: "/services/ITServices/SoftwareTestingServices/SmokeTestingServices" },
        { text: "Firewall Penetration Testing Services", href: "/services/ITSer vices/SoftwareTestingServices/FirewallPenetrationTesting" },
        { text: "Risk Management Testing Services", href: "/services/ITServices/SoftwareTestingServices/RiskManagementTesting" },
        { text: "System Testing Services", href: "/services/ITServices/SoftwareTestingServices/SystemTestingServices" },
        { text: "Penetration Testing Services", href: "/services/ITServices/SoftwareTestingServices/PenetrationTestingServices" },
        { text: "Cyber Security Testing Services", href: "/services/ITServices/SoftwareTestingServices/CyberSecurityTesting" },
        { text: "Web Services Testing", href: "/services/ITServices/SoftwareTestingServices/WebServicesTesting" },
        { text: "Test Environment Management Services", href: "/services/ITServices/SoftwareTestingServices/TestEnvironmentManagement" },
        { text: "GUI Testing Services", href: "/services/ITServices/SoftwareTestingServices/GUITesting" },
        { text: "Cloud Testing Services", href: "/services/ITServices/SoftwareTestingServices/CloudTesting" },
        { text: "Test Process Improvement Services", href: "/services/ITServices/SoftwareTestingServices/TestProcessImprovement" },
        { text: "Game Testing Services", href: "/services/ITServices/SoftwareTestingServices/GameTesting" },
        { text: "Unit Testing Services", href: "/services/ITServices/SoftwareTestingServices/UnitTesting" },
        { text: "Security Testing Services", href: "/services/ITServices/SoftwareTestingServices/SecurityTesting" },
        { text: "VAPT Services", href: "/services/ITServices/SoftwareTestingServices/VAPTServices" },
        { text: "Integration Testing Services", href: "/services/ITServices/SoftwareTestingServices/IntegrationTesting" },
        { text: "GDPR Compliant Software Testing Services", href: "/services/ITServices/SoftwareTestingServices/GDPRCompliance" },
        { text: "Social Engineering Services", href: "/services/ITServices/SoftwareTestingServices/SocialEngineering" },
        { text: "Sanity Testing Services", href: "/services/ITServices/SoftwareTestingServices/SanityTesting" },
        { text: "Software Testing Project Services", href: "/services/ITServices/SoftwareTestingServices/SoftwareTestingProjects" },
        { text: "Wireless Penetration Testing Services", href: "/services/ITServices/SoftwareTestingServices/WirelessPenetrationTesting" },
        { text: "Exploratory Testing Services", href: "/services/ITServices/SoftwareTestingServices/ExploratoryTesting" },
        { text: "Managed Quality Assurance Testing Services", href: "/services/ITServices/SoftwareTestingServices/ManagedQualityAssurance" },
        { text: "Web Application Penetration Testing Services", href: "/services/ITServices/SoftwareTestingServices/WebAppPenetrationTesting" },
        { text: "User Acceptance Testing Services", href: "/services/ITServices/SoftwareTestingServices/UserAcceptanceTesting" },
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "IMS",
    href: "/services/ITServices/ITInfrastructureManagement",
    dropdown: {
      subheading: "IMS",
      subheadingHref: "/services/ITServices/ITInfrastructureManagement",
      links: [
        { text: "Cybersecurity Countermeasures Services", href: "/services/ITServices/ITInfrastructureManagement/CybersecurityCountermeasures" },
        { text: "Managed Virtualization Services", href: "/services/ITServices/ITInfrastructureManagement/ManagedVirtualizationServices" },
        { text: "Application Performance Monitoring Services", href: "/services/ITServices/ITInfrastructureManagement/ApplicationPerformanceMonitoring" },
        { text: "IT Risk & Security Management Services", href: "/services/ITServices/ITInfrastructureManagement/ITRiskAndSecurity" },
        { text: "Managed Storage Services", href: "/services/ITServices/ITInfrastructureManagement/ManagedStorageServices" },
        { text: "Security Risk Assessment Services", href: "/services/ITServices/ITInfrastructureManagement/SecurityRiskAssessment" },
        { text: "Cybersecurity Due Diligence Services", href: "/services/ITServices/ITInfrastructureManagement/CybersecurityDueDiligence" },
        { text: "Managed Backup Services", href: "/services/ITServices/ITInfrastructureManagement/ManagedBackupServices" },
        { text: "Vulnerability Management Services", href: "/services/ITServices/ITInfrastructureManagement/VulnerabilityManagement" },
        { text: "Cyber Security Assessment Services", href: "/services/ITServices/ITInfrastructureManagement/CyberSecurityAssessment" },
        { text: "IT Audit Services", href: "/services/ITServices/ITInfrastructureManagement/ITAuditServices" },
        { text: "Windows 365 Consulting Services", href: "" },
        { text: "Remote Monitoring Services", href: "" },
        { text: "Application Managed Services", href: "" },
        { text: "Windows 365 Change Management Services", href: "" },
        { text: "Digital Forensics Services", href: "" },
        { text: "Network Monitoring Services", href: "" },
        { text: "Windows 365 License Management and Optimization", href: "" },
        { text: "Data Center Services", href: "" },
        { text: "SOC as a Service", href: "" },
        { text: "Migration to Windows 365 Services", href: "" },
        { text: "Enterprise Security Solutions", href: "" },
        { text: "NOC Monitoring Services", href: "" },
        { text: "Digital Workforce Management Services", href: "" },
        { text: "IT Help Desk Services", href: "" },
        { text: "Cyber Threat Intelligence Services", href: "" },
        { text: "Terraform Consulting Services", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
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