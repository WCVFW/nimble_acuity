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
// import HealthcareMedTechSupport from "./pages/services/HealthcareBPO/healthcare-service";
import HealthcareBPO from "./pages/services/HealthcareBPO/healthcare-service";
import MortgageService from "./pages/services/Mortgage-Services/MortgageServices";
import ITServices from "./pages/services/SoftwareDevelopment/ITServices";
import DataAIAnalyticsResearch from "./pages/services/data-ai-analytics-research";
import MarketingSalesCreativeMedia from "./pages/services/marketing-sales-creative-media";
import CustomerExperienceCommunicationsTelephony from "./pages/services/customer-experience-communications-telephony";
import OperationsProcurementSupplychainManufacturing from "./pages/services/operations-procurement-supplychain-manufacturing";
import RealEstateFacilitiesEnergyEnvironment from "./pages/services/Mortgage-Services/MortgageServices";
import HRTrainingAdminSpecializedServices from "./pages/services/hr-training-admin-specialized-services";
import GlobalOutsourcingOffshoring from "./pages/services/global-outsourcing-offshoring";
import ImportExportServices from "./pages/services/import-export-services";


{/* services */ }
{/* finance-accounting-finops */ }
{/* Bookkeeping service */ }
import BookkeepingServices from "./pages/services/accounts-services/bookkeeping-service/BookkeepingServices";
import RealEstateBookkeepingServices from "./pages/services/accounts-services/bookkeeping-service/RealEstateBookkeepingServices"
import NimbleAcuityAccountingServices from "./pages/services/accounts-services/bookkeeping-service/AccountingServicesSetup"
import CPABookkeepingServices from "./pages/services/accounts-services/bookkeeping-service/CPABookkeepingServices"
import SmallBusinessBookkeeping from "./pages/services/accounts-services/bookkeeping-service/SmallBusinessBookkeeping"
import QuickBooksBookkeeping from "./pages/services/accounts-services/bookkeeping-service/QuickBooksBookkeeping"
import VirtualBookkeeping from "./pages/services/accounts-services/bookkeeping-service/VirtualBookkeeping"

{/* Accounting service */ }
import AccountingServices from "./pages/services/accounts-services/accounting-services/AccountingServices";
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
import OrderProcessingServices from "./pages/services/accounts-services/accounting-services/OrderProcessingServices";
import XBRLFilingServices from "./pages/services/accounts-services/accounting-services/XbrlFilingPage";
import ManualJournalEntryServices from "./pages/services/accounts-services/accounting-services/ManualJournalEntryServices";
import BusinessRecoveryServices from "./pages/services/accounts-services/accounting-services/BusinessRecoveryServices";
import CorporateSecretarialServices from "./pages/services/accounts-services/accounting-services/CorporateSecretarialServices";
import TransactionAdvisoryServices from "./pages/services/accounts-services/accounting-services/Transaction-Advisory-Services"
import InvoiceProcessingServices from "./pages/services/accounts-services/accounting-services/InvoiceProcessingServices";
import RealEstateFinancialReporting from "./pages/services/accounts-services/accounting-services/RealEstateFinancialReporting";
import TruckingAccountingServices from "./pages/services/accounts-services/accounting-services/TruckingAccountingServices";
import VirtualAccountingServices from "./pages/services/accounts-services/accounting-services/VirtualAccountingServices";
import XeroAccountingServices from "./pages/services/accounts-services/accounting-services/XeroAccountingServices";
import GlobalAccountingServices from "./pages/services/accounts-services/accounting-services/GlobalAccountingServices";
import SpendAnalysisServices from "./pages/services/accounts-services/accounting-services/SpendAnalysisServices";
import GeneralLedgerAccountingServices from "./pages/services/accounts-services/accounting-services/GeneralLedgerAccountingServices";
import ExcelAccountingServices from "./pages/services/accounts-services/accounting-services/ExcelAccountingServices";
import BankingFinancialAnalysisServices from "./pages/services/accounts-services/accounting-services/BankingFinancialAnalysisServices";
import LIBORTransitionServices from "./pages/services/accounts-services/accounting-services/LIBORTransitionServices";
import YearEndAccountingServices from "./pages/services/accounts-services/accounting-services/YearEndAccountingServices";
import InvoiceFactoringServices from "./pages/services/accounts-services/accounting-services/InvoiceFactoringServices";
import FixedAssetReconciliationServices from "./pages/services/accounts-services/accounting-services/FixedAssetReconciliationServices";
import CloudFinancialManagementServices from "./pages/services/accounts-services/accounting-services/CloudFinancialManagementServices";
import VirtualCFO_Services from "./pages/services/accounts-services/accounting-services/VirtualCFO_Services";
import BAS_Services from "./pages/services/accounts-services/accounting-services/BAS_Services";
import FractionalCFO_Services from "./pages/services/accounts-services/accounting-services/FractionalCFO_Services";
import QuickBooksCleanUpServices from "./pages/services/accounts-services/accounting-services/QuickBooksCleanUpServices";
import TransactionSupportServices from "./pages/services/accounts-services/accounting-services/TransactionSupportServices";

{/* Accounts Payable */ }
import AccountsPayableServices from "./pages/services/accounts-services/accounts-payable/AccountsPayable";

{/* Accounts Receivable */ }
import AccountsReceivableServices from "./pages/services/accounts-services/Accounts Receivable/AccountsReceivableServices";
import RealEstateAccountsReceivable from "./pages/services/accounts-services/Accounts Receivable/RealEstateAccountsReceivableServices";
import AccountsReceivableFactoring from "./pages/services/accounts-services/Accounts Receivable/AccountsReceivableFactoring";
import ARAgingReports from "./pages/services/accounts-services/Accounts Receivable/ARAgingReportsServices";

{/* Tax Prepareation */ }
import TaxPreparationServices from "./pages/services/accounts-services/Tax Preparation/TaxPreparationServices";
import TaxRegulatoryServices from "./pages/services/accounts-services/Tax Preparation/TaxandRegulatoryServices";
import TaxProcessingServices from "./pages/services/accounts-services/Tax Preparation/TaxProcessingServices";
import TaxConsultingServices from "./pages/services/accounts-services/Tax Preparation/TaxConsultingServices";
import SalesTaxServices from "./pages/services/accounts-services/Tax Preparation/SalesTaxServices";
import ProSeriesTaxProcessing from "./pages/services/accounts-services/Tax Preparation/ProSeriesTaxProcessing";
import BusinessTaxServices from "./pages/services/accounts-services/Tax Preparation/BusinessTaxServices";
import HRBlockTaxCutProcessing from "./pages/services/accounts-services/Tax Preparation/HRBlockTaxCutProcessing";
import FederalTaxServices from "./pages/services/accounts-services/Tax Preparation/FederalTaxServices";
import VATReturnServices from "./pages/services/accounts-services/Tax Preparation/VATReturnServices";
import VirtualTaxPreparationServices from "./pages/services/accounts-services/Tax Preparation/VirtualTaxPreparationServices";


{/* CPA Service */ }
import CPAServicePage from "./pages/services/accounts-services/CPA-service/CPAServicePage";
import SmallBusinessCPA from "./pages/services/accounts-services/CPA-service/SmallBusinessCPAServices";
import CPATaxServices from "./pages/services/accounts-services/CPA-service/CPATaxServices";
import CPAPayrollServices from "./pages/services/accounts-services/CPA-service/CPAPayrollServices";
import CPAAccountingServices from "./pages/services/accounts-services/CPA-service/CPAAccountingServices";

{/* Financial Analysis */ }
import FinancialAnalysisServices from "./pages/services/accounts-services/Financial-Analysis/FinancialAnalysisServices";
import DueDiligenceServices from "./pages/services/accounts-services/Financial-Analysis/DueDiligenceServices";
import PortfolioAnalysisServices from "./pages/services/accounts-services/Financial-Analysis/PortfolioAnalysisServices";
import FinancialStatementAuditServices from "./pages/services/accounts-services/Financial-Analysis/FinancialStatementAuditServices";
import TreasuryManagementServices from "./pages/services/accounts-services/Financial-Analysis/TreasuryManagementServices";
import RegulatoryComplianceServices from "./pages/services/accounts-services/Financial-Analysis/RegulatoryComplianceServices";
import EnterprisePerformanceManagement from "./pages/services/accounts-services/Financial-Analysis/EnterprisePerformanceManagement";
import InvestmentAnalysisServices from "./pages/services/accounts-services/Financial-Analysis/InvestmentAnalysisServices";
import BusinessForecastingServices from "./pages/services/accounts-services/Financial-Analysis/BusinessForecastingServices";
import BudgetingForecastingServices from "./pages/services/accounts-services/Financial-Analysis/BudgetingForecastingServices";

{/* Payroll Services */ }
import PayrollProcessingServices from "./pages/services/accounts-services/Payroll-Services/PayrollProcessingServices";
import PayrollComplianceServices from "./pages/services/accounts-services/Payroll-Services/PayrollComplianceServices";
import PayrollDataAnalyticsServices from "./pages/services/accounts-services/Payroll-Services/PayrollDataAnalyticsServices";
import PayrollAdministrationServices from "./pages/services/accounts-services/Payroll-Services/PayrollAdministrationServices";

{/* Healthcare BPO */ }
{/* Medical Billing */ }
import MedicalBilling from "./pages/services/HealthcareBPO/Medical-Billing/MedicalBilling";
import PhysicianBilling from "./pages/services/HealthcareBPO/Medical-Billing/PhysicianBilling";
import FQHCBilling from "./pages/services/HealthcareBPO/Medical-Billing/FQHCBilling";
import GynecologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/GynecologyBilling";
import PatientDemographicEntry from "./pages/services/HealthcareBPO/Medical-Billing/PatientDemographicEntry";
import PatientAdviceLiaison from "./pages/services/HealthcareBPO/Medical-Billing/PatientAdviceLiaison";
import FamilyPracticeBilling from "./pages/services/HealthcareBPO/Medical-Billing/FamilyPracticeBilling";
import PhysicalTherapyBilling from "./pages/services/HealthcareBPO/Medical-Billing/PhysicalTherapyBilling";
import ManagedCareContracting from "./pages/services/HealthcareBPO/Medical-Billing/ManagedCareContracting";
import InternalMedicineBilling from "./pages/services/HealthcareBPO/Medical-Billing/InternalMedicineBilling";
import UrgentCareBilling from "./pages/services/HealthcareBPO/Medical-Billing/UrgentCareBilling";
import IntelligentBillingSoftware from "./pages/services/HealthcareBPO/Medical-Billing/IntelligentBillingSoftware";
import SurgeryBilling from "./pages/services/HealthcareBPO/Medical-Billing/SurgeryBilling";
import SleepMedicineBilling from "./pages/services/HealthcareBPO/Medical-Billing/SleepMedicineBilling";
import MedicalRecordAbstraction from "./pages/services/HealthcareBPO/Medical-Billing/MedicalRecordAbstraction";
import OtolaryngologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/OtolaryngologyBilling";
import MedicalRecordIndexing from "./pages/services/HealthcareBPO/Medical-Billing/MedicalRecordIndexing";
import OccupationalHealthBilling from "./pages/services/HealthcareBPO/Medical-Billing/OccupationalHealthBilling";
import PhysicianCredentialing from "./pages/services/HealthcareBPO/Medical-Billing/PhysicianCredentialing";
import HospitalBilling from "./pages/services/HealthcareBPO/Medical-Billing/HospitalBilling";
import SurgeryCenterBilling from "./pages/services/HealthcareBPO/Medical-Billing/SurgeryCenterBilling";
import HospiceBilling from "./pages/services/HealthcareBPO/Medical-Billing/HospiceBilling";
import UrologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/UrologyBilling";
import EMSBilling from "./pages/services/HealthcareBPO/Medical-Billing/EMSBilling";
import ChiropracticBilling from "./pages/services/HealthcareBPO/Medical-Billing/ChiropracticBilling";
import DentalBilling from "./pages/services/HealthcareBPO/Medical-Billing/DentalBilling";
import DmeBilling from "./pages/services/HealthcareBPO/Medical-Billing/DmeBilling";
import PathologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/PathologyBilling";
import AnesthesiaBilling from "./pages/services/HealthcareBPO/Medical-Billing/AnesthesiaBilling";
import ASCBilling from "./pages/services/HealthcareBPO/Medical-Billing/ASCBilling";
import PediatricBilling from "./pages/services/HealthcareBPO/Medical-Billing/PediatricBilling";
import PainManagementBilling from "./pages/services/HealthcareBPO/Medical-Billing/PainManagementBilling";
import ChargeEntry from "./pages/services/HealthcareBPO/Medical-Billing/ChargeEntry";
import AmbulanceBilling from "./pages/services/HealthcareBPO/Medical-Billing/AmbulanceBilling";
import GastroenterologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/GastroenterologyBilling";
import EmergencyMedicineBilling from "./pages/services/HealthcareBPO/Medical-Billing/EmergencyMedicineBilling";
import PodiatryBilling from "./pages/services/HealthcareBPO/Medical-Billing/PodiatryBilling";
import CardiologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/CardiologyBilling";
import OrthopedicBilling from "./pages/services/HealthcareBPO/Medical-Billing/OrthopedicBilling";
import PersonalInjuryBilling from "./pages/services/HealthcareBPO/Medical-Billing/PersonalInjuryBilling";
import RadiologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/RadiologyBilling";
import WorkersCompBilling from "./pages/services/HealthcareBPO/Medical-Billing/WorkersCompBilling";
import NeurologyBilling from "./pages/services/HealthcareBPO/Medical-Billing/NeurologyBilling";
import CloudRecordsRetrieval from "./pages/services/HealthcareBPO/Medical-Billing/CloudRecordsRetrieval";
import MedicalDocumentScanning from "./pages/services/HealthcareBPO/Medical-Billing/MedicalDocumentScanning";
import HealthBillingSolutions from "./pages/services/HealthcareBPO/Medical-Billing/HealthBillingSolutions";
import BackOfficeSupport from "./pages/services/HealthcareBPO/Medical-Billing/BackOfficeSupport";
import EHRChartBuilding from "./pages/services/HealthcareBPO/Medical-Billing/EHRChartBuilding";

{/* Medical Coding */ }
import MedicalCoding from "./pages/services/HealthcareBPO/Medical-Coding/MedicalCoding";
import MedicalCodingAudit from "./pages/services/HealthcareBPO/Medical-Coding/MedicalCodingAuditServices";
import CPTICD10Coding from "./pages/services/HealthcareBPO/Medical-Coding/CPTICD10Coding";
import HCCHccCoding from "./pages/services/HealthcareBPO/Medical-Coding/HCCHccCoding";
import MedicalCodingAnalysis from "./pages/services/HealthcareBPO/Medical-Coding/MedicalCodingAnalysis";


