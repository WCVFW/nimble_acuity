import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import all service pages
import FinanceAccountingFinOps from "./pages/services/accounts-services/finance-accounting-finops";
import LegalCorporateCompliance from "./pages/services/legal-corporate-compliance";
import HealthcareMedTechSupport from "./pages/services/healthcare-medtech-support";
import ITSoftwareCloudCybersecurity from "./pages/services/it-software-cloud-cybersecurity";
import DataAIAnalyticsResearch from "./pages/services/data-ai-analytics-research";
import MarketingSalesCreativeMedia from "./pages/services/marketing-sales-creative-media";
import CustomerExperienceCommunicationsTelephony from "./pages/services/customer-experience-communications-telephony";
import OperationsProcurementSupplychainManufacturing from "./pages/services/operations-procurement-supplychain-manufacturing";
import RealEstateFacilitiesEnergyEnvironment from "./pages/services/real-estate-facilities-energy-environment";
import HRTrainingAdminSpecializedServices from "./pages/services/hr-training-admin-specialized-services";
import GlobalOutsourcingOffshoring from "./pages/services/global-outsourcing-offshoring";
import ImportExportServices from "./pages/services/import-export-services";


{/* services */ }
{/* finance-accounting-finops */ }
{/* Bookkeeping service */ }
import RealEstateBookkeepingServices from "./pages/services/accounts-services/bookkeeping-service/RealEstateBookkeepingServices"
import NimbleAcuityAccountingServices from "./pages/services/accounts-services/bookkeeping-service/AccountingServicesSetup"
import CPABookkeepingServices from "./pages/services/accounts-services/bookkeeping-service/CPABookkeepingServices"
import SmallBusinessBookkeeping from "./pages/services/accounts-services/bookkeeping-service/SmallBusinessBookkeeping"
import QuickBooksBookkeeping from "./pages/services/accounts-services/bookkeeping-service/QuickBooksBookkeeping"
import VirtualBookkeeping from "./pages/services/accounts-services/bookkeeping-service/VirtualBookkeeping"

