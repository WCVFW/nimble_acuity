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
import IndiaToUSAAccordion from "./pages/services/import-export/service2";
import ImportExportServices1 from "./pages/services/import-export/serive1";

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
              <Route path="/services/import-export-services/india-usa-products" element={<IndiaToUSAAccordion />} />


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




              <Route path="/services/import-export-services/import-export-services" element={<ImportExportServices1 />} /> {/* Card A */}
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