{/* Revenue Cycle Management */ }
import RevenueCycleManagement from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/RevenueCycleManagement";
import HealthcareDueDiligence from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthcareDueDiligenceServices";
import PaymentPostingServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PaymentPostingServices";
import PatientFinancialClearance from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PatientFinancialClearance";
import MIPSQualityReporting from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MIPSQualityReporting";
import PPOClaimsRepricing from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PPOClaimsRepricing";
import PLMServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PLMServices";
import CaseManagementServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/CaseManagementServices";
import RevenueImprovementServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/RevenueImprovementServices";
import HealthcareCollectionServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthcareCollectionServices";
import MedicalARServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MedicalARServices";
import HealthInsuranceRecovery from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthInsuranceRecovery";
import MedicalClaimsProcessing from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MedicalClaimsProcessing";
import ReceivableAnalysis from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/ReceivableAnalysis";
import AccountsReceivableConversion from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/AccountsReceivableConversion";
import MedicareReimbursementServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MedicareReimbursementServices";
import AccountsReceivableFollowUp from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/AccountsReceivableFollowUp";
import PaymentAccuracyServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/PaymentAccuracyServices";
import MedicalClaimsEncounterProcessing from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/MedicalClaimsEncounterProcessing";
import ARCallingServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/ARCallingServices";
import HealthRiskAssessmentServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthRiskAssessmentServices";
import HealthcarePayerServices from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/HealthcarePayerServices";
import DenialManagement from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/DenialManagement";
import DentalRCM from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/DentalRCM";
import InsuranceEligibility from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/InsuranceEligibility";
import RevenueIntegrity from "./pages/services/HealthcareBPO/Revenue-Cycle-Management/RevenueIntegrity";

{/* Medical Transcription */ }
import MedicalTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/MedicalTranscription";
import VirtualScribing from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PhysicianAssistantVirtualScribingServices";
import MedicalReportsTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/MedicalReportsTranscription";
import InternalMedicineTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/InternalMedicineTranscription";
import GeneticsTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/GeneticsTranscription";
import CardiologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/CardiologyTranscription";
import PhysicalTherapyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PhysicalTherapyTranscription";
import OphthalmologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/OphthalmologyTranscription";
import EMRTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/EMRTranscription";
import ChiropracticTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/ChiropracticTranscription";
import DischargeSummaryTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/DischargeSummaryTranscription";
import DeafTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/DeafTranscription";
import RehabilitationTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/RehabilitationTranscription";
import EmergencyRoomTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/EmergencyRoomTranscription";
import HospitalTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/HospitalTranscription";
import VirtualMedicalScribe from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/VirtualMedicalScribe";
import Hl7Transcription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/Hl7Transcription";
import OncologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/OncologyTranscription";
import FollowUpNotesTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/FollowUpNotesTranscription";
import NeurologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/NeurologyTranscription";
import OrthopedicsTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/OrthopedicsTranscription";
import HistoryPhysicalNotes from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/HistoryPhysicalNotes";
import PsychiatryTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PsychiatryTranscription";
import DermatologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/DermatologyTranscription";
import BSLInterpreting from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/BSLInterpreting";
import OperativeReportsTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/OperativeReportsTranscription";
import AnesthesiologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/AnesthesiologyTranscription";
import ProgressNotesTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/ProgressNotesTranscription";
import PathologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PathologyTranscription";
import UrologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/UrologyTranscription";
import SurgeryTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/SurgeryTranscription";
import RadiologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/RadiologyTranscription";
import GastroenterologyTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/GastroenterologyTranscription";
import ENTTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/ENTTranscription";
import PainManagementTranscription from "./pages/services/HealthcareBPO/MedicalTranscriptionServices/PainManagementTranscription";


{/* Teleradiology Services */ }
import Teleradiology from "./pages/services/HealthcareBPO/Teleradiology-Services/Teleradiology";
import EradPacs from "./pages/services/HealthcareBPO/Teleradiology-Services/eRADPACSSystemforTeleradiology";
import EmergencyRadiology from "./pages/services/HealthcareBPO/Teleradiology-Services/EmergencyRadiology";
import StatReporting from "./pages/services/HealthcareBPO/Teleradiology-Services/StatReporting";
import RadiologyInformationSystem from "./pages/services/HealthcareBPO/Teleradiology-Services/RadiologyInformationSystem";
import PreliminaryTeleradiology from "./pages/services/HealthcareBPO/Teleradiology-Services/PreliminaryTeleradiology";
import MRIInterpretation from "./pages/services/HealthcareBPO/Teleradiology-Services/MRIInterpretation";
import NighthawkTeleradiology from "./pages/services/HealthcareBPO/Teleradiology-Services/NighthawkTeleradiology";
import OnsiteTeleradiology from "./pages/services/HealthcareBPO/Teleradiology-Services/OnsiteTeleradiology";
import BoneDensityScan from "./pages/services/HealthcareBPO/Teleradiology-Services/BoneDensityScan";
import ImageProcessing from "./pages/services/HealthcareBPO/Teleradiology-Services/ImageProcessing";
import NeurologyPETCT from "./pages/services/HealthcareBPO/Teleradiology-Services/NeurologyPETCT";
import ThoracicImaging from "./pages/services/HealthcareBPO/Teleradiology-Services/ThoracicImaging";
import MedicalImaging from "./pages/services/HealthcareBPO/Teleradiology-Services/MedicalImaging";
import PETCTReporting from "./pages/services/HealthcareBPO/Teleradiology-Services/PETCTReporting";
import AfterTeleradiologyServices from "./pages/services/HealthcareBPO/Teleradiology-Services/AfterTeleradiologyServices";
import FinalTeleradiologyReads from "./pages/services/HealthcareBPO/Teleradiology-Services/FinalTeleradiologyReads";
import CardiacPETCTReporting from "./pages/services/HealthcareBPO/Teleradiology-Services/CardiacPETCTReporting";
import CTInterpretation from "./pages/services/HealthcareBPO/Teleradiology-Services/CTInterpretation";
import DentalXrayImaging from "./pages/services/HealthcareBPO/Teleradiology-Services/DentalXrayImaging";

{/*  EMR Services */ }
import EMRServices from "./pages/services/HealthcareBPO/EMR-Services/EMRServices";
import PediatricsEMRServices from "./pages/services/HealthcareBPO/EMR-Services/PediatricsEMRServices";
import OphthalmologyEMRServices from "./pages/services/HealthcareBPO/EMR-Services/OphthalmologyEMRServices";
import InfectiousDiseaseEMR from "./pages/services/HealthcareBPO/EMR-Services/InfectiousDiseaseEMR";
import EndocrinologyEMR from "./pages/services/HealthcareBPO/EMR-Services/EndocrinologyEMR";
import PulmonaryEMR from "./pages/services/HealthcareBPO/EMR-Services/PulmonaryEMR";
import HouseCallEMR from "./pages/services/HealthcareBPO/EMR-Services/HouseCallEMR";
import EMRSoftwareDevelopment from "./pages/services/HealthcareBPO/EMR-Services/EMRSoftwareDevelopment";
import AllergyImmunologyEMR from "./pages/services/HealthcareBPO/EMR-Services/AllergyImmunologyEMR";
import UrologyEMR from "./pages/services/HealthcareBPO/EMR-Services/UrologyEMR";
import DermatologyEMR from "./pages/services/HealthcareBPO/EMR-Services/DermatologyEMR";
import PainManagementEMR from "./pages/services/HealthcareBPO/EMR-Services/PainManagementEMR";
import MedicalRecordSummary from "./pages/services/HealthcareBPO/EMR-Services/MedicalRecordSummary";
import SleepMedicineEMR from "./pages/services/HealthcareBPO/EMR-Services/SleepMedicineEMR";
import InternalMedicineEMR from "./pages/services/HealthcareBPO/EMR-Services/InternalMedicineEMR";
import OfficeAllyEHR from "./pages/services/HealthcareBPO/EMR-Services/OfficeAllyEHR";
import OncologyEMR from "./pages/services/HealthcareBPO/EMR-Services/OncologyEMR";
import RehabilitativeEMR from "./pages/services/HealthcareBPO/EMR-Services/RehabilitativeEMR";
import NephrologyEMR from "./pages/services/HealthcareBPO/EMR-Services/NephrologyEMR";
import CardiologyEMR from "./pages/services/HealthcareBPO/EMR-Services/CardiologyEMR";
import SpeechTherapyEMR from "./pages/services/HealthcareBPO/EMR-Services/SpeechTherapyEMR";
import AmbulatorySurgeryEMR from "./pages/services/HealthcareBPO/EMR-Services/AmbulatorySurgeryEMR";
import PrimaryCareEMR from "./pages/services/HealthcareBPO/EMR-Services/PrimaryCareEMR";
import PhysicalMedicineEMR from "./pages/services/HealthcareBPO/EMR-Services/PhysicalMedicineEMR";
import EMRIntegration from "./pages/services/HealthcareBPO/EMR-Services/EMRIntegration";
import OBGYNEMR from "./pages/services/HealthcareBPO/EMR-Services/OBGYNEMR";
import RheumatologyEMR from "./pages/services/HealthcareBPO/EMR-Services/RheumatologyEMR";
import VirtualEMR from "./pages/services/HealthcareBPO/EMR-Services/VirtualEMR";
import OrthopedicsEMR from "./pages/services/HealthcareBPO/EMR-Services/OrthopedicsEMR";
import PsychiatryEMR from "./pages/services/HealthcareBPO/EMR-Services/PsychiatryEMR";
import PrechartingServices from "./pages/services/HealthcareBPO/EMR-Services/PrechartingServices";
import OtolaryngologyEMR from "./pages/services/HealthcareBPO/EMR-Services/OtolaryngologyEMR";
import BehavioralHealthEHR from "./pages/services/HealthcareBPO/EMR-Services/BehavioralHealthEHR";
import EMRDataMigration from "./pages/services/HealthcareBPO/EMR-Services/EMRDataMigration";
import UrgentCareEHR from "./pages/services/HealthcareBPO/EMR-Services/UrgentCareEHR";
import VascularSurgeryEMR from "./pages/services/HealthcareBPO/EMR-Services/VascularSurgeryEMR";
import EMRDataEntry from "./pages/services/HealthcareBPO/EMR-Services/EMRDataEntry";
import GeneralSurgeryEMR from "./pages/services/HealthcareBPO/EMR-Services/GeneralSurgeryEMR";
import GastroenterologyEMR from "./pages/services/HealthcareBPO/EMR-Services/GastroenterologyEMR";
import NeurologyEMR from "./pages/services/HealthcareBPO/EMR-Services/NeurologyEMR";
import HandSurgeryEMR from "./pages/services/HealthcareBPO/EMR-Services/HandSurgeryEMR";


{/* Claims Adjudication Services */ }
import ClaimsAdjudication from "./pages/services/HealthcareBPO/Claims-Adjudication-Services/ClaimsAdjudication";
import RemittanceProcessing from "./pages/services/HealthcareBPO/Claims-Adjudication-Services/RemittanceProcessingService";
import DentalClaimsAdjudication from "./pages/services/HealthcareBPO/Claims-Adjudication-Services/DentalClaimsAdjudication";

{/* Medical Animation Services */ }
import MedicalAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/MedicalAnimationServices";
import MedicalAnimation2D from "./pages/services/HealthcareBPO/Medical-Animation/2DMedicalAnimationServices";
import MedicalIllustration3D from "./pages/services/HealthcareBPO/Medical-Animation/MedicalIllustration3D";
import MolecularAnimation from "./pages/services/HealthcareBPO/Medical-Animation/MolecularAnimation";
import Medical3DAnimation from "./pages/services/HealthcareBPO/Medical-Animation/Medical3DAnimation";
import BiomedicalIllustration from "./pages/services/HealthcareBPO/Medical-Animation/BiomedicalIllustration";
import PharmaceuticalAnimation from "./pages/services/HealthcareBPO/Medical-Animation/PharmaceuticalAnimation";
import SurgicalAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/SurgicalAnimationServices";
import AnatomyIllustrationServices from "./pages/services/HealthcareBPO/Medical-Animation/AnatomyIllustrationServices";
import OrthopedicAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/OrthopedicAnimationServices";
import ScientificAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/ScientificAnimationServices";
import MedicalDeviceAnimationServices from "./pages/services/HealthcareBPO/Medical-Animation/MedicalDeviceAnimationServices";
import MedicalDevicePrototypingServices from "./pages/services/HealthcareBPO/Medical-Animation/MedicalDevicePrototypingServices";
import MedicalIllustration from "./pages/services/HealthcareBPO/Medical-Animation/MedicalIllustration";
import SpineAnimation from "./pages/services/HealthcareBPO/Medical-Animation/SpineAnimation";


{/* Pharmacy Business Services */ }
import PharmacyBusinessServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacyBusinessServices";
import GxPComplianceServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/GxPComplianceServices";
import PharmacyBillingServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacyBillingServices";
import PharmacovigilanceServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacovigilanceServices";
import PharmacyManagementServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacyManagementServices";
import PhysicianReferralServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PhysicianReferralServices";
import MailOrderPharmacyServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/MailOrderPharmacyServices";
import MedicationTherapyManagementServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/MedicationTherapyManagementServices";
import PharmacyDocumentManagementServices from "./pages/services/HealthcareBPO/Pharmacy-Business-Services/PharmacyDocumentManagementServices";


{/* Healthcare Management Services */ }
import HealthcareManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareManagementServices";
import UrgentCareBackofficeSupport from "./pages/services/HealthcareBPO/Healthcare-Management-Services/UrgentCareBackofficeSupport";
import ClinicalDocumentationImprovement from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalDocumentationImprovement";
import DecentralizedClinicalTrials from "./pages/services/HealthcareBPO/Healthcare-Management-Services/DecentralizedClinicalTrials";
import HospitalBackofficeSupport from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HospitalBackofficeSupport";
import PatientEngagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientEngagementServices";
import OnlineTelehealthServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/OnlineTelehealthServices";
import HealthcareConsultingServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareConsultingServices";
import MedicalPracticeTransformationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalPracticeTransformationServices";
import PatientAdherenceServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientAdherenceServices";
import HedisMeasurementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HedisMeasurementServices";
import HealthcareDocumentationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareDocumentationServices";
import MedicalRecordReviewServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalRecordReviewServices";
import ChartDocumentationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ChartDocumentationServices";
import HealthcareSurveysServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareSurveysServices";
import TelemedicineAppointmentServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/TelemedicineAppointmentServices";
import HealthcareDataManagement from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareDataManagement";
import PatientSatisfactionSurveyServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientSatisfactionSurveyServices";
import PharmaceuticalOutsourcing from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PharmaceuticalOutsourcing";
import ClinicalDocumentationIntegrity from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalDocumentationIntegrity";
import PriorAuthorization from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PriorAuthorization";
import ClinicalServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalServices";
import RemotePatientMonitoring from "./pages/services/HealthcareBPO/Healthcare-Management-Services/RemotePatientMonitoring";
import PreventiveCare from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PreventiveCare";
import HealthcareAnalytics from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareAnalytics";
import TelemedicineServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/TelemedicineServices";
import HealthcareInteroperability from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareInteroperability";
import HealthcareCallCenterServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareCallCenterServices";
import ClinicalDecisionSupportServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalDecisionSupportServices";
import MedicalDataEntryServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalDataEntryServices";
import HospitalCapacityManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HospitalCapacityManagementServices";
import VirtualHealthcareBPOServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/VirtualHealthcareBPOServices";
import ClaimsProcessingSoftwareDevelopment from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClaimsProcessingSoftwareDevelopment";
import ClinicalResearchOrganizationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalResearchOrganizationServices";
import HealthcareProviderDataManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthcareProviderDataManagementServices";
import EDIIntegrationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/EDIIntegrationServices";
import RiskBasedQualityManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/RiskBasedQualityManagementServices";
import DentalInsuranceVerificationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/DentalInsuranceVerificationServices";
import HealthInformationTechnology from "./pages/services/HealthcareBPO/Healthcare-Management-Services/HealthInformationTechnology";
import PatientOnboardingServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientOnboardingServices";
import MedicalInsuranceClaimsProcessing from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalInsuranceClaimsProcessing";
import MedicalBillingSoftwareSupport from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalBillingSoftwareSupport";
import MedicalPeerReviewServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalPeerReviewServices";
import EOBProcessingServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/EOBProcessingServices";
import PopulationHealthAnalytics from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PopulationHealthAnalytics";
import NurseTriageServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/NurseTriageServices";
import PatientInteractionServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PatientInteractionServices";
import UtilizationManagement from "./pages/services/HealthcareBPO/Healthcare-Management-Services/UtilizationManagement";
import ClinicalTrialRegulatory from "./pages/services/HealthcareBPO/Healthcare-Management-Services/ClinicalTrialRegulatory";
import PracticeManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/PracticeManagementServices";
import CareManagementServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/CareManagementServices";
import DigitalHealthServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/DigitalHealthServices";
import StatisticalProgrammingServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/StatisticalProgrammingServices";
import CareCoordinationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/CareCoordinationServices";
import MedicalPresentationServices from "./pages/services/HealthcareBPO/Healthcare-Management-Services/MedicalPresentationServices";