{/* Accounting service */ }
import ValuationAdvisory from "./pages/services/accounts-services/accounting-services/Valuation-Advisory-Services"
import CostAccounting from "./pages/services/accounts-services/accounting-services/Cost-Accounting-service"
import AccountingAutomation from "./pages/services/accounts-services/accounting-services/Accounting-Automation-service"
import RealEstateAccounting from "./pages/services/accounts-services/accounting-services/RealEstate-Accounting-service"
import WealthManagement from "./pages/services/accounts-services/accounting-services/Wealth-Management-service"
import FinancialAccountingAdvisory from "./pages/services/accounts-services/accounting-services/Financial-Accounting-Advisory-service"
import LedgerManagementServices from "./pages/services/accounts-services/accounting-services/Ledger-Management-Services"
import GeneralAccountingServices from "./pages/services/accounts-services/accounting-services/General-Accounting-Services"
import ESGConsultingServices from "./pages/services/accounts-services/accounting-services/ESG-Consulting-Services"
import CorporateAccountingServices from "./pages/services/accounts-services/accounting-services/Corporate-Accounting-Services"
import FixedAssetManagement from "./pages/services/accounts-services/accounting-services/Fixed-Asset-Management-services"
import ManagementAdvisoryServices from "./pages/services/accounts-services/accounting-services/Management-Advisory-Services"
import ManagementAccountingServices from "./pages/services/accounts-services/accounting-services/Management-Accounting-Services"
import ConstructionAccountingServices from "./pages/services/accounts-services/accounting-services/Construction-Accounting-Services"
import FixedAssetAuditingServices from "./pages/services/accounts-services/accounting-services/FixedAsset-Auditing-Services"
import InternalAuditServices from "./pages/services/accounts-services/accounting-services/Internal-Audit-Services"
import PortfolioInvestorAccounting from "./pages/services/accounts-services/accounting-services/Portfolio-Investor-Accounting-service"
import PostMergerIntegration from "./pages/services/accounts-services/accounting-services/Post-Merger-Integration-service"
import ComplianceAudit from "./pages/services/accounts-services/accounting-services/Compliance-Audit-service"
import FixedAssetAccounting from "./pages/services/accounts-services/accounting-services/FixedAsset-Accounting-services"
import StartupAccounting from "./pages/services/accounts-services/accounting-services/Startup-Accounting-service"
import CloudAccountingServices from "./pages/services/accounts-services/accounting-services/Cloud-Accounting-Services"
import AccountingCleanupServices from "./pages/services/accounts-services/accounting-services/Accounting-Cleanup-Services"
import ModelRiskManagementServices from "./pages/services/accounts-services/accounting-services/ModelRisk-Management-Services"
import AuditSupportServices from "./pages/services/accounts-services/accounting-services/Audit-Support-Services"
import CFOServices from "./pages/services/accounts-services/accounting-services/CFO-Services";
import FiduciaryServices from "./pages/services/accounts-services/accounting-services/Fiduciary-Services";
import FinanceTransformationServices from "./pages/services/accounts-services/accounting-services/Finance-Transformation-Services";
import RecordToReportServices from "./pages/services/accounts-services/accounting-services/RecordToReport-Services";
import BusinessAdvisoryServices from "./pages/services/accounts-services/accounting-services/Business-Advisory-Services";
import ForensicAuditServices from "./pages/services/accounts-services/accounting-services/Forensic-Audit-Services";
import OrderManagementServices from "./pages/services/accounts-services/accounting-services/Order-Management-Services";
import DentalAccountingServices from "./pages/services/accounts-services/accounting-services/Dental-Accounting-Services";
import FinancialWriteupServices from "./pages/services/accounts-services/accounting-services/Financial-Writeup-Services";
import SMSFAccountingServices from "./pages/services/accounts-services/accounting-services/SMSF-Accounting-Services";
import RetailAccountingServices from "./pages/services/accounts-services/accounting-services/Retail-Accounting-Services";
import FinancialReportingServices from "./pages/services/accounts-services/accounting-services/FinancialReportingServices";
import SmallBusinessAccountingServices from "./pages/services/accounts-services/accounting-services/SmallBusinessAccountingServices";
import ForensicAccountingServices from "./pages/services/accounts-services/accounting-services/ForensicAccountingServices";
import AccountsReconciliationServices from "./pages/services/accounts-services/accounting-services/AccountsReconciliationServices";
import FinancialBudgetingServices from "./pages/services/accounts-services/accounting-services/FinancialBudgetingServices";
import AutomotiveAccountingServices from "./pages/services/accounts-services/accounting-services/AutomotiveAccountingServices";
import BankCreditReconciliation from "./pages/services/accounts-services/accounting-services/BankCreditReconciliation";
import CashFlowForecasting from "./pages/services/accounts-services/accounting-services/CashFlowForecasting";
import RestaurantAccounting from "./pages/services/accounts-services/accounting-services/RestaurantAccounting";
import CashFlowManagement from "./pages/services/accounts-services/accounting-services/CashFlowManagement";
import FinancialController from "./pages/services/accounts-services/accounting-services/FinancialController";
import ElectricalContractorsAccounting from "./pages/services/accounts-services/accounting-services/ElectricalContractorsAccounting";
import SpacTransactionServices from "./pages/services/accounts-services/accounting-services/SpacTransactionServices";
import FinancialStatementsServices from "./pages/services/accounts-services/accounting-services/FinancialStatementsServices";
import FinancialInvestigationsServices from "./pages/services/accounts-services/accounting-services/FinancialInvestigationsServices";
import CorporateFinanceSupport from "./pages/services/import-export/financial_research/corporate_financial";
import AssetManagementSupport from "./pages/services/import-export/financial_research/assest_management_support";
import BusinessValuation from "./pages/services/import-export/financial_research/BusinessValuation";
import InvestmentResearch from "./pages/services/import-export/financial_research/InvestmentResearch";
import DtcEligibilityPage from "./pages/services/import-export/financial_research/DTCeligibilityfile";
import IFRSReportingServices from "./pages/services/import-export/financial_research/IFRSReportingServices";
import BuySideEquityResearch from "./pages/services/import-export/financial_research/BuySideEquityResearch";
import SellSideResearch from "./pages/services/import-export/financial_research/SellSideResearch";
import FixedIncomeResearch from "./pages/services/import-export/financial_research/FixedIncomeResearch";
import InvestmentBankingSupport from "./pages/services/import-export/financial_research/InvestmentBankingSupport";
import CreditResearchServices from "./pages/services/import-export/financial_research/CreditResearchServices";
import InvestmentMemorandumServices from "./pages/services/import-export/financial_research/InvestmentMemorandumServices";
import EquityResearchServices from "./pages/services/import-export/financial_research/EquityResearchServices";
import FinancialResearchAnalysisServices from "./pages/services/import-export/financial_research/FinancialResearchAnalysisServices";
import FinancialModelingServices from "./pages/services/import-export/financial_research/FinancialModelingServices";
import FinancialAdvisoryServices from "./pages/services/import-export/financial_research/FinancialAdvisoryServices";
import ForexMarketResearch from "./pages/services/import-export/financial_research/ForexMarketResearch";
import FinancialRiskAnalysis from "./pages/services/import-export/financial_research/FinancialRiskAnalysis";
import MarketBasketAnalysis from "./pages/services/import-export/market_research/MarketBasketAnalysis";
import GapAnalysis from "./pages/services/import-export/financial_research/GapAnalysis";
import FinancialFeasibilityAnalysis from "./pages/services/import-export/financial_research/FinancialFeasibilityAnalysis";
import CreditRiskModeling from "./pages/services/import-export/financial_research/CreditRiskModeling";
import PredictiveFinancialAnalytics from "./pages/services/import-export/financial_research/PredictiveFinancialAnalytics";
import IFRSValuationServicesPage from "./pages/services/import-export/financial_research/IFRSValuationServicesPage";
import QualitativeDataAnalysisPage from "./pages/services/import-export/financial_research/QualitativeDataAnalysisPage";
import CatiWebSurveys from "./pages/services/import-export/market_research/CatiWebSurveys";
import NewsAbstraction from "./pages/services/import-export/market_research/NewsAbstraction";
import MarketFeasibility from "./pages/services/import-export/market_research/MarketFeasibility";
import MarketSalesAnalysis from "./pages/services/import-export/market_research/MarketSalesAnalysis";
import DataAnalysisServices from "./pages/services/import-export/market_research/DataAnalysisServices";
import VerbatimCodingServices from "./pages/services/import-export/market_research/VerbatimCodingServices";
import HealthcareMarketResearch from "./pages/services/import-export/market_research/HealthcareMarketResearch";
import RealEstateMarketResearch from "./pages/services/import-export/market_research/RealEstateMarketResearch";
import RestaurantMarketResearch from "./pages/services/import-export/market_research/RestaurantMarketResearch";
import AgricultureMarketResearch from "./pages/services/import-export/market_research/AgricultureMarketResearch";
import MarketSizingResearch from "./pages/services/import-export/market_research/MarketSizingResearch";
import IndustryAnalysisServices from "./pages/services/import-export/market_research/IndustryAnalysisServices";
import OnlineMarketResearch from "./pages/services/import-export/market_research/OnlineMarketResearch";
import BrandResearchServices from "./pages/services/import-export/market_research/BrandResearchServices";
import CallCenterSurveys from "./pages/services/import-export/market_research/CallCenterSurveys";
import MarketResearchSurveys from "./pages/services/import-export/market_research/MarketResearchSurveys";
import MarketingQuestionnaireDesign from "./pages/services/import-export/market_research/MarketingQuestionnaireDesign";
import NewsletterServices from "./pages/services/import-export/market_research/NewsletterServices";
import SyndicatedMarketResearchServices from "./pages/services/import-export/market_research/SyndicatedMarketResearchServices";
import SwotAnalysisServices from "./pages/services/import-export/market_research/SwotAnalysisServices";
import FabricMarketResearch from "./pages/services/import-export/market_research/FabricMarketResearch";
import InsuranceMarketResearch from "./pages/services/import-export/market_research/InsuranceMarketResearch";
import SurveyProgrammingServices from "./pages/services/import-export/market_research/SurveyProgrammingServices";
import TimeSeriesAnalysisPage from "./pages/services/import-export/market_research/TimeSeriesAnalysisPage";
import ExploratoryDataAnalysis from "./pages/services/import-export/market_research/ExploratoryDataAnalysis";
import QuantitativeResearchPage from "./pages/services/import-export/market_research/QuantitativeResearchPage";
import MarketSegmentationPage from "./pages/services/import-export/market_research/MarketSegmentationPage";
import HealthcareMarketSegmentationPage from "./pages/services/import-export/market_research/HealthcareMarketSegmentationPage";
import PestelAnalysis from "./pages/services/import-export/market_research/PestelAnalysis";
import StatisticalAnalysis from "./pages/services/import-export/market_research/StatisticalAnalysis";
import ProductResearchServices from "./pages/services/import-export/market_research/ProductResearchServices";
import OpenEndCodingServices from "./pages/services/import-export/market_research/OpenEndCodingServices";
import AmazonProductResearchPage from "./pages/services/import-export/market_research/AmazonProductResearchPage";
import ConsumerMarketResearch from "./pages/services/import-export/market_research/ConsumerMarketResearch";
import CustomerSegmentation from "./pages/services/import-export/market_research/CustomerSegmentation";
import CompetitorBenchmarking from "./pages/services/import-export/business_research/CompetitorBenchmarking";
import BusinessBenchmarking from "./pages/services/import-export/business_research/BusinessBenchmarking";
import PrimarySecondaryResearch from "./pages/services/import-export/business_research/PrimarySecondaryResearch";
import CustomResearchReports from "./pages/services/import-export/business_research/CustomResearchReports";
import MediaResearchServices from "./pages/services/import-export/business_research/MediaResearchServices";
import BusinessMarketResearch from "./pages/services/import-export/business_research/BusinessMarketResearch";
import CompanyProfilingReports from "./pages/services/import-export/business_research/CompanyProfilingReports";
import BusinessDevelopment from "./pages/services/import-export/business_research/BusinessDevelopment";
import SocialMediaMonitoring from "./pages/services/import-export/business_research/SocialMediaMonitoring";
import PerceptualMappingPage from "./pages/services/import-export/business_research/PerceptualMappingPage";
import CompetitorAnalysisServices from "./pages/services/import-export/business_research/CompetitorAnalysisServices";
import IndustryProfilingServices from "./pages/services/import-export/business_research/IndustryProfilingServices";
import TrendAnalysisServices from "./pages/services/import-export/business_research/TrendAnalysisServices";
import CompetitiveBusinessAnalysis from "./pages/services/import-export/business_research/CompetitiveBusinessAnalysis";
import BusinessPlanWriting from "./pages/services/import-export/business_research/BusinessPlanWriting";
import BIDashboardVisualization from "./pages/services/import-export/business_research/BIDashboardVisualization";
import BenchmarkingServices from "./pages/services/import-export/business_research/BenchmarkingServices";
import PerformanceBenchmarking from "./pages/services/import-export/business_research/PerformanceBenchmarking";
import ITBenchmarkingPage from "./pages/services/import-export/business_research/ITBenchmarkingPage";
import HealthcareBenchmarking from "./pages/services/import-export/business_research/HealthcareBenchmarking";
import DataBenchmarkingPage from "./pages/services/import-export/business_research/DataBenchmarkingPage";
import CrossTabulationAnalysis from "./pages/services/import-export/business_research/CrossTabulationAnalysis";
import IntegratedBusinessPlanning from "./pages/services/import-export/business_research/IntegratedBusinessPlanning";
import BenchmarkingAnalyticsServices from "./pages/services/import-export/business_research/BenchmarkingAnalyticsServices";
import PropertyRiskManagement from "./pages/services/import-export/business_research/PropertyRiskManagement";
import ABMServicesPage from "./pages/services/import-export/business_research/ABMServicesPage";
import BusinessModelingPage from "./pages/services/import-export/business_research/BusinessModelingPage";
import IntellectualProperty from "./pages/services/import-export/pharmaceutial/IntellectualProperty";
import MarketForecast from "./pages/services/import-export/pharmaceutial/MarketForecast";
import CompetitiveIntelligencePage from "./pages/services/import-export/pharmaceutial/CompetitiveIntelligencePage";
import MedicalWritingServices from "./pages/services/import-export/pharmaceutial/MedicalWritingServices";
import KOLServices from "./pages/services/import-export/pharmaceutial/KOLServices";
import PatentLandscapeAnalysis from "./pages/services/import-export/pharmaceutial/PatentLandscapeAnalysis";
import MarketLandscapeAssessment from "./pages/services/import-export/pharmaceutial/MarketLandscapeAssessment";
import ImageAnalysisServices from "./pages/services/import-export/pharmaceutial/ImageAnalysisServices";
import CrystallographyServices from "./pages/services/import-export/scientific research/CrystallographyServices";
import LifeScienceInformatics from "./pages/services/import-export/scientific research/LifeScienceInformatics";
import StructuralBiologyServicesPage from "./pages/services/import-export/scientific research/StructuralBiologyServicesPage";
import ScientificDataMiningPage from "./pages/services/import-export/scientific research/ScientificDataMiningPage";
import MarketResearchReports from "./pages/services/import-export/research_report/MarketResearchReports";
import FinancialResearchReport from "./pages/services/import-export/research_report/FinancialResearchReport";
import MacroeconomicsReportsPage from "./pages/services/import-export/research_report/MacroeconomicsReportsPage";
import MicroeconomicsReports from "./pages/services/import-export/research_report/MicroeconomicsReports.";
import CommoditiesRealEstateReports from "./pages/services/import-export/research_report/CommoditiesRealEstateReports";
import MarketTrendsReports from "./pages/services/import-export/research_report/MarketTrendsReports";
import StructuredFinanceReports from "./pages/services/import-export/research_report/StructuredFinanceReports";
import ReportAutomationServices from "./pages/services/import-export/research_report/ReportAutomationServices";
import SyndicatedResearchReports from "./pages/services/import-export/research_report/SyndicatedResearchReports";
import FinancialAnalysisPage from "./pages/services/import-export/articles/FinancialAnalysisPage";
import B2BFinancialServicesTrends from "./pages/services/import-export/articles/B2BFinancialServicesTrends";
import ImageAnalysisBlog from "./pages/services/import-export/articles/ImageAnalysisBlog";
import PharmaTechAdvancements from "./pages/services/import-export/articles/PharmaTechAdvancements";
import CompetitiveAnalyticsBenchmarking from "./pages/services/import-export/articles/CompetitiveAnalyticsBenchmarking";
import BusinessResearchBI from "./pages/services/import-export/articles/BusinessResearchBI";
import BenchmarkingBlog from "./pages/services/import-export/articles/BenchmarkingBlog";
import BlogPage from "./pages/services/import-export/articles/BlogPage";
import OutsourcingResearch from "./pages/services/import-export/articles/OutsourcingResearch";
import ResearchGrowthDecade from "./pages/services/import-export/articles/ResearchGrowthDecade";
import OutsourcingIndiaResearch from "./pages/services/import-export/articles/OutsourcingIndiaResearch";
import ResearchOutsourcingCenter from "./pages/services/import-export/articles/ResearchOutsourcingCenter";
import IndiaResearchServices from "./pages/services/import-export/articles/IndiaResearchServices";
import ResearchProcessOutsourcing from "./pages/services/import-export/articles/ResearchProcessOutsourcing";
import KnowledgeProcessOutsourcing from "./pages/services/import-export/articles/KnowledgeProcessOutsourcing";
import LogisticRegressionAnalysis from "./pages/services/import-export/articles/LogisticRegressionAnalysis";
import ResearchServicesOutsourcing from "./pages/services/import-export/articles/ResearchServicesOutsourcing";
import ResearchServicesApprehensions from "./pages/services/import-export/articles/ResearchServicesApprehensions";
import WebBasedMarketResearch from "./pages/services/import-export/articles/WebBasedMarketResearch";
import DeskAndWebResearch from "./pages/services/import-export/articles/DeskAndWebResearch";
import IntelligentProcessAutomation from "./pages/services/Data science services/data engineering/IntelligentProcessAutomation";
import BigDataLakes from "./pages/services/Data science services/data engineering/BigDataLakes";
import HadoopDevelopment from "./pages/services/Data science services/data engineering/HadoopDevelopment";
import EnterpriseDataIntegration from "./pages/services/Data science services/data engineering/EnterpriseDataIntegration";
import BigDataInfrastructure from "./pages/services/Data science services/data engineering/BigDataInfrastructure";
import ClouderaSupport from "./pages/services/Data science services/data science/ClouderaSupport";
import DataScienceService from "./pages/services/Data science services/data science/DataScienceService";
import LeadScoringServices from "./pages/services/Data science services/data science/LeadScoringServices";
import RouteOptimization from "./pages/services/Data science services/data science/RouteOptimization";
import RecommenderSystem from "./pages/services/Data science services/data science/RecommenderSystem";
import VideoAnalyticsPage from "./pages/services/Data science services/data science/VideoAnalyticsPage";
import OffensiveImageVideoRecognition from "./pages/services/Data science services/data science/OffensiveImageVideoRecognition";
import ETLDataIntegration from "./pages/services/Data science services/data science/ETLDataIntegration";
import ClouderaDataScienceWorkbench from "./pages/services/Data science services/data science/ClouderaDataScienceWorkbench";
import BigDataManagement from "./pages/services/Data science services/data science/BigDataManagement";
import DataWrangling from "./pages/services/Data science services/data science/DataWrangling";
import DataAnalyticsAppDev from "./pages/services/Data science services/data science/DataAnalyticsAppDev";
import DataFabricServices from "./pages/services/Data science services/data science/DataFabricServices";
import DataStackModernization from "./pages/services/Data science services/data science/DataStackModernization";
import HyperautomationServices from "./pages/services/Data science services/data science/HyperautomationServices";
import PyTorchServices from "./pages/services/Data science services/data science/PyTorchServices";
import ConcurrentAuditServices from "./pages/services/Data science services/data science/ConcurrentAuditServices";
import BlockchainDevelopmentPage from "./pages/services/Data science services/data science/BlockchainDevelopmentPage";
import CustomerIntelligencePage from "./pages/services/Data science services/data science/CustomerIntelligencePage";
import CustomerJourneyMappingPage from "./pages/services/Data science services/data science/CustomerJourneyMappingPage";
import AIDigitalTransformation from "./pages/services/Data science services/data science consulting.tsx/AIDigitalTransformation";
import LocationIntelligence from "./pages/services/Data science services/data science consulting.tsx/LocationIntelligence";
import AIServicesTable from "./pages/services/Data science services/Artificial intelligence services.tsx/AIServicesTable";
import DocumentClassificationPage from "./pages/services/Data science services/Artificial intelligence services.tsx/DocumentClassificationPage";
import CognitiveAutomationPage from "./pages/services/Data science services/Artificial intelligence services.tsx/CognitiveAutomationPage";
import RpaServices from "./pages/services/Data science services/Artificial intelligence services.tsx/RpaServices";
import ComputerVisionServices from "./pages/services/Data science services/Artificial intelligence services.tsx/ComputerVisionServices";
import NlpServices from "./pages/services/Data science services/Artificial intelligence services.tsx/NlpServices";
import MachineLearningServices from "./pages/services/Data science services/Artificial intelligence services.tsx/MachineLearningServices";
import SpeechRecognitionServices from "./pages/services/Data science services/Artificial intelligence services.tsx/SpeechRecognitionServices";
import MachineVisionServices from "./pages/services/Data science services/Artificial intelligence services.tsx/MachineVisionServices";
import NeuralNetworksServices from "./pages/services/Data science services/Artificial intelligence services.tsx/NeuralNetworksServices";
import AutomatedVisualInspection from "./pages/services/Data science services/Artificial intelligence services.tsx/AutomatedVisualInspection";
import AnomalyDetection from "./pages/services/Data science services/Artificial intelligence services.tsx/AnomalyDetection";
import ConversationalAI from "./pages/services/Data science services/Artificial intelligence services.tsx/ConversationalAI";
import AIConsulting from "./pages/services/Data science services/Artificial intelligence services.tsx/AIConsulting";
import DeepLearning from "./pages/services/Data science services/Artificial intelligence services.tsx/DeepLearning";
import FraudAnalytics from "./pages/services/Data science services/Artificial intelligence services.tsx/FraudAnalytics";
import HealthcareAI from "./pages/services/Data science services/Artificial intelligence services.tsx/HealthcareAI";
import AISupplyChain from "./pages/services/Data science services/Artificial intelligence services.tsx/AISupplyChain";
import AIManufacturing from "./pages/services/Data science services/Artificial intelligence services.tsx/AIManufacturing";
import CognitiveComputing from "./pages/services/Data science services/Artificial intelligence services.tsx/CognitiveComputing";
import BusinessIntelligencePage from "./pages/services/Data science services/Artificial intelligence services.tsx/business intelligence services";
import DataScienceTraining from "./pages/services/Data science services/DataScienceTrainin";
import BigDataAnalyticsPage from "./pages/services/Data science services/Dataanalystics/BigDataAnalyticsPage";
import DataModelingServicesPage from "./pages/services/Data science services/Dataanalystics/DataModelingServicesPage";
import DataIntelligenceServicesPage from "./pages/services/Data science services/Dataanalystics/DataIntelligenceServicesPage";
import AugmentedAnalytics from "./pages/services/Data science services/Dataanalystics/AugmentedAnalytics";
import StatisticalDataAnalysisPage from "./pages/services/Data science services/Dataanalystics/StatisticalDataAnalysisPage";
import ReverseEmailAppendingPage from "./pages/services/Data science services/Dataanalystics/ReverseEmailAppendingPage";
import EdgeAnalytics from "./pages/services/Data science services/Dataanalystics/EdgeAnalytics";
import DataTabulationAnalysis from "./pages/services/Data science services/Dataanalystics/DataTabulationAnalysis";
import DataResearchPage from "./pages/services/Data science services/Dataanalystics/DataResearchPage";
import PredictiveModelingPage from "./pages/services/Data science services/Dataanalystics/PredictiveModelingPage";
import AzureStreamAnalyticsPage from "./pages/services/Data science services/Dataanalystics/AzureStreamAnalyticsPage";
import RiskAnalyticsPage from "./pages/services/Data science services/Business analyst/RiskAnalyticsPage";
import VisualAnalyticsPage from "./pages/services/Data science services/Business analyst/VisualAnalyticsPage";
import SurveyAnalyticsPage from "./pages/services/Data science services/Business analyst/SurveyAnalyticsPage";
import ContactCenterAnalytics from "./pages/services/Data science services/Business analyst/ContactCenterAnalytics";
import TextAnalytics from "./pages/services/Data science services/Business analyst/TextAnalytics";
import FinancialAnalytics from "./pages/services/Data science services/Business analyst/FinancialAnalytics";
import PredictiveAnalytics from "./pages/services/Data science services/Business analyst/PredictiveAnalytics";
import SupplyChainAnalytics from "./pages/services/Data science services/Business analyst/SupplyChainAnalytics";
import CollectionsAnalytics from "./pages/services/Data science services/Business analyst/CollectionsAnalytics";
import RetailAnalytics from "./pages/services/Data science services/Business analyst/RetailAnalytics";
import BPMAnalytics from "./pages/services/Data science services/Business analyst/BPMAnalytics";
import OperationalAnalytics from "./pages/services/Data science services/Business analyst/OperationalAnalytics";
import PredictiveModeling from "./pages/services/Data science services/Articles/PredictiveModeling";
import DataLakes from "./pages/services/Data science services/Articles/DataLakes";
import DataEngineering from "./pages/services/Data science services/Articles/DataEngineering";
import DataEngineeringBusiness from "./pages/services/Data science services/Articles/DataEngineeringBusiness";
import DataEngineeringStrategies from "./pages/services/Data science services/Articles/DataEngineeringStrategies";
import OutsourcingDataScience from "./pages/services/Data science services/Articles/OutsourcingDataScience";
import AiVsDoctors from "./pages/services/Data science services/Articles/AiVsDoctors";
import RpaChatbots from "./pages/services/Data science services/Articles/RpaChatbots";
import CNNGuide from "./pages/services/Data science services/Articles/CNNGuide";
import BlockchainAnalytics from "./pages/services/Data science services/Articles/BlockchainAnalytics";
import AICustomerExperience from "./pages/services/Data science services/Articles/AICustomerExperience";
import AIBusinessGuide from "./pages/services/Data science services/Articles/AIBusinessGuide";
import InventoryRpaCaseStudy from "./pages/services/Data science services/casestudies/InventoryRpaCaseStudy";
import HealthcareRpaCaseStudy from "./pages/services/Data science services/casestudies/HealthcareChartExtractionCaseStudy";
import HealthcareChartExtractionCaseStudy from "./pages/services/Data science services/casestudies/HealthcareChartExtractionCaseStudy";
import LABankOnboardingCaseStudy from "./pages/services/Data science services/casestudies/LABankOnboardingCaseStudy";
import AutomotiveFirmCaseStudy from "./pages/services/Data science services/casestudies/AutomotiveFirmCaseStudy";
import HealthcarePortfolioCaseStudy from "./pages/services/Data science services/casestudies/HealthcarePortfolioCaseStudy";
import NoSQLtoSQLCaseStudy from "./pages/services/Data science services/casestudies/NoSQLtoSQLCaseStudy";
import HighValueTransactionsCaseStudy from "./pages/services/Data science services/casestudies/HighValueTransactionsCaseStudy";
import DocumentProcessingCaseStudy from "./pages/services/Data science services/casestudies/DocumentProcessingCaseStudy";
import OpenSourceAnalyticsWorkbenchCaseStudy from "./pages/services/Data science services/casestudies/OpenSourceAnalyticsWorkbenchCaseStudy";
import DataStorageProcessingInfrastructureCaseStudy from "./pages/services/Data science services/casestudies/DataStorageProcessingInfrastructureCaseStudy";
import MortgageLQICaseStudy from "./pages/services/Data science services/casestudies/MortgageLQICaseStudy";
import RouteOptimizationCaseStudy from "./pages/services/Data science services/casestudies/RouteOptimizationCaseStudy";
import LogisticsTelemetryCaseStudy from "./pages/services/Data science services/casestudies/LogisticsTelemetryCaseStudy";
import PhotoEditingServicesPage from "./pages/services/operations-procurement-supplychain-manufacturing";
import BackgroundRemoval from "./pages/services/Photo Editing/photo retouching/BackgroundRemoval";
import BatchPhotoEditing from "./pages/services/Photo Editing/photo retouching/BatchPhotoEditing";
import PhotoEnhancement from "./pages/services/Photo Editing/photo retouching/PhotoEnhancement";
import AlbumDesignServicesPage from "./pages/services/Photo Editing/photo retouching/AlbumDesignServicesPage";
import BulkPhotoEditing from "./pages/services/Photo Editing/photo retouching/BulkPhotoEditing";
import ProductPhotoEditing from "./pages/services/Photo Editing/clipping path/ProductPhotoEditing";
import HairMaskingServices from "./pages/services/Photo Editing/clipping path/HairMaskingServices";
import CarImageClipping from "./pages/services/Photo Editing/clipping path/CarImageClipping";
import GhostMannequinServices from "./pages/services/Photo Editing/clipping path/GhostMannequinServices";
import ImageMaskingServices from "./pages/services/Photo Editing/clipping path/ImageMaskingServices";
import RealEstateEnhancement from "./pages/services/Photo Editing/Real estate photo editing/RealEstateEnhancement";
import RealEstateHDR from "./pages/services/Photo Editing/Real estate photo editing/RealEstateHDR";
import PanoramaStitchingPage from "./pages/services/Photo Editing/Real estate photo editing/PanoramaStitchingPage";
import DigitalDeclutteringPage from "./pages/services/Photo Editing/Real estate photo editing/DigitalDeclutteringPage";
import AerialPhotoEditingPage from "./pages/services/Photo Editing/Real estate photo editing/AerialPhotoEditingPage";
import VirtualTourPage from "./pages/services/Photo Editing/Real estate photo editing/VirtualTourPage";
import FloorPlanConversion from "./pages/services/Photo Editing/Real estate photo editing/FloorPlanConversion";
import FocusStackingPage from "./pages/services/Photo Editing/Real estate photo editing/FocusStackingPage";
import TwilightPhotoEditingPage from "./pages/services/Photo Editing/Real estate photo editing/TwilightPhotoEditingPage";
import MatterportServicesPage from "./pages/services/Photo Editing/Real estate photo editing/MatterportServicesPage";
import WeddingPhotoCullingPage from "./pages/services/Photo Editing/Wedding photos entry/WeddingPhotoCullingPage";
import PhotoDensityCorrectionPage from "./pages/services/Photo Editing/Wedding photos entry/PhotoDensityCorrectionPage";
import JewelryRetouchingServices from "./pages/services/Photo Editing/jewelry photo editing/JewelryRetouchingServices";
import JewelryClippingServices from "./pages/services/Photo Editing/jewelry photo editing/JewelryClippingServices";
import EcommerceImageClipping from "./pages/services/Photo Editing/ecomerce photo editing/EcommerceImageClipping";
import SportsPhotoEditing from "./pages/services/Photo Editing/portrait retouching/SportsPhotoEditing";
import FashionPhotoEditing from "./pages/services/Photo Editing/portrait retouching/FashionPhotoEditing";
import PhotoRestorationPage from "./pages/services/Photo Editing/portrait retouching/PhotoRestorationPage";
import PhotoManipulationPage from "./pages/services/Photo Editing/portrait retouching/PhotoManipulationPage";
import HeadshotRetouchingPage from "./pages/services/Photo Editing/portrait retouching/HeadshotRetouchingPage";
import NewbornPhotoEditingPage from "./pages/services/Photo Editing/portrait retouching/NewbornPhotoEditingPage";
import LightroomEditingPage from "./pages/services/Photo Editing/portrait retouching/LightroomEditingPage";
import SchoolPhotoEditing from "./pages/services/Photo Editing/portrait retouching/SchoolPhotoEditing";
import ClothPatternTilingPage from "./pages/services/Photo Editing/portrait retouching/ClothPatternTilingPage";
import PhotoshopAdvancedRetouchingPage from "./pages/services/Photo Editing/photoshop/PhotoshopAdvancedRetouchingPage";
import PhotoRetouchingUK from "./pages/services/Photo Editing/Photo editing UK/PhotoRetouchingUK";
import RealEstateEditingUK from "./pages/services/Photo Editing/Photo editing UK/RealEstateEditingUK";
import ClippingPathUK from "./pages/services/Photo Editing/Photo editing UK/ClippingPathUK";
import PhotoRestorationUK from "./pages/services/Photo Editing/Photo editing UK/PhotoRestorationUK";
import PanoramaStitchingServicesUK from "./pages/services/Photo Editing/panorama/PanoramaStitchingServicesUK";
import FisheyePanoramaStitching from "./pages/services/Photo Editing/panorama/FisheyePanoramaStitching";
import PhotoEditingBenefits from "./pages/services/Photo Editing/Articles/PhotoEditingBenefits";
import PhotoRestorationProcess from "./pages/services/Photo Editing/Articles/PhotoRestorationProcess";
import VirtualRealityRealEstate from "./pages/services/Photo Editing/Articles/VirtualRealityRealEstate";
import PhotographyTrends2018 from "./pages/services/Photo Editing/Articles/PhotographyTrends2018";
import PhotographyTrends from "./pages/services/Photo Editing/Articles/PhotographyTrends";
import WeddingPhotography from "./pages/services/Photo Editing/Articles/WeddingPhotography";
import WeddingTrends2018 from "./pages/services/Photo Editing/Articles/WeddingTrends2018";
import InsanePhotographyTrends from "./pages/services/Photo Editing/Articles/InsanePhotographyTrends";
import OutsourcingPhotoEditing from "./pages/services/Photo Editing/Articles/OutsourcingPhotoEditing";
import RawImageConversion from "./pages/services/Photo Editing/Articles/RawImageConversion";
import LandscapePhotography from "./pages/services/Photo Editing/Articles/LandscapePhotography";
import ColorCalibration from "./pages/services/Photo Editing/Articles/ColorCalibration";
import PhotoEditingManagement from "./pages/services/Photo Editing/Articles/PhotoEditingManagement";
import VectorizationFAQ from "./pages/services/Photo Editing/Articles/VectorizationFAQ";
import PhotomontageServices from "./pages/services/Photo Editing/Articles/PhotomontageServices.";
import DigitalPhotographyServices from "./pages/services/Photo Editing/Articles/DigitalPhotographyServices";
import PanoramaServices from "./pages/services/Photo Editing/Articles/PanoramaServices";
import ManualVsAutoFocus from "./pages/services/Photo Editing/Articles/ManualVsAutoFocus";
import ParallaxEffectGuide from "./pages/services/Photo Editing/Articles/ParallaxEffectGuide";
import LensFiltersGuide from "./pages/services/Photo Editing/Articles/LensFiltersGuide";
import PhotoCompositing from "./pages/services/Photo Editing/Articles/PhotoCompositing";
import MobilePhotographyTips from "./pages/services/Photo Editing/Articles/MobilePhotographyTips";
import HDRBracketing from "./pages/services/Photo Editing/Articles/HDRBracketing";
import PhotoshopServices from "./pages/services/Photo Editing/Articles/PhotoshopServices";
import PhotographyVideographyCaseStudy from "./pages/services/Photo Editing/case studies/PhotographyVideographyCaseStudy";
import HairMaskingCaseStudy from "./pages/services/Photo Editing/case studies/HairMaskingCaseStudy";
import ImageClippingCaseStudy from "./pages/services/Photo Editing/case studies/ImageClippingCaseStudy";
import NZBikeClippingCaseStudy from "./pages/services/Photo Editing/case studies/NZBikeClippingCaseStudy";
import BangladeshiClientCaseStudy from "./pages/services/Photo Editing/case studies/BangladeshiClientCaseStudy";
import SouthKoreanPortraitRestoration from "./pages/services/Photo Editing/case studies/SouthKoreanPortraitRestoration";
import JewelryClippingRetouching from "./pages/services/Photo Editing/case studies/JewelryClippingRetouching";
import NorwegianHDRBlending from "./pages/services/Photo Editing/case studies/NorwegianHDRBlending";
import WisconsinInsuranceClipping from "./pages/services/Photo Editing/case studies/WisconsinInsuranceClipping";
import MinneapolisPhotoMasking from "./pages/services/Photo Editing/case studies/MinneapolisPhotoMasking";
import PanoramaStitchingCaseStudy from "./pages/services/Photo Editing/case studies/PanoramaStitchingCaseStudy";
import PortraitRestorationCaseStudy from "./pages/services/Photo Editing/case studies/PortraitRestorationCaseStudy";
import PanoramaStitchingUKCaseStudy from "./pages/services/Photo Editing/case studies/PanoramaStitchingUKCaseStudy";
import Global3DImageVideoCaseStudy from "./pages/services/Photo Editing/case studies/Global3DImageVideoCaseStudy";
import BabySwimmingDesignCaseStudy from "./pages/services/Photo Editing/case studies/BabySwimmingDesignCaseStudy";
import RealEstateDroneVideoCaseStudy from "./pages/services/Photo Editing/case studies/RealEstateDroneVideoCaseStudy";
import SwedishPhotographyCaseStudy from "./pages/services/Photo Editing/case studies/SwedishPhotographyCaseStudy";
import UKPhotoStudioCaseStudy from "./pages/services/Photo Editing/case studies/UKPhotoStudioCaseStudy";
import NorwayPhotoProcessingCaseStudy from "./pages/services/Photo Editing/case studies/NorwayPhotoProcessingCaseStudy";
import UKAutoTraderClippingCaseStudy from "./pages/services/Photo Editing/case studies/UKAutoTraderClippingCaseStudy";
import NorwayPhotoStitchingCaseStudy from "./pages/services/Photo Editing/case studies/NorwayPhotoStitchingCaseStudy";
import HdrImageEditingCaseStudy from "./pages/services/Photo Editing/case studies/HdrImageEditingCaseStudy";
import DroneVirtualTourCaseStudy from "./pages/services/Photo Editing/case studies/DroneVirtualTourCaseStudy";
import InsuranceEligibilityManagement from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceEligibilityManagement";
import LossRunProcessing from "./pages/services/Insurance BPO services/Services of insurance agencies/LossRunProcessing";
import InsuranceQuoteSummary from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceQuoteSummary";
import DocumentIndexingFiling from "./pages/services/Insurance BPO services/Services of insurance agencies/DocumentIndexingFiling";
import InsuranceAccountingBilling from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceAccountingBilling";
import CertificateOfInsurance from "./pages/services/Insurance BPO services/Services of insurance agencies/CertificateOfInsurance";
import PolicyCheckingAdministration from "./pages/services/Insurance BPO services/Services of insurance agencies/PolicyCheckingAdministration";
import RenewalExposureSummary from "./pages/services/Insurance BPO services/Services of insurance agencies/RenewalExposureSummary";
import ClaimsAdministration from "./pages/services/Insurance BPO services/Services of insurance agencies/ClaimsAdministration";
import AgencyManagement from "./pages/services/Insurance BPO services/Services of insurance agencies/AgencyManagement";
import BookkeepingPage from "./pages/services/Insurance BPO services/Services of insurance agencies/BookkeepingPage";
import PublicPolicyEngagement from "./pages/services/Insurance BPO services/Services of insurance agencies/PublicPolicyEngagement";
import PolicyOwnerServices from "./pages/services/Insurance BPO services/Services of insurance agencies/PolicyOwnerServices";
import InsuranceCredentialingServices from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceCredentialingServices";
import BackOfficeAutomation from "./pages/services/Insurance BPO services/Services of insurance agencies/BackOfficeAutomation";
import InsuranceUnderwriting from "./pages/services/Insurance BPO services/Services of insurance agencies/InsuranceUnderwriting";
import InsuranceBillingAR from "./pages/services/Insurance BPO services/Services of insurance carriers/InsuranceBillingAR";
import PolicyIssuancePage from "./pages/services/Insurance BPO services/Services of insurance carriers/PolicyIssuancePage";
import LifeClaimsManagementPage from "./pages/services/Insurance BPO services/Services of insurance carriers/LifeClaimsManagementPage";
import InsuranceClaimsPC from "./pages/services/Insurance BPO services/Services of insurance carriers/InsuranceClaimsPC";
import ACORDFormsProcessing from "./pages/services/Insurance BPO services/Services of insurance carriers/ACORDFormsProcessing";
import NewBusinessSetup from "./pages/services/Insurance BPO services/Services of insurance carriers/NewBusinessSetup";
import InsuranceRenewalsProcessing from "./pages/services/Insurance BPO services/Services of insurance carriers/InsuranceRenewalsProcessing";
import InsuranceClaimsManagement from "./pages/services/Insurance BPO services/Services of insurance carriers/InsuranceClaimsManagement";
import PolicyAdministration from "./pages/services/Insurance BPO services/Services of insurance carriers/PolicyAdministration";
import InsuranceServicesMGA from "./pages/services/Insurance BPO services/InsuranceServicesMGA";
import CAQHProfileServices from "./pages/services/Insurance BPO services/Insurance bank office support/CAQHProfileServices";
import InsuranceMarketResearches from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceMarketResearch";
import InsuranceAppointmentSetting from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceAppointmentSetting";
import CommissionManagement from "./pages/services/Insurance BPO services/Insurance bank office support/CommissionManagement";
import InsuranceDataEntry from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceDataEntry";
import InsuranceEndorsementsPage from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceEndorsementsPage";
import InsuranceBPOCustomerSupport from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceBPOCustomerSupport";
import InsuranceReporting from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceReporting";
import UnderwritingPCInsurancePage from "./pages/services/Insurance BPO services/Insurance bank office support/UnderwritingPCInsurancePage";
import LifeAnnuityUnderwriting from "./pages/services/Insurance BPO services/Insurance bank office support/LifeAnnuityUnderwriting";
import CatastropheModelingPage from "./pages/services/Insurance BPO services/Insurance bank office support/CatastropheModelingPage";
import WarrantyClaimsManagementPage from "./pages/services/Insurance BPO services/Insurance bank office support/WarrantyClaimsManagementPage";
import InsuranceBPMPage from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceBPMPage";
import InsuranceSoftwareDevelopment from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceSoftwareDevelopment";
import InsuranceAnalyticsServices from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceAnalyticsServices";
import QQCatalystManagement from "./pages/services/Insurance BPO services/Insurance bank office support/QQCatalystManagement";
import InsuranceOperationsServices from "./pages/services/Insurance BPO services/Insurance bank office support/InsuranceOperationsServices";
// import NimbleInsuranceServices from "./pages/services/Insurance BPO services/Articles/NimbleInsuranceServices";
import InsuranceClaimsArticle from "./pages/services/Insurance BPO services/Articles/InsuranceClaimsArticle";
import InsuranceDataAnalyticsArticle from "./pages/services/Insurance BPO services/Articles/InsuranceDataAnalyticsArticle";
import USDotEFilingArticle from "./pages/services/Insurance BPO services/Articles/USDotEFilingArticle";
import InsuranceCaseStudy from "./pages/services/Insurance BPO services/Case studies/InsuranceCaseStudy";
import TexasInsuranceCaseStudy from "./pages/services/Insurance BPO services/Case studies/TexasInsuranceCaseStudy";
import PolicyCheckingCaseStudy from "./pages/services/Insurance BPO services/Case studies/PolicyCheckingCaseStudy";
import BusinessProcessingCaseStudy from "./pages/services/Insurance BPO services/Case studies/BusinessProcessingCaseStudy";
import PolicyCheckingFloridaCaseStudy from "./pages/services/Insurance BPO services/Case studies/PolicyCheckingFloridaCaseStudy";
import PolicyCheckingNYCaseStudy from "./pages/services/Insurance BPO services/Case studies/PolicyCheckingNYCaseStudy";
import HealthInsuranceBackOfficeCaseStudy from "./pages/services/Insurance BPO services/Case studies/HealthInsuranceBackOfficeCaseStudy";
import MiamiInsuranceBackOfficeCaseStudy from "./pages/services/Insurance BPO services/Case studies/MiamiInsuranceBackOfficeCaseStudy";
import InsuranceAccountsCaseStudy from "./pages/services/Insurance BPO services/Case studies/InsuranceAccountsCaseStudy";
import DataAnnotationServices from "./pages/services/DataServices/Dataentry/DataAnnotationServices";
import DigitalAssetManagement from "./pages/services/DataServices/Dataentry/DigitalAssetManagement";
import RealEstateDataManagement from "./pages/services/DataServices/Dataentry/RealEstateDataManagement";
import EmailAppendingServices from "./pages/services/DataServices/Dataentry/EmailAppendingServices";
import OnlineDataEntryServices from "./pages/services/DataServices/Dataentry/OnlineDataEntryServices";
import OfflineDataEntryServices from "./pages/services/DataServices/Dataentry/OfflineDataEntryServices";
import DirectoryServices from "./pages/services/DataServices/Dataentry/DirectoryServices";
import RealEstateAppraisalDataEntry from "./pages/services/DataServices/Dataentry/RealEstateAppraisalDataEntry";
import GeotaggingDataEntry from "./pages/services/DataServices/Dataentry/GeotaggingDataEntry";
import BusinessCardDataEntry from "./pages/services/DataServices/Dataentry/BusinessCardDataEntry";
import FoodNutritionDataEntry from "./pages/services/DataServices/Dataentry/FoodNutritionDataEntry";
import ImageDataEntry from "./pages/services/DataServices/Dataentry/ImageDataEntry";
import EbookDataEntry from "./pages/services/DataServices/Dataentry/EbookDataEntry";
import DocumentDataEntry from "./pages/services/DataServices/Dataentry/DocumentDataEntry";
import DocumentImaging from "./pages/services/DataServices/Dataentry/DocumentImaging";
import DataExtractionServices from "./pages/services/DataServices/Dataentry/DataExtractionServices";
import DocumentManagementServices from "./pages/services/DataServices/Dataentry/DocumentManagementServices";
import EncyclopediaDataEntry from "./pages/services/DataServices/Dataentry/EncyclopediaDataEntry";
import CopyPasteServices from "./pages/services/DataServices/Dataentry/CopyPasteServices";
import OffshoreDataEntryServices from "./pages/services/DataServices/Dataentry/OffshoreDataEntryServices";
import CatalogDataEntryServices from "./pages/services/DataServices/Dataentry/CatalogDataEntryServices";
import MailingListDataEntry from "./pages/services/DataServices/Dataentry/MailingListDataEntry";
import CompanyReportsDataEntry from "./pages/services/DataServices/Dataentry/CompanyReportsDataEntry";
import QuestionnairesDataEntry from "./pages/services/DataServices/Dataentry/QuestionnairesDataEntry";
import SurveyDataEntry from "./pages/services/DataServices/Dataentry/SurveyDataEntry";
import InvoiceDataEntry from "./pages/services/DataServices/Dataentry/InvoiceDataEntry";
import InternetDataInput from "./pages/services/DataServices/Dataentry/InternetDataInput";
import DatabaseDataEntry from "./pages/services/DataServices/Dataentry/DatabaseDataEntry";
import RestaurantMenuDataEntry from "./pages/services/DataServices/Dataentry/RestaurantMenuDataEntry";
import ProductRegistrationDataEntry from "./pages/services/DataServices/Dataentry/ProductRegistrationDataEntry";
import InsuranceClaimsDataEntry from "./pages/services/DataServices/Dataentry/InsuranceClaimsDataEntry";
import EnrollmentFormsDataEntry from "./pages/services/DataServices/Dataentry/EnrollmentFormsDataEntry";
import TextNumericDataEntry from "./pages/services/DataServices/Dataentry/TextNumericDataEntry";
import ClassifiedsDataEntry from "./pages/services/DataServices/Dataentry/ClassifiedsDataEntry";
import LegalDocumentsDataEntry from "./pages/services/DataServices/Dataentry/LegalDocumentsDataEntry";
import HandwrittenDocumentsDataEntry from "./pages/services/DataServices/Dataentry/HandwrittenDocumentsDataEntry";
import MysqlDatabaseDataEntry from "./pages/services/DataServices/Dataentry/MysqlDatabaseDataEntry";
import TelephoneDirectoryDataEntry from "./pages/services/DataServices/Dataentry/TelephoneDirectoryDataEntry";
import WebsiteDataEntry from "./pages/services/DataServices/Dataentry/WebsiteDataEntry";
import TranslingualDataEntry from "./pages/services/DataServices/Dataentry/TranslingualDataEntry";
import MultilingualInvoiceDataEntry from "./pages/services/DataServices/Dataentry/MultilingualInvoiceDataEntry";
import BiologicalSpeciesDatabase from "./pages/services/DataServices/Dataentry/BiologicalSpeciesDatabase";
import QuickBooksDataEntry from "./pages/services/DataServices/Dataentry/QuickBooksDataEntry";
import CRMDataEntry from "./pages/services/DataServices/Dataentry/CRMDataEntry";
import DigitalTransactionProcessing from "./pages/services/DataServices/Dataentry/DigitalTransactionProcessing";
import SurveyFormsProcessing from "./pages/services/DataServices/Dataentry/SurveyFormsProcessing";
import CRMDatabaseManagement from "./pages/services/DataServices/Dataentry/CRMDatabaseManagement";
import ERPDataEntry from "./pages/services/DataServices/Dataentry/ERPDataEntry";
import SkuDataEntryPage from "./pages/services/DataServices/Dataentry/SkuDataEntryPage";
import DataLicensingPage from "./pages/services/DataServices/Dataentry/DataLicensingPage";
import HealthcareDataMining from "./pages/services/DataServices/Dataentry/HealthcareDataMining";
import RemoteDataEntry from "./pages/services/DataServices/Dataentry/RemoteDataEntry";
import AddressManagement from "./pages/services/DataServices/Dataentry/AddressManagement";
import CRMDataMining from "./pages/services/DataServices/Dataentry/CRMDataMining";
import BankingDataEntry from "./pages/services/DataServices/Dataentry/BankingDataEntry";
import ImageSearchServices from "./pages/services/DataServices/Dataentry/ImageSearchServices";
import TypingServices from "./pages/services/DataServices/Dataentry/TypingServices";
import MedicalImageAnnotation from "./pages/services/DataServices/Dataentry/MedicalImageAnnotation";
import DataIndexingServices from "./pages/services/DataServices/Dataentry/DataIndexingServices";
import BookIndexingServices from "./pages/services/DataServices/Dataentry/BookIndexingServices";
import DataValidationServices from "./pages/services/DataServices/Dataentry/DataValidationServices";
import DataMaskingServices from "./pages/services/DataServices/Dataentry/DataMaskingServices";
import DataProfilingServices from "./pages/services/DataServices/Dataentry/DataProfilingServices";
import DataLabelingServices from "./pages/services/DataServices/Dataentry/DataLabelingServices";
import DataAppendingServices from "./pages/services/DataServices/Dataentry/DataAppendingServices";
import DataEnrichmentServices from "./pages/services/DataServices/Dataentry/DataEnrichmentServices";
import JATSXMLConversionServices from "./pages/services/DataServices/Dataconversion/JATSXMLConversionServices";
import DocumentConversionServices from "./pages/services/DataServices/Dataconversion/DocumentConversionServices";
import FileConversionServices from "./pages/services/DataServices/Dataconversion/FileConversionServices";
import EPub3ConversionServices from "./pages/services/DataServices/Dataconversion/EPub3ConversionServices";
import XMLConversionServices from "./pages/services/DataServices/Dataconversion/XMLConversionServices";
import PDFConversionServices from "./pages/services/DataServices/Dataconversion/PDFConversionServices";
import BookConversionServices from "./pages/services/DataServices/Dataconversion/BookConversionServices";
import HTMLConversionServices from "./pages/services/DataServices/Dataconversion/HTMLConversionServices";
import SGMLConversionServices from "./pages/services/DataServices/Dataconversion/SGMLConversionServices";
import EDMServices from "./pages/services/DataServices/Dataconversion/EDMServices";
import DocumentFormattingServices from "./pages/services/DataServices/Dataconversion/DocumentFormattingServices";
import XBRLConversionServices from "./pages/services/DataServices/Dataconversion/XBRLConversionServices";
import PubMedConversion from "./pages/services/DataServices/Dataconversion/PubMedConversion";
import DTBookConversion from "./pages/services/DataServices/Dataconversion/DTBookConversion";
import PSDtoHTMLConversion from "./pages/services/DataServices/Dataconversion/PSDtoHTMLConversion";
import FigmaToHtmlConversion from "./pages/services/DataServices/Dataconversion/FigmaToHtmlConversion";
import HtmlToResponsiveConversion from "./pages/services/DataServices/Dataconversion/HtmlToResponsiveConversion";
import AdobeXDToHTML from "./pages/services/DataServices/Dataconversion/AdobeXDToHTML";
import HtmlToWordPressPage from "./pages/services/DataServices/Dataconversion/HtmlToWordPressPage";
import SketchHtmlServices from "./pages/services/DataServices/Dataconversion/SketchHtmlServices";
import ZeplinToHtml from "./pages/services/DataServices/Dataconversion/ZeplinToHtml";
import PdfAccessibility from "./pages/services/DataServices/Dataconversion/PdfAccessibility";
import NimbleInsuranceServices from "./pages/services/Insurance BPO services/Articles/NimbleInsuranceServices";
import EpubConversionPage from "./pages/services/DataServices/ebook conversion/EpubConversionPage";
import ePubServicesPage from "./pages/services/DataServices/ebook conversion/ePubServicesPage";
import EPubServicesPage from "./pages/services/DataServices/ebook conversion/ePubServicesPage";
import KindleConversionPage from "./pages/services/DataServices/ebook conversion/KindleConversionPage";
import IPadIPhoneConversionPage from "./pages/services/DataServices/ebook conversion/IPadIPhoneConversionPage";
import ComprehensiveDigitalServices from "./pages/services/DataServices/ebook conversion/ComprehensiveDigitalServices";
import ReflowableEbookServices from "./pages/services/DataServices/ebook conversion/ReflowableEbookServices";
import FixedLayoutPageContent from "./pages/services/DataServices/ebook conversion/FixedLayoutPageContent";
import MultilingualPageContent from "./pages/services/DataServices/ebook conversion/MultilingualPageContent";
import EnhancedEbookPage from "./pages/services/DataServices/ebook conversion/EnhancedEbookPage";
import WebAccessibleEbookPage from "./pages/services/DataServices/ebook conversion/WebAccessibleEbookPage";
import InteractiveEbookPage from "./pages/services/DataServices/ebook conversion/InteractiveEbookPage";
import DocBookXMLPage from "./pages/services/DataServices/ebook conversion/DocBookXMLPage";
import PropertyManagementPage from "./pages/services/DataServices/PropertyManagementPage";
import MetadataTaggingPage from "./pages/services/DataServices/Dataprocessing/MetadataTaggingPage";
import DataTransformationPage from "./pages/services/DataServices/Dataprocessing/DataTransformationPage";
import MasterDataManagementPage from "./pages/services/DataServices/Dataprocessing/MasterDataManagementPage";
import SemanticImageSegmentation from "./pages/services/DataServices/Dataprocessing/SemanticImageSegmentation";
import MetadataManagement from "./pages/services/DataServices/Dataprocessing/MetadataManagement";
import DataHarmonization from "./pages/services/DataServices/Dataprocessing/DataHarmonization";
import DataStandardization from "./pages/services/DataServices/Dataprocessing/DataStandardization";
import MergePurgeServices from "./pages/services/DataServices/Dataprocessing/MergePurgeServices";
import FormsProcessingServices from "./pages/services/DataServices/Dataprocessing/FormsProcessingServices";
import OrderProcessingServices from "./pages/services/DataServices/Dataprocessing/OrderProcessingServices";
import ImageProcessing from "./pages/services/DataServices/Dataprocessing/ImageProcessing";
import DataCleansing from "./pages/services/DataServices/Dataprocessing/DataCleansing";
import InsuranceClaimsProcessing from "./pages/services/DataServices/Dataprocessing/InsuranceClaimsProcessing";
import MarketResearchFormsProcessing from "./pages/services/DataServices/Dataprocessing/MarketResearchFormsProcessing";
import CheckProcessing from "./pages/services/DataServices/Dataprocessing/CheckProcessing";
import CreditCardProcessing from "./pages/services/DataServices/Dataprocessing/CreditCardProcessing";
import TransactionProcessing from "./pages/services/DataServices/Dataprocessing/TransactionProcessing";
import SurveyProcessing from "./pages/services/DataServices/Dataprocessing/SurveyProcessing";
import DataDeduplication from "./pages/services/DataServices/Dataprocessing/DataDeduplication";
import MailingListCompilation from "./pages/services/DataServices/Dataprocessing/MailingListCompilation";
import DatabaseCreationServices from "./pages/services/DataServices/Dataprocessing/DatabaseCreationServices";
import DataAbstractionServices from "./pages/services/DataServices/Dataprocessing/DataAbstractionServices";
import DataMiningServices from "./pages/services/DataServices/Dataprocessing/DataMiningServices";
import TextWebDataMining from "./pages/services/DataServices/Dataprocessing/TextWebDataMining";
import StudentLoanProcessing from "./pages/services/DataServices/Dataprocessing/StudentLoanProcessing";
import TaggingAnnotationServices from "./pages/services/DataServices/Dataprocessing/TaggingAnnotationServices";
import ImageAnnotationServices from "./pages/services/DataServices/Dataprocessing/ImageAnnotationServices";
import HumanGestureAnnotation from "./pages/services/DataServices/Dataprocessing/HumanGestureAnnotation";
import BoundingBoxServices from "./pages/services/DataServices/Dataprocessing/BoundingBoxServices";
import PurchaseOrderProcessing from "./pages/services/DataServices/Dataprocessing/PurchaseOrderProcessing";
import SKUDataManagement from "./pages/services/DataServices/Dataprocessing/SKUDataManagement";
import ProductInformationManagement from "./pages/services/DataServices/Dataprocessing/ProductInformationManagement";
import DataPreparationServices from "./pages/services/DataServices/Dataprocessing/DataPreparationServices";
import VideoAnnotationServices from "./pages/services/DataServices/Dataprocessing/VideoAnnotationServices";
import CrmDataCleansingServices from "./pages/services/DataServices/Dataprocessing/CrmDataCleansingServices";
import DataConsolidationServices from "./pages/services/DataServices/Dataprocessing/DataConsolidationServices";
import DataProvisioningServices from "./pages/services/DataServices/Dataprocessing/DataProvisioningServices";
import DataMonitoringServices from "./pages/services/DataServices/Dataprocessing/DataMonitoringServices";
import DataCollectionServices from "./pages/services/DataServices/Dataprocessing/DataCollectionServices";
import DataLifecycleManagementServices from "./pages/services/DataServices/Dataprocessing/DataLifecycleManagementServices";
import DMSServices from "./pages/services/DataServices/Dataprocessing/DMSServices";
import DataVerification from "./pages/services/DataServices/Dataprocessing/DataVerification";
import DataScrubbing from "./pages/services/DataServices/Dataprocessing/DataScrubbing";
import DocumentIndexing from "./pages/services/DataServices/Dataprocessing/DocumentIndexing";
import DocumentScanning from "./pages/services/DataServices/Dataprocessing/DocumentScanning";
import DPOPage from "./pages/services/DataServices/Datamanagement/DPOPage";
import RecordsManagementPage from "./pages/services/DataServices/Datamanagement/RecordsManagementPage";
import EcommerceTaxonomyPage from "./pages/services/DataServices/Datamanagement/EcommerceTaxonomyPage";
import CloudDataManagementPage from "./pages/services/DataServices/Datamanagement/CloudDataManagementPage";
import SportsDataTaggingServices from "./pages/services/DataServices/Datamanagement/SportsDataTaggingServices";
import SportsDataTagging from "./pages/services/DataServices/Datamanagement/SportsDataTaggingServices";
import DataFormattingServices from "./pages/services/DataServices/Datamanagement/DataFormattingServices";
import EcommerceProductDataClassification from "./pages/services/DataServices/Datamanagement/EcommerceProductDataClassification";
import MagentoDataEntryServices from "./pages/services/DataServices/Datamanagement/MagentoDataEntryServices";
import EcommerceDataCleansing from "./pages/services/DataServices/Datamanagement/EcommerceDataCleansing";
import DataProtectionConsulting from "./pages/services/DataServices/Datamanagement/DataProtectionConsulting";
import DataGovernanceServices from "./pages/services/DataServices/Datamanagement/DataGovernanceServices";
import DataVirtualizationServices from "./pages/services/DataServices/Datamanagement/DataVirtualizationServices";
import FinancialDataProcessingServices from "./pages/services/DataServices/Datamanagement/FinancialDataProcessingServices";
import DataQualityManagementServices from "./pages/services/DataServices/Datamanagement/DataQualityManagementServices";
import DataModernizationServices from "./pages/services/DataServices/Datamanagement/DataModernizationServices";
import PropertyPreservationDataEntry from "./pages/services/DataServices/Datamanagement/PropertyPreservationDataEntry";
import CatalogConversionServices from "./pages/services/DataServices/onlinecatalog/CatalogConversionServices";
import EcommerceDataEntryServices from "./pages/services/DataServices/onlinecatalog/EcommerceDataEntryServices";
import CatalogProcessingServices from "./pages/services/DataServices/onlinecatalog/CatalogProcessingServices";
import ProductCatalogMaintenance from "./pages/services/DataServices/onlinecatalog/ProductCatalogMaintenance";
import CatalogContentManagement from "./pages/services/DataServices/onlinecatalog/CatalogContentManagement";
import CatalogBuildingIndexing from "./pages/services/DataServices/onlinecatalog/CatalogBuildingIndexing";
import OCRCleanupServices from "./pages/services/DataServices/OCR/OCRCleanupServices";
import DocumentDigitizationServices from "./pages/services/DataServices/OCR/DocumentDigitizationServices";
import OCRConversionServices from "./pages/services/DataServices/OCR/OCRConversionServices";
import ManufacturingDataEntry from "./pages/services/DataServices/Industries/ManufacturingDataEntry";
import HealthcareDataEntry from "./pages/services/DataServices/Industries/HealthcareDataEntry";
import ArchitecturalDataEntry from "./pages/services/DataServices/Industries/ArchitecturalDataEntry";
import GamingDataEntry from "./pages/services/DataServices/Industries/GamingDataEntry";
import GovernmentDataEntry from "./pages/services/DataServices/Industries/GovernmentDataEntry";
import PublishingDataEntry from "./pages/services/DataServices/Industries/PublishingDataEntry";
import AccountingDataEntry from "./pages/services/DataServices/Industries/AccountingDataEntry";
import LegalDataEntry from "./pages/services/DataServices/Industries/LegalDataEntry";
import EducationalDataEntry from "./pages/services/DataServices/Industries/EducationalDataEntry";
import StudiosDataEntry from "./pages/services/DataServices/Industries/StudiosDataEntry";
import AciEManifestServices from "./pages/services/DataServices/Industries/AciEManifestServices";
import CustomsBrokerage from "./pages/services/DataServices/Articles/CustomsBrokerage";
import DataEntryBenefits from "./pages/services/DataServices/Articles/DataEntryBenefits";
import BigData2020 from "./pages/services/DataServices/Articles/BigData2020";
import DataManagementMisconceptions from "./pages/services/DataServices/Articles/DataManagementMisconceptions";
import OCRDataCapture from "./pages/services/DataServices/Articles/OCRDataCapture";
import BigDataAnalyticsCheatSheet from "./pages/services/DataServices/Articles/BigDataAnalyticsCheatSheet";
import DataMiningTechniques from "./pages/services/DataServices/Articles/DataMiningTechniques";
import InvestInDataAnalytics from "./pages/services/DataServices/Articles/InvestInDataAnalytics";
import ManualDataEntrySolutions from "./pages/services/DataServices/Articles/ManualDataEntrySolutions";
import TopDataExtractionTools from "./pages/services/DataServices/Articles/TopDataExtractionTools";
import ProductDataEntry from "./pages/services/DataServices/Articles/ProductDataEntry";
import CloudDataManagement from "./pages/services/DataServices/Articles/CloudDataManagement";
import DataMigrationBestPractices from "./pages/services/DataServices/Articles/DataMigrationBestPractices";
import BigDataTrends from "./pages/services/DataServices/Articles/BigDataTrends";
import RestaurantMenuDigitization from "./pages/services/DataServices/Articles/RestaurantMenuDigitization";
import FormCreationBenefits from "./pages/services/DataServices/Articles/FormCreationBenefits";
import DataAccuracy from "./pages/services/DataServices/Articles/DataAccuracy";
import DataEntryClerkPage from "./pages/services/DataServices/Articles/DataEntryClerkPage";
import DataEntryIndiaPage from "./pages/services/DataServices/Articles/DataEntryIndiaPage";
import BetterDataManagementPage from "./pages/services/DataServices/Articles/BetterDataManagementPage";
import DataEntryIndiaAdvantage from "./pages/services/DataServices/Articles/DataEntryIndiaAdvantage";
import DataEntryOutsourcing from "./pages/services/DataServices/Articles/DataEntryOutsourcing";
import DataQualitySolution from "./pages/services/DataServices/Articles/DataQualitySolution";
import InaccurateDataSolution from "./pages/services/DataServices/Articles/InaccurateDataSolution";
import SpreadsheetToExcel from "./pages/services/DataServices/Articles/SpreadsheetConversionPage";
import SpreadsheetConversionPage from "./pages/services/DataServices/Articles/SpreadsheetConversionPage";
import MicrofilmScanningPage from "./pages/services/DataServices/Articles/MicrofilmScanningPage";
import ExhibitionDesignServices from "./pages/services/creative-design/graphic-design/ExhibitionDesignServices";
import PowerPointDesignServices from "./pages/services/creative-design/graphic-design/PowerPointDesignServices";
import EmbroideryServices from "./pages/services/creative-design/graphic-design/EmbroideryServices";
import SignageDesignServices from "./pages/services/creative-design/graphic-design/SignageDesignServices";
import CorporateDesignServices from "./pages/services/creative-design/graphic-design/CorporateDesignServices";
import EmailDesignServices from "./pages/services/creative-design/graphic-design/EmailDesignServices";
import BrandDesignServices from "./pages/services/creative-design/graphic-design/BrandDesignServices";
import MenuDesign from "./pages/services/creative-design/graphic-design/MenuDesign";
import EcommerceDesignPage from "./pages/services/creative-design/graphic-design/EcommerceDesignPage";
import EcommerceDesign from "./pages/services/creative-design/graphic-design/EcommerceDesignPage";
import WebDesign from "./pages/services/creative-design/graphic-design/WebDesign";
import LabelDesign from "./pages/services/creative-design/graphic-design/LabelDesign";
import PromotionalMaterialDesign from "./pages/services/creative-design/graphic-design/PromotionalMaterialDesign";
import VisualDesignServices from "./pages/services/creative-design/graphic-design/VisualDesignServices";
import BusinessCardDesignServices from "./pages/services/creative-design/graphic-design/BusinessCardDesignServices";
import NewsletterDesignServices from "./pages/services/creative-design/graphic-design/NewsletterDesignServices";
import AnnualReportDesignServices from "./pages/services/creative-design/graphic-design/AnnualReportDesignServices";
import FlyerDesignServices from "./pages/services/creative-design/graphic-design/FlyerDesignServices";
import PackagingDesignServices from "./pages/services/creative-design/graphic-design/PackagingDesignServices";
import PackagingArtworkServices from "./pages/services/creative-design/graphic-design/PackagingArtworkServices";
import Product3DPackageDesign from "./pages/services/creative-design/graphic-design/Product3DPackageDesign";
import CoverDesignServices from "./pages/services/creative-design/graphic-design/CoverDesignServices";
import BannerDesignServices from "./pages/services/creative-design/graphic-design/BannerDesignServices";
import BrochureDesignServices from "./pages/services/creative-design/graphic-design/BrochureDesignServices";
import HoardingDesignServices from "./pages/services/creative-design/graphic-design/HoardingDesignServices";
import InteriorBrandingServices from "./pages/services/creative-design/graphic-design/InteriorBrandingServices";
import EditorialDesignServices from "./pages/services/creative-design/graphic-design/EditorialDesignServices";
import PosterDesignServices from "./pages/services/creative-design/graphic-design/PosterDesignServices";
import CatalogDesignServices from "./pages/services/creative-design/graphic-design/CatalogDesignServices";
import ToteBagDesignServices from "./pages/services/creative-design/graphic-design/ToteBagDesignServices";
import TattooDesignServices from "./pages/services/creative-design/graphic-design/TattooDesignServices";
import InfographicDesignServices from "./pages/services/creative-design/graphic-design/InfographicDesignServices";
import StationeryDesignServices from "./pages/services/creative-design/graphic-design/StationeryDesignServices";
import CarWrapDesignServices from "./pages/services/creative-design/graphic-design/CarWrapDesignServices";
import LetterheadDesignServices from "./pages/services/creative-design/graphic-design/LetterheadDesignServices";
import InvitationDesignServices from "./pages/services/creative-design/graphic-design/InvitationDesignServices";
import CalendarDesignServices from "./pages/services/creative-design/graphic-design/CalendarDesignServices";
import ApparelDesignServices from "./pages/services/creative-design/graphic-design/ApparelDesignServices";
import MerchandiseDesignServices from "./pages/services/creative-design/graphic-design/MerchandiseDesignServices";
import TradeShowBoothDesign from "./pages/services/creative-design/graphic-design/TradeShowBoothDesign";
import ThankYouCardDesign from "./pages/services/creative-design/graphic-design/ThankYouCardDesign";
import TShirtDesign from "./pages/services/creative-design/graphic-design/TShirtDesign";
import WordTemplateDesign from "./pages/services/creative-design/graphic-design/WordTemplateDesign";
import StickerDesign from "./pages/services/creative-design/graphic-design/StickerDesign";
import WhitePaperDesign from "./pages/services/creative-design/graphic-design/WhitePaperDesign";
import CampaignDesign from "./pages/services/creative-design/graphic-design/CampaignDesign";
import DesignThinking from "./pages/services/creative-design/graphic-design/DesignThinking";
import WebPageLayoutDesign from "./pages/services/creative-design/graphic-design/WebPageLayoutDesign";
import RealEstateBrochureDesign from "./pages/services/creative-design/graphic-design/RealEstateBrochureDesign";
import MarketingCollateralDesign from "./pages/services/creative-design/graphic-design/MarketingCollateralDesign";
import PresentationDesignServices from "./pages/services/creative-design/graphic-design/PresentationDesignServices";
import Logo3DDesignServices from "./pages/services/creative-design/Logo-design/Logo3DDesignServices";
import AnimatedLogoDesignServices from "./pages/services/creative-design/Logo-design/AnimatedLogoDesignServices";
import Logo2DDesignServices from "./pages/services/creative-design/Logo-design/Logo2DDesignServices";
import VectorArtworkServices from "./pages/services/creative-design/Logo-design/VectorArtworkServices";
import LogoCleanupServices from "./pages/services/creative-design/Logo-design/LogoCleanupServices";
import LayoutAndFormatting from "./pages/services/creative-design/Artwork/LayoutAndFormatting";
import MagazineDesign from "./pages/services/creative-design/Artwork/MagazineDesign";
import DesktopPublishing from "./pages/services/creative-design/Artwork/DesktopPublishing";
import BookLayout from "./pages/services/creative-design/Artwork/BookLayout";
import ImageOptimization from "./pages/services/creative-design/Artwork/ImageOptimization";
import ImageToVectorConversion from "./pages/services/creative-design/Artwork/ImageToVectorConversion";
import MagazineDigitization from "./pages/services/creative-design/Artwork/MagazineDigitization";
import Art2DServices from "./pages/services/creative-design/Artwork/Art2DServices";
import TypesettingServices from "./pages/services/creative-design/Prepress/TypesettingServices";
import PodcastEditing from "./pages/services/creative-design/Audio-editing/PodcastEditing";
import AudioConversion from "./pages/services/creative-design/Audio-editing/AudioConversion";
import AdJingleCreation from "./pages/services/creative-design/Audio-editing/AdJingleCreation";
import CorporateAudioEditing from "./pages/services/creative-design/Audio-editing/CorporateAudioEditing";
import RadioProgramEditing from "./pages/services/creative-design/Audio-editing/RadioProgramEditing";
import MusicEditingMixing from "./pages/services/creative-design/Audio-editing/MusicEditingMixing";
import AdvertisingDesignServices from "./pages/services/creative-design/Audio-editing/AdvertisingDesignServices";
import CharacterCreationServices from "./pages/services/creative-design/storyboard-creation/CharacterCreationServices";
import CharacterDesigningServices from "./pages/services/creative-design/storyboard-creation/CharacterDesigningServices";
import StoryboardAnimaticServices from "./pages/services/creative-design/storyboard-creation/StoryboardAnimaticServices";
import CartoonStoryboardServices from "./pages/services/creative-design/storyboard-creation/CartoonStoryboardServices";
import VideoGameStoryboardServices from "./pages/services/creative-design/storyboard-creation/VideoGameStoryboardServices";
import PhotomaticStoryboardServices from "./pages/services/creative-design/storyboard-creation/PhotomaticStoryboardServices";
import IllustrationStoryboardServices from "./pages/services/creative-design/storyboard-creation/IllustrationStoryboardServices";
import ELearningStoryboardServices from "./pages/services/creative-design/storyboard-creation/ELearningStoryboardServices";
import ThreeDSculptingServices from "./pages/services/creative-design/3D modeling/ThreeDSculptingServices";
import ThreeDGameModelingServices from "./pages/services/creative-design/3D modeling/ThreeDGameModelingServices";
import ThreeDTexturingServices from "./pages/services/creative-design/3D modeling/ThreeDTexturingServices";
import ThreeDEnvironmentServices from "./pages/services/creative-design/3D modeling/ThreeDEnvironmentServices";
import WeddingVideoEditing from "./pages/services/creative-design/creative-uk/WeddingVideoEditing";
import VideoEditingServicesUK from "./pages/services/creative-design/creative-uk/VideoEditingServicesUK";
import GraphicDesignServicesUK from "./pages/services/creative-design/creative-uk/GraphicDesignServicesUK";
import RealEstateVideoEditing from "./pages/services/creative-design/creative-uk/RealEstateVideoEditing";
import CorporateVideoEditing from "./pages/services/creative-design/video-editing/CorporateVideoEditing";
import EdiusServicesPage from "./pages/services/creative-design/video-editing/EdiusServicesPage";
import ExplainerVideoPage from "./pages/services/creative-design/video-editing/ExplainerVideoPage";
import FilmServicesPage from "./pages/services/creative-design/video-editing/FilmServicesPage";
import HolidayVideoEditing from "./pages/services/creative-design/video-editing/HolidayVideoEditing";
import MotionGraphicsPage from "./pages/services/creative-design/video-editing/MotionGraphicsPage";
import MP4VideoEditingPage from "./pages/services/creative-design/video-editing/MP4VideoEditingPage";
import RealEstateDroneVideoEditing from "./pages/services/creative-design/video-editing/RealEstateDroneVideoEditing";
import RealEstateVideoEditingPage from "./pages/services/creative-design/video-editing/RealEstateVideoEditingPage";
import Video360Page from "./pages/services/creative-design/video-editing/Video360Page";
import VideoCompositingPage from "./pages/services/creative-design/video-editing/VideoCompositingPage";
import YouTubeMonitoringPage from "./pages/services/creative-design/video-editing/YouTubeMonitoringPage";
import OutsourcingCreativeDesign from "./pages/services/creative-design/Articles/OutsourcingCreativeDesign";
import AnimationTips from "./pages/services/creative-design/Articles/AnimationTips";
import GraphicDesignTrends from "./pages/services/creative-design/Articles/GraphicDesignTrends";
import VideoEditingTips from "./pages/services/creative-design/Articles/VideoEditingTips";
import GraphicDesignResources from "./pages/services/creative-design/Articles/GraphicDesignResources";
import DroneVideoEditingTips from "./pages/services/creative-design/Articles/DroneVideoEditingTips";
import GraphicDesignPredictions2018 from "./pages/services/creative-design/Articles/GraphicDesignPredictions2018";
import VideographyTrends2018 from "./pages/services/creative-design/Articles/VideographyTrends2018";
import VideoEditingTools from "./pages/services/creative-design/Articles/VideoEditingTools";
import CreativeDesignSteps from "./pages/services/creative-design/Articles/CreativeDesignSteps";
import BrochurePrintingTips from "./pages/services/creative-design/Articles/BrochurePrintingTips";
import PrepressTips from "./pages/services/creative-design/Articles/PrepressTips";
import PrepressInfrastructure from "./pages/services/creative-design/Articles/PrepressInfrastructure";
import BusinessWriting from "./pages/services/creative-design/Articles/BusinessWriting";
import OutsourcingWriting from "./pages/services/creative-design/Articles/OutsourcingWriting";
import VirtualReality from "./pages/services/creative-design/Articles/VirtualReality";
import WritersInIndia from "./pages/services/creative-design/Articles/WritersInIndia";
import MagazineLayoutGuide from "./pages/services/creative-design/Articles/MagazineLayoutGuide";
import MagazineTips from "./pages/services/creative-design/Articles/MagazineTips";
import DigitalArtworkFormat from "./pages/services/creative-design/Articles/DigitalArtworkFormat";
import AdobeSuiteFAQs from "./pages/services/creative-design/Articles/AdobeSuiteFAQs";
import StoryboardingTips from "./pages/services/creative-design/Articles/StoryboardingTips";
import VideoEditingProficiency from "./pages/services/creative-design/Articles/VideoEditingProficiency";
import PersonalizingAIArtwork from "./pages/services/creative-design/Articles/PersonalizingAIArtwork";
import MovieEditingServices from "./pages/services/creative-design/video-editing/MovieEditingServices";
import YouTubeEditingServices from "./pages/services/creative-design/video-editing/YouTubeEditingServices";
import GoProVideoEditing from "./pages/services/creative-design/video-editing/GoProVideoEditing";
import VideoBrochureServices from "./pages/services/creative-design/video-editing/VideoBrochureServices";
import VideoSummaryServices from "./pages/services/creative-design/video-editing/VideoSummaryServices";
import OnlineVideoEditingServices from "./pages/services/creative-design/video-editing/OnlineVideoEditingServices";
import HomeVideoEditingServices from "./pages/services/creative-design/video-editing/HomeVideoEditingServices";
import SportsVideoEditingServices from "./pages/services/creative-design/video-editing/SportsVideoEditingServices";
import VideoCroppingServices from "./pages/services/creative-design/video-editing/VideoCroppingServices";
import VideoTrimmingServices from "./pages/services/creative-design/video-editing/VideoTrimmingServices";
import FilmReeditingServices from "./pages/services/creative-design/video-editing/FilmReeditingServices";
import VideoTaggingServices from "./pages/services/creative-design/video-editing/VideoTaggingServices";
import VideoStabilizingServices from "./pages/services/creative-design/video-editing/VideoStabilizingServices";
import TestimonialVideoEditing from "./pages/services/creative-design/video-editing/TestimonialVideoEditing";
import VRPostProduction from "./pages/services/creative-design/video-editing/VRPostProduction";
import ProductVideoEditing from "./pages/services/creative-design/video-editing/ProductVideoEditing";
import DroneVideoEditing from "./pages/services/creative-design/video-editing/DroneVideoEditing";
import VideoClippingServices from "./pages/services/creative-design/video-editing/VideoClippingServices";
import MedicalVideoEditingServices from "./pages/services/creative-design/video-editing/MedicalVideoEditingServices";
import InterviewVideoEditing from "./pages/services/creative-design/video-editing/InterviewVideoEditing";
import VlogVideoEditing from "./pages/services/creative-design/video-editing/VlogVideoEditing";
import PictureToVideoEditing from "./pages/services/creative-design/video-editing/PictureToVideoEditing";
import ExplainerVideoServices from "./pages/services/creative-design/video-editing/ExplainerVideoServices";
import SalesPitchVideoEditing from "./pages/services/creative-design/video-editing/SalesPitchVideoEditing";
import MedicalVideoProduction from "./pages/services/creative-design/video-editing/MedicalVideoProduction";
import VeterinaryIllustration from "./pages/services/creative-design/Illustration/VeterinaryIllustration";
import ProductIllustration from "./pages/services/creative-design/Illustration/ProductIllustration";
import ChildrensBookIllustration from "./pages/services/creative-design/Illustration/ChildrensBookIllustration";
import BookIllustrationServices from "./pages/services/creative-design/Illustration/BookIllustrationServices";
import ScientificIllustrationServices from "./pages/services/creative-design/Illustration/ScientificIllustrationServices";
import FashionIllustration from "./pages/services/creative-design/Illustration/FashionIllustration";
import SportsIllustration from "./pages/services/creative-design/Illustration/SportsIllustration";
import ArchitecturalIllustration from "./pages/services/creative-design/Illustration/ArchitecturalIllustration";
import ComicIllustration from "./pages/services/creative-design/Illustration/ComicIllustration";
import BrandIllustration from "./pages/services/creative-design/Illustration/BrandIllustration";
import StoryboardIllustration from "./pages/services/creative-design/Illustration/StoryboardIllustration";
import VectorIllustration from "./pages/services/creative-design/Illustration/VectorIllustration";
import PopArtIllustration from "./pages/services/creative-design/Illustration/PopArtIllustration";
import SurgicalIllustration from "./pages/services/creative-design/Illustration/SurgicalIllustration";
import DentalIllustration from "./pages/services/creative-design/Illustration/DentalIllustration";
import OphthalmologyIllustration from "./pages/services/creative-design/Illustration/OphthalmologyIllustration";
import ImageIllustrationServices from "./pages/services/creative-design/Illustration/ImageIllustrationServices";
import MascotDesignServices from "./pages/services/creative-design/Illustration/MascotDesignServices";
import EducationalIllustration from "./pages/services/creative-design/Illustration/EducationalIllustration";
import CharacterIllustration from "./pages/services/creative-design/Illustration/CharacterIllustration";
import InfographicsVideoPage from "./pages/services/creative-design/Illustration/InfographicsVideoPage";
import InsuranceIllustration from "./pages/services/creative-design/Illustration/InsuranceIllustration";
import Infographics2D from "./pages/services/creative-design/Illustration/Infographics2D";
import ComicIllustrationServices from "./pages/services/creative-design/Illustration/ComicIllustrationServices";
import PetIllustrationServices from "./pages/services/creative-design/Illustration/PetIllustrationServices";
import TextEditingProofreading from "./pages/services/creative-design/writing-services/TextEditingProofreading";
import ProofreadingServices from "./pages/services/creative-design/writing-services/ProofreadingServices";
import ContentEditingServices from "./pages/services/creative-design/writing-services/ContentEditingServices";
import ContentRewritingServices from "./pages/services/creative-design/writing-services/ContentRewritingServices";
import ContentWritingServices from "./pages/services/creative-design/writing-services/ContentWritingServices";
import SEOContentWritingServices from "./pages/services/creative-design/writing-services/SEOContentWritingServices";
import SummaryReviewWritingServices from "./pages/services/creative-design/writing-services/SummaryReviewWritingServices";
import ArticleWritingServices from "./pages/services/creative-design/writing-services/ArticleWritingServices";
import ProductDescriptionServices from "./pages/services/creative-design/writing-services/ProductDescriptionServices";
import BlogWritingServices from "./pages/services/creative-design/writing-services/BlogWritingServices";
import BusinessWritingServices from "./pages/services/creative-design/writing-services/BusinessWritingServices";
import AcademicWritingServices from "./pages/services/creative-design/writing-services/AcademicWritingServices";
import SpeechWritingServices from "./pages/services/creative-design/writing-services/SpeechWritingServices";
import MedicalWritingService from "./pages/services/creative-design/writing-services/MedicalWritingServices";
import LegalWritingServices from "./pages/services/creative-design/writing-services/LegalWritingServices";
import TravelWritingServices from "./pages/services/creative-design/writing-services/TravelWritingServices";
import TechnicalWritingServices from "./pages/services/creative-design/writing-services/TechnicalWritingServices";
import AbstractWritingServices from "./pages/services/creative-design/writing-services/AbstractWritingServices";
import WebsiteCopywritingServices from "./pages/services/creative-design/writing-services/WebsiteCopywritingServices";
import ScientificWritingServices from "./pages/services/creative-design/writing-services/ScientificWritingServices";
import ManuscriptEditingServices from "./pages/services/creative-design/Animation/ManuscriptEditingServices";
import ManuscriptEditingService from "./pages/services/creative-design/Animation/ManuscriptEditingServices";
import FeatureFilmAnimationServices from "./pages/services/creative-design/Animation/FeatureFilmAnimationServices";
import VisualEffectsServices from "./pages/services/creative-design/Animation/VisualEffectsServices";
import RotoscopingServices from "./pages/services/creative-design/Animation/RotoscopingServices";
import Animation2DServices from "./pages/services/creative-design/Animation/Animation2DServices";
import AnimaticsServices from "./pages/services/creative-design/Animation/AnimaticsServices";
import ThreeDAnimationServices from "./pages/services/creative-design/Animation/ThreeDAnimationServices";
import FlashAnimationServices from "./pages/services/creative-design/Animation/FlashAnimationServices";
import AnimationRenderingServices from "./pages/services/creative-design/Animation/AnimationRenderingServices";
import WhiteboardAnimationServices from "./pages/services/creative-design/Animation/WhiteboardAnimationServices";
import TVCommercialAnimationServices from "./pages/services/creative-design/Animation/TVCommercialAnimationServices";
import CharacterAnimationServices from "./pages/services/creative-design/Animation/CharacterAnimationServices";
import StopMotionAnimationServices from "./pages/services/creative-design/Animation/StopMotionAnimationServices";
import ProductAnimationServices from "./pages/services/creative-design/Animation/ProductAnimationServices";
import TitlingAnimationServices from "./pages/services/creative-design/Animation/TitlingAnimationServices";
import ArchitecturalAnimationServices from "./pages/services/creative-design/Animation/ArchitecturalAnimationServices";
import AnimatedFeatureFilms from "./pages/services/creative-design/Animation/AnimatedFeatureFilms";
import CutoutAnimation from "./pages/services/creative-design/Animation/CutoutAnimation";
import ForensicAnimation from "./pages/services/creative-design/Animation/ForensicAnimation";
import EngineeringAnimation from "./pages/services/creative-design/Animation/EngineeringAnimation";
import MusicVideoAnimation from "./pages/services/creative-design/Animation/MusicVideoAnimation";
import KineticTypography from "./pages/services/creative-design/Animation/KineticTypography";
import CartoonAnimation from "./pages/services/creative-design/Animation/CartoonAnimation";
import RotoPaintArt from "./pages/services/creative-design/Animation/RotoPaintArt";
import VFXWireRemoval from "./pages/services/creative-design/Animation/VFXWireRemoval";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />

              {/* Individual service routes */}
              <Route path="/services/finance-accounting-finops" element={<FinanceAccountingFinOps />} />
              <Route path="/services/legal-corporate-compliance" element={<LegalCorporateCompliance />} />
              <Route path="/services/healthcare-medtech-support" element={<HealthcareMedTechSupport />} />
              <Route path="/services/it-software-cloud-cybersecurity" element={<ITSoftwareCloudCybersecurity />} />
              <Route path="/services/data-ai-analytics-research" element={<DataAIAnalyticsResearch />} />
              <Route path="/services/marketing-sales-creative-media" element={<MarketingSalesCreativeMedia />} />
              <Route path="/services/customer-experience-communications-telephony" element={<CustomerExperienceCommunicationsTelephony />} />
              <Route path="/services/operations-procurement-supplychain-manufacturing" element={<OperationsProcurementSupplychainManufacturing />} />
              <Route path="/services/real-estate-facilities-energy-environment" element={<RealEstateFacilitiesEnergyEnvironment />} />
              <Route path="/services/hr-training-admin-specialized-services" element={<HRTrainingAdminSpecializedServices />} />
              <Route path="/services/global-outsourcing-offshoring" element={<GlobalOutsourcingOffshoring />} />
              <Route path="/services/import-export-services" element={<ImportExportServices />} />


              {/* services */}
              {/* finance-accounting-finops */}
              {/* Bookkeeping service */}
              <Route path="/services/finance-accounting-finops/Real-EstateBookkeeping-Services" element={<RealEstateBookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/Accounting-Setup-Services" element={<NimbleAcuityAccountingServices />} />
              <Route path="/services/finance-accounting-finops/CPA-Bookkeeping-Services" element={<CPABookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/SmallBusiness-Bookkeeping" element={<SmallBusinessBookkeeping />} />
              <Route path="/services/finance-accounting-finops/QuickBooks-Bookkeeping" element={<QuickBooksBookkeeping />} />
              <Route path="/services/finance-accounting-finops/Virtual-Bookkeeping" element={<VirtualBookkeeping />} />

              {/* Accounting service */}
              <Route path="/services/finance-accounting-finops/accounting-service/Valuation-Advisory-service" element={<ValuationAdvisory />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Cost-Accounting-service" element={<CostAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounting-Automation-services" element={<AccountingAutomation />} />
              <Route path="/services/finance-accounting-finops/accounting-service/RealEstate-Accounting-services" element={<RealEstateAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Wealth-Management-service" element={<WealthManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Accounting-Advisory-sesrvice" element={<FinancialAccountingAdvisory />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Ledger-Management-Services" element={<LedgerManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/General-Accounting-Services" element={<GeneralAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/ESG-Consulting-Services" element={<ESGConsultingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Corporate-Accounting-Services" element={<CorporateAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Management-Services" element={<FixedAssetManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Management-Advisory-Services" element={<ManagementAdvisoryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Management-Accounting-Services" element={<ManagementAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Construction-Accounting-Services" element={<ConstructionAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Auditing-Services" element={<FixedAssetAuditingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Internal-Audit-Services" element={<InternalAuditServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Portfolio-Investor-Accounting-service" element={<PortfolioInvestorAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/PostMerger-Integration-service" element={<PostMergerIntegration />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Compliance-Audit-service" element={<ComplianceAudit />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fixed-Asset-Accounting-service" element={<FixedAssetAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Startup-Accounting-service" element={<StartupAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Cloud-Accounting-Services" element={<CloudAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounting-Cleanup-Services" element={<AccountingCleanupServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/ModelRiskManagementServices" element={<ModelRiskManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Audit-Support-Services" element={<AuditSupportServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CFO-Services" element={<CFOServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Fiduciary-Services" element={<FiduciaryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Finance-Transformation-Services" element={<FinanceTransformationServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/RecordToReport-Services" element={<RecordToReportServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Business-Advisory-Services" element={<BusinessAdvisoryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Forensic-Audit-Services" element={<ForensicAuditServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Order-Management-Services" element={<OrderManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Dental-Accounting-Services" element={<DentalAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Writeup-Services" element={<FinancialWriteupServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/SMSF-Accounting-Services" element={<SMSFAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Retail-Accounting-Services" element={<RetailAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Reporting-Services" element={<FinancialReportingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/SmallBusiness-Accounting-Services" element={<SmallBusinessAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Forensic-Accounting-Services" element={<ForensicAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Accounts-Reconciliation-Services" element={<AccountsReconciliationServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Budgeting-Services" element={<FinancialBudgetingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Automotive-Accounting-Services" element={<AutomotiveAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/BankCredit-Reconciliation-service" element={<BankCreditReconciliation />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CashFlow-Forecasting-services" element={<CashFlowForecasting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Restaurant-Accounting-services" element={<RestaurantAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/CashFlow-Management-services" element={<CashFlowManagement />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Controller-services" element={<FinancialController />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Electrical-Contractors-Accounting-services" element={<ElectricalContractorsAccounting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Statements-Services" element={<FinancialStatementsServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Spac-Transaction-Services" element={<SpacTransactionServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Financial-Investigations-Services" element={<FinancialInvestigationsServices />} />

              {/* research->financial_services */}
              <Route path="kpo/financialanalysis/corporate-finance-support-services.asp" element={<CorporateFinanceSupport />} />
              <Route path="kpo/financialanalysis/asset-management-support-services.asp" element={<AssetManagementSupport />} />
              <Route path="kpo/financialanalysis/business-valuation-services.asp" element={<BusinessValuation />} />
              <Route path="kpo/financialanalysis/investment-research.asp" element={<InvestmentResearch />} />
              <Route path="kpo/dtc-eligibility-services.asp" element={<DtcEligibilityPage />} />
              <Route path="kpo/ifrs-reporting-services.asp" element={<IFRSReportingServices />} />
              <Route path="kpo/financialanalysis/buy-side-equity-research-services.asp" element={<BuySideEquityResearch />} />
              <Route path="kpo/financialanalysis/sell-side-research-services.asp" element={<SellSideResearch />} />
              <Route path="kpo/financialanalysis/fixed-income-research-services.asp" element={<FixedIncomeResearch />} />
              <Route path="kpo/financialanalysis/investment-banking-support-services.asp" element={<InvestmentBankingSupport />} />
              <Route path="kpo/financialanalysis/credit-research.asp" element={<CreditResearchServices />} />
              <Route path="kpo/financialanalysis/investment-memorandum-consultation.asp" element={<InvestmentMemorandumServices />} />
              <Route path="kpo/financialanalysis/equity-research.asp" element={<EquityResearchServices />} />
              <Route path="kpo/financialanalysis/financial-analysis.asp" element={<FinancialResearchAnalysisServices />} />
              <Route path="kpo/financial-research/financial-modeling.asp" element={<FinancialModelingServices />} />
              <Route path="kpo/financialanalysis/financial-advisory-services.asp" element={<FinancialAdvisoryServices />} />
              <Route path="kpo/financialanalysis/forex-market-research-services.asp" element={<ForexMarketResearch />} />
              <Route path="kpo/financialanalysis/financial-risk-analysis-services.asp" element={<FinancialRiskAnalysis />} />
              <Route path="kpo/financialanalysis/gap-analysis-services.asp" element={<GapAnalysis />} />
              <Route path="kpo/financial-feasibility-analysis-services.asp" element={<FinancialFeasibilityAnalysis />} />
              <Route path="kpo/credit-risk-modeling-services.asp" element={<CreditRiskModeling />} />
              <Route path="kpo/predictive-financial-analytics-services.asp" element={<PredictiveFinancialAnalytics />} />
              <Route path="kpo/ifrs-valuation-services.asp" element={<IFRSValuationServicesPage />} />
              <Route path="kpo/qualitative-data-analysis-services.asp" element={<QualitativeDataAnalysisPage />} />



              {/* research->market_research */}
              <Route path="kpo/market-basket-analysis-services.asp" element={<MarketBasketAnalysis />} />
              <Route path="kpo/cati-web-surveys.asp" element={<CatiWebSurveys />} />
              <Route path="kpo/news-abstraction-services.asp" element={<NewsAbstraction />} />
              <Route path="kpo/market-feasibility-study.asp" element={<MarketFeasibility />} />
              <Route path="kpo/market-sales-analysis-services.asp" element={<MarketSalesAnalysis />} />
              <Route path="kpo/data-analysis.asp" element={<DataAnalysisServices />} />
              <Route path="kpo/verbatim-coding-services.asp" element={<VerbatimCodingServices />} />
              <Route path="kpo/healthcare-market-research-services.asp" element={<HealthcareMarketResearch />} />
              <Route path="kpo/real-estate-market-research-services.asp" element={<RealEstateMarketResearch />} />
              <Route path="kpo/restaurant-market-research-services.asp" element={<RestaurantMarketResearch />} />
              <Route path="kpo/agriculture-market-research-services.asp" element={<AgricultureMarketResearch />} />
              <Route path="kpo/market-sizing-research-services.asp" element={<MarketSizingResearch />} />
              <Route path="kpo/industry-analysis-services.asp" element={<IndustryAnalysisServices />} />
              <Route path="kpo/online-market-research.asp" element={<OnlineMarketResearch />} />
              <Route path="kpo/marketresearch/call-center-surveys.asp" element={<CallCenterSurveys />} />
              <Route path="kpo/marketresearch/market-research-surveys.asp" element={<MarketResearchSurveys />} />
              <Route path="kpo/marketresearch/questionnaire-design.asp" element={<MarketingQuestionnaireDesign />} />
              <Route path="kpo/newsletter-service.asp" element={<NewsletterServices />} />
              <Route path="kpo/webresearch/syndicated-research.asp" element={<SyndicatedMarketResearchServices />} />
              <Route path="kpo/swot-analysis.asp" element={<SwotAnalysisServices />} />
              <Route path="kpo/fabric-market-research-services.asp" element={<FabricMarketResearch />} />
              <Route path="kpo/insurance-market-research-services.asp" element={<InsuranceMarketResearch />} />
              <Route path="kpo/survey-programming-services.asp" element={<SurveyProgrammingServices />} />
              <Route path="kpo/time-series-analysis-services.asp" element={<TimeSeriesAnalysisPage />} />
              <Route path="kpo/exploratory-data-analysis-services.asp" element={<ExploratoryDataAnalysis />} />
              <Route path="kpo/quantitative-data-analysis-services.asp" element={<QuantitativeResearchPage />} />
              <Route path="kpo/market-segmentation-analysis-services.asp" element={<MarketSegmentationPage />} />
              <Route path="kpo/healthcare-market-segmentation-services.asp" element={<HealthcareMarketSegmentationPage />} />
              <Route path="kpo/pestel-analysis-services.asp" element={<PestelAnalysis />} />
              <Route path="kpo/statistical-analysis-services.asp" element={<StatisticalAnalysis />} />
              <Route path="kpo/product-research-services.asp" element={<ProductResearchServices />} />
              <Route path="kpo/open-end-coding-services.asp" element={<OpenEndCodingServices />} />
              <Route path="kpo/amazon-product-research-services.asp" element={<AmazonProductResearchPage />} />
              <Route path="kpo/consumer-market-research-services.asp" element={<ConsumerMarketResearch />} />
              <Route path="DataManagement/customer-segmentation-services.asp" element={<CustomerSegmentation />} />

              {/* research->business_research */}
              <Route path="kpo/competitor-benchmarking-services.asp" element={<CompetitorBenchmarking />} />
              <Route path="kpo/business-benchmarking-services.asp" element={<BusinessBenchmarking />} />
              <Route path="kpo/business-research/primary-secondary-research.asp" element={<PrimarySecondaryResearch />} />
              <Route path="kpo/research-reports.asp" element={<CustomResearchReports />} />
              <Route path="kpo/business-research/media-research-services.asp" element={<MediaResearchServices />} />
              <Route path="business-research/business-market-research.asp" element={<BusinessMarketResearch />} />
              <Route path="kpo/CompanyProfilePreparation.asp" element={<CompanyProfilingReports />} />
              <Route path="business-research/business-development-support.asp" element={<BusinessDevelopment />} />
              <Route path="kpo/marketresearch/social-media-monitoring.asp" element={<SocialMediaMonitoring />} />
              <Route path="kpo/perceptual-mapping.asp" element={<PerceptualMappingPage />} />
              <Route path="kpo/competitor-analysis.asp" element={<CompetitorAnalysisServices />} />
              <Route path="business-research/industry-profiling.asp" element={<IndustryProfilingServices />} />
              <Route path="kpo/services/trend-analysis.asp" element={<TrendAnalysisServices />} />
              <Route path="kpo/business-research/competitive-business-analysis.asp" element={<CompetitiveBusinessAnalysis />} />
              <Route path="business-research/business-plans.asp" element={<BusinessPlanWriting />} />
              <Route path="kpo/business-intelligence-dashboard-visualization.asp" element={<BIDashboardVisualization />} />
              <Route path="kpo/benchmarking-services.asp" element={<BenchmarkingServices />} />
              <Route path="kpo/performance-benchmarking-services.asp" element={<PerformanceBenchmarking />} />
              <Route path="kpo/it-benchmarking-services.asp" element={<ITBenchmarkingPage />} />
              <Route path="kpo/healthcare-benchmarking-services.asp" element={<HealthcareBenchmarking />} />
              <Route path="kpo/data-benchmarking-services.asp" element={<DataBenchmarkingPage />} />
              <Route path="kpo/cross-tabulation-analysis-services.asp" element={<CrossTabulationAnalysis />} />
              <Route path="kpo/integrated-business-planning-services.asp" element={<IntegratedBusinessPlanning />} />
              <Route path="kpo/benchmarking-analytics-services.asp" element={<BenchmarkingAnalyticsServices />} />
              <Route path="kpo/property-risk-management-services.asp" element={<PropertyRiskManagement />} />
              <Route path="kpo/account-based-marketing-services.asp" element={<ABMServicesPage />} />
              <Route path="kpo/business-modeling-services.asp" element={<BusinessModelingPage />} />


              {/* research analysis -> pharmaceutical research */}
              <Route path="kpo/pharmaceutical-research/intellectual-property-open-innovation.asp" element={<IntellectualProperty />} />
              <Route path="kpo/pharmaceutical-research/market-forecast-analysis.asp" element={<MarketForecast />} />
              <Route path="kpo/pharmaceutical-research/competitive-intelligence-research-services.asp" element={<CompetitiveIntelligencePage />} />
              <Route path="kpo/pharma/medical-writing-support-services.asp" element={<MedicalWritingServices />} />
              <Route path="kpo/services/key-opinion-leaders.asp" element={<KOLServices />} />
              <Route path="kpo/pharma/patent-landscape-analysis.asp" element={<PatentLandscapeAnalysis />} />
              <Route path="kpo/pharmaceutical-research/market-landscape-assessment-services.asp" element={<MarketLandscapeAssessment />} />
              <Route path="kpo/pharma/image-analysis-services.asp" element={<ImageAnalysisServices />} />

              {/* research -> scientific reaserch */}
              <Route path="kpo/scientific-research/crystallography-research-services.asp" element={<CrystallographyServices />} />
              <Route path="kpo/scientific-research/life-science-informatics-services.asp" element={<LifeScienceInformatics />} />
              <Route path="kpo/scientific-research/structural-biology-services.asp" element={<StructuralBiologyServicesPage />} />
              <Route path="kpo/scientific-research/scientific-data-mining-services.asp" element={<ScientificDataMiningPage />} />

              {/* research -> research report */}
              <Route path="kpo/financial-research/market-research-report-services.asp" element={<MarketResearchReports />} />
              <Route path="kpo/financial-research/financial-research-reports.asp" element={<FinancialResearchReport />} />
              <Route path="kpo/financial-research/macroeconomics-reports-services.asp" element={<MacroeconomicsReportsPage />} />
              <Route path="kpo/microeconomics-reports-services.asp" element={<MicroeconomicsReports />} />
              <Route path="kpo/commodities-and-real-estate-reports-services.asp" element={<CommoditiesRealEstateReports />} />
              <Route path="kpo/market-trends-report-services.asp" element={<MarketTrendsReports />} />
              <Route path="kpo/structured-finance-reports-services.asp" element={<StructuredFinanceReports />} />
              <Route path="kpo/report-automation-services.asp" element={<ReportAutomationServices />} />
              <Route path="kpo/syndicated-research-report-services.asp" element={<SyndicatedResearchReports />} />

              {/* research -> articles */}
              <Route path="kpo/financialanalysis/whyNimble Acuity.asp" element={<FinancialAnalysisPage />} />
              <Route path="kpo/articles/b2b-marketing-trends-to-future-proof-your-financial-services.asp" element={<B2BFinancialServicesTrends />} />
              <Route path="kpo/articles/image-analysis-transforming-business.asp" element={<ImageAnalysisBlog />} />
              <Route path="kpo/articles/the-influence-of-technology-on-pharmaceutical-services.asp" element={<PharmaTechAdvancements />} />
              <Route path="kpo/articles/competitive-analytics-benchmarking-in-b2b-growth.asp" element={<CompetitiveAnalyticsBenchmarking />} />
              <Route path="kpo/articles/business-research-services-and-future-of-business-intelligence.asp" element={<BusinessResearchBI />} />
              <Route path="kpo/articles/tips-to-benchmark-your-business.asp" element={<BenchmarkingBlog />} />
              <Route path="kpo/articles/power-of-data-informed-decision-making.asp" element={<BlogPage />} />
              <Route path="kpo/articles/the-definitive-guide-to-healthcare-and-benchmarking.asp" element={<HealthcareBenchmarking />} />
              <Route path="kpo/articles/how-to-stay-ahead-of-your-competitors-by-outsourcing-research-analysis-services.asp" element={<OutsourcingResearch />} />
              <Route path="kpo/articles/revolutionary-growth-of-research-and-analysis-industry-in-next-decade.asp" element={<ResearchGrowthDecade />} />
              <Route path="kpo/articles/outsourcing-research-analysis-services.asp" element={<OutsourcingIndiaResearch />} />
              <Route path="kpo/knowledge-process-outsourcing-knowledge-center.asp" element={<ResearchOutsourcingCenter />} />
              <Route path="kpo/articles/kpo-india-advantage.asp" element={<IndiaResearchServices />} />
              <Route path="kpo/research-process-outsourcing.asp" element={<ResearchProcessOutsourcing />} />
              <Route path="kpo/articles/what-is-knowledge-process-outsourcing.asp" element={<KnowledgeProcessOutsourcing />} />
              <Route path="kpo/articles/logistic-regression-analysis.asp" element={<LogisticRegressionAnalysis />} />
              <Route path="kpo/articles/kpo-areas.asp" element={<ResearchServicesOutsourcing />} />
              <Route path="kpo/articles/kpo-apprehensions.asp" element={<ResearchServicesApprehensions />} />
              <Route path="kpo/webresearch/whyNimble Acuity.asp" element={<WebBasedMarketResearch />} />
              <Route path="kpo/desk-web-research.asp" element={<DeskAndWebResearch />} />

              {/* Data science -> Data Engineering */}
              <Route path="data-science/artificial-intelligence/intelligent-process-automation-services.asp" element={<IntelligentProcessAutomation />} />
              <Route path="data-science/data-engineering/big-data-lake-consulting-services.asp" element={<BigDataLakes />} />
              <Route path="data-science/data-engineering/hadoop-development-services.asp" element={<HadoopDevelopment />} />
              <Route path="data-science/enterprise-data-integration-services.asp" element={<EnterpriseDataIntegration />} />
              <Route path="data-science/data-engineering/big-data-infrastructure-services.asp" element={<BigDataInfrastructure />} />

              {/*Data Science*/}
              <Route path="data-science/cloudera-support-services.asp" element={<ClouderaSupport />} />
              <Route path="data-science/data-science-as-a-service.asp" element={<DataScienceService />} />
              <Route path="data-science/lead-scoring-services.asp" element={<LeadScoringServices />} />
              <Route path="data-science/route-optimization-services.asp" element={<RouteOptimization />} />
              <Route path="data-science/recommender-system-development-services.asp" element={<RecommenderSystem />} />
              <Route path="data-science/video-analytics-software-development-using-deep-learning.asp" element={<VideoAnalyticsPage />} />
              <Route path="data-science/offensive-image-video-recognition-software-development-using-deep-learning.asp" element={<OffensiveImageVideoRecognition />} />
              <Route path="data-science/etl-data-integration-services.asp" element={<ETLDataIntegration />} />
              <Route path="data-science/cloudera-data-science-workbench-services.asp" element={<ClouderaDataScienceWorkbench />} />
              <Route path="data-science/big-data-management-services.asp" element={<BigDataManagement />} />
              <Route path="data-science/data-wrangling-services.asp" element={<DataWrangling />} />
              <Route path="data-science/data-analytics-application-development-services.asp" element={<DataAnalyticsAppDev />} />
              <Route path="data-science/data-fabric-services.asp" element={<DataFabricServices />} />
              <Route path="data-science/data-stack-modernization-services.asp" element={<DataStackModernization />} />
              <Route path="data-science/hyperautomation-services.asp" element={<HyperautomationServices />} />
              <Route path="data-science/pytorch-development-services.asp" element={<PyTorchServices />} />
              <Route path="data-science/concurrent-audit-services.asp" element={<ConcurrentAuditServices />} />
              <Route path="data-science/blockchain-development-services.asp" element={<BlockchainDevelopmentPage />} />
              <Route path="data-science/customer-intelligence-services.asp" element={<CustomerIntelligencePage />} />
              <Route path="data-science/customer-journey-mapping-services.asp" element={<CustomerJourneyMappingPage />} />


              {/* data science -> data science consulting */}
              <Route path="data-science/ai-driven-digital-transformation-solutions.asp" element={<AIDigitalTransformation />} />
              <Route path="data-science/location-intelligence-services.asp" element={<LocationIntelligence />} />


              {/* data science -> artificial intelligence services */}
              <Route path="data-science/artificial-intelligence-services/" element={<AIServicesTable />} />
              <Route path="data-science/artificial-intelligence/automatic-document-classification-indexing-services.asp/" element={<DocumentClassificationPage />} />
              <Route path="data-science/artificial-intelligence/cognitive-process-automation-services.asp" element={<CognitiveAutomationPage />} />
              <Route path="data-science/robotic-process-automation-services.asp" element={<RpaServices />} />
              <Route path="data-science/artificial-intelligence/computer-vision-services.asp" element={<ComputerVisionServices />} />
              <Route path="data-science/artificial-intelligence/natural-language-processing-services.asp" element={<NlpServices />} />
              <Route path="data-science/artificial-intelligence/machine-learning-services.asp" element={<MachineLearningServices />} />
              <Route path="data-science/artificial-intelligence/speech-recognition-services.asp" element={<SpeechRecognitionServices />} />
              <Route path="data-science/artificial-intelligence/machine-vision-services.asp" element={<MachineVisionServices />} />
              <Route path="data-science/artificial-intelligence/artificial-neural-networks-services.asp" element={<NeuralNetworksServices />} />
              <Route path="data-science/artificial-intelligence/automated-visual-inspection-services.asp" element={<AutomatedVisualInspection />} />
              <Route path="data-science/artificial-intelligence/anomaly-detection-services.asp" element={<AnomalyDetection />} />
              <Route path="data-science/artificial-intelligence/conversational-ai-services.asp" element={<ConversationalAI />} />
              <Route path="data-science/artificial-intelligence/ai-consulting-services.asp" element={<AIConsulting />} />
              <Route path="data-science/artificial-intelligence/deep-learning-services.asp" element={<DeepLearning />} />
              <Route path="data-science/artificial-intelligence/cognitive-computing-services.asp" element={<CognitiveComputing />} />
              <Route path="data-science/artificial-intelligence/fraud-analytics-services.asp" element={<FraudAnalytics />} />
              <Route path="data-science/artificial-intelligence/ai-services-in-healthcare.asp" element={<HealthcareAI />} />
              <Route path="data-science/ai-in-supply-chain.asp" element={<AISupplyChain />} />
              <Route path="data-science/artificial-intelligence/ai-in-manufacturing-industry.asp" element={<AIManufacturing />} />


              <Route path="data-science/business-intelligence-services/" element={<BusinessIntelligencePage />} />
              <Route path="data-science/data-science-training-for-corporates.asp/" element={<DataScienceTraining />} />


              {/* Data science -> data analaystics */}
              <Route path="data-science/data-analytics/big-data-analytics-services.asp" element={<BigDataAnalyticsPage />} />
              <Route path="data-science/data-analytics/data-modeling-services.asp" element={<DataModelingServicesPage />} />
              <Route path="data-science/data-analytics/data-intelligence-services.asp" element={<DataIntelligenceServicesPage />} />
              <Route path="data-science/data-analytics/augmented-analytics-services.asp" element={<AugmentedAnalytics />} />
              <Route path="data-science/data-analytics/statistical-data-analysis-services.asp" element={<StatisticalDataAnalysisPage />} />
              <Route path="data-science/data-analytics/reverse-email-appending-services.asp" element={<ReverseEmailAppendingPage />} />
              <Route path="data-science/data-analytics/edge-analytics-services.asp" element={<EdgeAnalytics />} />
              <Route path="data-science/data-analytics/data-tabulation-and-analysis-services.asp" element={<DataTabulationAnalysis />} />
              <Route path="data-science/data-analytics/data-research-services.asp" element={<DataResearchPage />} />
              <Route path="data-science/data-analytics/predictive-modeling-services.asp" element={<PredictiveModelingPage />} />
              <Route path="data-science/data-analytics/azure-stream-analytics-services.asp" element={<AzureStreamAnalyticsPage />} />


              {/* Data science -> business analyst  */}
              <Route path="data-science/business-analytics/risk-analytics-services.asp" element={<RiskAnalyticsPage />} />
              <Route path="data-science/business-analytics/visual-analytics-services.asp" element={<VisualAnalyticsPage />} />
              <Route path="data-science/business-analytics/survey-analytics-services.asp" element={<SurveyAnalyticsPage />} />
              <Route path="data-science/business-analytics/contact-center-analytics-services.asp" element={<ContactCenterAnalytics />} />
              <Route path="data-science/business-analytics/text-analytics-services.asp" element={<TextAnalytics />} />
              <Route path="data-science/business-analytics/financial-analytics-services.asp" element={<FinancialAnalytics />} />
              <Route path="data-science/business-analytics/predictive-analytics-services.asp" element={<PredictiveAnalytics />} />
              <Route path="data-science/business-analytics/supply-chain-analytics-services.asp" element={<SupplyChainAnalytics />} />
              <Route path="data-science/business-analytics/collection-analytics-services.asp" element={<CollectionsAnalytics />} />
              <Route path="data-science/business-analytics/retail-analytics-services.asp" element={<RetailAnalytics />} />
              <Route path="data-science/business-analytics/bpm-analytics-services.asp" element={<BPMAnalytics />} />
              <Route path="data-science/business-analytics/operational-analytics-services.asp" element={<OperationalAnalytics />} />


              {/* Data science -> articles */}
              <Route path="kpo/marketresearch/predictive-modeling-apps-in-social-media.asp" element={<PredictiveModeling />} />
              <Route path="data-science/articles/data-lakes-strategies-for-enterprises.asp" element={<DataLakes />} />
              <Route path="data-science/articles/advanced-strategies-in-data-engineering.asp" element={<DataEngineering />} />
              <Route path="data-science/articles/ways-data-engineering-maximizes-business-potential.asp" element={<DataEngineeringBusiness />} />
              <Route path="data-science/articles/data-engineering-strategies-for-business.asp" element={<DataEngineeringStrategies />} />
              <Route path="data-science/articles/pros-and-cons-outsourcing-data-science-services.asp" element={<OutsourcingDataScience />} />
              <Route path="data-science/articles/can-ai-beat-doctors-in-disease-identification.asp" element={<AiVsDoctors />} />
              <Route path="data-science/articles/introducing-rpa-and-best-rpa-chatbot-tools.asp" element={<RpaChatbots />} />
              <Route path="data-science/articles/predictive-analytics-big-data-future-b2b-sales.asp" element={<PredictiveAnalytics />} />
              <Route path="data-science/articles/all-you-need-know-about-conventional-neural-networks.asp" element={<CNNGuide />} />
              <Route path="data-science/articles/practical-approach-blockchain-analytics-future.asp" element={<BlockchainAnalytics />} />
              <Route path="data-science/articles/how-ai-help-reshaping-customer-experiences.asp" element={<AICustomerExperience />} />
              <Route path="data-science/articles/selecting-the-right-ai-services-for-business.asp" element={<AIBusinessGuide />} />

              {/* data science -> case studies */}
              <Route path="data-science/case-studies/helped-streamline-inventory-management-to-electronics-firm.asp" element={<InventoryRpaCaseStudy />} />
              <Route path="data-science/case-studies/helped-healthcare-service-provider-with-chart-extraction.asp" element={<HealthcareChartExtractionCaseStudy />} />
              <Route path="data-science/case-studies/reduced-client-onboarding-time-for-la-based-bank.asp" element={<LABankOnboardingCaseStudy />} />
              <Route path="data-science/case-studies/digital-transformation-to-african-automotive-firm.asp" element={<AutomotiveFirmCaseStudy />} />
              <Route path="data-science/case-studies/helped-healthcare-company-to-increase-service-portfolio.asp" element={<HealthcarePortfolioCaseStudy />} />
              <Route path="data-science/case-studies/plugin-design-using-predictive-algorithm.asp" element={<NoSQLtoSQLCaseStudy />} />
              <Route path="data-science/case-studies/high-value-transaction-parties-identification.asp" element={<HighValueTransactionsCaseStudy />} />
              <Route path="data-science/case-studies/document-processing-automation-platform-development.asp" element={<DocumentProcessingCaseStudy />} />
              <Route path="data-science/case-studies/open-source-analytics-workbench-for-bank.asp" element={<OpenSourceAnalyticsWorkbenchCaseStudy />} />
              <Route path="data-science/case-studies/created-data-storage-processing-infrastructure.asp" element={<DataStorageProcessingInfrastructureCaseStudy />} />
              <Route path="data-science/case-studies/helped-us-mortgage-company-automating-lqi-process.asp" element={<MortgageLQICaseStudy />} />
              <Route path="data-science/case-studies/route-optimization-to-streamline-delivery.asp" element={<RouteOptimizationCaseStudy />} />
              <Route path="data-science/case-studies/dynamic-data-collection-for-logistics-firm.asp" element={<LogisticsTelemetryCaseStudy />} />

              {/* Photo editing -> Photo retouching */}
              <Route path="photo-editing/photo-retouching/background-removal-services.asp" element={<BackgroundRemoval />} />
              <Route path="photo-editing/photo-retouching/batch-photo-editing-services.asp" element={<BatchPhotoEditing />} />
              <Route path="photo-editing/photo-retouching/photo-enhancement-services.asp" element={<PhotoEnhancement />} />
              <Route path="imaging/album-design-services.asp" element={<AlbumDesignServicesPage />} />
              <Route path="photo-editing/photo-retouching/bulk-photo-editing-services.asp" element={<BulkPhotoEditing />} />


              {/* Photo editing -> clipping path */}
              <Route path="photo-editing/clipping-path/product-photo-editing-services.asp" element={<ProductPhotoEditing />} />
              <Route path="photo-editing/clipping-path/hair-masking-services.asp" element={<HairMaskingServices />} />
              <Route path="photo-editing/clipping-path/car-image-clipping-services.asp" element={<CarImageClipping />} />
              <Route path="photo-editing/clipping-path/ghost-mannequin-service.asp" element={<GhostMannequinServices />} />
              <Route path="photo-editing/clipping-path/image-masking-services.asp" element={<ImageMaskingServices />} />

              {/* Photo editing -> REal estate photo editing */}
              <Route path="photo-editing/real-estate/real-estate-still-image-enhancement-services.asp" element={<RealEstateEnhancement />} />
              <Route path="photo-editing/real-estate/real-estate-hdr-photo-editing-services.asp" element={<RealEstateHDR />} />
              <Route path="photo-editing/real-estate/real-estate-panorama-stitching-services.asp" element={<PanoramaStitchingPage />} />
              <Route path="photo-editing/real-estate/real-estate-digital-decluttering-services.asp" element={<DigitalDeclutteringPage />} />
              <Route path="photo-editing/real-estate/real-estate-aerial-photo-editing-services.asp" element={<AerialPhotoEditingPage />} />
              <Route path="photo-editing/real-estate/real-estate-virtual-tour-services.asp" element={<VirtualTourPage />} />
              <Route path="photo-editing/real-estate/real-estate-floor-plan-conversion-services.asp" element={<FloorPlanConversion />} />
              <Route path="photo-editing/real-estate/focus-stacking-services.asp" element={<FocusStackingPage />} />
              <Route path="photo-editing/real-estate/matterport-services.asp" element={<MatterportServicesPage />} />

              {/* photo printing -> wedding photo editing */}
              <Route path="photo-editing/wedding/wedding-photo-culling-services.asp" element={<WeddingPhotoCullingPage />} />
              <Route path="imaging/density-color-correction-services.asp" element={<PhotoDensityCorrectionPage />} />


              {/* photo printing -> Jewelry photo editing */}
              <Route path="photo-editing/jewelry/jewelry-retouching-services.asp" element={<JewelryRetouchingServices />} />
              <Route path="photo-editing/jewelry/jewelry-photo-clipping-services.asp" element={<JewelryClippingServices />} />

              {/* photo printing -> ecommerce photo editing */}
              <Route path="imaging/articles/ecommerce-image-clipping.asp" element={< EcommerceImageClipping />} />

              {/* photo printing -> portrait retouching */}
              <Route path="photo-editing/portrait/sports-photo-editing-services.asp" element={< SportsPhotoEditing />} />
              <Route path="photo-editing/portrait/fashion-photo-editing-services.asp" element={< FashionPhotoEditing />} />
              <Route path="photo-editing/portrait/photo-restoration-services.asp" element={< PhotoRestorationPage />} />
              <Route path="photo-editing/portrait/photo-manipulation-services.asp" element={< PhotoManipulationPage />} />
              <Route path="photo-editing/portrait/headshot-retouching-services.asp" element={<HeadshotRetouchingPage />} />
              <Route path="photo-editing/portrait/newborn-photo-editing-services.asp" element={<NewbornPhotoEditingPage />} />
              <Route path="photo-editing/portrait/lightroom-editing-services.asp" element={<LightroomEditingPage />} />
              <Route path="photo-editing/portrait/school-photo-editing-services.asp" element={<SchoolPhotoEditing />} />
              <Route path="photo-editing/portrait/cloth-pattern-tiling-services.asp" element={<ClothPatternTilingPage />} />

              {/* photo printing -> photoshop */}
              <Route path="photo-editing/photoshop/photoshop-advanced-retouching-services.asp" element={<PhotoshopAdvancedRetouchingPage />} />


              {/* photo printing -> photo editing UK */}
              <Route path="uk/photo-editing/photo-retouching-services.asp" element={<PhotoRetouchingUK />} />

              <Route path="uk/photo-editing/real-estate-photo-editing-services.asp" element={<RealEstateEditingUK />} />
              <Route path="uk/photo-editing/clipping-path-service.asp" element={<ClippingPathUK />} />
              <Route path="uk/photo-editing/portrait/photo-restoration-services.asp" element={<PhotoRestorationUK />} />

              {/* photo printing -> panorama*/}
              <Route path="photo-editing/panorama/360-degree-panorama-photo-stitching-services.asp" element={<PanoramaStitchingServicesUK />} />
              <Route path="photo-editing/panorama/fisheye-panorama-stitching-services.asp" element={<FisheyePanoramaStitching />} />


              {/* photo printing -> articles*/}
              <Route path="imaging/articles/major-benefits-outsourcing-professional-service-provider.asp" element={<PhotoEditingBenefits />} />
              <Route path="imaging/articles/digital-photo-restoration-process-technique-to-recreate-old-images.asp" element={<PhotoRestorationProcess />} />
              <Route path="imaging/articles/virtual-reality-game-changing-ways-to-sell-real-estate.asp" element={<VirtualRealityRealEstate />} />
              <Route path="imaging/articles/5-most-awaited-photography-trends.asp" element={<PhotographyTrends2018 />} />
              <Route path="imaging/articles/future-photography-trends.asp" element={<PhotographyTrends />} />
              <Route path="imaging/articles/wedding-photography-tips-techniques.asp" element={<WeddingPhotography />} />
              <Route path="imaging/articles/popular-wedding-photography-trends.asp" element={<WeddingTrends2018 />} />
              <Route path="imaging/articles/latest-photography-trends.asp" element={<InsanePhotographyTrends />} />
              <Route path="imaging/articles/outsourcing-photo-editing-services-to-india.asp" element={<OutsourcingPhotoEditing />} />
              <Route path="imaging/articles/raw-image-conversion-benefits.asp" element={<RawImageConversion />} />
              <Route path="imaging/articles/landscape-photography-tips-techniques.asp" element={<LandscapePhotography />} />
              <Route path="imaging/articles/color-calibration.asp" element={<ColorCalibration />} />
              <Route path="imaging/articles/photo-editing-photo-management.asp" element={<PhotoEditingManagement />} />
              <Route path="DataManagement/vectorization.asp" element={<VectorizationFAQ />} />
              <Route path="imaging/articles/photomontage-services.asp" element={<PhotomontageServices />} />
              <Route path="imaging/articles/digital-photography-services.asp" element={<DigitalPhotographyServices />} />
              <Route path="imaging/articles/cylindrical-fisheye-panorama.asp" element={<PanoramaServices />} />
              <Route path="imaging/articles/manual-focus-vs-autofocus-a-complete-guide.asp" element={<ManualVsAutoFocus />} />
              <Route path="imaging/articles/know-how-to-add-parallax-effect-to-your-images.asp" element={<ParallaxEffectGuide />} />
              <Route path="imaging/articles/what-are-lens-filters-and-why-should-you-use-them.asp" element={<LensFiltersGuide />} />
              <Route path="imaging/articles/how-to-turn-ideas-into-reality-with-photo-compositing.asp" element={<PhotoCompositing />} />
              <Route path="imaging/articles/must-try-mobile-photography-tips.asp" element={<MobilePhotographyTips />} />
              <Route path="imaging/articles/everything-you-need-to-know-about-hdr-bracketing.asp" element={<HDRBracketing />} />
              <Route path="imaging/articles/adobe-photoshop-services.asp" element={<PhotoshopServices />} />

              {/* photo printing -> case studies*/}
              <Route path="imaging/case-studies/event-photography-for-a-freelance-photographer.asp" element={<PhotographyVideographyCaseStudy />} />
              <Route path="imaging/case-studies/hair-masking-for-netherlands-based-photographer.asp" element={<HairMaskingCaseStudy />} />
              <Route path="imaging/case-studies/image-clipping-services-for-denmark-based-client.asp" element={<ImageClippingCaseStudy />} />
              <Route path="imaging/case-studies/image-clipping-for-new-zealand-bike-designers.asp" element={<NZBikeClippingCaseStudy />} />
              <Route path="imaging/case-studies/hdr-blending-image-editing-for-bangladeshi-client.asp" element={<BangladeshiClientCaseStudy />} />
              <Route path="imaging/case-studies/portrait-restoration-services-for-south-korean-client.asp" element={<SouthKoreanPortraitRestoration />} />
              <Route path="imaging/case-studies/image-clipping-retouching-for-jewelry-expert.asp" element={<JewelryClippingRetouching />} />
              <Route path="imaging/case-studies/helped-norwegian-photography-client-with-hdr-blending-service.asp" element={<NorwegianHDRBlending />} />
              <Route path="imaging/case-studies/image-clipping-for-wisconsin-insurance-firm.asp" element={<WisconsinInsuranceClipping />} />
              <Route path="imaging/case-studies/photo-masking-for-minneapolis-photographer.asp" element={<MinneapolisPhotoMasking />} />
              <Route path="imaging/case-studies/e-commerce-image-clipping-to-an-american-client.asp" element={<EcommerceImageClipping />} />
              <Route path="imaging/case-studies/panorama-stitching-for-portland-based-client.asp" element={<PanoramaStitchingCaseStudy />} />
              <Route path="imaging/case-studies/portrait-restoration-for-australian-client.asp" element={<PortraitRestorationCaseStudy />} />
              <Route path="imaging/case-studies/panorama-stitching-for-real-estate-company.asp" element={<PanoramaStitchingUKCaseStudy />} />
              <Route path="imaging/case-studies/image-editing-video-creation-3d-real-space-visualization-client.asp" element={<Global3DImageVideoCaseStudy />} />
              <Route path="imaging/case-studies/design-manipulation.asp" element={<BabySwimmingDesignCaseStudy />} />
              <Route path="imaging/case-studies/real-estate-drone-video-editing.asp" element={<RealEstateDroneVideoCaseStudy />} />
              <Route path="imaging/case-studies/outdoor-photography.asp" element={<SwedishPhotographyCaseStudy />} />
              <Route path="imaging/case-studies/image-enhancement.asp" element={<UKPhotoStudioCaseStudy />} />
              <Route path="catalog/case-studies/case-study-image-processing.asp" element={<NorwayPhotoProcessingCaseStudy />} />
              <Route path="imaging/case-studies/automobile-image-clipping.asp" element={<UKAutoTraderClippingCaseStudy />} />
              <Route path="imaging/case-studies/wide-image-stitching.asp" element={<NorwayPhotoStitchingCaseStudy />} />
              <Route path="imaging/case-studies/hdr-image-editing-video-production-company.asp" element={<HdrImageEditingCaseStudy />} />
              <Route path="imaging/case-studies/360-degree-virtual-tour-creation-stitching-drone-footage.asp" element={<DroneVirtualTourCaseStudy />} />


              {/* Insurance BPO Services -> services of insurance agencies*/}
              <Route path="insurance/insurance-eligibility-management-services.asp" element={<InsuranceEligibilityManagement />} />
              <Route path="insurance/loss-run-processing-services.asp" element={<LossRunProcessing />} />
              <Route path="insurance/insurance-quote-summary-proposal.asp" element={<InsuranceQuoteSummary />} />
              <Route path="insurance/documentation-indexing-services.asp" element={<DocumentIndexingFiling />} />
              <Route path="insurance/insurance-accounting-services.asp" element={<InsuranceAccountingBilling />} />
              <Route path="insurance/certificate-of-insurance-services.asp" element={<CertificateOfInsurance />} />
              <Route path="insurance/policy-administration.asp" element={<PolicyCheckingAdministration />} />
              <Route path="insurance/insurance-renewal-exposure-summary-services.asp" element={<RenewalExposureSummary />} />
              <Route path="insurance/insurance-claims-administration.asp" element={<ClaimsAdministration />} />
              <Route path="insurance/insurance-agency-management-services.asp" element={<AgencyManagement />} />
              <Route path="insurance/insurance-bookkeeping-forensic-accounting-services.asp" element={<BookkeepingPage />} />
              <Route path="insurance/public-policy-engagement-services.asp" element={<PublicPolicyEngagement />} />
              <Route path="insurance/policy-owner-services.asp" element={<PolicyOwnerServices />} />
              <Route path="insurance/insurance-credentialing-services.asp" element={<InsuranceCredentialingServices />} />
              <Route path="insurance/back-office-support-for-insurance-companies.asp" element={<BackOfficeAutomation />} />
              <Route path="insurance/insurance-underwriting-services.asp" element={<InsuranceUnderwriting />} />

              {/* Insurance BPO Services -> services of insurance agencies*/}
              <Route path="insurance/loss-run-processing-for-insurance-carriers.asp" element={<LossRunProcessing/>} />
              <Route path="insurance/billing-accounts-receivable-services.asp" element={<InsuranceBillingAR/>} />
              <Route path="insurance/policy-issuance-services.asp" element={<PolicyIssuancePage/>} />
              <Route path="insurance/life-annuity-insurance-claims-management.asp" element={<LifeClaimsManagementPage/>} />
              <Route path="insurance/insurance-claims-management-for-property-casualty.asp" element={<InsuranceClaimsPC/>} />
              <Route path="insurance/acord-forms-processing-services.asp" element={<ACORDFormsProcessing/>} />
              <Route path="insurance/new-business-setup-services.asp" element={<NewBusinessSetup/>} />
              <Route path="insurance/insurance-renewals-processing-services.asp" element={<InsuranceRenewalsProcessing/>} />
              <Route path="insurance/insurance-claims-management-for-carriers.asp" element={<InsuranceClaimsManagement/>} />
              <Route path="insurance/policy-administration-maintenance-servicing.asp" element={<PolicyAdministration/>} />

              {/* Insurance BPO Services -> services of MGA*/}
              <Route path="insurance/mga.asp" element={<InsuranceServicesMGA/>} />


              {/* Insurance BPO Services -> services of MGA*/}
              <Route path="insurance/caqh-profile-services-for-insurance-credentialing.asp" element={<CAQHProfileServices/>} />
              <Route path="insurance/insurance-prospect-market-research.asp" element={<InsuranceMarketResearches/>} />
              <Route path="insurance/insurance-appointment-setting-services.asp" element={<InsuranceAppointmentSetting/>} />
              <Route path="insurance/insurance-commission-management-services.asp" element={<CommissionManagement/>} />
              <Route path="insurance/insurance-data-services.asp" element={<InsuranceDataEntry/>} />
              <Route path="insurance/insurance-endorsements.asp" element={<InsuranceEndorsementsPage/>} />
              <Route path="insurance/insurance-bpo-customer-support-services.asp" element={<InsuranceBPOCustomerSupport/>} />
              <Route path="insurance/insurance-reporting-services.asp" element={<InsuranceReporting/>} />
              <Route path="insurance/underwriting-services-for-property-casualty-insurance.asp" element={<UnderwritingPCInsurancePage/>} />
              <Route path="insurance/life-annuity-insurance-underwriting-services.asp" element={<LifeAnnuityUnderwriting/>} />
              <Route path="insurance/catastrophe-modeling-for-insurance.asp" element={<CatastropheModelingPage/>} />
              <Route path="insurance/warranty-claims-management-services.asp" element={<WarrantyClaimsManagementPage/>} />
              <Route path="insurance/business-process-management-bpm-for-insurance.asp" element={<InsuranceBPMPage/>} />
              <Route path="insurance/insurance-software-development-services.asp" element={<InsuranceSoftwareDevelopment/>} />
              <Route path="insurance/insurance-analytics-services.asp" element={<InsuranceAnalyticsServices/>} />
              <Route path="insurance/qqcatalyst-management-services.asp" element={<QQCatalystManagement/>} />
              <Route path="insurance/insurance-operations-services.asp" element={<InsuranceOperationsServices/>} />

              {/* Insurance BPO Services -> Articles*/}
              <Route path="insurance/articles/why-Nimble-insurance-services-to-professional-service-provider.asp" element={<NimbleInsuranceServices/>} />
              <Route path="insurance/articles/all-you-need-to-know-about-insurance-claims.asp" element={<InsuranceClaimsArticle/>} />
              <Route path="insurance/articles/6-ways-data-analytics-transforming-insurance-industry.asp" element={<InsuranceDataAnalyticsArticle/>} />
              <Route path="insurance/articles/all-you-need-to-know-about-e-filing-of-us-dot.asp" element={<USDotEFilingArticle/>} />

              {/* Insurance BPO Services -> Case studies*/}
              <Route path="insurance/case-studies/back-office-support-to-florida-based-insurance-agency.asp" element={<InsuranceCaseStudy/>} />
              <Route path="insurance/case-studies/back-office-support-for-texas-client.asp" element={<TexasInsuranceCaseStudy/>} />
              <Route path="insurance/case-studies/policy-checking-for-brokerage-consulting-firm.asp" element={< PolicyCheckingCaseStudy/>} />
              <Route path="insurance/case-studies/business-processing-to-insurance-firm.asp" element={<BusinessProcessingCaseStudy/>} />
              <Route path="insurance/case-studies/policy-checking-services-to-insurance-company.asp" element={<PolicyCheckingFloridaCaseStudy/>} />
              <Route path="insurance/case-studies/policy-checking-new-york-client.asp" element={<PolicyCheckingNYCaseStudy/>} />
              <Route path="insurance/case-studies/insurance-back-office-solutions-healthcare-provider.asp" element={<HealthInsuranceBackOfficeCaseStudy/>} />
              <Route path="insurance/case-studies/back-office-operations-miami-client.asp" element={<MiamiInsuranceBackOfficeCaseStudy/>} />
              <Route path="financial/case-studies/maintaining-insurance-accounts.asp" element={<InsuranceAccountsCaseStudy/>} />



              {/* Data Services -> Data entry*/}
              <Route path="data-support/data-entry/data-annotation-services.asp" element={<DataAnnotationServices/>} />
              <Route path="data-support/data-entry/digital-asset-management-services.asp" element={<DigitalAssetManagement/>} />
              <Route path="data-support/data-entry/real-estate-data-management-services.asp" element={<RealEstateDataManagement/>} />
              <Route path="data-support/data-entry/email-appending-services.asp" element={<EmailAppendingServices/>} />
              <Route path="data-support/data-entry/online-data-entry-services.asp" element={<OnlineDataEntryServices/>} />
              <Route path="data-support/data-entry/offline-data-entry-services.asp" element={<OfflineDataEntryServices/>} />
              <Route path="data-support/data-entry/directory-services.asp" element={<DirectoryServices/>} />
              <Route path="data-support/data-entry/real-estate-appraisal-data-entry-services.asp" element={<RealEstateAppraisalDataEntry/>} />
              <Route path="data-support/data-entry/geotagging-data-entry-services.asp" element={<GeotaggingDataEntry/>} />
              <Route path="data-support/data-entry/business-card-data-entry-services.asp" element={<BusinessCardDataEntry/>} />
              <Route path="data-support/data-entry/food-nutrition-scale-data-entry-services.asp" element={<FoodNutritionDataEntry/>} />
              <Route path="data-support/data-entry/image-data-entry-services.asp" element={<ImageDataEntry/>} />
              <Route path="data-support/data-entry/ebooks-data-entry-services.asp" element={<EbookDataEntry/>} />
              <Route path="data-support/data-entry/document-data-entry-services.asp" element={<DocumentDataEntry/>} />
              <Route path="data-support/data-entry/document-imaging-services.asp" element={<DocumentImaging/>} />
              <Route path="data-support/data-entry/data-extraction-services.asp" element={<DataExtractionServices/>} />
              <Route path="data-support/data-entry/document-management-services.asp" element={<DocumentManagementServices/>} />
              <Route path="data-support/data-entry/data-entry-from-dictionaries-manuals-encyclopedias.asp" element={<EncyclopediaDataEntry/>} />
              <Route path="data-support/data-entry/copy-paste-services.asp" element={<CopyPasteServices/>} />
              <Route path="data-support/data-entry/offshore-data-entry-services.asp" element={<OffshoreDataEntryServices/>} />
              <Route path="data-support/data-entry/catalog-data-entry-services.asp" element={<CatalogDataEntryServices/>} />
              <Route path="data-support/data-entry/mailing-list-data-entry-services.asp" element={<MailingListDataEntry/>} />
              <Route path="data-support/data-entry/company-reports-data-entry-services.asp" element={<CompanyReportsDataEntry/>} />
              <Route path="data-support/data-entry/questionnaires-dataentry-services.asp" element={<QuestionnairesDataEntry/>} />
              <Route path="data-support/data-entry/data-entry-surveys.asp" element={<SurveyDataEntry/>} />
              <Route path="data-support/data-entry/invoice-forms-data-entry-services.asp" element={<InvoiceDataEntry/>} />
              <Route path="data-support/data-entry/internet-data-input-services.asp" element={<InternetDataInput/>} />
              <Route path="data-support/data-entry/database-entry-services.asp" element={<DatabaseDataEntry/>} />
              <Route path="data-support/data-entry/restaurant-menu-data-entry-services.asp" element={<RestaurantMenuDataEntry/>} />
              <Route path="data-support/data-entry/product-registration-data-entry-services.asp" element={<ProductRegistrationDataEntry/>} />
              <Route path="data-support/data-entry/insurance-claims-data-entry-services.asp" element={<InsuranceClaimsDataEntry/>} />
              <Route path="data-support/data-entry/enrolment-forms-data-entry-services.asp" element={<EnrollmentFormsDataEntry/>} />
              <Route path="data-support/data-entry/text-numeric-data-entry-services.asp" element={<TextNumericDataEntry/>} />
              <Route path="data-support/data-entry/classifieds-data-entry-services.asp" element={<ClassifiedsDataEntry/>} />
              <Route path="data-support/data-entry/legal-documents-data-entry-services.asp" element={<LegalDocumentsDataEntry/>} />
              <Route path="data-support/data-entry/printed-handwritten-documents-data-entry-services.asp" element={<HandwrittenDocumentsDataEntry/>} />
              <Route path="data-support/data-entry/mysql-database-data-entry-services.asp" element={<MysqlDatabaseDataEntry/>} />
              <Route path="data-support/data-entry/telephone-directory-data-entry-services.asp" element={<TelephoneDirectoryDataEntry/>} />
              <Route path="data-support/data-entry/website-data-entry-services.asp" element={<WebsiteDataEntry/>} />
              <Route path="data-support/data-entry/translingual-data-entry-services.asp" element={<TranslingualDataEntry/>} />
              <Route path="data-support/data-entry/multilingual-invoice-data-entry-services.asp" element={<MultilingualInvoiceDataEntry/>} />
              <Route path="data-support/data-entry/biological-species-database-creation-services.asp" element={<BiologicalSpeciesDatabase/>} />
              <Route path="data-support/data-entry/quickbooks-data-entry-services.asp" element={<QuickBooksDataEntry/>} />
              <Route path="data-support/data-entry/crm-data-entry-services.asp" element={<CRMDataEntry/>} />
              <Route path="data-support/data-entry/digital-transaction-processing-services.asp" element={<DigitalTransactionProcessing/>} />
              <Route path="data-support/data-entry/survey-forms-processing-services.asp" element={<SurveyFormsProcessing/>} />
              <Route path="data-support/data-entry/crm-database-management-services.asp" element={<CRMDatabaseManagement/>} />
              <Route path="data-support/data-entry/erp-data-entry-services.asp" element={<ERPDataEntry/>} />
              <Route path="data-support/data-entry/sku-data-entry-services.asp" element={<SkuDataEntryPage/>} />
              <Route path="data-support/data-entry/data-licensing-services.asp" element={<DataLicensingPage/>} />
              <Route path="data-support/data-entry/healthcare-data-mining-services.asp" element={<HealthcareDataMining/>} />
              <Route path="data-support/data-entry/remote-data-entry-services.asp" element={<RemoteDataEntry/>} />
              <Route path="data-support/data-entry/address-management-services.asp" element={<AddressManagement/>} />
              <Route path="data-support/data-entry/crm-data-mining-services.asp" element={<CRMDataMining/>} />
              <Route path="data-support/data-entry/banking-data-entry-services.asp" element={<BankingDataEntry/>} />
              <Route path="data-support/data-entry/image-search-services.asp" element={<ImageSearchServices/>} />
              <Route path="data-support/data-entry/typing-services.asp" element={<TypingServices/>} />
              <Route path="data-support/data-entry/medical-image-annotation-tagging-services.asp" element={<MedicalImageAnnotation/>} />
              <Route path="data-support/data-entry/data-indexing-services.asp" element={<DataIndexingServices/>} />
              <Route path="data-support/data-entry/book-indexing-services.asp" element={<BookIndexingServices/>} />
              <Route path="data-service/data-entry/data-validation-services.asp" element={<DataValidationServices/>} />
              <Route path="data-support/data-entry/data-masking-services.asp" element={<DataMaskingServices/>} />
              <Route path="data-support/data-entry/data-profiling-services.asp" element={<DataProfilingServices/>} />
              <Route path="data-support/data-entry/data-labeling-services.asp" element={<DataLabelingServices/>} />
              <Route path="DataManagement/data-appending-services.asp" element={<DataAppendingServices/>} />
              <Route path="DataManagement/data-enrichment-services.asp" element={<DataEnrichmentServices/>} />


              {/* Data Services -> Data conversion*/}
              <Route path="data-support/data-conversion/jats-xml-conversion-services.asp" element={<JATSXMLConversionServices/>} />
              <Route path="data-support/data-conversion/document-conversion-services.asp" element={<DocumentConversionServices/>} />
              <Route path="data-support/data-conversion/file-format-conversion-services.asp" element={<FileConversionServices/>} />
              <Route path="data-support/data-conversion/epub3-conversion-services.asp" element={<EPub3ConversionServices/>} />
              <Route path="data-support/data-conversion/xml-conversion-services.asp" element={<XMLConversionServices/>} />
              <Route path="data-support/data-conversion/pdf-conversion-services.asp" element={<PDFConversionServices/>} />
              <Route path="data-support/data-conversion/book-conversion-services.asp" element={<BookConversionServices/>} />
              <Route path="data-support/data-conversion/html-conversion-services.asp" element={<HTMLConversionServices/>} />
              <Route path="data-support/data-conversion/sgml-conversion-services.asp" element={<SGMLConversionServices/>} />
              <Route path="data-support/data-conversion/electronic-document-management-services.asp" element={<EDMServices/>} />
              <Route path="data-support/data-conversion/document-formatting-services.asp" element={<DocumentFormattingServices/>} />
              <Route path="data-support/data-conversion/xbrl-conversion-services.asp" element={<XBRLConversionServices/>} />
              <Route path="data-support/data-conversion/pubmed-conversion-services.asp" element={<PubMedConversion/>} />
              <Route path="data-support/data-conversion/pubmed-conversion-services.asp" element={<DTBookConversion/>} />
              <Route path="data-support/data-conversion/psd-to-html-conversion-services.asp" element={<PSDtoHTMLConversion/>} />
              <Route path="data-support/data-conversion/figma-to-html-conversion-services.asp" element={<FigmaToHtmlConversion/>} />
              <Route path="data-support/data-conversion/html-to-responsive-conversion-services.asp" element={<HtmlToResponsiveConversion/>} />
              <Route path="data-support/data-conversion/adobe-xd-to-html-conversion-services.asp" element={<AdobeXDToHTML/>} />
              <Route path="data-support/data-conversion/html-to-wordpress-conversion-services.asp" element={<HtmlToWordPressPage/>} />
              <Route path="data-support/data-conversion/sketch-to-html-conversion-services.asp" element={<SketchHtmlServices/>} />
              <Route path="data-support/data-conversion/zeplin-to-html-conversion-services.asp" element={<ZeplinToHtml/>} />
              <Route path="data-support/data-conversion/pdf-accessibility-services.asp" element={<PdfAccessibility/>} />

              {/* Data Services -> ebook conversion*/}
              <Route path="data-support/ebook-conversion/epub-conversion-services.asp" element={<EpubConversionPage/>} />
              <Route path="data-support/ebook-conversion/epub-services.asp" element={<EPubServicesPage/>} />
              <Route path="data-support/ebook-conversion/kindle-conversion-services.asp" element={<KindleConversionPage/>} />
              <Route path="data-support/ebook-conversion/ipad-and-iphone-ebook-conversion-services.asp" element={<IPadIPhoneConversionPage/>} />
              <Route path="data-support/ebook-conversion/comprehensive-digital-services.asp" element={<ComprehensiveDigitalServices/>} />
              <Route path="data-support/ebook-conversion/reflowable-ebook-conversion-services.asp" element={<ReflowableEbookServices/>} />
              <Route path="data-support/ebook-conversion/fixed-layout-epub-conversion-services.asp" element={<FixedLayoutPageContent/>} />
              <Route path="data-support/ebook-conversion/multilingual-ebook-conversion-services.asp" element={<MultilingualPageContent/>} />
              <Route path="data-support/ebook-conversion/enhanced-ebook-conversion-services.asp" element={<EnhancedEbookPage/>} />
              <Route path="data-support/ebook-conversion/web-accessible-ebook-development-services.asp" element={<WebAccessibleEbookPage/>} />
              <Route path="data-support/ebook-conversion/interactive-ebook-conversion-services.asp" element={<InteractiveEbookPage/>} />
              <Route path="data-support/ebook-conversion/docbook-xml-conversion-services.asp" element={<DocBookXMLPage/>} />

              {/* Data Services -> property management*/}
              <Route path="DataManagement/property-management-back-office-outsourcing.asp" element={<PropertyManagementPage/>} />

              {/* Data Services -> Data Processing*/}
              <Route path="data-support/data-processing/metadata-tagging-services.asp" element={<MetadataTaggingPage/>} />
              <Route path="data-support/data-processing/data-transformation-services.asp" element={<DataTransformationPage/>} />
              <Route path="data-support/data-processing/master-data-management-services.asp" element={<MasterDataManagementPage/>} />
              <Route path="data-support/data-processing/semantic-image-segmentation-services.asp" element={<SemanticImageSegmentation/>} />
              <Route path="data-support/data-processing/metadata-management-services.asp" element={<MetadataManagement/>} />
              <Route path="data-support/data-processing/data-harmonization-services.asp" element={<DataHarmonization/>} />
              <Route path="data-support/data-processing/data-standardization-services.asp" element={<DataStandardization/>} />
              <Route path="data-support/data-processing/merge-purge-services.asp" element={<MergePurgeServices/>} />
              <Route path="data-support/data-processing/forms-processing-services.asp" element={<FormsProcessingServices/>} />
              <Route path="data-support/data-processing/order-processing-services.asp" element={<OrderProcessingServices/>} />
              <Route path="data-support/data-processing/image-processing-services.asp" element={<ImageProcessing/>} />
              <Route path="data-support/data-processing/data-cleansing-services.asp" element={<DataCleansing/>} />
              <Route path="DataManagement/insurance-claims-processing.asp" element={<InsuranceClaimsProcessing/>} />
              <Route path="data-support/data-processing/market-research-forms-processing-services.asp" element={<MarketResearchFormsProcessing/>} />
              <Route path="data-support/data-processing/check-processing-services.asp" element={<CheckProcessing/>} />
              <Route path="data-support/data-processing/credit-card-processing-services.asp" element={<CreditCardProcessing/>} />
              <Route path="data-support/data-processing/transaction-processing-services.asp" element={<TransactionProcessing/>} />
              <Route path="data-support/data-processing/survey-processing-services.asp" element={<SurveyProcessing/>} />
              <Route path="data-support/data-processing/data-deduplication-services.asp" element={<DataDeduplication/>} />
              <Route path="data-support/data-processing/mailing-list-compilation-services.asp" element={<MailingListCompilation/>} />
              <Route path="data-support/data-processing/database-creation-services.asp" element={<DatabaseCreationServices/>} />
              <Route path="data-support/data-processing/data-abstraction-services.asp" element={<DataAbstractionServices/>} />
              <Route path="data-support/data-processing/data-mining-services.asp" element={<DataMiningServices/>} />
              <Route path="data-support/data-processing/text-and-web-data-mining-services.asp" element={<TextWebDataMining/>} />
              <Route path="data-support/data-processing/student-loan-processing-services.asp" element={<StudentLoanProcessing/>} />
              <Route path="data-support/data-processing/tagging-and-annotation-services.asp" element={<TaggingAnnotationServices/>} />
              <Route path="data-support/data-processing/image-annotation-services.asp" element={<ImageAnnotationServices/>} />
              <Route path="data-support/data-processing/human-gesture-annotation-services.asp" element={<HumanGestureAnnotation/>} />
              <Route path="data-support/data-processing/bounding-box-annotation-services.asp" element={<BoundingBoxServices/>} />
              <Route path="data-support/data-processing/purchase-order-processing-services.asp" element={<PurchaseOrderProcessing/>} />
              <Route path="data-support/data-processing/sku-data-management-services.asp" element={<SKUDataManagement/>} />
              <Route path="data-support/data-processing/product-information-management-services.asp" element={<ProductInformationManagement/>} />
              <Route path="data-support/data-processing/data-preparation-services.asp" element={<DataPreparationServices/>} />
              <Route path="data-support/data-processing/video-annotation-services.asp" element={<VideoAnnotationServices/>} />
              <Route path="data-support/data-processing/crm-data-cleansing-services.asp" element={<CrmDataCleansingServices/>} />
              <Route path="data-support/data-processing/data-consolidation-services.asp" element={<DataConsolidationServices/>} />
              <Route path="data-support/data-processing/data-provisioning-services.asp" element={<DataProvisioningServices/>} />
              <Route path="data-support/data-processing/data-monitoring-services.asp" element={<DataMonitoringServices/>} />
              <Route path="data-support/data-processing/data-collection-services.asp" element={<DataCollectionServices/>} />
              <Route path="data-support/data-processing/data-collection-services.asp" element={<DataLifecycleManagementServices/>} />
              <Route path="data-support/data-processing/dms-support-services.asp" element={<DMSServices/>} />
              <Route path="data-support/data-processing/data-verification-services.asp" element={<DataVerification/>} />
              <Route path="data-support/data-processing/data-scrubbing-services.asp" element={<DataScrubbing/>} />
              <Route path="data-support/data-processing/document-indexing-services.asp" element={<DocumentIndexing/>} />
              <Route path="data-support/ocr/document-scanning-services.asp" element={<DocumentScanning/>} />


              {/* Data Services -> Data management*/}
              <Route path="data-support/data-entry/data-protection-officer-services.asp" element={<DPOPage/>} />
              <Route path="data-support/data-entry/records-management-services.asp" element={<RecordsManagementPage/>} />
              <Route path="data-support/data-entry/e-commerce-taxonomy-development-services.asp" element={<EcommerceTaxonomyPage/>} />
              <Route path="data-support/data-entry/cloud-data-management-services.asp" element={<CloudDataManagementPage/>} />
              <Route path="data-support/data-processing/sports-data-tagging-services.asp" element={<SportsDataTagging/>} />
              <Route path="data-support/data-entry/data-formatting-services.asp" element={<DataFormattingServices/>} />
              <Route path="data-support/data-entry/ecommerce-product-data-classification-services.asp" element={<EcommerceProductDataClassification/>} />
              <Route path="data-support/data-entry/magento-data-entry-services.asp" element={<MagentoDataEntryServices/>} />
              <Route path="data-support/data-processing/ecommerce-product-data-cleansing-services.asp" element={<EcommerceDataCleansing/>} />
              <Route path="data-support/data-processing/data-protection-consulting-services.asp" element={<DataProtectionConsulting/>} />
              <Route path="data-support/data-processing/data-governance-services.asp" element={<DataGovernanceServices/>} />
              <Route path="data-support/data-processing/data-virtualization-services.asp" element={<DataVirtualizationServices/>} />
              <Route path="data-support/data-processing/financial-data-processing-services.asp" element={<FinancialDataProcessingServices/>} />
              <Route path="data-support/data-processing/data-quality-management-services.asp" element={<DataQualityManagementServices/>} />
              <Route path="data-support/data-processing/data-modernization-services.asp" element={<DataModernizationServices/>} />
              <Route path="data-support/data-entry/property-preservation-data-entry-services.asp" element={<PropertyPreservationDataEntry/>} />

              {/* Data Services -> online catalog*/}
              <Route path="data-support/catalog/catalog-conversion-services.asp" element={<CatalogConversionServices/>} />      
              <Route path="data-support/catalog/ecommerce-product-data-entry-services.asp" element={<EcommerceDataEntryServices/>} />
              <Route path="data-support/catalog/catalog-processing-services.asp" element={<CatalogProcessingServices/>} />
              <Route path="data-support/catalog/product-catalog-maintenance-services.asp" element={<ProductCatalogMaintenance/>} />
              <Route path="data-support/catalog/catalog-content-management-services.asp" element={<CatalogContentManagement/>} />
              <Route path="data-support/catalog/catalog-building-and-indexing-services.asp" element={<CatalogBuildingIndexing/>} />

              {/* Data Services -> OCR*/}
              <Route path="data-support/ocr/ocr-cleanup-services.asp" element={<OCRCleanupServices/>} />
              <Route path="data-support/ocr/document-digitization-services.asp" element={<DocumentDigitizationServices/>} />
              <Route path="data-support/ocr/ocr-conversion-services.asp" element={<OCRConversionServices/>} />

              {/* Data Services -> Industries*/}
              <Route path="DataManagement/manufacturing-data-entry-services.asp" element={<ManufacturingDataEntry/>} />
              <Route path="DataManagement/healthcare-data-entry-services.asp" element={<HealthcareDataEntry/>} />
              <Route path="DataManagement/architectural-data-entry-services.asp" element={<ArchitecturalDataEntry/>} />
              <Route path="DataManagement/gaming-data-entry-services.asp" element={<GamingDataEntry/>} />
              <Route path="DataManagement/government-agencies-data-entry.asp" element={<GovernmentDataEntry/>} />
              <Route path="DataManagement/publishing-industry-data-entry.asp" element={<PublishingDataEntry/>} />
              <Route path="DataManagement/accounting-data-entry.asp" element={<AccountingDataEntry/>} />
              <Route path="DataManagement/legal-organizations-data-entry.asp" element={<LegalDataEntry/>} />
              <Route path="DataManagement/educational-institutions-data-entry.asp" element={<EducationalDataEntry/>} />
              <Route path="DataManagement/studio-data-entry-services.asp" element={<StudiosDataEntry/>} />
              <Route path="DataManagement/aci-e-manifest-services.asp" element={<AciEManifestServices/>} />

              {/* Data Services -> Articles*/}
              <Route path="DataManagement/articles/top-things-avoid-while-hiring-perfect-customs-brokerage-service-provider.asp" element={<CustomsBrokerage/>} />
              <Route path="DataManagement/articles/how-can-your-firm-benefit-from-Nimble-data-entry-services.asp" element={<DataEntryBenefits/>} />
              <Route path="DataManagement/articles/big-data-future-growth-challenges.asp" element={<BigData2020/>} />
              <Route path="DataManagement/articles/common-misconceptions-about-data-management.asp" element={<DataManagementMisconceptions/>} />
              <Route path="DataManagement/articles/best-practices-of-ocr-data-capture.asp" element={<OCRDataCapture/>} />
              <Route path="DataManagement/articles/ultimate-cheat-sheet-on-big-data-analytics.asp" element={<BigDataAnalyticsCheatSheet/>} />
              <Route path="DataManagement/articles/data-mining-techniques.asp" element={<DataMiningTechniques/>} />
              <Route path="DataManagement/articles/signs-you-should-invest-in-data-analytics.asp" element={<InvestInDataAnalytics/>} />
              <Route path="DataManagement/articles/how-to-solve-manual-data-entry-challenges.asp" element={<ManualDataEntrySolutions/>} />
              <Route path="DataManagement/articles/top-data-extraction-tools.asp" element={<TopDataExtractionTools/>} />
              <Route path="DataManagement/articles/reasons-to-Nimble-product-data-entry-to-india.asp" element={<ProductDataEntry/>} />
              <Route path="DataManagement/articles/cloud-data-management-trends.asp" element={<CloudDataManagement/>} />
              <Route path="DataManagement/articles/data-migration-best-practices.asp" element={<DataMigrationBestPractices/>} />
              <Route path="DataManagement/articles/big-data-trends.asp" element={<BigDataTrends/>} />
              <Route path="DataManagement/articles/restaurant-menu-digitization-benefits.asp" element={<RestaurantMenuDigitization/>} />
              <Route path="DataManagement/articles/form-creation-benefits-data-entry.asp" element={<FormCreationBenefits/>} />
              <Route path="DataManagement/articles/ways-to-improve-data-accuracy.asp" element={<DataAccuracy/>} />
              <Route path="DataManagement/articles/data-entry-clerk-skills.asp" element={<DataEntryClerkPage/>} />
              <Route path="DataManagement/articles/get-the-data-entry-advatage-at-Nimble-Acuity.asp" element={<DataEntryIndiaPage/>} />
              <Route path="DataManagement/articles/better-data-management.asp" element={<BetterDataManagementPage/>} />
              <Route path="DataManagement/articles/Nimble-data-entry-to-india.asp" element={<DataEntryIndiaAdvantage/>} />
              <Route path="DataManagement/articles/Nimble-data-entry-services.asp" element={<DataEntryOutsourcing/>} />
              <Route path="DataManagement/articles/data-quality-solutions.asp" element={<DataQualitySolution/>} />
              <Route path="DataManagement/articles/solve-data-issues.asp" element={<InaccurateDataSolution/>} />
              <Route path="DataManagement/articles/spreadsheet-to-excel-conversion.asp" element={<SpreadsheetConversionPage/>} />
              <Route path="DataManagement/microfilm-scanning-conversion-services.asp" element={<MicrofilmScanningPage/>} />

              {/* Creative-design -> Graphic-design  */}
              <Route path="creative-services/exhibition-design-services.asp" element={<ExhibitionDesignServices/>} />
              <Route path="creative-services/powerpoint-design-services.asp" element={<PowerPointDesignServices/>} />
              <Route path="creative-services/embroidery-digitizing-services.asp" element={<EmbroideryServices/>} />
              <Route path="creative-services/signage-design-services.asp" element={<SignageDesignServices/>} />
              <Route path="creative-services/corporate-design-services.asp" element={<CorporateDesignServices/>} />
              <Route path="creative-services/e-mail-design-services.asp" element={<EmailDesignServices/>} />
              <Route path="creative-services/brand-design-services.asp" element={<BrandDesignServices/>} />
              <Route path="creative-services/design/menu-design-services.asp" element={<MenuDesign/>} />
              <Route path="creative-services/e-commerce-design-services.asp" element={<EcommerceDesign/>} />
              <Route path="creative-services/web-design-services.asp" element={<WebDesign/>} />
              <Route path="creative-services/label-design-services.asp" element={<LabelDesign/>} />
              <Route path="creative-services/design/promotional-material-design-services.asp" element={<PromotionalMaterialDesign/>} />
              <Route path="creative-services/visual-design-services.asp" element={<VisualDesignServices/>} />
              <Route path="creative-services/design/business-card-design-services.asp" element={<BusinessCardDesignServices/>} />
              <Route path="creative-services/newsletter-design-services.asp" element={<NewsletterDesignServices/>} />
              <Route path="creative-services/design/annual-report-design-services.asp" element={<AnnualReportDesignServices/>} />
              <Route path="creative-services/design/flyer-design-services.asp" element={<FlyerDesignServices/>} />
              <Route path="creative-services/packaging-design-services.asp" element={<PackagingDesignServices/>} />
              <Route path="creative-services/packaging-artwork-product-label-design-services.asp" element={<PackagingArtworkServices/>} />
              <Route path="creative-services/3d-product-package-design-services.asp" element={<Product3DPackageDesign/>} />
              <Route path="creative-services/cover-design-services.asp" element={<CoverDesignServices/>} />
              <Route path="creative-services/banner-design.asp" element={<BannerDesignServices/>} />
              <Route path="creative-services/brochure-design.asp" element={<BrochureDesignServices/>} />
              <Route path="creative-services/hoarding-design-services.asp" element={<HoardingDesignServices/>} />
              <Route path="creative-services/interior-branding-design-services.asp" element={<InteriorBrandingServices/>} />
              <Route path="creative-services/design/editorial-design-services.asp" element={<EditorialDesignServices/>} />
              <Route path="creative-services/design/poster-design-services.asp" element={<PosterDesignServices/>} />
              <Route path="creative-services/catalog-designing-services.asp" element={<CatalogDesignServices/>} />
              <Route path="creative-services/tote-bag-design-services.asp" element={<ToteBagDesignServices/>} />
              <Route path="creative-services/tattoo-design-services.asp" element={<TattooDesignServices/>} />
              <Route path="creative-services/infographics-design-services.asp" element={<InfographicDesignServices/>} />
              <Route path="creative-services/stationery-design-services.asp" element={<StationeryDesignServices/>} />
              <Route path="creative-services/design/car-wrap-design-services.asp" element={<CarWrapDesignServices/>} />
              <Route path="creative-services/letterhead-design-services.asp" element={<LetterheadDesignServices/>} />
              <Route path="creative-services/design/invitation-design-services.asp" element={<InvitationDesignServices/>} />
              <Route path="creative-services/design/calendar-design-services.asp" element={<CalendarDesignServices/>} />
              <Route path="creative-services/apparel-design-services.asp" element={<ApparelDesignServices/>} />
              <Route path="creative-services/merchandise-design-services.asp" element={<MerchandiseDesignServices/>} />
              <Route path="creative-services/trade-show-booth-design-services.asp" element={<TradeShowBoothDesign/>} />
              <Route path="creative-services/thank-you-card-design-services.asp" element={<ThankYouCardDesign/>} />
              <Route path="creative-services/t-shirt-design-services.asp" element={<TShirtDesign/>} />
              <Route path="creative-services/word-template-design-services.asp" element={<WordTemplateDesign/>} />
              <Route path="creative-services/sticker-design-services.asp" element={<StickerDesign/>} />
              <Route path="creative-services/design/white-paper-design-services.asp" element={<WhitePaperDesign/>} />
              <Route path="creative-services/campaign-design-services.asp" element={<CampaignDesign/>} />
              <Route path="creative-services/design-thinking-services.asp" element={<DesignThinking/>} />
              <Route path="creative-services/web-page-layout-design-services.asp" element={<WebPageLayoutDesign/>} />
              <Route path="creative-services/real-estate-brochure-design-services.asp" element={<RealEstateBrochureDesign/>} />
              <Route path="creative-services/marketing-and-promotional-design-services.asp" element={<MarketingCollateralDesign/>} />
              <Route path="creative-services/marketing-and-promotional-design-services.asp" element={<PresentationDesignServices/>} />


              {/* Creative-design -> Logo-design  */}
              <Route path="creative-services/3d-logo-design.asp" element={<Logo3DDesignServices/>} />
              <Route path="creative-services/animated-logo-design.asp" element={<AnimatedLogoDesignServices/>} />
              <Route path="creative-services/2d-logo-design-services.asp" element={<Logo2DDesignServices/>} />
              <Route path="creative-services/vector-artwork-services.asp" element={<VectorArtworkServices/>} />
              <Route path="creative-services/logo-cleanup-services.asp" element={<LogoCleanupServices/>} />

              {/* Creative-design -> Artwork  */}
              <Route path="creative-services/layout-formatting-design-services.asp" element={<LayoutAndFormatting/>} />
              <Route path="services/magazine-typesetting.asp" element={<MagazineDesign/>} />
              <Route path="services/DTP.asp" element={<DesktopPublishing/>} />
              <Route path="creative-services/book-layout-design.asp" element={<BookLayout/>} />
              <Route path="creative-services/image-optimization-vectorization-services.asp" element={<ImageOptimization/>} />
              <Route path="creative-services/image-to-vector-conversion-services.asp" element={<ImageToVectorConversion/>} />
              <Route path="creative-services/magazine-digitization-services.asp" element={<MagazineDigitization/>} />
              <Route path="creative-services/2d-art-services.asp" element={<Art2DServices/>} />

              {/* Creative-design -> Prepress */}
              <Route path="creative-services/typesetting-services.asp" element={<TypesettingServices/>} />

              
              {/* Creative-design -> Audio Editing */}
              <Route path="creative-services/podcast-editing-services.asp" element={<PodcastEditing/>} />
              <Route path="creative-services/audio-conversion-services.asp" element={<AudioConversion/>} />
              <Route path="creative-services/ad-jingle-creation-services.asp" element={<AdJingleCreation/>} />
              <Route path="creative-services/corporate-audio-editing-services.asp" element={<CorporateAudioEditing/>} />
              <Route path="creative-services/radio-program-editing-services.asp" element={<RadioProgramEditing/>} />
              <Route path="creative-services/music-editing-and-mixing-services.asp" element={<MusicEditingMixing/>} />

              {/* Creative-design -> Advertising */}
              <Route path="creative-services/digital-advertising.asp" element={<AdvertisingDesignServices/>} />

              {/* Creative-design -> Storyboard creation */}
              <Route path="creative-services/character-creation-services.asp" element={<CharacterCreationServices/>} />
              <Route path="creative-services/character-designing-services.asp" element={<CharacterDesigningServices/>} />
              <Route path="creative-services/storyboard-animatic-services.asp" element={<StoryboardAnimaticServices/>} />
              <Route path="creative-services/cartoon-storyboard-services.asp" element={<CartoonStoryboardServices/>} />
              <Route path="creative-services/video-game-storyboard-services.asp" element={<VideoGameStoryboardServices/>} />
              <Route path="creative-services/photomatic-storyboard-services.asp" element={<PhotomaticStoryboardServices/>} />
              <Route path="creative-services/illustration-storyboard-services.asp" element={<IllustrationStoryboardServices/>} />
              <Route path="creative-services/elearning-storyboard-services.asp" element={<ELearningStoryboardServices/>} />

               {/* Creative-design -> Storyboard creation */}             
              <Route path="creative-services/3d-sculpting-services.asp" element={<ThreeDSculptingServices/>} />
              <Route path="creative-services/3d-game-modeling-services.asp" element={<ThreeDGameModelingServices/>} />
              <Route path="creative-services/3d-texturing-services.asp" element={<ThreeDTexturingServices/>} />
              <Route path="creative-services/3d-environment-design-services.asp" element={<ThreeDEnvironmentServices/>} />

               {/* Creative-design ->creative-uk*/}             
              <Route path="uk/creative/video-editing/wedding-video-editing-services.asp" element={<WeddingVideoEditing/>} />
              <Route path="uk/creative/video-editing/video-editing-services.asp" element={<VideoEditingServicesUK/>} />
              <Route path="uk/creative/graphic-design-services.asp" element={<GraphicDesignServicesUK/>} />
              <Route path="uk/creative/video-editing/real-estate-video-editing-services.asp" element={<RealEstateVideoEditing/>} />

              {/* Creative-design ->Video-Editing*/}      
              <Route path="creative-services/film/corporate-video-editing.asp" element={<CorporateVideoEditing/>} />
              <Route path="creative-services/film/edius-video-editing.asp" element={<EdiusServicesPage/>} />
              <Route path="creative-services/film/explainer-video-creation-services.asp" element={<ExplainerVideoPage/>} />
              <Route path="creative-services/film/" element={<FilmServicesPage/>} />
              <Route path="creative-services/holiday-video-editing-services.asp" element={<HolidayVideoEditing/>} />
              <Route path="creative-services/motion-graphic-services.asp" element={<MotionGraphicsPage/>} />
              <Route path="creative-services/film/mp4-video-editing.asp" element={<MP4VideoEditingPage/>} />
              <Route path="creative-services/film/real-estate-drone-video-editing-services.asp" element={<RealEstateDroneVideoEditing/>} />
              <Route path="creative-services/film/real-estate-video-editing-services.asp" element={<RealEstateVideoEditingPage/>} />
              <Route path="creative-services/film/360-degree-video-editing.asp" element={<Video360Page/>} />
              <Route path="creative-services/film/video-compositing-services.asp" element={<VideoCompositingPage/>} />
              <Route path="creative-services/wedding-video-editing-services.asp" element={<WeddingVideoEditing/>} />
              <Route path="creative-services/film/youtube-monitoring-services.asp" element={<YouTubeMonitoringPage/>} />
              <Route path="creative-services/articles/artwork-personalization-localization-through-ai-in-design.asp" element={<MovieEditingServices/>} />
              <Route path="creative-services/film/youtube-video-editing.asp" element={<YouTubeEditingServices/>} />
              <Route path="creative-services/film/gopro-video-editing.asp" element={<GoProVideoEditing/>} />
              <Route path="creative-services/video-brochure.asp" element={<VideoBrochureServices/>} />
              <Route path="creative-services/film/video-summary-services.asp" element={<VideoSummaryServices/>} />
              <Route path="creative-services/film/online-video-editing-services.asp" element={<OnlineVideoEditingServices/>} />
              <Route path="creative-services/film/home-video-editing-services.asp" element={<HomeVideoEditingServices/>} />
              <Route path="creative-services/film/sports-video-editing-services.asp" element={<SportsVideoEditingServices/>} />
              <Route path="creative-services/video-cropping-services.asp" element={<VideoCroppingServices/>} />
              <Route path="creative-services/video-trimming-services.asp" element={<VideoTrimmingServices/>} />
              <Route path="creative-services/film-re-editing-services.asp" element={<FilmReeditingServices/>} />
              <Route path="creative-services/film/video-tagging-services.asp" element={<VideoTaggingServices/>} />
              <Route path="creative-services/film/video-stabilizing-services.asp" element={<VideoStabilizingServices/>} />
              <Route path="creative-services/film/testimonial-video-editing-services.asp" element={<TestimonialVideoEditing/>} />
              <Route path="creative-services/film/virtual-reality-post-production-services.asp" element={<VRPostProduction/>} />
              <Route path="creative-services/film/product-video-editing-services.asp" element={<ProductVideoEditing/>} />
              <Route path="creative-services/film/drone-video-editing-services.asp" element={<DroneVideoEditing/>} />
              <Route path="creative-services/film/video-clipping-services.asp" element={<VideoClippingServices/>} />
              <Route path="creative-services/medical-video-editing-services.asp" element={<MedicalVideoEditingServices/>} />
              <Route path="creative-services/interview-video-editing-services.asp" element={<InterviewVideoEditing/>} />
              <Route path="creative-services/film/vlog-video-editing-services.asp" element={<VlogVideoEditing/>} />
              <Route path="creative-services/film/picture-to-video-editing-services.asp" element={<PictureToVideoEditing/>} />
              <Route path="creative-services/3d-explainer-video-production-services.asp" element={<ExplainerVideoServices/>} />
              <Route path="creative-services/sales-pitch-video-editing-services.asp" element={<SalesPitchVideoEditing/>} />
              <Route path="creative-services/film/medical-video-production-services.asp" element={<MedicalVideoProduction/>} />


              {/* Creative-design ->Articles*/}      
              <Route path="creative-services/film/movie-editing-services.asp" element={<OutsourcingCreativeDesign/>} />
              <Route path="creative-services/articles/8-tips-to-make-animation-realistic.asp" element={<AnimationTips/>} />
              <Route path="creative-services/articles/top-21-graphic-design-trends.asp" element={<GraphicDesignTrends/>} />
              <Route path="creative-services/articles/video-editing-tips-and-tricks.asp" element={<VideoEditingTips/>} />
              <Route path="creative-services/articles/top-graphic-design-resources.asp" element={<GraphicDesignResources/>} />
              <Route path="creative-services/articles/drone-video-editing-tips.asp" element={<DroneVideoEditingTips/>} />
              <Route path="creative-services/articles/graphic-design-trends-predictions.asp" element={<GraphicDesignPredictions2018/>} />
              <Route path="creative-services/articles/10-emerging-videography-trends.asp" element={<VideographyTrends2018/>} />
              <Route path="creative-services/articles/quick-effective-video-editing-tools.asp" element={<VideoEditingTools/>} />
              <Route path="creative-services/articles/brochure-printing-tips.asp" element={<BrochurePrintingTips/>} />
              <Route path="creative-services/articles/prepress-publishing-printing.asp" element={<PrepressTips/>} />
              <Route path="creative-services/articles/prepress-infrastructure.asp" element={<PrepressInfrastructure/>} />
              <Route path="content/business-writing.asp" element={<BusinessWriting/>} />
              <Route path="creative-services/articles/the-potential-and-perils-of-outsourcing-writing-to-india.asp" element={<OutsourcingWriting/>} />
              <Route path="creative-services/articles/changing-face-of-virtual-reality.asp" element={<VirtualReality/>} />
              <Route path="creative-services/articles/looking-for-a-writer-in-india-discover-diversity.asp" element={<WritersInIndia/>} />
              <Route path="creative-services/articles/10-key-elements-magazine-layout-design.asp" element={<MagazineLayoutGuide/>} />
              <Route path="creative-services/articles/magazine-design-layout-tips.asp" element={<MagazineTips/>} />
              <Route path="creative-services/articles/correct-format-digital-artwork.asp" element={<DigitalArtworkFormat/>} />
              <Route path="creative-services/articles/faqs-on-adobe-creative-suite.asp" element={<AdobeSuiteFAQs/>} />
              <Route path="creative-services/articles/storyboarding-tips-for-short-films.asp" element={<StoryboardingTips/>} />
              <Route path="creative-services/articles/video-editing-software-proficiency.asp" element={<VideoEditingProficiency/>} />
              <Route path="creative-services/articles/artwork-personalization-localization-through-ai-in-design.asp" element={<PersonalizingAIArtwork/>} />


              {/* Creative-design -> Illustration */}
              <Route path="creative-services/veterinary-illustration-services.asp" element={<VeterinaryIllustration/>} />
              <Route path="creative-services/product-illustration-services.asp" element={<ProductIllustration/>} />
              <Route path="creative-services/children-book-illustration.asp" element={<ChildrensBookIllustration/>} />
              <Route path="creative-services/book-illustration-services.asp" element={<BookIllustrationServices/>} />
              <Route path="creative-services/scientific-illustration-services.asp" element={<ScientificIllustrationServices/>} />
              <Route path="creative-services/fashion-illustration-services.asp" element={<FashionIllustration/>} />
              <Route path="creative-services/sports-illustration-services.asp" element={<SportsIllustration/>} />
              <Route path="creative-services/architectural-illustration-services.asp" element={<ArchitecturalIllustration/>} />
              <Route path="creative-services/comic-illustration-services.asp" element={<ComicIllustration/>} />
              <Route path="creative-services/brand-illustration-services.asp" element={<BrandIllustration/>} />
              <Route path="creative-services/storyboard-illustration-services.asp" element={<StoryboardIllustration/>} />
              <Route path="creative-services/vector-illustration-services.asp" element={<VectorIllustration/>} />
              <Route path="creative-services/pop-art-illustration-services.asp" element={<PopArtIllustration/>} />
              <Route path="creative-services/surgical-illustration-services.asp" element={<SurgicalIllustration/>} />
              <Route path="creative-services/dental-illustration-services.asp" element={<DentalIllustration/>} />
              <Route path="creative-services/ophthalmology-illustration-services.asp" element={<OphthalmologyIllustration/>} />
              <Route path="creative-services/image-illustration-services.asp" element={<ImageIllustrationServices/>} />
              <Route path="creative-services/mascot-design-services.asp" element={<MascotDesignServices/>} />
              <Route path="creative-services/educational-illustration-services.asp" element={<EducationalIllustration/>} />
              <Route path="creative-services/character-illustration-services.asp" element={<CharacterIllustration/>} />
              <Route path="creative-services/2d-infographics-video-production-services.asp" element={<InfographicsVideoPage/>} />
              <Route path="creative-services/insurance-illustration-services.asp" element={<InsuranceIllustration/>} />
              <Route path="creative-services/2d-infographic-services.asp" element={<Infographics2D/>} />
              <Route path="creative-services/comic-book-illustration-services.asp" element={<ComicIllustrationServices/>} />
              <Route path="creative-services/pet-illustration-services.asp" element={<PetIllustrationServices/>} />



              {/* Creative-design -> Writing services */}
              <Route path="creative-services/writing/textediting-proofreading-services.asp" element={<TextEditingProofreading/>} />
              <Route path="creative-services/writing/proofreading.asp" element={<ProofreadingServices/>} />
              <Route path="creative-services/writing/content-editing.asp" element={<ContentEditingServices/>} />
              <Route path="creative-services/writing/content-rewriting.asp" element={<ContentRewritingServices/>} />
              <Route path="creative-services/writing/content-development-services.asp" element={<ContentWritingServices/>} />
              <Route path="creative-services/writing/SEO-content-writing.asp" element={<SEOContentWritingServices/>} />
              <Route path="creative-services/writing/review-summary-writing.asp" element={<SummaryReviewWritingServices/>} />
              <Route path="creative-services/writing/article-writing.asp" element={<ArticleWritingServices/>} />
              <Route path="creative-services/writing/description-writing.asp" element={<ProductDescriptionServices/>} />
              <Route path="creative-services/writing/blog-writing.asp" element={<BlogWritingServices/>} />
              <Route path="creative-services/writing/business-writing.asp" element={<BusinessWritingServices/>} />
              <Route path="creative-services/writing/academic-writing.asp" element={<AcademicWritingServices/>} />
              <Route path="creative-services/writing/speech-writing.asp" element={<SpeechWritingServices/>} />
              <Route path="creative-services/writing/medical-writing.asp" element={<MedicalWritingService/>} />
              <Route path="creative-services/writing/legal-writing.asp" element={<LegalWritingServices/>} />
              <Route path="creative-services/writing/travel-writing.asp" element={<TravelWritingServices/>} />
              <Route path="content/technical-writing.asp" element={<TechnicalWritingServices/>} />
              <Route path="kpo/abstract-writing.asp" element={<AbstractWritingServices/>} />
              <Route path="creative-services/writing/website-copywriting-services.asp" element={<WebsiteCopywritingServices/>} />
              <Route path="creative-services/writing/scientific-writing-services.asp" element={<ScientificWritingServices/>} />
              <Route path="creative-services/writing/manuscript-editing-services.asp" element={<ManuscriptEditingServices/>} />

              {/* Creative-design -> Animation */}
              <Route path="creative-services/stock-animation-services.asp" element={<ManuscriptEditingService/>} />
              <Route path="creative-services/feature-film-animation-services.asp" element={<FeatureFilmAnimationServices/>} />
              <Route path="creative-services/visual-effects-services.asp" element={<VisualEffectsServices/>} />
              <Route path="creative-services/rotoscoping-services.asp" element={<RotoscopingServices/>} />
              <Route path="creative-services/2D-animation-services.asp" element={<Animation2DServices/>} />
              <Route path="creative-services/animatics-services.asp" element={<AnimaticsServices/>} />
              <Route path="creative-services/3D-animation-services.asp" element={<ThreeDAnimationServices/>} />
              <Route path="creative-services/flash-animation-services.asp" element={<FlashAnimationServices/>} />
              <Route path="creative-services/3d-animation-rendering-services.asp" element={<AnimationRenderingServices/>} />
              <Route path="creative-services/whiteboard-animation-services.asp" element={<WhiteboardAnimationServices/>} />
              <Route path="creative-services/tv-commercial-animation-services.asp" element={<TVCommercialAnimationServices/>} />
              <Route path="creative-services/character-animation-services.asp" element={<CharacterAnimationServices/>} />
              <Route path="creative-services/stop-motion-animation-services.asp" element={<StopMotionAnimationServices/>} />
              <Route path="creative-services/product-animation-services.asp" element={<ProductAnimationServices/>} />
              <Route path="creative-services/explainer-video-animation-services.asp" element={<ExplainerVideoServices/>} />
              <Route path="creative-services/titling-animation-services.asp" element={<TitlingAnimationServices/>} />
              <Route path="creative-services/architectural-animation-services.asp" element={<ArchitecturalAnimationServices/>} />
              <Route path="creative-services/animated-feature-films-services.asp" element={<AnimatedFeatureFilms/>} />
              <Route path="creative-services/cutout-animation-services.asp" element={<CutoutAnimation/>} />
              <Route path="creative-services/forensic-animation-services.asp" element={<ForensicAnimation/>} />
              <Route path="creative-services/engineering-animation-services.asp" element={<EngineeringAnimation/>} />
              <Route path="creative-services/music-video-animation-services.asp" element={<MusicVideoAnimation/>} />
              <Route path="creative-services/kinetic-typography-services.asp" element={<KineticTypography/>} />
              <Route path="creative-services/cartoon-animation-services.asp" element={<CartoonAnimation/>} />
              <Route path="creative-services/rotopaint-art-services.asp" element={<RotoPaintArt/>} />
              <Route path="creative-services/vfx-wire-removal-services.asp" element={<VFXWireRemoval/>} />



              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

