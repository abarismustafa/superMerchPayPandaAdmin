
import { Navigate, Route, Routes } from 'react-router-dom';
import './assets/css/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import './common/CustomInputField/index.module.scss'
import DasBoardPage from './pages/dasBoardPage';
import DasBoardRight from './pages/dasBoardRight/DasBoardRight';
import DistributerPage from './pages/distributer';
import CreateUserDistributerPage from './pages/distributer/createUserDistributer/CreateUserDistributer';
import RetailerPage from './pages/retailer';
import CreateUserRetailerPage from './pages/retailer/createUserRetailer';
import SuspendedUserPage from './pages/suspendedUsers';
import NotWorkingUserPage from './pages/notWorkingUser';
// import Footer from './common/footer/Footer';
import Dashboardpage from './pages/dashboard';
import AlltransportationReportsPage from './pages/alltransportationReports';
import PanCardReportPages from './pages/panCardReport';
import PendingTransactionReport from './components/reportMaster/pendingTransactionReport/PendingTransactionReport';
import OperatorWiseSalePage from './pages/operatorWiseSale';
import LedgerReportPage from './pages/LedgerReport';
import BalanceTransferPage from './pages/balanceTransfer';
import BalanceReturnRequestPage from './pages/balanceReturnRequest';
import PaymentRequestViewPage from './pages/paymentRequestView';
import PaymentRequestPage from './pages/PaymentRequest';
import PendingDisputPage from './pages/pendingDisput';
import SolveDisputePage from './pages/solveDispute';
import DistributerIncomePage from './pages/distributerIncome';
import RetailerIncomePage from './pages/retailerIncome';
import MyIncomePage from './pages/myIncome';
import DebitReportPage from './pages/debitReport';
import CreditReportPage from './pages/creditReport';
import MyCommissionRechargePage from './pages/profile/myCommisionRecharge';
import MasterPages from './pages/topNavigationPages/Master';
import CompanyStaffPages from './pages/topNavigationPages/companyStaff/CompanyStaffPages';
import BoardcastPage from './pages/boardcast';
import BankMasterP from './pages/topNavigationPages/Master/bankMaster';
import Provider from './components/topNavigationComp/apimaster/provider/Provider';
import AddproviderLogo from './components/topNavigationComp/apimaster/provider/providerForm/addproviderLogo/AddproviderLogo';
import AddBank from './components/topNavigationComp/masters/bankMaster/addBank/AddBank';
import EditAddBank from './components/topNavigationComp/masters/bankMaster/editAddBank/EditAddbank';
import EditRoleMaster from './components/topNavigationComp/masters/roleMaster/editRoleMaster/EditRoleMaster';
import RoleMasterPage from './pages/topNavigationPages/Master/roleMaster';
import StatusMasterPage from './pages/topNavigationPages/Master/statusMaster';
import EditStatusMaster from './components/topNavigationComp/masters/statusMaster/editStatusMaster/EditStatusMaster';
import ServiceMasterPage from './pages/topNavigationPages/Master/serviceMaster';
import EditServiceMaster from './components/topNavigationComp/masters/serviceMaster/serviceMasterEdit/ServiceMasterEdit';
import AddRoleMaster from './components/topNavigationComp/masters/roleMaster/addRoleMaster/AddRoleMaster';
import AddStatusMaster from './components/topNavigationComp/masters/statusMaster/addStatusMaster/AddStatusMaster';
import AddServiceMaster from './components/topNavigationComp/masters/serviceMaster/addServiceMaster/AddServiceMaster';
import PaymentMethodMasterPage from './pages/topNavigationPages/Master/paymentMethodMaster';
import AddPaymentMethod from './components/topNavigationComp/masters/paymentMethodMaster/addPaymentMethod/AddPaymentMethod';
import EditPaymentMethod from './components/topNavigationComp/masters/paymentMethodMaster/editPaymentMethod/EditPaymentMethod';
import PayoutBeneficiaryMasterPage from './pages/topNavigationPages/payoutBenefisiaryMaster';
import AddPayoutBeneficiaryMaster from './components/topNavigationComp/masters/PayoutBeneficiaryMaster/addPayoutBeneficiaryMaster/AddPayoutBeneficiaryMaster';
import EditPayoutBeneficiaryMaster from './components/topNavigationComp/masters/PayoutBeneficiaryMaster/EditPayoutBeneficiaryMaster/EditPayoutBeneficiaryMaster';
import ServiceCategoryMasterPage from './pages/topNavigationPages/Master/serviceCategoryMaster';
import AddServiceCategoryMaster from './components/topNavigationComp/masters/serviceCategoryMaster/addServiceCategoryMaster/AddServiceCategoryMaster';
import UpdateServiceCategoryMaster from './components/topNavigationComp/masters/serviceCategoryMaster/updateServiceCategoryMaster/UpdateServiceCategoryMaster';
import AreaPage from './pages/topNavigationPages/ZoneModule/area';
import AddArea from './components/topNavigationComp/ZoneModule/area/addArea/AddArea';
import EditArea from './components/topNavigationComp/ZoneModule/area/editArea/EditArea';
import CountryPage from './pages/topNavigationPages/ZoneModule/country';
import CountryAdd from './components/topNavigationComp/ZoneModule/country/countryAdd/CountryAdd';
import UpdateCountry from './components/topNavigationComp/ZoneModule/country/updateCountry/UpdateCountry';
import AgentOnbordingPage from './pages/topNavigationPages/agentOnbording/index';
import AddAgentOnbording from './components/topNavigationComp/masters/agentOnbording/addAgentOnbording/AddAgentOnbording';
import UpdateAgentOnbording from './components/topNavigationComp/masters/agentOnbording/UpdateAgentOnbording/UpdateAgentOnbording';
import PageNotFound from './common/pageNotFound/PageNotFound';
import BalanceTransferAdd from './components/balanceTransfer/blanceTrnsferAdd/BlanceTransferAdd';
import UpdateBlanceTransfer from './components/balanceTransfer/UpdateBlanceTransfer/UpdateBlanceTransfer';
import AddBlanceReturnRequest from './components/balanceReturnRequest/addBlanceReturnRequest/AddBlanceReturnRequest';
import UpdateBlanceReturnRequest from './components/balanceReturnRequest/updateBlanceReturnRequest/UpdateBlanceReturnRequest';
import AddPaymentRequestView from './components/paymentRequestView/addPaymentRequestView/AddPaymentRequestView';
import AddPendingDispute from './components/pendingDisput/addPendingDisput/AddPendingDipute';
import UpdatePendingDisput from './components/pendingDisput/updatePendingDisput/UpdatePendingDisput';
import AddSolveDispute from './components/solveDispute/addSolveDispute/AddSolveDispute';
import UpdateSolveDispute from './components/solveDispute/updateSolveDispute/UpdateSolveDispute';
import AddTransactionReport from './components/reportMaster/alltransationsReports/addTransactionReport/AddTransactionReport';
import AddpanCardReport from './components/reportMaster/pancardReport/addPanCardReport/AddpanCardReport';
import AddPendingTransactionReport from './components/reportMaster/pendingTransactionReport/addPendingTarnsactionReport/AddPendingTransactionReport';
import AddNotWorkingUserList from './components/notWorkingUser/addNotWorkingUserList/AddNotWorkingUserList';
import AddSuspendedUser from './components/suspendedUsers/add SuspendedUser/AddSuspendedUser';
import AddOperatorWiseReport from './components/reportMaster/operatorWiseSale/addOperatorWiseReports/AddOperatorWiseReport';
import AddDebitReport from './components/reportMaster/debitReport/addDebitReport/AddDebitReport';
import AddCreditReport from './components/reportMaster/creditReport/addCreditReport/AddCreditReport';
import AddProvider from './components/topNavigationComp/apimaster/provider/addProvider/AddProvider';
import UpdateProvider from './components/topNavigationComp/apimaster/provider/updateProvider/UpdateProvider';
import ApiMasterPage from './pages/topNavigationPages/apisMaster/apiMaster';
import AddApiMaster from './components/topNavigationComp/apimaster/appiMaster/addApiMaster/AddApiMaster';
import UpdateApiMaster from './components/topNavigationComp/apimaster/appiMaster/updateApiMaster/UpdateApiMaster';
import DominationWiseMasterPage from './pages/topNavigationPages/apisMaster/dominationWiseMaster';
import AddDominationWiseMaster from './components/topNavigationComp/apimaster/dominationWiseMaster/addDominationWiseMaster/AddDominationWiseMaster';
import UpdateDonimationWiseMaster from './components/topNavigationComp/apimaster/dominationWiseMaster/updateDominationWiseMaster/UpdateDominationWiseMaster';
import NumberSeriesMasterPage from './pages/topNavigationPages/apisMaster/numberSeriesMaster';
import AddNumberSeriesMaster from './components/topNavigationComp/apimaster/numberSeriesMaster/addNumberSeriesMaster/AddNumberSeriesMaster';
import UpdateNumberSeriesMaster from './components/topNavigationComp/apimaster/numberSeriesMaster/updateNumberSeriesMaster/UpdateNumberSeriesMaster';
import StateWiseApiPage from './pages/topNavigationPages/apisMaster/stateWiseApi';
import StateWiseProviderSetting from './components/topNavigationComp/apimaster/stateWiseApi/stateWiseProviderSettings/StateWiseProviderSetting';
import BackupApiMasterPage from './pages/topNavigationPages/apisMaster/backupApiMaster';
import AddBackupApiMaster from './components/topNavigationComp/apimaster/backupApiMaster/addBackupApiMaster/AddBackupApiMaster';
import UpdateBackupApiMaster from './components/topNavigationComp/apimaster/backupApiMaster/updateBackupApiMaster/UpdateBackupApiMaster';
import ApiSwitchingPage from './pages/topNavigationPages/apisMaster/apiSwitch';
import UserOperatorLimitPage from './pages/topNavigationPages/apisMaster/userOperatorLimit';
import ViewOperatorLimit from './components/topNavigationComp/apimaster/userOperatorLimit/viewOperatorLimit/ViewOperatorLimit';
import ApiVandorPaymentPage from './pages/topNavigationPages/apisMaster/apiVandorPayment';
import SiteSettingPage from './pages/topNavigationPages/settings/siteSetting';
import SmsSettingsPage from './pages/topNavigationPages/settings/smsSetting';
import PackageSettingsPage from './pages/topNavigationPages/settings/packageSettings';
import CommissionSetup from './components/topNavigationComp/settings/packageSettings/commissionSetup/CommissionSetup';
import SetOperatorSettings from './components/topNavigationComp/settings/packageSettings/commissionSetup/setOperatorSettings/SetOperatorsettings';
import BankSettingsPage from './pages/topNavigationPages/settings/bankSettings';
import AddBankSettings from './components/topNavigationComp/settings/bankSettings/addBankSetting/AddBankSettings';
import UpdateBankSettings from './components/topNavigationComp/settings/bankSettings/updateBankSettings/UpdateBanksettings';
import AddDistributerInc from './components/distributerIncome/distributerIncomeForm/addDistributerInc/AddDistributerInc';
import AddRetailerInc from './components/retailerIncome/addRetailerInc/AddRetailerInc';
import ContactInquery from './pages/topNavigationPages/Master/contactInquery/index';
import AddContactEnquiry from './components/topNavigationComp/masters/contactEnquiry/addContactEnquiry/AddContactEnquiry';
import AddCompanyStaff from './components/topNavigationComp/companyStaff/addCompanyStaff/AddCompanyStaff';
import CashfreeGateWayMasterPages from './pages/topNavigationPages/Master/cashfreeGateWayMasterPages';
import AddCashFreeGateway from './components/topNavigationComp/masters/cashfreeGatewayMaster/addCashFreeGateway/AddCashFreeGateway';
import SendRoleWise from './pages/topNavigationPages/whatsAppPages';
import CompanySettings from './components/topNavigationComp/settings/companySetting/CompanySettings';
import LogoUploadPage from './pages/topNavigationPages/settings/logoUpload';
import SignatureUploadPage from './pages/topNavigationPages/settings/signatureUpload';
import ServiceBannerPage from './pages/topNavigationPages/settings/serviceBanner';
import NotificationSettingsPage from './pages/topNavigationPages/settings/notificationSettings';
import DynemicPage from './pages/topNavigationPages/websiteMaster/dynemicPage';
import FrontBannerPage from './pages/topNavigationPages/websiteMaster/frontBanner';
import UserPannelSliderPage from './pages/topNavigationPages/websiteMaster/userPannelSlider';
import UpdatePaymentRequestView from './components/paymentRequestView/updatePaymentRequestView/UpdatePaymentRequestView';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" />} />
        <Route path='/admin' element={<DasBoardPage />} >
          <Route path='' element={<DasBoardRight />} />
          <Route path="bank-master" element={<BankMasterP />} />
          <Route path="add-bank" element={<AddBank />} />
          <Route path="edit-add-bank" element={<EditAddBank />} />
          <Route path="role-master" element={<RoleMasterPage />} />
          <Route path="add-role-master" element={<AddRoleMaster />} />
          <Route path="edit-role-master" element={<EditRoleMaster />} />
          <Route path="company-staff/welcome" element={<CompanyStaffPages />} />
          <Route path="add-company-staff/welcome" element={<AddCompanyStaff />} />
          <Route path="company-staff-permission" element={<MasterPages />} />
          <Route path="status-master" element={<StatusMasterPage />} />
          <Route path="add-status-master" element={<AddStatusMaster />} />
          <Route path="edit-status-master" element={<EditStatusMaster />} />
          <Route path="service-master" element={<ServiceMasterPage />} />
          <Route path="add-service-master" element={<AddServiceMaster />} />
          <Route path="edit-service-master" element={<EditServiceMaster />} />
          <Route path="service-category" element={<ServiceCategoryMasterPage />} />
          <Route path="add-service-category" element={<AddServiceCategoryMaster />} />
          <Route path="update-service-category" element={<UpdateServiceCategoryMaster />} />
          <Route path="boardcast" element={<BoardcastPage />} />
          <Route path="payment-method" element={<PaymentMethodMasterPage />} />
          <Route path="add-payment-method" element={<AddPaymentMethod />} />
          <Route path="update-payment-method" element={<EditPaymentMethod />} />
          <Route path="payout-beneficiary-master" element={<PayoutBeneficiaryMasterPage />} />
          <Route path="add-payout-beneficiary-master" element={<AddPayoutBeneficiaryMaster />} />
          <Route path="update-payout-beneficiary-master" element={<EditPayoutBeneficiaryMaster />} />
          <Route path="area" element={<AreaPage />} />
          <Route path="add-area" element={<AddArea />} />
          <Route path="update-area" element={<EditArea />} />
          <Route path="country" element={<CountryPage />} />
          <Route path="add-country" element={<CountryAdd />} />
          <Route path="update-country" element={<UpdateCountry />} />
          <Route path="agent-onboarding-list" element={<AgentOnbordingPage />} />
          <Route path="add-agent-onboarding" element={<AddAgentOnbording />} />
          <Route path="update-agent-onboarding" element={<UpdateAgentOnbording />} />
          {/*  Shoib Route start */}
          <Route path="provider" element={<Provider />} />
          <Route path="add-provider" element={<AddProvider />} />
          <Route path="add-provider-logo" element={<AddproviderLogo />} />
          <Route path="update-provider-logo" element={<UpdateProvider />} />
          <Route path="api-master" element={<ApiMasterPage />} />
          <Route path="add-api-master" element={<AddApiMaster />} />
          <Route path="update-api-master" element={<UpdateApiMaster />} />
          <Route path="denomination-wise-api" element={<DominationWiseMasterPage />} />
          <Route path="add-denomination-wise-api" element={<AddDominationWiseMaster />} />
          <Route path="update-denomination-wise-api" element={<UpdateDonimationWiseMaster />} />
          <Route path="number-series-master" element={<NumberSeriesMasterPage />} />
          <Route path="add-number-series-master" element={<AddNumberSeriesMaster />} />
          <Route path="update-number-series-master" element={<UpdateNumberSeriesMaster />} />
          <Route path="state-wise-api" element={<StateWiseApiPage />} />
          <Route path="state-provider-settings" element={<StateWiseProviderSetting />} />
          <Route path="backup-api-master" element={<BackupApiMasterPage />} />
          <Route path="add-backup-api-master" element={<AddBackupApiMaster />} />
          <Route path="update-backup-api-master" element={<UpdateBackupApiMaster />} />
          <Route path="api-switching" element={<ApiSwitchingPage />} />
          <Route path="user-operator-limit" element={<UserOperatorLimitPage />} />
          <Route path="view-operator-limit" element={<ViewOperatorLimit />} />
          <Route path="vandor/payment/welcome" element={<ApiVandorPaymentPage />} />
          <Route path="site-setting/welcome" element={<SiteSettingPage />} />
          <Route path="sms-templete/welcome" element={<SmsSettingsPage />} />
          <Route path="package-settings" element={<PackageSettingsPage />} />
          <Route path="commission-setup" element={<CommissionSetup />} />
          <Route path="set-operator-commission" element={<SetOperatorSettings />} />
          <Route path="bank-settings" element={<BankSettingsPage />} />
          <Route path="add-bank-settings" element={<AddBankSettings />} />
          <Route path="update-bank-settings" element={<UpdateBankSettings />} />
          <Route path="logo-upload" element={<LogoUploadPage />} />
          <Route path="signature-upload" element={<SignatureUploadPage />} />
          <Route path="service-banner" element={<ServiceBannerPage />} />
          <Route path="notification/welcome" element={<NotificationSettingsPage />} />
          <Route path="dynemic-page" element={<DynemicPage />} />
          <Route path="front-banner" element={<FrontBannerPage />} />
          <Route path="user-pannel-slider" element={<UserPannelSliderPage />} />
          <Route path="user-pannel-slider" element={<UserPannelSliderPage />} />

          {/* Top Navigation End */}
          {/*  Navigation Start */}
          {/*  Shoib Route */}
          {/* <Route path="/dashboard" element={<Dashboardpage />} />*/}
          <Route path="member-list/distributor" element={<DistributerPage />} />
          <Route path="create-user/distributor" element={<CreateUserDistributerPage />} />
          <Route path="member-list/retailer" element={<RetailerPage />} />
          <Route path="create-user/retailer" element={<CreateUserRetailerPage />} />
          <Route path="suspended-users" element={<SuspendedUserPage />} />
          <Route path="add-suspended-users" element={<AddSuspendedUser />} />
          <Route path="not-working-users" element={<NotWorkingUserPage />} />
          <Route path="add-not-working-user" element={<AddNotWorkingUserList />} />
          <Route path="all-transactions-report" element={< AlltransportationReportsPage />} />
          <Route path="add-transaction-report" element={< AddTransactionReport />} />
          <Route path="pancard-report" element={< PanCardReportPages />} />
          <Route path="add-pancard-report" element={< AddpanCardReport />} />
          <Route path="pending-transaction-report" element={< PendingTransactionReport />} />
          <Route path="add-pending-transaction-report" element={< AddPendingTransactionReport />} />
          <Route path="operator-wise-sale" element={<OperatorWiseSalePage />} />
          <Route path="add-operator-wise-sale" element={<AddOperatorWiseReport />} />
          {/* <Route path="ledger-report" element={<LedgerReportPage />} /> */}
          <Route path="balance-trasnfer" element={< BalanceTransferPage />} />
          <Route path="add-balance-trasnfer" element={<BalanceTransferAdd />} />
          <Route path="update-balance-trasnfer" element={<UpdateBlanceTransfer />} />
          <Route path="balance-return-request" element={<BalanceReturnRequestPage />} />
          <Route path="add-balance-return-request" element={<AddBlanceReturnRequest />} />
          <Route path="update-balance-return-request" element={<UpdateBlanceReturnRequest />} />
          <Route path="payment-request-view" element={<PaymentRequestViewPage />} />
          <Route path="add-payment-request-view" element={<AddPaymentRequestView />} />
          <Route path="update-payment-request-view" element={<UpdatePaymentRequestView />} />
          <Route path="payment-request" element={<PaymentRequestPage />} />
          <Route path="pending-dispute" element={<PendingDisputPage />} />
          <Route path="add-pending-dispute" element={<AddPendingDispute />} />
          <Route path="update-pending-dispute" element={<UpdatePendingDisput />} />
          <Route path="solve-dispute" element={<SolveDisputePage />} />
          <Route path="add-solve-dispute" element={<AddSolveDispute />} />
          <Route path="update-solve-dispute" element={<UpdateSolveDispute />} />
          <Route path="user-income/distributor" element={<DistributerIncomePage />} />
          <Route path="add/distributor/income" element={<AddDistributerInc />} />
          <Route path="user-income/retailer" element={<RetailerIncomePage />} />
          <Route path="add/retailer/income" element={<AddRetailerInc />} />
          <Route path="income/my-income" element={<MyIncomePage />} />
          <Route path="debit-report" element={<DebitReportPage />} />
          <Route path="add-debit-report" element={<AddDebitReport />} />
          <Route path="credit-report" element={<CreditReportPage />} />
          <Route path="add-credit-report" element={<AddCreditReport />} />
          {/* onClick Profile Route start  */}
          {/* <Route path="agent" element={<MyCommissionRechargePage />} />  */}
          {/* onClick Profile Route End  */}
          <Route path="contact-enquiry" element={<ContactInquery />} />
          <Route path="edit-contact-enquiry" element={<AddContactEnquiry />} />
          <Route path="cashfree-gateway-master" element={<CashfreeGateWayMasterPages />} />
          <Route path="add-cashfree-gateway-master" element={<AddCashFreeGateway />} />
          <Route path="whatapp/send-role-wise" element={<SendRoleWise />} />
          <Route path="company-setting" element={<CompanySettings />} />
          <Route path="page-not-found" element={<PageNotFound />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