{/* Mortgage Services */ }
{/* Loan Processing Services */ }
import MortgageProcessing from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageProcessing";
import JumboMortgageProcessing from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/JumboMortgageProcessing";
import MortgageRPA from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageRPA";
import NoMoneyDownMortgage from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/NoMoneyDownMortgage";
import MortgageIndexingAndExtraction from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageIndexingAndExtraction";
import BrokerPriceOpinion from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/BrokerPriceOpinion";
import MortgageDocumentRecording from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageDocumentRecording";
import MortgageTitlePolicy from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageTitlePolicy";
import PreFundQCAudit from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/PreFundQCAudit";
import ForeclosureTitleAndResolution from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ForeclosureTitleAndResolution";
import MortgageAccountingAndBookkeeping from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageAccountingAndBookkeeping";
import MortgageLienRelease from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageLienRelease";
import MortgageVirtualAssistant from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageVirtualAssistant";
import MortgageCreditUnion from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageCreditUnion";
import MortgageUXSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageUXSupport";
import MortgageAudit from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageAudit";
import USDAMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/USDAMortgageSupport";
import WarehouseQCAudit from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/WarehouseQCAudit";
import MortgagePreprocessing from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgagePreprocessing";
import ReverseMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ReverseMortgageSupport";
import MortgageQualityRetention from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageQualityRetention";
import MortgageDashboardCreation from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageDashboardCreation";
import VALoanSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/VALoanSupport";
import AssignmentOfMortgage from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/AssignmentOfMortgage";
import FHALoanSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/FHALoanSupport";
import ConventionalLoanProcessing from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ConventionalLoanProcessing";
import MortgageLoanBoarding from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageLoanBoarding";
import MortgageLoanSetup from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageLoanSetup";
import ResidentialMortgageLoanSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ResidentialMortgageLoanSupport";
import WholeLoanPurchaseReview from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/WholeLoanPurchaseReview";
import ConformingMortgageLoanSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/ConformingMortgageLoanSupport";
import FixedAndAdjustableMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/FixedAndAdjustableMortgageSupport";
import MLOClientSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MLOClientSupport";
import SecondMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/SecondMortgageSupport";
import RenovationMortgageSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/RenovationMortgageSupport";
import TrailingDocumentsSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/TrailingDocumentsSupport";
import EquipmentLeasingSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/EquipmentLeasingSupport";
import MortgageDefaultSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageDefaultSupport";
import MortgageComplianceSupport from "./pages/services/Mortgage-Services/LoanProcessingSupportServices/MortgageComplianceSupport";


{/* Underwriting Services */ }
import MortgageUnderwritingSupport from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageUnderwritingSupport";
import MortgageUnderwritingSupportCreditUnion from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageUnderwritingSupportCreditUnion";
import MortgageOriginationUnderwriting from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageOriginationUnderwriting";
import MortgageUnderwritingSupportLenders from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageUnderwritingSupportLenders";
import BorrowerSolicitationSupport from "./pages/services/Mortgage-Services/UnderwritingServices/BorrowerSolicitationSupport";
import MortgageLoanModificationAssistance from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageLoanModificationAssistance";
import MortgageUnderwritingQC from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageUnderwritingQC";
import ModificationUnderwritingSupport from "./pages/services/Mortgage-Services/UnderwritingServices/ModificationUnderwritingSupport";
import ForeclosureAssistanceServices from "./pages/services/Mortgage-Services/UnderwritingServices/ForeclosureAssistanceServices";
import MortgageAppraisalUnderwriting from "./pages/services/Mortgage-Services/UnderwritingServices/MortgageAppraisalUnderwriting";
import LossMitigationAssistance from "./pages/services/Mortgage-Services/UnderwritingServices/LossMitigationAssistance";
import ShortSaleSupportServices from "./pages/services/Mortgage-Services/UnderwritingServices/ShortSaleSupportServices";
import SigningSupportServices from "./pages/services/Mortgage-Services/UnderwritingServices/SigningSupportServices";

{/* Mortgage Closing Services */ }
import MortgageClosingSupportServices from "./pages/services/Mortgage-Services/ClosingServices/MortgageClosingSupportServices";
import MortgageLenderSupportServices from "./pages/services/Mortgage-Services/ClosingServices/MortgageLenderSupportServices";
import PrePostClosingComplianceServices from "./pages/services/Mortgage-Services/ClosingServices/PrePostClosingComplianceServices";
import PostCloseQCSupportServices from "./pages/services/Mortgage-Services/ClosingServices/PostCloseQCSupportServices";
import MortgageCreditUnionSupport from "./pages/services/Mortgage-Services/ClosingServices/MortgageCreditUnionSupport";
import MortgageDisclosurePreparation from "./pages/services/Mortgage-Services/ClosingServices/MortgageDisclosurePreparation";
import PreClosingQCSupportServices from "./pages/services/Mortgage-Services/ClosingServices/PreClosingQCSupportServices";
import MortgagePreClosingSupportServices from "./pages/services/Mortgage-Services/ClosingServices/MortgagePreClosingSupportServices";
import MortgagePostClosingSupportServices from "./pages/services/Mortgage-Services/ClosingServices/MortgagePostClosingSupportServices";

{/* Title Support */ }
import MortgageTitleSupportServices from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleSupportServices";
import MortgageTitleSupportServicesCompanies from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleSupportServicesCompanies";
import MortgageTitleCommitmentPreparation from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleCommitmentPreparation";
import MortgageTitleSupportForLenders from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleSupportForLenders";
import MortgageTitleInsuranceProcessing from "./pages/services/Mortgage-Services/TitleSupport/MortgageTitleInsuranceProcessing";

{/* Appraisal Support */ }
import MortgageAppraisalSupport from "./pages/services/Mortgage-Services/AppraisalSupport/MortgageAppraisalSupport";
import MortgageAppraisalSupportForCompanies from "./pages/services/Mortgage-Services/AppraisalSupport/MortgageAppraisalSupportForCompanies";
import RealEstateAppraisalDataEntrySupport from "./pages/services/Mortgage-Services/AppraisalSupport/RealEstateAppraisalDataEntrySupport";
import MortgageAppraisalReviewSupport from "./pages/services/Mortgage-Services/AppraisalSupport/MortgageAppraisalReviewSupport";
import MortgageValuationSupport from "./pages/services/Mortgage-Services/AppraisalSupport/MortgageValuationSupport";


{/* Digital Marketing */ }
import DigitalMarketingServicesForMortgage from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForMortgage";
import DigitalMarketingServicesForBrokers from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForBrokers";
import DigitalMarketingServicesForCreditUnions from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForCreditUnions";
import DigitalMarketingServicesForBanks from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForBanks";
import DigitalMarketingServicesForLenders from "./pages/services/Mortgage-Services/Digital Marketing/DigitalMarketingServicesForLenders";


{/* REO Support */ }
import REOSupport from "./pages/services/Mortgage-Services/REOSupport/REOSupport";
import REOReimbursementServices from "./pages/services/Mortgage-Services/REOSupport/REOReimbursementServices";
import REOListingSupportServices from "./pages/services/Mortgage-Services/REOSupport/REOListingSupportServices";
import RealEstateTitleSupport from "./pages/services/Mortgage-Services/REOSupport/RealEstateTitleSupport";
import LeaseAbstactionSupportServices from "./pages/services/Mortgage-Services/REOSupport/LeaseAbstactionSupportServices";

{/* Mortgage Loan */ }
import MortgageLoanServicing from "./pages/services/Mortgage-Services/MortgageLoan/MortgageLoanServicing";


{/* SoftwareDevelopment */ }
{/* custom Software */ }
import CustomSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/CustomSoftwareDevelopment";
import EmbeddedSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/EmbeddedSoftwareDevelopment";
import AlgorithmAnalysisDesign from "./pages/services/SoftwareDevelopment/CustomSoftware/AlgorithmAnalysisDesign";
import HighFidelityDesign from "./pages/services/SoftwareDevelopment/CustomSoftware/HighFidelityDesign";
import OTTAppDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/OTTAppDevelopment";
import RestAPIDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/RestAPIDevelopment";
import InteractiveKioskSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/InteractiveKioskSoftwareDevelopment";
import FirmwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/FirmwareDevelopment";
import LMSDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/LMSDevelopmentServices";
import IoTAnalyticsDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/IoTAnalyticsDevelopment";
import DeviceDriversDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/DeviceDriversDevelopment";
import MVPDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/MVPDevelopment";
import AndroidTVAppDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/AndroidTVAppDevelopment";
import SitecoreDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/SitecoreDevelopment";
import SoftwareModernization from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareModernization";
import BespokeSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/BespokeSoftwareDevelopment";
import CustomTemplateDesign from "./pages/services/SoftwareDevelopment/CustomSoftware/CustomTemplateDesign";
import BSPDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/BSPDevelopment";
import ChromecastAppDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/ChromecastAppDevelopment";
import SoftwareRequirementAnalysis from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareRequirementAnalysis";
import HMIDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/HMIDevelopment";
import ElixirDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/ElixirDevelopment";
import SoftwareArchitectureDesign from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareArchitectureDesign";
import CISasService from "./pages/services/SoftwareDevelopment/CustomSoftware/CISasService";
import EthereumDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/EthereumDevelopment";
import IoTasAService from "./pages/services/SoftwareDevelopment/CustomSoftware/IoTasAService";
import FileMakerDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/FileMakerDevelopment";
import FullStackDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/FullStackDevelopment";
import SoftwareProductDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareProductDevelopment";
import MachineLearningConsulting from "./pages/services/SoftwareDevelopment/CustomSoftware/MachineLearningConsulting";
import IeoDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/IeoDevelopmentServices";
import SoftwareProgramming from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareProgramming";
import IotAppDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/IotAppDevelopment";
import InteractivePrototypeServices from "./pages/services/SoftwareDevelopment/CustomSoftware/InteractivePrototypeServices";
import DesktopApplicationDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/DesktopApplicationDevelopment";
import NopcommerceDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/NopcommerceDevelopment";
import LegacyApplicationModernization from "./pages/services/SoftwareDevelopment/CustomSoftware/LegacyApplicationModernization";
import AgileSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/AgileSoftwareDevelopment";
import NearshoreSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/NearshoreSoftwareDevelopment";
import LiferayDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/LiferayDevelopment";
import GameDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/GameDevelopmentServices";
import SoftwareRndServices from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareRndServices";
import MatlabDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/MatlabDevelopmentServices";
import SoftwareMaintenanceServices from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareMaintenanceServices";
import OffshoreSoftwareDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/OffshoreSoftwareDevelopment";
import PocDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/PocDevelopment";
import ChatbotDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/ChatbotDevelopment";
import CoreModernizationServices from "./pages/services/SoftwareDevelopment/CustomSoftware/CoreModernizationServices";
import StoDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/StoDevelopmentServices";
import ProductManagementServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ProductManagementServices";
import PaymentGatewayIntegrationServices from "./pages/services/SoftwareDevelopment/CustomSoftware/PaymentGatewayIntegrationServices";
import ApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ApplicationDevelopmentServices";
import ApplicationLifecycleManagementServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ApplicationLifecycleManagementServices";
import NFTMarketplaceDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/NFTMarketplaceDevelopmentServices";
import RecognitionSoftwareDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/RecognitionSoftwareDevelopmentServices";
import DigitalInteractiveServices from "./pages/services/SoftwareDevelopment/CustomSoftware/DigitalInteractiveServices";
import SoftwareProductEngineering from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareProductEngineering";
import FraudDetectionSoftwareDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/FraudDetectionSoftwareDevelopmentServices";
import ApplicationReengineeringServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ApplicationReengineeringServices";
import VRPrototypingServices from "./pages/services/SoftwareDevelopment/CustomSoftware/VRPrototypingServices";
import BusinessApplicationDevelopment from "./pages/services/SoftwareDevelopment/CustomSoftware/BusinessApplicationDevelopment";
import ICODevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/ICODevelopmentServices";
import SoftwareDevelopmentForStartups from "./pages/services/SoftwareDevelopment/CustomSoftware/SoftwareDevelopmentForStartups";
import FintechSoftwareDevelopmentServices from "./pages/services/SoftwareDevelopment/CustomSoftware/FintechSoftwareDevelopmentServices";

{/* Mobile App */ }
import AppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/AppDevelopmentServices";
import AndroidAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/AndroidAppDevelopmentServices";
import XamarinAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/XamarinAppDevelopmentServices";
import FintechAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/FintechAppDevelopmentServices";
import ReactNativeDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/ReactNativeDevelopmentServices";
import J2MEAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/J2MEAppDevelopmentServices";
import RapidApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/RapidApplicationDevelopmentServices";
import IOSAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/IOSAppDevelopmentServices";
import MobileCommerceDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/MobileCommerceDevelopmentServices";
import KotlinAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/KotlinAppDevelopmentServices";
import IosAppMaintenanceServices from "./pages/services/SoftwareDevelopment/MobileApp/IosAppMaintenanceServices";
import ArabicAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/ArabicAppDevelopmentServices";
import XcodeAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/XcodeAppDevelopmentServices";
import WearableAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/WearableAppDevelopmentServices";
import IpadAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/IpadAppDevelopmentServices";
import TitaniumAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/TitaniumAppDevelopmentServices";
import HoloLensAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/HoloLensAppDevelopmentServices";
import NativeAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/NativeAppDevelopmentServices";
import Html5MobileAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/Html5MobileAppDevelopmentServices";
import IPhoneAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/IPhoneAppDevelopmentServices";
import SwiftAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/SwiftAppDevelopmentServices";
import AppleWatchAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/AppleWatchAppDevelopmentServices";
import JQueryAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/JQueryAppDevelopmentServices";
import PhoneGapAppDevelopmentServices from "./pages/services/SoftwareDevelopment/MobileApp/PhoneGapAppDevelopmentServices";
import OnDemandServicesAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/OnDemandServicesAppDevelopment";
import MobileAppDesignServices from "./pages/services/SoftwareDevelopment/MobileApp/MobileAppDesignServices";
import IBeaconAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/IBeaconAppDevelopment";
import DatingAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/DatingAppDevelopment";
import HybridAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/HybridAppDevelopment";
import FlutterAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/FlutterAppDevelopment";
import AndroidAppMaintenance from "./pages/services/SoftwareDevelopment/MobileApp/AndroidAppMaintenance";
import IonicAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/IonicAppDevelopment";
import CrossPlatformAppDevelopment from "./pages/services/SoftwareDevelopment/MobileApp/CrossPlatformAppDevelopment";


{/* ApplicationServices */ }
import ApplicationServices from "./pages/services/SoftwareDevelopment/Application/ApplicationServices";
import ADACompliance from "./pages/services/SoftwareDevelopment/Application/ADACompliance";
import HederaDevelopment from "./pages/services/SoftwareDevelopment/Application/HederaDevelopment";
import OdooDevelopment from "./pages/services/SoftwareDevelopment/Application/OdooDevelopment";
import APIDevelopment from "./pages/services/SoftwareDevelopment/Application/APIDevelopment";
import HyperledgerDevelopment from "./pages/services/SoftwareDevelopment/Application/HyperledgerDevelopment";
import PimcoreDevelopment from "./pages/services/SoftwareDevelopment/Application/PimcoreDevelopment";
import APIManagement from "./pages/services/SoftwareDevelopment/Application/APIManagement";
import KonyDevelopment from "./pages/services/SoftwareDevelopment/Application/KonyDevelopment";
import PythonDevelopment from "./pages/services/SoftwareDevelopment/Application/PythonDevelopment";
import ApplicationModernization from "./pages/services/SoftwareDevelopment/Application/ApplicationModernization";
import LAMPDevelopment from "./pages/services/SoftwareDevelopment/Application/LAMPDevelopment";
import SvelteDevelopment from "./pages/services/SoftwareDevelopment/Application/SvelteDevelopment";
import ARGameDevelopment from "./pages/services/SoftwareDevelopment/Application/ARGameDevelopment";
import LaravelDevelopment from "./pages/services/SoftwareDevelopment/Application/LaravelDevelopment";
import APIIntegration from "./pages/services/SoftwareDevelopment/Application/APIIntegration";
import DAppsDevelopment from "./pages/services/SoftwareDevelopment/Application/DAppsDevelopment";
import LinuxDevelopment from "./pages/services/SoftwareDevelopment/Application/LinuxDevelopment";
import UnityDevelopment from "./pages/services/SoftwareDevelopment/Application/UnityDevelopment";
import DartDevelopment from "./pages/services/SoftwareDevelopment/Application/DartDevelopment";
import MotionUIDevelopment from "./pages/services/SoftwareDevelopment/Application/MotionUIDevelopment";
import ApplicationSupport from "./pages/services/SoftwareDevelopment/Application/ApplicationSupport";
import GraphQLDevelopment from "./pages/services/SoftwareDevelopment/Application/GraphQLDevelopment";
import ObjectiveCDevelopment from "./pages/services/SoftwareDevelopment/Application/ObjectiveCDevelopment";


{/* Web Development Services */ }
import WebDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/WebDevelopment";
import ScalaDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/ScalaDevelopment";
import LandingPageDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/LandingPageDesign";
import WordPressMigration from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressMigration";
import PHPDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/PHPDevelopment";
import PWA from "./pages/services/SoftwareDevelopment/WebDevelopment/PWA";
import WordPressPlugin from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressPlugin";
import RubyOnRails from "./pages/services/SoftwareDevelopment/WebDevelopment/RubyOnRails";
import WebApplication from "./pages/services/SoftwareDevelopment/WebDevelopment/WebApplication";
import WordPressSupport from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressSupport";
import JoomlaDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/JoomlaDevelopment";
import BootstrapDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/BootstrapDevelopment";
import WordPressTheme from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressTheme";
import ResponsiveWebDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/ResponsiveWebDesign";
import WordPressDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/WordPressDevelopment";
import DjangoDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/DjangoDevelopment";
import UiUxDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/UiUxDevelopment";
import DotNetNukeDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/DotNetNukeDevelopment";
import ZendDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/ZendDevelopment";
import WebsiteMaintenance from "./pages/services/SoftwareDevelopment/WebDevelopment/WebsiteMaintenance";
import FlaskDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/FlaskDevelopment";
import AspNetDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/AspNetDevelopment";
import WebsiteMigration from "./pages/services/SoftwareDevelopment/WebDevelopment/WebsiteMigration";
import GatsbyDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/GatsbyDevelopment";
import WebSocketDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/WebSocketDevelopment";
import WireframeDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/WireframeDesign";
import GolangDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/GolangDevelopment";
import OpenCartDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/OpenCartDevelopment";
import KenticoDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/KenticoDevelopment";
import DrupalDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/DrupalDevelopment";
import MobileWebsiteDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/MobileWebsiteDesign";
import RiaDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/RiaDevelopment";
import SpaDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/SpaDevelopment";
import ParallaxDesign from "./pages/services/SoftwareDevelopment/WebDevelopment/ParallaxDesign";
import SitefinityDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/SitefinityDevelopment";
import EcommerceDevelopment from "./pages/services/SoftwareDevelopment/WebDevelopment/EcommerceDevelopment";

{/* Service Now */ }
import ServiceNowServices from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowServices";
import ServiceNowConsulting from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowConsulting";
import HrServiceNow from "./pages/services/SoftwareDevelopment/ServiceNow/HrServiceNow";
import ServiceNowChange from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowChange";
import ServiceNowITOM from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowITOM";
import ServiceNowResourceManagement from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowResourceManagement";
import ServiceNowAppDevelopment from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowAppDevelopment";
import ServiceNowCSM from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowCSM";
import ServiceNowMigration from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowMigration";
import ServiceNowITBM from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowITBM";
import ServiceNowIntegration from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowIntegration";
import ServiceNowSecOps from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowSecOps";
import ServiceNowITSM from "./pages/services/SoftwareDevelopment/ServiceNow/ServiceNowITSM";


{/* Azure */ }
import AzureConsulting from "./pages/services/SoftwareDevelopment/Azure/AzureConsulting";
import AzureManagedServices from "./pages/services/SoftwareDevelopment/Azure/AzureManagedServices";
import AzureIntegration from "./pages/services/SoftwareDevelopment/Azure/AzureIntegration";
import AzureCloudConsulting from "./pages/services/SoftwareDevelopment/Azure/AzureCloudConsulting";
import AzureMigration from "./pages/services/SoftwareDevelopment/Azure/AzureMigration";
import AzureApplicationDevelopment from "./pages/services/SoftwareDevelopment/Azure/AzureApplicationDevelopment";
import AzureSynapseAnalytics from "./pages/services/SoftwareDevelopment/Azure/AzureSynapseAnalytics";


{/* Microsoft Services */ }
import MicrosoftConsulting from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftConsulting";
import MicrosoftPowerAutomate from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftPowerAutomate";
import SharePointDevelopment from "./pages/services/SoftwareDevelopment/MicrosoftServices/SharePointDevelopment";
import MicrosoftSharePoint from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftSharePoint";
import PowerAppsConsulting from "./pages/services/SoftwareDevelopment/MicrosoftServices/PowerAppsConsulting";
import PowerBIServices from "./pages/services/SoftwareDevelopment/MicrosoftServices/PowerBIServices";
import MicrosoftDynamics from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftDynamics";
import MicrosoftDynamicsCustomization from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftDynamicsCustomization";
import MicrosoftOffice365 from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftOffice365";
import MicrosoftStackDevelopment from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftStackDevelopment";
import MicrosoftTeamsConsulting from "./pages/services/SoftwareDevelopment/MicrosoftServices/MicrosoftTeamsConsulting";

{/* E-Commerce */ }
import ECommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/ECommerceDevelopment";
import ThreeDCartDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/3DCartDevelopment";
import PrestashopDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/PrestashopDevelopment";
import VirtuemartDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/VirtuemartDevelopment";
import BigCommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/BigCommerceDevelopment";
import ShopifyDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/ShopifyDevelopment";
import WooCommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/WooCommerceDevelopment";
import CsCartDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/CsCartDevelopment";
import SpreeCommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/SpreeCommerceDevelopment";
import OsCommerceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/OsCommerceDevelopment";
import SquarespaceDevelopment from "./pages/services/SoftwareDevelopment/E-Commerce/SquarespaceDevelopment";

{/* Cloud Counsulting */ }
import CloudConsulting from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudConsulting";
import HybridCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/HybridCloudServices";
import MultiCloudManagement from "./pages/services/SoftwareDevelopment/CloudConsulting/MultiCloudManagement";
import MultiCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/MultiCloudServices";
import CloudBusinessTransformation from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudBusinessTransformation";
import AlibabaCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AlibabaCloudServices";
import IbmCloudManagedServices from "./pages/services/SoftwareDevelopment/CloudConsulting/IbmCloudManagedServices";
import CloudSecurityServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudSecurityServices";
import CloudIntegrationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudIntegrationServices";
import ManagedApplicationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/ManagedApplicationServices";
import AlexaSkillDevelopmentServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AlexaSkillDevelopmentServices";
import CloudMonitoringServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudMonitoringServices";
import BSSTransformationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/BSSTransformationServices";
import AWSApplicationIntegrationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AWSApplicationIntegrationServices";
import CloudApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudApplicationDevelopmentServices";
import ContainerizationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/ContainerizationServices";
import CloudComputingApplicationDevelopmentServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudComputingApplicationDevelopmentServices";
import Office365SetupAndMigrationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/Office365SetupAndMigrationServices";
import AmazonRedshiftServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AmazonRedshiftServices";
import DataWarehouseServices from "./pages/services/SoftwareDevelopment/CloudConsulting/DataWarehouseServices";
import CloudMigrationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudMigrationServices";
import CloudOptimizationServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudOptimizationServices";
import AdobeCreativeCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AdobeCreativeCloudServices";
import DigitalWorkplaceServices from "./pages/services/SoftwareDevelopment/CloudConsulting/DigitalWorkplaceServices";
import CloudNativeAppDevelopmentServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudNativeAppDevelopmentServices";
import OracleCloudServices from "./pages/services/SoftwareDevelopment/CloudConsulting/OracleCloudServices";
import AmazonWebServices from "./pages/services/SoftwareDevelopment/CloudConsulting/AmazonWebServices";
import CloudEnablementServices from "./pages/services/SoftwareDevelopment/CloudConsulting/CloudEnablementServices";
import SnowflakeDataWarehouseServices from "./pages/services/SoftwareDevelopment/CloudConsulting/SnowflakeDataWarehouseServices";
import InfrastructureAsAService from "./pages/services/SoftwareDevelopment/CloudConsulting/InfrastructureAsAService";
import ToktivBusinessVoip from "./pages/services/SoftwareDevelopment/CloudConsulting/ToktivBusinessVoip";
import HybridInfrastructureManagedServices from "./pages/services/SoftwareDevelopment/CloudConsulting/HybridInfrastructureManagedServices";
import PlatformAsAService from "./pages/services/SoftwareDevelopment/CloudConsulting/PlatformAsAService";
import VirtualDesktopInfrastructure from "./pages/services/SoftwareDevelopment/CloudConsulting/VirtualDesktopInfrastructure";

{/* IT Staffing */ }
import ITStaffingServices from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingServices";
import HireAngularDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireAngularDevelopers";
import ITStaffingForWordPress from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingForWordPress";
import HireMaximoDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireMaximoDevelopers";
import HireNodeJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireNodeJSDevelopers";
import ITStaffingForDrupal from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingForDrupal";
import HireSpringBootDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireSpringBootDevelopers";
import HireOpenCartDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireOpenCartDevelopers";
import ITStaffingForWebDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingForWebDevelopers";
import HireElixirDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireElixirDevelopers";
import ITStaffingForLAMP from "./pages/services/SoftwareDevelopment/ITStaffing/ITStaffingForLAMP";
import DedicatedPHPDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/DedicatedPHPDevelopers";
import HireKonyAppDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/HireKonyAppDevelopers";
import JavaStaffing from "./pages/services/SoftwareDevelopment/ITStaffing/JavaStaffing";
import MagentoDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/MagentoDevelopers";
import ExpressJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/ExpressJSDevelopers";
import MicrosoftStaffing from "./pages/services/SoftwareDevelopment/ITStaffing/MicrosoftStaffing";
import ARDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/ARDevelopers";
import GolangDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/GolangDevelopers";
import DigitalMarketingStaffing from "./pages/services/SoftwareDevelopment/ITStaffing/DigitalMarketingStaffing";
import PythonDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/PythonDevelopers";
import SvelteJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/SvelteJSDevelopers";
import AndroidDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/AndroidDevelopers";
import IosDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/IosDevelopers";
import NuxtJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/NuxtJSDevelopers";
import WebDesignStaffing from "./pages/services/SoftwareDevelopment/ITStaffing/WebDesignStaffing";
import IpadAppDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/IpadAppDevelopers";
import ReactJSDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/ReactJSDevelopers";
import MobileAppDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/MobileAppDevelopers";
import BlockchainDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/BlockchainDevelopers";
import FlutterDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/FlutterDevelopers";
import OracleDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/OracleDevelopers";
import SwiftDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/SwiftDevelopers";
import OracleDBA from "./pages/services/SoftwareDevelopment/ITStaffing/OracleDBA";
import IPhoneAppDevelopers from "./pages/services/SoftwareDevelopment/ITStaffing/IPhoneAppDevelopers";


{/* Software Testing */ }
import SoftwareTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoftwareTesting";
import RegressionTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/RegressionTestingServices";
import SoftwareTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoftwareTestingServices";
import NetworkTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/NetworkTestingServices";
import TestingKnowledgeManagementServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/TestingKnowledgeManagementServices";
import AcceptanceTestDrivenDevelopmentServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/AcceptanceTestDrivenDevelopmentServices";
import ContinuousIntegrationServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ContinuousIntegrationServices";
import ReliabilityTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ReliabilityTestingServices";
import IndependentTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/IndependentTestingServices";
import ManagedTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ManagedTestingServices";
import CompatibilityTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/CompatibilityTestingServices";
import BetaTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/BetaTestingServices";
import StressTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/StressTestingServices";
import MainframeTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/MainframeTestingServices";
import ManagedCrowdTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ManagedCrowdTestingServices";
import DevOpsTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/DevOpsTestingServices";
import ComplianceTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/ComplianceTestingServices";
import NetworkPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/NetworkPenetrationTesting";
import SoaWebServicesTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoaWebServicesTesting";
import LocalizationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/LocalizationTesting";
import SoaTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoaTesting";
import TestAutomationServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/TestAutomationServices";
import LoadTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/LoadTesting";
import SeleniumTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SeleniumTesting";
import TypesOfSoftwareTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/TypesOfSoftwareTesting";
import VolumeTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/VolumeTesting";
import RobotFrameworkTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/RobotFrameworkTesting";
import IndustryTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/IndustryTestingServices";
import RecoveryTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/RecoveryTesting";
import BillingTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/BillingTesting";
import ECommerceTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ECommerceTesting";
import InstallationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/InstallationTesting";
import EDITesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/EDITesting";
import EmbeddedTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/EmbeddedTesting";
import ETLTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ETLTesting";
import UsabilityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/UsabilityTesting";
import MobileApplicationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/MobileApplicationTesting";
import SoakTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoakTesting";
import OutcomeBasedTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/OutcomeBasedTesting";
import ComputerSystemValidation from "./pages/services/SoftwareDevelopment/SoftwareTesting/ComputerSystemValidation";
import PerformanceTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/PerformanceTesting";
import HappyPathTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/HappyPathTesting";
import DesktopApplicationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/DesktopApplicationTesting";
import ScalabilityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ScalabilityTesting";
import APITesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/APITesting";
import MobileTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/MobileTesting";
import SAPTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SAPTesting";
import WebsiteTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/WebsiteTesting";
import ExternalPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ExternalPenetrationTesting";
import BackwardCompatibilityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/BackwardCompatibilityTesting";
import CrmTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/CrmTestingServices";
import InternalNetworkPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/InternalNetworkPenetrationTesting";
import BrowserCompatibilityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/BrowserCompatibilityTesting";
import SmokeTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/SmokeTestingServices";
import FirewallPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/FirewallPenetrationTesting";
import RiskManagementTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/RiskManagementTesting";
import SystemTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/SystemTestingServices";
import PenetrationTestingServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/PenetrationTestingServices";
import CyberSecurityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/CyberSecurityTesting";
import WebServicesTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/WebServicesTesting";
import TestEnvironmentManagement from "./pages/services/SoftwareDevelopment/SoftwareTesting/TestEnvironmentManagement";
import GUITesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/GUITesting";
import CloudTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/CloudTesting";
import TestProcessImprovement from "./pages/services/SoftwareDevelopment/SoftwareTesting/TestProcessImprovement";
import GameTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/GameTesting";
import UnitTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/UnitTesting";
import SecurityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SecurityTesting";
import VAPTServices from "./pages/services/SoftwareDevelopment/SoftwareTesting/VAPTServices";
import IntegrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/IntegrationTesting";
import GDPRCompliance from "./pages/services/SoftwareDevelopment/SoftwareTesting/GDPRCompliance";
import SocialEngineering from "./pages/services/SoftwareDevelopment/SoftwareTesting/SocialEngineering";
import SanityTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/SanityTesting";
import SoftwareTestingProjects from "./pages/services/SoftwareDevelopment/SoftwareTesting/SoftwareTestingProjects";
import WirelessPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/WirelessPenetrationTesting";
import ExploratoryTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/ExploratoryTesting";
import ManagedQualityAssurance from "./pages/services/SoftwareDevelopment/SoftwareTesting/ManagedQualityAssurance";
import WebAppPenetrationTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/WebAppPenetrationTesting";
import UserAcceptanceTesting from "./pages/services/SoftwareDevelopment/SoftwareTesting/UserAcceptanceTesting";


{/* IMS */}
import ITInfrastructureManagement from "./pages/services/SoftwareDevelopment/IMS/ITInfrastructureManagement";
import CybersecurityCountermeasures from "./pages/services/SoftwareDevelopment/IMS/CybersecurityCountermeasures";
import ManagedVirtualizationServices from "./pages/services/SoftwareDevelopment/IMS/ManagedVirtualizationServices";
import ApplicationPerformanceMonitoring from "./pages/services/SoftwareDevelopment/IMS/ApplicationPerformanceMonitoring";
import ITRiskAndSecurity from "./pages/services/SoftwareDevelopment/IMS/ITRiskAndSecurity";
import ManagedStorageServices from "./pages/services/SoftwareDevelopment/IMS/ManagedStorageServices";
import SecurityRiskAssessment from "./pages/services/SoftwareDevelopment/IMS/SecurityRiskAssessment";
import CybersecurityDueDiligence from "./pages/services/SoftwareDevelopment/IMS/CybersecurityDueDiligence";
import ManagedBackupServices from "./pages/services/SoftwareDevelopment/IMS/ManagedBackupServices";
import VulnerabilityManagement from "./pages/services/SoftwareDevelopment/IMS/VulnerabilityManagement";
import CyberSecurityAssessment from "./pages/services/SoftwareDevelopment/IMS/CyberSecurityAssessment";
import ITAuditServices from "./pages/services/SoftwareDevelopment/IMS/ITAuditServices";



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
              <Route path="/services/healthcare-BPO-Service" element={<HealthcareBPO />} />
              <Route path="/services/MortgageService" element={<MortgageService />} />
              <Route path="/services/ITServices" element={<ITServices />} />
              <Route path="/services/legal-corporate-compliance" element={<LegalCorporateCompliance />} />
              <Route path="/services/data-ai-analytics-research" element={<DataAIAnalyticsResearch />} />
              <Route path="/services/marketing-sales-creative-media" element={<MarketingSalesCreativeMedia />} />
              <Route path="/services/customer-experience-communications-telephony" element={<CustomerExperienceCommunicationsTelephony />} />
              <Route path="/services/operations-procurement-supplychain-manufacturing" element={<OperationsProcurementSupplychainManufacturing />} />
              <Route path="/services/hr-training-admin-specialized-services" element={<HRTrainingAdminSpecializedServices />} />
              <Route path="/services/global-outsourcing-offshoring" element={<GlobalOutsourcingOffshoring />} />


              {/* services */}
              {/* finance-accounting-finops */}
              {/* Bookkeeping service */}
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services" element={<BookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/Real-EstateBookkeeping-Services" element={<RealEstateBookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/Accounting-Setup-Services" element={<NimbleAcuityAccountingServices />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/CPA-Bookkeeping-Services" element={<CPABookkeepingServices />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/SmallBusiness-Bookkeeping" element={<SmallBusinessBookkeeping />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/QuickBooks-Bookkeeping" element={<QuickBooksBookkeeping />} />
              <Route path="/services/finance-accounting-finops/Bookkeeping-Services/Virtual-Bookkeeping" element={<VirtualBookkeeping />} />

              {/* Accounting service */}
              <Route path="/services/finance-accounting-finops/accounting-service/Accounting-Services" element={<AccountingServices />} />
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
              <Route path="/services/finance-accounting-finops/accounting-service/Order-Processing-Services" element={<OrderProcessingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/XBRL-Filing-Services" element={<XBRLFilingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Business-Recovery-Services" element={<BusinessRecoveryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/ManualJournalEntry-Services" element={<ManualJournalEntryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Corporate-Secretarial-Services" element={<CorporateSecretarialServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Transaction-Advisory-Services" element={<TransactionAdvisoryServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Invoice-Processing-Services" element={<InvoiceProcessingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/RealEstate-Financial-Reporting-services" element={<RealEstateFinancialReporting />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Trucking-Accounting-Services" element={<TruckingAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Virtual-Accounting-Services" element={<VirtualAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Xero-Accounting-Services" element={<XeroAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Global-Accounting-Services" element={<GlobalAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/SpendAnalysis-Services" element={<SpendAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/GeneralLedger-Accounting-Services" element={<GeneralLedgerAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Excel-Accounting-Services" element={<ExcelAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Banking-Financial-Analysis-Services" element={<BankingFinancialAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/LIBORTransition-Services" element={<LIBORTransitionServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/YearEnd-Accounting-Services" element={<YearEndAccountingServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Invoice-Factoring-Services" element={<InvoiceFactoringServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/FixedAsset-Reconciliation-Services" element={<FixedAssetReconciliationServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Cloud-Financial-Management-Services" element={<CloudFinancialManagementServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/VirtualCFO-Services" element={<VirtualCFO_Services />} />
              <Route path="/services/finance-accounting-finops/accounting-service/BAS-Services" element={<BAS_Services />} />
              <Route path="/services/finance-accounting-finops/accounting-service/FractionalCFO-Services" element={<FractionalCFO_Services />} />
              <Route path="/services/finance-accounting-finops/accounting-service/QuickBooks-CleanUp-Services" element={<QuickBooksCleanUpServices />} />
              <Route path="/services/finance-accounting-finops/accounting-service/Transaction-Support-Services" element={<TransactionSupportServices />} />

              {/* Accounts Payable */}
              <Route path="/services/finance-accounting-finops/Accounts-Payable/Accounts-Payable-Services" element={<AccountsPayableServices />} />

              {/* Accounts Receivable */}
              <Route path="/services/finance-accounting-finops/Accounts-Receivable-Services" element={<AccountsReceivableServices />} />
              <Route path="/services/finance-accounting-finops/Accounts-Receivable-Services/RealEstate-Accounts-Receivable" element={<RealEstateAccountsReceivable />} />
              <Route path="/services/finance-accounting-finops/Accounts-Receivable-Services/Accounts-Receivable-Factoring" element={<AccountsReceivableFactoring />} />
              <Route path="/services/finance-accounting-finops/Accounts-Receivable-Services/ARAging-Reports-Services" element={<ARAgingReports />} />

              {/* Tax Prepareation */}
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services" element={<TaxPreparationServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/TaxRegulatory-Services" element={<TaxRegulatoryServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/TaxProcessing-Services" element={<TaxProcessingServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/TaxConsulting-Services" element={<TaxConsultingServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/ProSeriesTax-Processing-Services" element={<ProSeriesTaxProcessing />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/SalesTax-Services" element={<SalesTaxServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/BusinessTax-Services" element={<BusinessTaxServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/HRBlockTaxCut-Processing-service" element={<HRBlockTaxCutProcessing />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/FederalTax-Services" element={<FederalTaxServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/VATReturn-Services" element={<VATReturnServices />} />
              <Route path="/services/finance-accounting-finops/Tax-Preparation-Services/VirtualTax-Preparation-Services" element={<VirtualTaxPreparationServices />} />

              {/* CPA Service */}
              <Route path="/services/finance-accounting-finops/CPA-Service" element={<CPAServicePage />} />
              <Route path="/services/finance-accounting-finops/CPA-Service/SmallBusiness-CPA-service" element={<SmallBusinessCPA />} />
              <Route path="/services/finance-accounting-finops/CPA-Service/CPATax-Services" element={<CPATaxServices />} />
              <Route path="/services/finance-accounting-finops/CPA-Service/CPA-Payroll-Services" element={<CPAPayrollServices />} />
              <Route path="/services/finance-accounting-finops/CPA-Service/CPA-Accounting-Services" element={<CPAAccountingServices />} />

              {/* Financial Analysis */}
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services" element={<FinancialAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/DueDiligence-Services" element={<DueDiligenceServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Portfolio-Analysis-Services" element={<PortfolioAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/FinancialStatement-Audit-Services" element={<FinancialStatementAuditServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Treasury-Management-Services" element={<TreasuryManagementServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Regulatory-Compliance-Services" element={<RegulatoryComplianceServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Enterprise-Performance-Management" element={<EnterprisePerformanceManagement />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/Investment-Analysis-Services" element={<InvestmentAnalysisServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/BusinessForecasting-Services" element={<BusinessForecastingServices />} />
              <Route path="/services/finance-accounting-finops/Financial-Analysis-Services/BudgetingForecasting-Services" element={<BudgetingForecastingServices />} />


              {/* Payroll Services */}
              <Route path="/services/finance-accounting-finops/Payroll-Processing-Services" element={<PayrollProcessingServices />} />
              <Route path="/services/finance-accounting-finops/Payroll-Processing-Services/Payroll0Compliance-Services" element={<PayrollComplianceServices />} />
              <Route path="/services/finance-accounting-finops/Payroll-Processing-Services/Payroll-Data-Analytics-Services" element={<PayrollDataAnalyticsServices />} />
              <Route path="/services/finance-accounting-finops/Payroll-Processing-Services/Payroll-Administration-Services" element={<PayrollAdministrationServices />} />



              {/* Shenbagavel Start */}
              {/* Healthcare BPO */}
              {/* Medical Billing */}
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service" element={<MedicalBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PhysicianBilling-service" element={<PhysicianBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/FQHCBilling-service" element={<FQHCBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Gynecology-Billing-service" element={<GynecologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Patient-Demographic-Entry-service" element={<PatientDemographicEntry />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Patient-AdviceLiaison-service" element={<PatientAdviceLiaison />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/FamilyPractice-Billing-service" element={<FamilyPracticeBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PhysicalTherapy-Billing-service" element={<PhysicalTherapyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/ManagedCare-Contracting-service" element={<ManagedCareContracting />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Internal-Medicine-Billing-service" element={<InternalMedicineBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/UrgentCare-Billing-service" element={<UrgentCareBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Intelligent-Billing-Software-service" element={<IntelligentBillingSoftware />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/plastic-Surgery-Billing-service" element={<SurgeryBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/SleepMedicine-Billing-service" element={<SleepMedicineBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Medical-Record-Abstraction-service" element={<MedicalRecordAbstraction />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Otolaryngology-Billing-service" element={<OtolaryngologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/MedicalRecord-Indexing-service" element={<MedicalRecordIndexing />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Occupational-HealthBilling-service" element={<OccupationalHealthBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Physician-Credentialing-service" element={<PhysicianCredentialing />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Hospital-Billing-service" element={<HospitalBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/SurgeryCenter-Billing-service" element={<SurgeryCenterBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Hospice-Billing-service" element={<HospiceBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/UrologyBilling-service" element={<UrologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/EMSBilling-service" element={<EMSBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/ChiropracticBilling-service" element={<ChiropracticBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/DentalBilling-service" element={<DentalBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/DmeBilling-service" element={<DmeBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PathologyBilling-service" element={<PathologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/AnesthesiaBilling-service" element={<AnesthesiaBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/ASCBilling-service" element={<ASCBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PediatricBilling-service" element={<PediatricBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PainManagementBilling-service" element={<PainManagementBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/ChargeEntry-service" element={<ChargeEntry />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/AmbulanceBilling-service" element={<AmbulanceBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Gastroenterology-Billing-service" element={<GastroenterologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/EmergencyMedicineBilling-service" element={<EmergencyMedicineBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/RadiologyBilling-service" element={<RadiologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PodiatryBilling-service" element={<PodiatryBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/OrthopedicBilling-service" element={<OrthopedicBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/CardiologyBilling-service" element={<CardiologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/PersonalInjuryBilling-service" element={<PersonalInjuryBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/WorkersCompBilling-service" element={<WorkersCompBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/NeurologyBilling-service" element={<NeurologyBilling />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/CloudRecordsRetrieval-service" element={<CloudRecordsRetrieval />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/Medical-Document-Scanning-service" element={<MedicalDocumentScanning />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/HealthBilling-Solutions-service" element={<HealthBillingSolutions />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/BackOfficeSupport-service" element={<BackOfficeSupport />} />
              <Route path="/services/healthcare-BPO-Service/MedicalBilling-service/EHRChartBuilding-service" element={<EHRChartBuilding />} />

              {/* Medical coding */}
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service" element={<MedicalCoding />} />
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service/MedicalCoding-Audit-Service" element={<MedicalCodingAudit />} />
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service/CPTICD10Coding-Service" element={<CPTICD10Coding />} />
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service/HCCHcc-Coding-Service" element={<HCCHccCoding />} />
              <Route path="/services/healthcare-BPO-Service/Medical-coding-service/Medical-Coding-Analysis-Service" element={<MedicalCodingAnalysis />} />

              {/* Revenue Cycle Management */}
              <Route path="/services/healthcare-BPO-Service/RCM" element={<RevenueCycleManagement />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Healthcare-DueDiligence-Service" element={<HealthcareDueDiligence />} />
              <Route path="/services/healthcare-BPO-Service/RCM/PaymentPosting-Services" element={<PaymentPostingServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Patient-FinancialClearance-Service" element={<PatientFinancialClearance />} />
              <Route path="/services/healthcare-BPO-Service/RCM/MIPS-QualityReporting-Service" element={<MIPSQualityReporting />} />
              <Route path="/services/healthcare-BPO-Service/RCM/PPO-ClaimsRepricing-Service" element={<PPOClaimsRepricing />} />
              <Route path="/services/healthcare-BPO-Service/RCM/PLM-Service" element={<PLMServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/CaseManagement-Services" element={<CaseManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Revenue-Improvement-Services" element={<RevenueImprovementServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Healthcare-Collection-Services" element={<HealthcareCollectionServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/Medical-AR-Services" element={<MedicalARServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/HealthInsuranceRecovery-Service" element={<HealthInsuranceRecovery />} />
              <Route path="/services/healthcare-BPO-Service/RCM/MedicalClaimsProcessing-Service" element={<MedicalClaimsProcessing />} />
              <Route path="/services/healthcare-BPO-Service/RCM/ReceivableAnalysis-Service" element={<ReceivableAnalysis />} />
              <Route path="/services/healthcare-BPO-Service/RCM/AccountsReceivableConversion-Service" element={<AccountsReceivableConversion />} />
              <Route path="/services/healthcare-BPO-Service/RCM/MedicareReimbursement-Service" element={<MedicareReimbursementServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/AccountsReceivableFollowUp-Service" element={<AccountsReceivableFollowUp />} />
              <Route path="/services/healthcare-BPO-Service/RCM/PaymentAccuracy-Service" element={<PaymentAccuracyServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/MedicalClaimsEncounterProcessing-Service" element={<MedicalClaimsEncounterProcessing />} />
              <Route path="/services/healthcare-BPO-Service/RCM/ARCalling-Service" element={<ARCallingServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/HealthRiskAssessment-Services" element={<HealthRiskAssessmentServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/HealthcarePayer-Services" element={<HealthcarePayerServices />} />
              <Route path="/services/healthcare-BPO-Service/RCM/DenialManagement-Services" element={<DenialManagement />} />
              <Route path="/services/healthcare-BPO-Service/RCM/DentalRCM-Services" element={<DentalRCM />} />
              <Route path="/services/healthcare-BPO-Service/RCM/InsuranceEligibility-Services" element={<InsuranceEligibility />} />
              <Route path="/services/healthcare-BPO-Service/RCM/RevenueIntegrity-Services" element={<RevenueIntegrity />} />


              {/* Medical Transcription */}
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription" element={<MedicalTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/VirtualScribing-Service" element={<VirtualScribing />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/MedicalReports-Transcription" element={<MedicalReportsTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/InternalMedicine-Transcription" element={<InternalMedicineTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Genetics-Transcription" element={<GeneticsTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Cardiology-Transcription" element={<CardiologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/OphthalmologyTranscription" element={<PhysicalTherapyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/PhysicalTherapy-Transcription" element={<OphthalmologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/EMR-Transcription" element={<EMRTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Chiropractic-Transcription" element={<ChiropracticTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/DischargeSummary-Transcription" element={<DischargeSummaryTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Deaf-Transcription" element={<DeafTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Rehabilitation-Transcription" element={<RehabilitationTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/EmergencyRoom-Transcription" element={<EmergencyRoomTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Hospital-Transcription" element={<HospitalTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/VirtualMedicalScribe-Transcription" element={<VirtualMedicalScribe />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Hl7-Transcription" element={<Hl7Transcription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Oncology-Transcription" element={<OncologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/FollowUpNotes-Transcription" element={<FollowUpNotesTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Neurology-Transcription" element={<NeurologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/OrthopedicsTranscription" element={<OrthopedicsTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/HistoryPhysicalNotes-Transcription" element={<HistoryPhysicalNotes />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Psychiatry-Transcription" element={<PsychiatryTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Dermatology-Transcription" element={<DermatologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/BSLInterpreting-Transcription" element={<BSLInterpreting />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/OperativeReports-Transcription" element={<OperativeReportsTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Anesthesiology-Transcription" element={<AnesthesiologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/ProgressNotes-Transcription" element={<ProgressNotesTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Pathology-Transcription" element={<PathologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Urology-Transcription" element={<UrologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Surgery-Transcription" element={<SurgeryTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Radiology-Transcription" element={<RadiologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/Gastroenterology-Transcription" element={<GastroenterologyTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/ENT-Transcription" element={<ENTTranscription />} />
              <Route path="/services/healthcare-BPO-Service/MedicalTranscription/PainManagement-Transcription" element={<PainManagementTranscription />} />


              {/* Teleradiology Services */}
              <Route path="/services/healthcare-BPO-Service/Teleradiology" element={<Teleradiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/eRAD-PACS-System" element={<EradPacs />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/Emergency-Radiology" element={<EmergencyRadiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/StatReporting-Radiology" element={<StatReporting />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/RadiologyInformationSystem" element={<RadiologyInformationSystem />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/Preliminary-Teleradiology" element={<PreliminaryTeleradiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/MRIInterpretation-Radiology" element={<MRIInterpretation />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/Nighthawk-Teleradiology" element={<NighthawkTeleradiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/OnsiteTeleradiology" element={<OnsiteTeleradiology />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/BoneDensityScan" element={<BoneDensityScan />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/ImageProcessing" element={<ImageProcessing />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/NeurologyPETCT" element={<NeurologyPETCT />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/ThoracicImaging" element={<ThoracicImaging />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/MedicalImaging" element={<MedicalImaging />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/PETCTReporting" element={<PETCTReporting />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/AfterTeleradiology-Services" element={<AfterTeleradiologyServices />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/FinalTeleradiologyReads" element={<FinalTeleradiologyReads />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/CardiacPETCTReporting" element={<CardiacPETCTReporting />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/CTInterpretation" element={<CTInterpretation />} />
              <Route path="/services/healthcare-BPO-Service/Teleradiology/DentalXrayImaging" element={<DentalXrayImaging />} />

              {/*  EMR Services */}
              <Route path="/services/healthcare-BPO-Service/EMRServices" element={<EMRServices />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PediatricsEMRServices" element={<PediatricsEMRServices />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OphthalmologyEMRServices" element={<OphthalmologyEMRServices />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/InfectiousDiseaseEMR" element={<InfectiousDiseaseEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EndocrinologyEMR" element={<EndocrinologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PulmonaryEMR" element={<PulmonaryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/HouseCallEMR" element={<HouseCallEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EMRSoftwareDevelopment" element={<EMRSoftwareDevelopment />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/AllergyImmunologyEMR" element={<AllergyImmunologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/UrologyEMR" element={<UrologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/DermatologyEMR" element={<DermatologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PainManagementEMR" element={<PainManagementEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/MedicalRecordSummary" element={<MedicalRecordSummary />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/SleepMedicineEMR" element={<SleepMedicineEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/InternalMedicineEMR" element={<InternalMedicineEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OfficeAllyEHR" element={<OfficeAllyEHR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OncologyEMR" element={<OncologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/RehabilitativeEMR" element={<RehabilitativeEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/NephrologyEMR" element={<NephrologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/CardiologyEMR" element={<CardiologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/SpeechTherapyEMR" element={<SpeechTherapyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/AmbulatorySurgeryEMR" element={<AmbulatorySurgeryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PhysicalMedicineEMR" element={<PhysicalMedicineEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PrimaryCareEMR" element={<PrimaryCareEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EMRIntegration" element={<EMRIntegration />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OBGYNEMR" element={<OBGYNEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/RheumatologyEMR" element={<RheumatologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/VirtualEMR" element={<VirtualEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OrthopedicsEMR" element={<OrthopedicsEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PsychiatryEMR" element={<PsychiatryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/PrechartingServices" element={<PrechartingServices />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/OtolaryngologyEMR" element={<OtolaryngologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/BehavioralHealthEHR" element={<BehavioralHealthEHR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EMRDataMigration" element={<EMRDataMigration />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/UrgentCareEHR" element={<UrgentCareEHR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/VascularSurgeryEMR" element={<VascularSurgeryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/EMRDataEntry" element={<EMRDataEntry />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/GeneralSurgeryEMR" element={<GeneralSurgeryEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/GastroenterologyEMR" element={<GastroenterologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/NeurologyEMR" element={<NeurologyEMR />} />
              <Route path="/services/healthcare-BPO-Service/EMRServices/HandSurgeryEMR" element={<HandSurgeryEMR />} />

              {/* Claims Adjudication Services */}
              <Route path="/services/healthcare-BPO-Service/ClaimsAdjudication" element={<ClaimsAdjudication />} />
              <Route path="/services/healthcare-BPO-Service/ClaimsAdjudication/RemittanceProcessing" element={<RemittanceProcessing />} />
              <Route path="/services/healthcare-BPO-Service/ClaimsAdjudication/DentalClaimsAdjudication" element={<DentalClaimsAdjudication />} />


              {/* Medical Animation Services */}
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices" element={<MedicalAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalAnimation2D" element={<MedicalAnimation2D />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalIllustration3D" element={<MedicalIllustration3D />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MolecularAnimation" element={<MolecularAnimation />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/Medical3DAnimation" element={<Medical3DAnimation />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/BiomedicalIllustration" element={<BiomedicalIllustration />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/PharmaceuticalAnimation" element={<PharmaceuticalAnimation />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/SurgicalAnimationServices" element={<SurgicalAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/AnatomyIllustrationServices" element={<AnatomyIllustrationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/OrthopedicAnimationServices" element={<OrthopedicAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/ScientificAnimationServices" element={<ScientificAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalDeviceAnimationServices" element={<MedicalDeviceAnimationServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalDevicePrototypingServices" element={<MedicalDevicePrototypingServices />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/MedicalIllustration" element={<MedicalIllustration />} />
              <Route path="/services/healthcare-BPO-Service/MedicalAnimationServices/SpineAnimation" element={<SpineAnimation />} />


              {/* Pharmacy Business Services */}
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices" element={<PharmacyBusinessServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/GxPComplianceServices" element={<GxPComplianceServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyBillingServices" element={<PharmacyBillingServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacovigilanceServices" element={<PharmacovigilanceServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyManagementServices" element={<PharmacyManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PharmacyDocumentManagementServices" element={<PharmacyDocumentManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/PhysicianReferralServices" element={<PhysicianReferralServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/MailOrderPharmacyServices" element={<MailOrderPharmacyServices />} />
              <Route path="/services/healthcare-BPO-Service/PharmacyBusinessServices/MedicationTherapyManagementServices" element={<MedicationTherapyManagementServices />} />

              {/* Healthcare Management Services */}
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices" element={<HealthcareManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/UrgentCareBackofficeSupport" element={<UrgentCareBackofficeSupport />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDocumentationImprovement" element={<ClinicalDocumentationImprovement />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/DecentralizedClinicalTrials" element={<DecentralizedClinicalTrials />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HospitalBackofficeSupport" element={<HospitalBackofficeSupport />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientEngagementServices" element={<PatientEngagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/OnlineTelehealthServices" element={<OnlineTelehealthServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareConsultingServices" element={<HealthcareConsultingServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPracticeTransformationServices" element={<MedicalPracticeTransformationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientAdherenceServices" element={<PatientAdherenceServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareDocumentationServices" element={<HealthcareDocumentationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HedisMeasurementServices" element={<HedisMeasurementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalRecordReviewServices" element={<MedicalRecordReviewServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ChartDocumentationServices" element={<ChartDocumentationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareSurveysServices" element={<HealthcareSurveysServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/TelemedicineAppointmentServices" element={<TelemedicineAppointmentServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthInformationManagementServices" element={<HealthcareManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientSatisfactionSurveyServices" element={<PatientSatisfactionSurveyServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareDataManagement" element={<HealthcareDataManagement />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PharmaceuticalOutsourcing" element={<PharmaceuticalOutsourcing />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDocumentationIntegrity" element={<ClinicalDocumentationIntegrity />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PriorAuthorization" element={<PriorAuthorization />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalServices" element={<ClinicalServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/RemotePatientMonitoring" element={<RemotePatientMonitoring />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PreventiveCarez" element={<PreventiveCare />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareAnalytics" element={<HealthcareAnalytics />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/TelemedicineServices" element={<TelemedicineServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareInteroperability" element={<HealthcareInteroperability />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareCallCenterServices" element={<HealthcareCallCenterServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalDecisionSupportServices" element={<ClinicalDecisionSupportServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalDataEntryServices" element={<MedicalDataEntryServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HospitalCapacityManagementServices" element={<HospitalCapacityManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/VirtualHealthcareBPOServices" element={<VirtualHealthcareBPOServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClaimsProcessingSoftwareDevelopment" element={<ClaimsProcessingSoftwareDevelopment />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalResearchOrganizationServices" element={<ClinicalResearchOrganizationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthcareProviderDataManagementServices" element={<HealthcareProviderDataManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/EDIIntegrationServices" element={<EDIIntegrationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/RiskBasedQualityManagementServices" element={<RiskBasedQualityManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/DentalInsuranceVerificationServices" element={<DentalInsuranceVerificationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/HealthInformationTechnology" element={<HealthInformationTechnology />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientOnboardingServices" element={<PatientOnboardingServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalInsuranceClaimsProcessing" element={<MedicalInsuranceClaimsProcessing />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalBillingSoftwareSupport" element={<MedicalBillingSoftwareSupport />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPeerReviewServices" element={<MedicalPeerReviewServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/EOBProcessingServices" element={<EOBProcessingServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PopulationHealthAnalytics" element={<PopulationHealthAnalytics />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/NurseTriageServices" element={<NurseTriageServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/UtilizationManagement" element={<UtilizationManagement />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PatientInteractionServices" element={<PatientInteractionServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/ClinicalTrialRegulatory" element={<ClinicalTrialRegulatory />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/PracticeManagementServices" element={<PracticeManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/CareManagementServices" element={<CareManagementServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/DigitalHealthServices" element={<DigitalHealthServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/StatisticalProgrammingServices" element={<StatisticalProgrammingServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/CareCoordinationServices" element={<CareCoordinationServices />} />
              <Route path="/services/healthcare-BPO-Service/HealthcareManagementServices/MedicalPresentationServices" element={<MedicalPresentationServices />} />


              {/* Mortgage Services */}
              {/* Loan Processing Services */}
              <Route path="/services/MortgageService/MortgageLoanProcessing" element={<MortgageProcessing />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/JumboMortgageProcessing" element={<JumboMortgageProcessing />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageRPA" element={<MortgageRPA />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/NoMoneyDownMortgage" element={<NoMoneyDownMortgage />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageIndexingAndExtraction" element={<MortgageIndexingAndExtraction />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/BrokerPriceOpinion" element={<BrokerPriceOpinion />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageDocumentRecording" element={<MortgageDocumentRecording />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageTitlePolicy" element={<MortgageTitlePolicy />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/PreFundQCAudit" element={<PreFundQCAudit />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ForeclosureTitleAndResolution" element={<ForeclosureTitleAndResolution />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageAccountingAndBookkeeping" element={<MortgageAccountingAndBookkeeping />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageLienRelease" element={<MortgageLienRelease />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageVirtualAssistant" element={<MortgageVirtualAssistant />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageCreditUnion" element={<MortgageCreditUnion />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageUXSupport" element={<MortgageUXSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageAudit" element={<MortgageAudit />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/USDAMortgageSupport" element={<USDAMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/WarehouseQCAudit" element={<WarehouseQCAudit />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgagePreprocessing" element={<MortgagePreprocessing />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ReverseMortgageSupport" element={<ReverseMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageQualityRetention" element={<MortgageQualityRetention />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageDashboardCreation" element={<MortgageDashboardCreation />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/VALoanSupport" element={<VALoanSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/AssignmentOfMortgage" element={<AssignmentOfMortgage />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/FHALoanSupport" element={<FHALoanSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ConventionalLoanProcessing" element={<ConventionalLoanProcessing />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageLoanBoarding" element={<MortgageLoanBoarding />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageLoanSetup" element={<MortgageLoanSetup />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ResidentialMortgageLoanSupport" element={<ResidentialMortgageLoanSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/WholeLoanPurchaseReview" element={<WholeLoanPurchaseReview />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/ConformingMortgageLoanSupport" element={<ConformingMortgageLoanSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/FixedAndAdjustableMortgageSupport" element={<FixedAndAdjustableMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MLOClientSupport" element={<MLOClientSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/SecondMortgageSupport" element={<SecondMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/RenovationMortgageSupport" element={<RenovationMortgageSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/TrailingDocumentsSupport" element={<TrailingDocumentsSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/EquipmentLeasingSupport" element={<EquipmentLeasingSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageDefaultSupport" element={<MortgageDefaultSupport />} />
              <Route path="/services/MortgageService/MortgageLoanProcessing/MortgageComplianceSupport" element={<MortgageComplianceSupport />} />

              {/* Underwriting Services */}
              <Route path="/services/MortgageService/MortgageUnderwritingSupport" element={<MortgageUnderwritingSupport />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingSupportCreditUnion" element={<MortgageUnderwritingSupportCreditUnion />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageOriginationUnderwriting" element={<MortgageOriginationUnderwriting />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/BorrowerSolicitationSupport" element={<BorrowerSolicitationSupport />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingSupportLenders" element={<MortgageUnderwritingSupportLenders />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageLoanModificationAssistance" element={<MortgageLoanModificationAssistance />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingQC" element={<MortgageUnderwritingQC />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/ModificationUnderwritingSupport" element={<ModificationUnderwritingSupport />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/ForeclosureAssistanceServices" element={<ForeclosureAssistanceServices />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/MortgageAppraisalUnderwriting" element={<MortgageAppraisalUnderwriting />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/LossMitigationAssistance" element={<LossMitigationAssistance />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/ShortSaleSupportServices" element={<ShortSaleSupportServices />} />
              <Route path="/services/MortgageService/MortgageUnderwritingSupport/SigningSupportServices" element={<SigningSupportServices />} />

              {/* Mortgage Closing Services */}
              <Route path="/services/MortgageService/MortgageClosingSupportServices" element={<MortgageClosingSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgageLenderSupportServices" element={<MortgageLenderSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/PrePostClosingComplianceServices" element={<PrePostClosingComplianceServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/PostCloseQCSupportServices" element={<PostCloseQCSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgageCreditUnionSupport" element={<MortgageCreditUnionSupport />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgageDisclosurePreparation" element={<MortgageDisclosurePreparation />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/PreClosingQCSupportServices" element={<PreClosingQCSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgagePreClosingSupportServices" element={<MortgagePreClosingSupportServices />} />
              <Route path="/services/MortgageService/MortgageClosingSupportServices/MortgagePostClosingSupportServices" element={<MortgagePostClosingSupportServices />} />

              {/* Title Support */}
              <Route path="/services/MortgageService/MortgageTitleSupportServices" element={<MortgageTitleSupportServices />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageTitleSupportServicesCompanies" element={<MortgageTitleSupportServicesCompanies />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageTitleCommitmentPreparation" element={<MortgageTitleCommitmentPreparation />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageTitleSupportForLenders" element={<MortgageTitleSupportForLenders />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageTitleInsuranceProcessing" element={<MortgageTitleInsuranceProcessing />} />

              {/* Appraisal Support */}
              <Route path="/services/MortgageService/MortgageAppraisalSupport" element={<MortgageAppraisalSupport />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageAppraisalSupportForCompanies" element={<MortgageAppraisalSupportForCompanies />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/RealEstateAppraisalDataEntrySupport" element={<RealEstateAppraisalDataEntrySupport />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageAppraisalReviewSupport" element={<MortgageAppraisalReviewSupport />} />
              <Route path="/services/MortgageService/MortgageTitleSupportServices/MortgageValuationSupport" element={<MortgageValuationSupport />} />

              {/* Digital Marketing */}
              <Route path="/services/MortgageService/DigitalMarketingServicesForMortgage" element={<DigitalMarketingServicesForMortgage />} />
              <Route path="/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForBrokers" element={<DigitalMarketingServicesForBrokers />} />
              <Route path="/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForCreditUnions" element={<DigitalMarketingServicesForCreditUnions />} />
              <Route path="/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForBanks" element={<DigitalMarketingServicesForBanks />} />
              <Route path="/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForLenders" element={<DigitalMarketingServicesForLenders />} />


              {/* REO Support */}
              <Route path="/services/MortgageService/REOSupport" element={<REOSupport />} />
              <Route path="/services/MortgageService/REOSupport/REOReimbursementServices" element={<REOReimbursementServices />} />
              <Route path="/services/MortgageService/REOSupport/REOListingSupportServices" element={<REOListingSupportServices />} />
              <Route path="/services/MortgageService/REOSupport/RealEstateTitleSupport" element={<RealEstateTitleSupport />} />
              <Route path="/services/MortgageService/REOSupport/LeaseAbstactionSupportServices" element={<LeaseAbstactionSupportServices />} />

              {/* Mortgage Loan */}
              <Route path="/services/MortgageService/MortgageLoanServicing" element={<MortgageLoanServicing />} />

              {/* SoftwareDevelopment */}
              {/* custom Software */}
              <Route path="/services/ITServices/CustomSoftwareDevelopment" element={<CustomSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/EmbeddedSoftwareDevelopment" element={<EmbeddedSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/AlgorithmAnalysisDesign" element={<AlgorithmAnalysisDesign />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/HighFidelityDesign" element={<HighFidelityDesign />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/OTTAppDevelopment" element={<OTTAppDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/RestAPIDevelopment" element={<RestAPIDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/InteractiveKioskSoftwareDevelopment" element={<InteractiveKioskSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FirmwareDevelopment" element={<FirmwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/LMSDevelopmentServices" element={<LMSDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/IoTAnalyticsDevelopment" element={<IoTAnalyticsDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/DeviceDriversDevelopment" element={<DeviceDriversDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/MVPDevelopment" element={<MVPDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/AndroidTVAppDevelopment" element={<AndroidTVAppDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SitecoreDevelopment" element={<SitecoreDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareModernization" element={<SoftwareModernization />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/BespokeSoftwareDevelopment" element={<BespokeSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/CustomTemplateDesign" element={<CustomTemplateDesign />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/BSPDevelopment" element={<BSPDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ChromecastAppDevelopment" element={<ChromecastAppDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareRequirementAnalysis" element={<SoftwareRequirementAnalysis />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/HMIDevelopment" element={<HMIDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ElixirDevelopment" element={<ElixirDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareArchitectureDesign" element={<SoftwareArchitectureDesign />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/CISasService" element={<CISasService />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/EthereumDevelopment" element={<EthereumDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/IoTasAService" element={<IoTasAService />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FileMakerDevelopment" element={<FileMakerDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FullStackDevelopment" element={<FullStackDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareProductDevelopment" element={<SoftwareProductDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/MachineLearningConsulting" element={<MachineLearningConsulting />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/IeoDevelopmentServices" element={<IeoDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareProgramming" element={<SoftwareProgramming />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/IotAppDevelopment" element={<IotAppDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/InteractivePrototypeServices" element={<InteractivePrototypeServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/DesktopApplicationDevelopment" element={<DesktopApplicationDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/NopcommerceDevelopment" element={<NopcommerceDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/LegacyApplicationModernization" element={<LegacyApplicationModernization />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/AgileSoftwareDevelopment" element={<AgileSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/NearshoreSoftwareDevelopment" element={<NearshoreSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/LiferayDevelopment" element={<LiferayDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/GameDevelopmentServices" element={<GameDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareRndServices" element={<SoftwareRndServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/MatlabDevelopmentServices" element={<MatlabDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareMaintenanceServices" element={<SoftwareMaintenanceServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/OffshoreSoftwareDevelopment" element={<OffshoreSoftwareDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/PocDevelopment" element={<PocDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ChatbotDevelopment" element={<ChatbotDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/CoreModernizationServices" element={<CoreModernizationServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/StoDevelopmentServices" element={<StoDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ProductManagementServices" element={<ProductManagementServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/PaymentGatewayIntegrationServices" element={<PaymentGatewayIntegrationServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ApplicationDevelopmentServices" element={<ApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ApplicationLifecycleManagementServices" element={<ApplicationLifecycleManagementServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/NFTMarketplaceDevelopmentServices" element={<NFTMarketplaceDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/RecognitionSoftwareDevelopmentServices" element={<RecognitionSoftwareDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/DigitalInteractiveServices" element={<DigitalInteractiveServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareProductEngineering" element={<SoftwareProductEngineering />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FraudDetectionSoftwareDevelopmentServices" element={<FraudDetectionSoftwareDevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ApplicationReengineeringServices" element={<ApplicationReengineeringServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/VRPrototypingServices" element={<VRPrototypingServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/BusinessApplicationDevelopment" element={<BusinessApplicationDevelopment />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/ICODevelopmentServices" element={<ICODevelopmentServices />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/SoftwareDevelopmentForStartups" element={<SoftwareDevelopmentForStartups />} />
              <Route path="/services/ITServices/CustomSoftwareDevelopment/FintechSoftwareDevelopmentServices" element={<FintechSoftwareDevelopmentServices />} />

              {/* Mobile App */}
              <Route path="/services/ITServices/MobileAppDevelopmentServices" element={<AppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/AndroidAppDevelopmentServices" element={<AndroidAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/XamarinAppDevelopmentServices" element={<XamarinAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/FintechAppDevelopmentServices" element={<FintechAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/ReactNativeDevelopmentServices" element={<ReactNativeDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/J2MEAppDevelopmentServices" element={<J2MEAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/RapidApplicationDevelopmentServices" element={<RapidApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/iOSAppDevelopmentServices" element={<IOSAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/MobileCommerceDevelopmentServices" element={<MobileCommerceDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/KotlinAppDevelopmentServices" element={<KotlinAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IosAppMaintenanceServices" element={<IosAppMaintenanceServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/ArabicAppDevelopmentServices" element={<ArabicAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/XcodeAppDevelopmentServices" element={<XcodeAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/WearableAppDevelopmentServices" element={<WearableAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IpadAppDevelopmentServices" element={<IpadAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/TitaniumAppDevelopmentServices" element={<TitaniumAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/NativeAppDevelopmentServices" element={<NativeAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/Html5MobileAppDevelopmentServices" element={<Html5MobileAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/HoloLensAppDevelopmentServices" element={<HoloLensAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IPhoneAppDevelopmentServices" element={<IPhoneAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/SwiftAppDevelopmentServices" element={<SwiftAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/JQueryAppDevelopmentServices" element={<JQueryAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/AppleWatchAppDevelopmentServices" element={<AppleWatchAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/PhoneGapAppDevelopmentServices" element={<PhoneGapAppDevelopmentServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/OnDemandServicesAppDevelopment" element={<OnDemandServicesAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/MobileAppDesignServices" element={<MobileAppDesignServices />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IBeaconAppDevelopment" element={<IBeaconAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/DatingAppDevelopment" element={<DatingAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/HybridAppDevelopment" element={<HybridAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/FlutterAppDevelopment" element={<FlutterAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/AndroidAppMaintenance" element={<AndroidAppMaintenance />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/IonicAppDevelopment" element={<IonicAppDevelopment />} />
              <Route path="/services/ITServices/MobileAppDevelopmentServices/CrossPlatformAppDevelopment" element={<CrossPlatformAppDevelopment />} />

              {/* ApplicationServices */}
              <Route path="/services/ITServices/ApplicationServices" element={<ApplicationServices />} />
              <Route path="/services/ITServices/ApplicationServices/ADACompliance" element={<ADACompliance />} />
              <Route path="/services/ITServices/ApplicationServices/HederaDevelopment" element={<HederaDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/OdooDevelopment" element={<OdooDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/APIDevelopment" element={<APIDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/HyperledgerDevelopment" element={<HyperledgerDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/PimcoreDevelopment" element={<PimcoreDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/APIManagement" element={<APIManagement />} />
              <Route path="/services/ITServices/ApplicationServices/KonyDevelopment" element={<KonyDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/PythonDevelopment" element={<PythonDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/ApplicationModernization" element={<ApplicationModernization />} />
              <Route path="/services/ITServices/ApplicationServices/LAMPDevelopment" element={<LAMPDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/SvelteDevelopment" element={<SvelteDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/ARGameDevelopment" element={<ARGameDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/LaravelDevelopment" element={<LaravelDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/APIIntegration" element={<APIIntegration />} />
              <Route path="/services/ITServices/ApplicationServices/DAppsDevelopment" element={<DAppsDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/LinuxDevelopment" element={<LinuxDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/UnityDevelopment" element={<UnityDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/DartDevelopment" element={<DartDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/MotionUIDevelopment" element={<MotionUIDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/ApplicationSupport" element={<ApplicationSupport />} />
              <Route path="/services/ITServices/ApplicationServices/GraphQLDevelopment" element={<GraphQLDevelopment />} />
              <Route path="/services/ITServices/ApplicationServices/ObjectiveCDevelopment" element={<ObjectiveCDevelopment />} />

              {/* Web Development Services */}
              <Route path="/services/ITServices/WebDevelopment" element={<WebDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/ScalaDevelopment" element={<ScalaDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/LandingPageDesign" element={<LandingPageDesign />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressMigration" element={<WordPressMigration />} />
              <Route path="/services/ITServices/WebDevelopment/PHPDevelopment" element={<PHPDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/PWA" element={<PWA />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressPlugin" element={<WordPressPlugin />} />
              <Route path="/services/ITServices/WebDevelopment/RubyOnRails" element={<RubyOnRails />} />
              <Route path="/services/ITServices/WebDevelopment/WebApplication" element={<WebApplication />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressSupport" element={<WordPressSupport />} />
              <Route path="/services/ITServices/WebDevelopment/JoomlaDevelopment" element={<JoomlaDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/BootstrapDevelopment" element={<BootstrapDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressTheme" element={<WordPressTheme />} />
              <Route path="/services/ITServices/WebDevelopment/ResponsiveWebDesign" element={<ResponsiveWebDesign />} />
              <Route path="/services/ITServices/WebDevelopment/DjangoDevelopment" element={<DjangoDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WordPressDevelopment" element={<WordPressDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/UiUxDevelopment" element={<UiUxDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/DotNetNukeDevelopment" element={<DotNetNukeDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/ZendDevelopment" element={<ZendDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WebsiteMaintenance" element={<WebsiteMaintenance />} />
              <Route path="/services/ITServices/WebDevelopment/FlaskDevelopment" element={<FlaskDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/AspNetDevelopment" element={<AspNetDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WebsiteMigration" element={<WebsiteMigration />} />
              <Route path="/services/ITServices/WebDevelopment/GatsbyDevelopment" element={<GatsbyDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WebSocketDevelopment" element={<WebSocketDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/WireframeDesign" element={<WireframeDesign />} />
              <Route path="/services/ITServices/WebDevelopment/GolangDevelopment" element={<GolangDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/OpenCartDevelopment" element={<OpenCartDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/KenticoDevelopment" element={<KenticoDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/DrupalDevelopment" element={<DrupalDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/MobileWebsiteDesign" element={<MobileWebsiteDesign />} />
              <Route path="/services/ITServices/WebDevelopment/RiaDevelopment" element={<RiaDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/SpaDevelopment" element={<SpaDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/ParallaxDesign" element={<ParallaxDesign />} />
              <Route path="/services/ITServices/WebDevelopment/SitefinityDevelopment" element={<SitefinityDevelopment />} />
              <Route path="/services/ITServices/WebDevelopment/EcommerceDevelopment" element={<EcommerceDevelopment />} />


              {/* Service Now */}
              <Route path="/services/ITServices/ServiceNow" element={<ServiceNowServices />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowConsulting" element={<ServiceNowConsulting />} />
              <Route path="/services/ITServices/ServiceNow/HrServiceNow" element={<HrServiceNow />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowChange" element={<ServiceNowChange />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowITOM" element={<ServiceNowITOM />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowResourceManagement" element={<ServiceNowResourceManagement />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowAppDevelopment" element={<ServiceNowAppDevelopment />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowCSM" element={<ServiceNowCSM />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowMigration" element={<ServiceNowMigration />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowITBM" element={<ServiceNowITBM />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowIntegration" element={<ServiceNowIntegration />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowITSM" element={<ServiceNowITSM />} />
              <Route path="/services/ITServices/ServiceNow/ServiceNowSecOps" element={<ServiceNowSecOps />} />

              {/* Azure */}
              <Route path="/services/ITServices/AzureConsulting" element={<AzureConsulting />} />
              <Route path="/services/ITServices/AzureConsulting/AzureManagedServices" element={<AzureManagedServices />} />
              <Route path="/services/ITServices/AzureConsulting/AzureIntegration" element={<AzureIntegration />} />
              <Route path="/services/ITServices/AzureConsulting/AzureCloudConsulting" element={<AzureCloudConsulting />} />
              <Route path="/services/ITServices/AzureConsulting/AzureMigration" element={<AzureMigration />} />
              <Route path="/services/ITServices/AzureConsulting/AzureApplicationDevelopment" element={<AzureApplicationDevelopment />} />
              <Route path="/services/ITServices/AzureConsulting/AzureSynapseAnalytics" element={<AzureSynapseAnalytics />} />

              {/* Microsoft Services */}
              <Route path="/services/ITServices/MicrosoftConsulting" element={<MicrosoftConsulting />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftPowerAutomate" element={<MicrosoftPowerAutomate />} />
              <Route path="/services/ITServices/MicrosoftConsulting/SharePointDevelopment" element={<SharePointDevelopment />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftSharePoint" element={<MicrosoftSharePoint />} />
              <Route path="/services/ITServices/MicrosoftConsulting/PowerAppsConsulting" element={<PowerAppsConsulting />} />
              <Route path="/services/ITServices/MicrosoftConsulting/PowerBIServices" element={<PowerBIServices />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftDynamics" element={<MicrosoftDynamics />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftDynamicsCustomization" element={<MicrosoftDynamicsCustomization />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftOffice365" element={<MicrosoftOffice365 />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftStackDevelopment" element={<MicrosoftStackDevelopment />} />
              <Route path="/services/ITServices/MicrosoftConsulting/MicrosoftTeamsConsulting" element={<MicrosoftTeamsConsulting />} />


              {/* E-Commerce */}
              <Route path="/services/ITServices/ECommerceDevelopment" element={<ECommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/ThreeDCartDevelopment" element={<ThreeDCartDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/PrestashopDevelopment" element={<PrestashopDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/VirtuemartDevelopment" element={<VirtuemartDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/BigCommerceDevelopment" element={<BigCommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/ShopifyDevelopment" element={<ShopifyDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/WooCommerceDevelopment" element={<WooCommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/CsCartDevelopment" element={<CsCartDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/SpreeCommerceDevelopment" element={<SpreeCommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/OsCommerceDevelopment" element={<OsCommerceDevelopment />} />
              <Route path="/services/ITServices/ECommerceDevelopment/SquarespaceDevelopment" element={<SquarespaceDevelopment />} />

              {/* Cloud Counsulting */}
              <Route path="/services/ITServices/CloudConsulting" element={<CloudConsulting />} />
              <Route path="/services/ITServices/CloudConsulting/HybridCloudServices" element={<HybridCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/MultiCloudManagement" element={<MultiCloudManagement />} />
              <Route path="/services/ITServices/CloudConsulting/MultiCloudServices" element={<MultiCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudBusinessTransformation" element={<CloudBusinessTransformation />} />
              <Route path="/services/ITServices/CloudConsulting/AlibabaCloudServices" element={<AlibabaCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/IbmCloudManagedServices" element={<IbmCloudManagedServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudSecurityServices" element={<CloudSecurityServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudIntegrationServices" element={<CloudIntegrationServices />} />
              <Route path="/services/ITServices/CloudConsulting/ManagedApplicationServices" element={<ManagedApplicationServices />} />
              <Route path="/services/ITServices/CloudConsulting/AlexaSkillDevelopmentServices" element={<AlexaSkillDevelopmentServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudMonitoringServices" element={<CloudMonitoringServices />} />
              <Route path="/services/ITServices/CloudConsulting/BSSTransformationServices" element={<BSSTransformationServices />} />
              <Route path="/services/ITServices/CloudConsulting/AWSApplicationIntegrationServices" element={<AWSApplicationIntegrationServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudApplicationDevelopmentServices" element={<CloudApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/CloudConsulting/ContainerizationServices" element={<ContainerizationServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudComputingApplicationDevelopmentServices" element={<CloudComputingApplicationDevelopmentServices />} />
              <Route path="/services/ITServices/CloudConsulting/Office365SetupAndMigrationServices" element={<Office365SetupAndMigrationServices />} />
              <Route path="/services/ITServices/CloudConsulting/AmazonRedshiftServices" element={<AmazonRedshiftServices />} />
              <Route path="/services/ITServices/CloudConsulting/DataWarehouseServices" element={<DataWarehouseServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudMigrationServices" element={<CloudMigrationServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudOptimizationServices" element={<CloudOptimizationServices />} />
              <Route path="/services/ITServices/CloudConsulting/AdobeCreativeCloudServices" element={<AdobeCreativeCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/DigitalWorkplaceServices" element={<DigitalWorkplaceServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudNativeAppDevelopmentServices" element={<CloudNativeAppDevelopmentServices />} />
              <Route path="/services/ITServices/CloudConsulting/OracleCloudServices" element={<OracleCloudServices />} />
              <Route path="/services/ITServices/CloudConsulting/AmazonWebServices" element={<AmazonWebServices />} />
              <Route path="/services/ITServices/CloudConsulting/CloudEnablementServices" element={<CloudEnablementServices />} />
              <Route path="/services/ITServices/CloudConsulting/SnowflakeDataWarehouseServices" element={<SnowflakeDataWarehouseServices />} />
              <Route path="/services/ITServices/CloudConsulting/InfrastructureAsAService" element={<InfrastructureAsAService />} />
              <Route path="/services/ITServices/CloudConsulting/ToktivBusinessVoip" element={<ToktivBusinessVoip />} />
              <Route path="/services/ITServices/CloudConsulting/HybridInfrastructureManagedServices" element={<HybridInfrastructureManagedServices />} />
              <Route path="/services/ITServices/CloudConsulting/PlatformAsAService" element={<PlatformAsAService />} />
              <Route path="/services/ITServices/CloudConsulting/VirtualDesktopInfrastructure" element={<VirtualDesktopInfrastructure />} />


              {/* IT Staffing */}
              <Route path="/services/ITServices/ITStaffingServices" element={<ITStaffingServices />} />
              <Route path="/services/ITServices/ITStaffingServices/HireAngularDevelopers" element={<HireAngularDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ITStaffingForWordPress" element={<ITStaffingForWordPress />} />
              <Route path="/services/ITServices/ITStaffingServices/HireMaximoDevelopers" element={<HireMaximoDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/HireNodeJSDevelopers" element={<HireNodeJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ITStaffingForDrupal" element={<ITStaffingForDrupal />} />
              <Route path="/services/ITServices/ITStaffingServices/HireSpringBootDevelopers" element={<HireSpringBootDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/HireOpenCartDevelopers" element={<HireOpenCartDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ITStaffingForWebDevelopers" element={<ITStaffingForWebDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/HireElixirDevelopers" element={<HireElixirDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ITStaffingForLAMP" element={<ITStaffingForLAMP />} />
              <Route path="/services/ITServices/ITStaffingServices/DedicatedPHPDevelopers" element={<DedicatedPHPDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/HireKonyAppDevelopers" element={<HireKonyAppDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/JavaStaffing" element={<JavaStaffing />} />
              <Route path="/services/ITServices/ITStaffingServices/MagentoDevelopers" element={<MagentoDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ExpressJSDevelopers" element={<ExpressJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/MicrosoftStaffing" element={<MicrosoftStaffing />} />
              <Route path="/services/ITServices/ITStaffingServices/ARDevelopers" element={<ARDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/GolangDevelopers" element={<GolangDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/DigitalMarketingStaffing" element={<DigitalMarketingStaffing />} />
              <Route path="/services/ITServices/ITStaffingServices/PythonDevelopers" element={<PythonDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/SvelteJSDevelopers" element={<SvelteJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/AndroidDevelopers" element={<AndroidDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/IosDevelopers" element={<IosDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/NuxtJSDevelopers" element={<NuxtJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/WebDesignStaffing" element={<WebDesignStaffing />} />
              <Route path="/services/ITServices/ITStaffingServices/IpadAppDevelopers" element={<IpadAppDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/ReactJSDevelopers" element={<ReactJSDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/MobileAppDevelopers" element={<MobileAppDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/BlockchainDevelopers" element={<BlockchainDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/FlutterDevelopers" element={<FlutterDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/OracleDevelopers" element={<OracleDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/SwiftDevelopers" element={<SwiftDevelopers />} />
              <Route path="/services/ITServices/ITStaffingServices/OracleDBA" element={<OracleDBA />} />
              <Route path="/services/ITServices/ITStaffingServices/IPhoneAppDevelopers" element={<IPhoneAppDevelopers />} />


              {/* Software Testing */}
              <Route path="/services/ITServices/SoftwareTestingServices" element={<SoftwareTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/RegressionTestingServices" element={<RegressionTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoftwareTestingServices" element={<SoftwareTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/NetworkTestingServices" element={<NetworkTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TestingKnowledgeManagementServices" element={<TestingKnowledgeManagementServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/AcceptanceTestDrivenDevelopmentServices" element={<AcceptanceTestDrivenDevelopmentServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ContinuousIntegrationServices" element={<ContinuousIntegrationServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ReliabilityTestingServices" element={<ReliabilityTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/IndependentTestingServices" element={<IndependentTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ManagedTestingServices" element={<ManagedTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/CompatibilityTestingServices" element={<CompatibilityTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/BetaTestingServices" element={<BetaTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/MainframeTestingServices" element={<MainframeTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/StressTestingServices" element={<StressTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/DevOpsTestingServices" element={<DevOpsTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ManagedCrowdTestingServices" element={<ManagedCrowdTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ComplianceTestingServices" element={<ComplianceTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/NetworkPenetrationTesting" element={<NetworkPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoaWebServicesTesting" element={<SoaWebServicesTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/LocalizationTesting" element={<LocalizationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoaTesting" element={<SoaTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TestAutomationServices" element={<TestAutomationServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/LoadTesting" element={<LoadTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SeleniumTesting" element={<SeleniumTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TypesOfSoftwareTesting" element={<TypesOfSoftwareTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/VolumeTesting" element={<VolumeTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/RobotFrameworkTesting" element={<RobotFrameworkTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/IndustryTestingServices" element={<IndustryTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/RecoveryTesting" element={<RecoveryTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/BillingTesting" element={<BillingTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ECommerceTesting" element={<ECommerceTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/InstallationTesting" element={<InstallationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/EDITesting" element={<EDITesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/EmbeddedTesting" element={<EmbeddedTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ETLTesting" element={<ETLTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/UsabilityTesting" element={<UsabilityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/MobileApplicationTesting" element={<MobileApplicationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoakTesting" element={<SoakTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/OutcomeBasedTesting" element={<OutcomeBasedTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ComputerSystemValidation" element={<ComputerSystemValidation />} />
              <Route path="/services/ITServices/SoftwareTestingServices/PerformanceTesting" element={<PerformanceTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/HappyPathTesting" element={<HappyPathTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/DesktopApplicationTesting" element={<DesktopApplicationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ScalabilityTesting" element={<ScalabilityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/APITesting" element={<APITesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/MobileTesting" element={<MobileTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SAPTesting" element={<SAPTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/WebsiteTesting" element={<WebsiteTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ExternalPenetrationTesting" element={<ExternalPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/BackwardCompatibilityTesting" element={<BackwardCompatibilityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/CrmTestingServices" element={<CrmTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/InternalNetworkPenetrationTesting" element={<InternalNetworkPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/BrowserCompatibilityTesting" element={<BrowserCompatibilityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SmokeTestingServices" element={<SmokeTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/FirewallPenetrationTesting" element={<FirewallPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/RiskManagementTesting" element={<RiskManagementTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SystemTestingServices" element={<SystemTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/PenetrationTestingServices" element={<PenetrationTestingServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/CyberSecurityTesting" element={<CyberSecurityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/WebServicesTesting" element={<WebServicesTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TestEnvironmentManagement" element={<TestEnvironmentManagement />} />
              <Route path="/services/ITServices/SoftwareTestingServices/GUITesting" element={<GUITesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/CloudTesting" element={<CloudTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/TestProcessImprovement" element={<TestProcessImprovement />} />
              <Route path="/services/ITServices/SoftwareTestingServices/GameTesting" element={<GameTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/UnitTesting" element={<UnitTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SecurityTesting" element={<SecurityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/VAPTServices" element={<VAPTServices />} />
              <Route path="/services/ITServices/SoftwareTestingServices/IntegrationTesting" element={<IntegrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/GDPRCompliance" element={<GDPRCompliance />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SocialEngineering" element={<SocialEngineering />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SanityTesting" element={<SanityTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/SoftwareTestingProjects" element={<SoftwareTestingProjects />} />
              <Route path="/services/ITServices/SoftwareTestingServices/WirelessPenetrationTesting" element={<WirelessPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ExploratoryTesting" element={<ExploratoryTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/ManagedQualityAssurance" element={<ManagedQualityAssurance />} />
              <Route path="/services/ITServices/SoftwareTestingServices/WebAppPenetrationTesting" element={<WebAppPenetrationTesting />} />
              <Route path="/services/ITServices/SoftwareTestingServices/UserAcceptanceTesting" element={<UserAcceptanceTesting />} />


              {/* IMS */}
              <Route path="/services/ITServices/ITInfrastructureManagement" element={<ITInfrastructureManagement />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CybersecurityCountermeasures" element={<CybersecurityCountermeasures />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedVirtualizationServices" element={<ManagedVirtualizationServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ApplicationPerformanceMonitoring" element={<ApplicationPerformanceMonitoring />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ITRiskAndSecurity" element={<ITRiskAndSecurity />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedStorageServices" element={<ManagedStorageServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/SecurityRiskAssessment" element={<SecurityRiskAssessment />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CybersecurityDueDiligence" element={<CybersecurityDueDiligence />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ManagedBackupServices" element={<ManagedBackupServices />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/VulnerabilityManagement" element={<VulnerabilityManagement />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/CyberSecurityAssessment" element={<CyberSecurityAssessment />} />
              <Route path="/services/ITServices/ITInfrastructureManagement/ITAuditServices" element={<ITAuditServices />} />


              {/* Shenbagavel End */}

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
