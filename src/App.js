import { Navigate, Route, Routes } from "react-router-dom";

import "./assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import DasBoardPage from "./pages/dasBoardPage";
import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
import DistributerPage from "./pages/distributer";
import CreateUserDistributerPage from "./pages/distributer/createUserDistributer/CreateUserDistributer";
import RetailerPage from "./pages/retailer";
import CreateUserRetailerPage from "./pages/retailer/createUserRetailer";
import SuspendedUserPage from "./pages/suspendedUsers";
import NotWorkingUserPage from "./pages/notWorkingUser";
// import Footer from './common/footer/Footer';
import Dashboardpage from "./pages/dashboard";
import AlltransportationReportsPage from "./pages/alltransportationReports";
import PanCardReportPages from "./pages/panCardReport";
import PendingTransactionReport from "./components/reportMaster/pendingTransactionReport/PendingTransactionReport";
import OperatorWiseSalePage from "./pages/operatorWiseSale";
import LedgerReportPage from "./pages/LedgerReport";
import BalanceTransferPage from "./pages/balanceTransfer";
import BalanceReturnRequestPage from "./pages/balanceReturnRequest";
import PaymentRequestViewPage from "./pages/paymentRequestView";
import PaymentRequestPage from "./pages/PaymentRequest";
import PendingDisputPage from "./pages/pendingDisput";
import SolveDisputePage from "./pages/solveDispute";
import DistributerIncomePage from "./pages/distributerIncome";
import RetailerIncomePage from "./pages/retailerIncome";
import MyIncomePage from "./pages/myIncome";
import DebitReportPage from "./pages/debitReport";
import CreditReportPage from "./pages/creditReport";
import MyCommissionRechargePage from "./pages/profile/myCommisionRecharge";
import MasterPages from "./pages/topNavigationPages/Master";
import CompanyStaffPages from "./pages/topNavigationPages/companyStaff/CompanyStaffPages";
import BoardcastPage from "./pages/boardcast";
import BankMasterP from "./pages/topNavigationPages/Master/bankMaster";
import Provider from "./components/topNavigationComp/apimaster/provider/Provider";
import AddproviderLogo from "./components/topNavigationComp/apimaster/provider/providerForm/addproviderLogo/AddproviderLogo";
import AddBank from "./components/topNavigationComp/masters/bankMaster/addBank/AddBank";
import EditAddBank from "./components/topNavigationComp/masters/bankMaster/editAddBank/EditAddbank";
import EditRoleMaster from "./components/topNavigationComp/masters/roleMaster/editRoleMaster/EditRoleMaster";
import RoleMasterPage from "./pages/topNavigationPages/Master/roleMaster";
import StatusMasterPage from "./pages/topNavigationPages/Master/statusMaster";
import EditStatusMaster from "./components/topNavigationComp/masters/statusMaster/editStatusMaster/EditStatusMaster";
import ServiceMasterPage from "./pages/topNavigationPages/Master/serviceMaster";
import EditServiceMaster from "./components/topNavigationComp/masters/serviceMaster/serviceMasterEdit/ServiceMasterEdit";
import AddRoleMaster from "./components/topNavigationComp/masters/roleMaster/addRoleMaster/AddRoleMaster";
import AddStatusMaster from "./components/topNavigationComp/masters/statusMaster/addStatusMaster/AddStatusMaster";
import AddServiceMaster from "./components/topNavigationComp/masters/serviceMaster/addServiceMaster/AddServiceMaster";
import PaymentMethodMasterPage from "./pages/topNavigationPages/Master/paymentMethodMaster";
import AddPaymentMethod from "./components/topNavigationComp/masters/paymentMethodMaster/addPaymentMethod/AddPaymentMethod";
import EditPaymentMethod from "./components/topNavigationComp/masters/paymentMethodMaster/editPaymentMethod/EditPaymentMethod";
import PayoutBeneficiaryMasterPage from "./pages/topNavigationPages/payoutBenefisiaryMaster";
import AddPayoutBeneficiaryMaster from "./components/topNavigationComp/masters/PayoutBeneficiaryMaster/addPayoutBeneficiaryMaster/AddPayoutBeneficiaryMaster";
import EditPayoutBeneficiaryMaster from "./components/topNavigationComp/masters/PayoutBeneficiaryMaster/EditPayoutBeneficiaryMaster/EditPayoutBeneficiaryMaster";
import ServiceCategoryMasterPage from "./pages/topNavigationPages/Master/serviceCategoryMaster";
import AddServiceCategoryMaster from "./components/topNavigationComp/masters/serviceCategoryMaster/addServiceCategoryMaster/AddServiceCategoryMaster";
import UpdateServiceCategoryMaster from "./components/topNavigationComp/masters/serviceCategoryMaster/updateServiceCategoryMaster/UpdateServiceCategoryMaster";
import AreaPage from "./pages/topNavigationPages/ZoneModule/area";
import AddArea from "./components/topNavigationComp/ZoneModule/area/addArea/AddArea";
import EditArea from "./components/topNavigationComp/ZoneModule/area/editArea/EditArea";
import AgentOnbordingPage from "./pages/topNavigationPages/agentOnbording/index";
import AddAgentOnbording from "./components/topNavigationComp/masters/agentOnbording/addAgentOnbording/AddAgentOnbording";
import UpdateAgentOnbording from "./components/topNavigationComp/masters/agentOnbording/UpdateAgentOnbording/UpdateAgentOnbording";
import PageNotFound from "./common/pageNotFound/PageNotFound";
import BalanceTransferAdd from "./components/balanceTransfer/blanceTrnsferAdd/BlanceTransferAdd";
import UpdateBlanceTransfer from "./components/balanceTransfer/UpdateBlanceTransfer/UpdateBlanceTransfer";
import AddBlanceReturnRequest from "./components/balanceReturnRequest/addBlanceReturnRequest/AddBlanceReturnRequest";
import UpdateBlanceReturnRequest from "./components/balanceReturnRequest/updateBlanceReturnRequest/UpdateBlanceReturnRequest";
import AddPaymentRequestView from "./components/paymentRequestView/addPaymentRequestView/AddPaymentRequestView";
import AddPendingDispute from "./components/pendingDisput/addPendingDisput/AddPendingDipute";
import UpdatePendingDisput from "./components/pendingDisput/updatePendingDisput/UpdatePendingDisput";
import AddSolveDispute from "./components/solveDispute/addSolveDispute/AddSolveDispute";
import UpdateSolveDispute from "./components/solveDispute/updateSolveDispute/UpdateSolveDispute";
import AddTransactionReport from "./components/reportMaster/alltransationsReports/addTransactionReport/AddTransactionReport";
import AddpanCardReport from "./components/reportMaster/pancardReport/addPanCardReport/AddpanCardReport";
import AddPendingTransactionReport from "./components/reportMaster/pendingTransactionReport/addPendingTarnsactionReport/AddPendingTransactionReport";
import AddNotWorkingUserList from "./components/notWorkingUser/addNotWorkingUserList/AddNotWorkingUserList";
import AddSuspendedUser from "./components/suspendedUsers/add SuspendedUser/AddSuspendedUser";
import AddOperatorWiseReport from "./components/reportMaster/operatorWiseSale/addOperatorWiseReports/AddOperatorWiseReport";
import AddDebitReport from "./components/reportMaster/debitReport/addDebitReport/AddDebitReport";
import AddCreditReport from "./components/reportMaster/creditReport/addCreditReport/AddCreditReport";
import AddProvider from "./components/topNavigationComp/apimaster/provider/addProvider/AddProvider";
import UpdateProvider from "./components/topNavigationComp/apimaster/provider/updateProvider/UpdateProvider";
import ApiMasterPage from "./pages/topNavigationPages/apisMaster/apiMaster";
import AddApiMaster from "./components/topNavigationComp/apimaster/appiMaster/addApiMaster/AddApiMaster";
import UpdateApiMaster from "./components/topNavigationComp/apimaster/appiMaster/updateApiMaster/UpdateApiMaster";
import DominationWiseMasterPage from "./pages/topNavigationPages/apisMaster/dominationWiseMaster";
import AddDominationWiseMaster from "./components/topNavigationComp/apimaster/dominationWiseMaster/addDominationWiseMaster/AddDominationWiseMaster";
import UpdateDonimationWiseMaster from "./components/topNavigationComp/apimaster/dominationWiseMaster/updateDominationWiseMaster/UpdateDominationWiseMaster";
import NumberSeriesMasterPage from "./pages/topNavigationPages/apisMaster/numberSeriesMaster";
import AddNumberSeriesMaster from "./components/topNavigationComp/apimaster/numberSeriesMaster/addNumberSeriesMaster/AddNumberSeriesMaster";
import UpdateNumberSeriesMaster from "./components/topNavigationComp/apimaster/numberSeriesMaster/updateNumberSeriesMaster/UpdateNumberSeriesMaster";
import StateWiseApiPage from "./pages/topNavigationPages/apisMaster/stateWiseApi";
import StateWiseProviderSetting from "./components/topNavigationComp/apimaster/stateWiseApi/stateWiseProviderSettings/StateWiseProviderSetting";
import BackupApiMasterPage from "./pages/topNavigationPages/apisMaster/backupApiMaster";
import AddBackupApiMaster from "./components/topNavigationComp/apimaster/backupApiMaster/addBackupApiMaster/AddBackupApiMaster";
import UpdateBackupApiMaster from "./components/topNavigationComp/apimaster/backupApiMaster/updateBackupApiMaster/UpdateBackupApiMaster";
import ApiSwitchingPage from "./pages/topNavigationPages/apisMaster/apiSwitch";
import UserOperatorLimitPage from "./pages/topNavigationPages/apisMaster/userOperatorLimit";
import ViewOperatorLimit from "./components/topNavigationComp/apimaster/userOperatorLimit/viewOperatorLimit/ViewOperatorLimit";
import ApiVandorPaymentPage from "./pages/topNavigationPages/apisMaster/apiVandorPayment";
import SiteSettingPage from "./pages/topNavigationPages/settings/siteSetting";
import SmsSettingsPage from "./pages/topNavigationPages/settings/smsSetting";
import PackageSettingsPage from "./pages/topNavigationPages/settings/packageSettings";
import CommissionSetup from "./components/topNavigationComp/settings/packageSettings/commissionSetup/CommissionSetup";
import SetOperatorSettings from "./components/topNavigationComp/settings/packageSettings/commissionSetup/setOperatorSettings/SetOperatorsettings";
import BankSettingsPage from "./pages/topNavigationPages/settings/bankSettings";
import AddBankSettings from "./components/topNavigationComp/settings/bankSettings/addBankSetting/AddBankSettings";
import UpdateBankSettings from "./components/topNavigationComp/settings/bankSettings/updateBankSettings/UpdateBanksettings";
import AddDistributerInc from "./components/distributerIncome/distributerIncomeForm/addDistributerInc/AddDistributerInc";
import AddRetailerInc from "./components/retailerIncome/addRetailerInc/AddRetailerInc";
import ContactInquery from "./pages/topNavigationPages/Master/contactInquery/index";
import AddContactEnquiry from "./components/topNavigationComp/masters/contactEnquiry/addContactEnquiry/AddContactEnquiry";
import AddCompanyStaff from "./components/topNavigationComp/companyStaff/addCompanyStaff/AddCompanyStaff";
import CashfreeGateWayMasterPages from "./pages/topNavigationPages/Master/cashfreeGateWayMasterPages";
import AddCashFreeGateway from "./components/topNavigationComp/masters/cashfreeGatewayMaster/addCashFreeGateway/AddCashFreeGateway";
import SendRoleWisepage from "./pages/topNavigationPages/whatsAppPages";
import CompanySettings from "./components/topNavigationComp/settings/companySetting/CompanySettings";
import LogoUploadPage from "./pages/topNavigationPages/settings/logoUpload";
import SignatureUploadPage from "./pages/topNavigationPages/settings/signatureUpload";
import ServiceBannerPage from "./pages/topNavigationPages/settings/serviceBanner";
import NotificationSettingsPage from "./pages/topNavigationPages/settings/notificationSettings";
import DynemicPage from "./pages/topNavigationPages/websiteMaster/dynemicPage";
import FrontBannerPage from "./pages/topNavigationPages/websiteMaster/frontBanner";
import UserPannelSliderPage from "./pages/topNavigationPages/websiteMaster/userPannelSlider";
import LoginPage from "./pages/login";
import CurrencyPage from "./pages/currency";
import AddCurrency from "./components/currency/addCurrency/AddCurrency";

import UpdatePaymentRequestView from "./components/paymentRequestView/updatePaymentRequestView/updatePaymentRequestView";
import UpdateCurrency from "./components/currency/updateCurrency/UpdateCurrency";
import CurrencyForm from "./components/currency/CurrencyForm";
import CountryPage from "./pages/country";
import CountryForm from "./components/country/countryForm/CountryForm";
import LanguagePage from "./pages/language";
import FormLanguage from "./components/language/formLanguage.js/FormLanguage";
import CountryZoneMudle from "./components/topNavigationComp/ZoneModule/country/Country";
import CountryAddZone from "./components/topNavigationComp/ZoneModule/country/zoneCountryAdd/ZoneCountryAdd";
import StaffPage from "./pages/staffModule/staff";
import StaffForm from "./components/staffModule/staffForm/StaffForm";
import StaffTypePage from "./pages/staffModule/staffType";
import StaffTypeAdd from "./components/staffModule/staffType/staffTypeAdd/StaffTypeAdd";
import Customer from "./components/topNavigationComp/customer/Customer";
import AddUsers from "./components/topNavigationComp/customer/users/addUsers/AddUsers";
import IndexZone from "./components/topNavigationComp/ZoneModule/country/zoneCountryAdd/IndexZone";
import UsersType from "./pages/topNavigationPages/userType";
import AddUsertType from "./components/topNavigationComp/customer/addUserType/AddUsertType";
import StateMasterPage from "./pages/stateMaster";
import FormStateMaster from "./components/stateMaster/formStateMaster/FormStateMaster";
import Profile from "./common/profileUser/Profile";
import ServiceAreaPermissionPage from "./pages/servicePermission/serviceAreaPermission/index";
import FormServicePermission from "./components/servicePermission/formServiceAreaPermission/FormServiceAreaPermission";
import ApiTransitionMasterPage from "./pages/topNavigationPages/apisMaster/apiTransitionMaster";
import PrivateRoute from "./privateRote/PrivateRoute";
import { useSelector } from "react-redux";
import { getToken } from "./utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "./slice/auth";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SalesReportsPage from "./pages/salesRep";
import PerformanceReports from "./components/salesReports/performanceReports/PerformanceReports";
import AddpadateSummary from "./components/salesReports/summaryReports/addUpdateSummary/AddpadateSummary";
import AddUpdatePerformanceReports from "./components/salesReports/performanceReports/addupdatePerformanceReport/AddUpdatePerformanceReports";
import DmtCommisionp from "./pages/dmt/dmtCommision";
import DmtCommiosionSche from "./pages/dmt/dmtCommisionSche";
import DmtCommisionForm from "./components/dmtModule/dmtCommision/dmtCommisionForm/DmtCommisionForm";
import DmtcommschForm from "./components/dmtModule/dmtCommSche/dmtcommschForm/DmtcommschForm";
import ZoonArea from "./pages/zoonArea";
import Statement from "./pages/statement/page";
import StatementWallet from "./pages/walletstatement/page";
import Transactions from "./pages/transactions";
import ViewProfileMemberPage from "./pages/viewProfileMember";
import UtiPancardPage from "./pages/utiPandcard";
import BillPayment from "./pages/billpayment";
import WalletsReportsPage from "./pages/walletsReport";
import AddWalletsReports from "./components/walletsReport/AddWalletsReports/AddWalletsReports";
import Recharge from "./pages/recharge";
import MoneyTransfer from "./pages/moneyTransfer";
import RechargeReportsPage from "./pages/additionalReportsPages/rechargeReports";
import SearchReTarnsactionPage from "./pages/additionalReportsPages/searchReTransactions";
import IndoNepalMoneyPage from "./pages/additionalReportsPages/indoNepalMoney";
import FastTagReportsPage from "./pages/additionalReportsPages/fastTagReports";
import DmtReportsPages from "./pages/additionalReportsPages/dmtReport";
import DmtReportSearch from "./components/additionalReports/dmtReportSearch/DmtReportSearch";
import DmtKycReportPage from "./pages/additionalReportsPages/dmtKycReport";
import CcbilPayPage from "./pages/additionalReportsPages/ccbillPaymentRep";
import AepsXpressPage from "./pages/additionalReportsPages/aepsXpress";
import AepsTezRepPage from "./pages/additionalReportsPages/aepsTezRep";
import AepsIcici from "./pages/additionalReportsPages/aepsIcici";
import AadharRepPage from "./pages/additionalReportsPages/aadharPayReport";
import InsurenceDekhoPage from "./pages/additionalReportsPages/insurenceDekho";
import BillPaymentHistoryPage from "./pages/additionalReportsPages/billPaymentHistory";
import AccountReportPage from "./pages/additionalReportsPages/accountReport";
import BalanceTopUpHisPage from "./pages/additionalReportsPages/balanceTopupHistory";
import BankListPage from "./pages/additionalReportsPages/bankListPage";
import PayMentWithDrawlReportpage from "./pages/additionalReportsPages/paymentWithDrawalRep";
import CmsBillReportsPage from "./pages/additionalReportsPages/cmsBillReport";
import PostPaidBillPage from "./pages/additionalReportsPages/postPaidBill";
import TurboElinePage from "./pages/additionalReportsPages/turboEline";
import PaymentGatewayPage from "./pages/additionalReportsPages/paymentGatway";
import RupayGiftCardPage from "./pages/additionalReportsPages/rupayGiftCard";
import WallRep from "./pages/walletReport";
import AddUpdateVirtualWall from "./components/virtualWallet/addUpdateVirtualWall/AddUpdateVirtualWall";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(getToken());
    if (getToken()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }
  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);
  }, [isLogin]);

  return (
    <>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/loginPage" element={<LoginPage />} />{" "}
            <Route path="*" element={<Navigate to="/loginPage" />} />{" "}
          </>
        ) : (
          <>
            {/* <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/loginPage" />} />
        {/* <Route path="*" element={<Navigate to="/admin" />} /> */}
            <Route
              path="admin"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              {/* <Route path="/admin" element={<DasBoardPage />} /> */}
              <Route path="" element={<DasBoardRight />} />
              <Route path="bank-master" element={<BankMasterP />} />
              <Route path="zoon_area" element={<ZoonArea />} />
              <Route path="add-bank" element={<AddBank />} />
              <Route path="update-bank/:id" element={<AddBank />} />
              {/* <Route path="edit-add-bank" element={<EditAddBank />} /> */}
              <Route path="role-master" element={<RoleMasterPage />} />
              <Route path="add-role-master" element={<AddRoleMaster />} />
              <Route
                path="update-role-master/:id"
                element={<AddRoleMaster />}
              />

              {/* <Route path="edit-role-master" element={<EditRoleMaster />} /> */}
              <Route
                path="company-staff/welcome"
                element={<CompanyStaffPages />}
              />
              <Route
                path="add-company-staff/welcome"
                element={<AddCompanyStaff />}
              />
              <Route
                path="company-staff-permission"
                element={<MasterPages />}
              />
              <Route path="status-master" element={<StatusMasterPage />} />
              <Route path="add-status-master" element={<AddStatusMaster />} />
              <Route
                path="update-status-master/:id"
                element={<AddStatusMaster />}
              />
              {/* <Route path="edit-status-master" element={<EditStatusMaster />} /> */}
              <Route path="service-master" element={<ServiceMasterPage />} />
              <Route path="add-service-master" element={<AddServiceMaster />} />
              <Route
                path="update-service-master/:id"
                element={<AddServiceMaster />}
              />
              {/* <Route path="edit-service-master" element={<EditServiceMaster />} /> */}
              <Route
                path="service-category"
                element={<ServiceCategoryMasterPage />}
              />
              <Route
                path="add-service-category"
                element={<AddServiceCategoryMaster />}
              />
              <Route
                path="update-service-category/:id"
                element={<AddServiceCategoryMaster />}
              />
              {/* <Route
            path="update-service-category"
            element={<UpdateServiceCategoryMaster />}
          /> */}
              <Route path="boardcast" element={<BoardcastPage />} />
              <Route
                path="payment-method"
                element={<PaymentMethodMasterPage />}
              />
              <Route path="add-payment-method" element={<AddPaymentMethod />} />
              <Route
                path="update-payment-method/:id"
                element={<AddPaymentMethod />}
              />
              {/* <Route path="update-payment-method" element={<EditPaymentMethod />} /> */}
              <Route
                path="payout-beneficiary-master"
                element={<PayoutBeneficiaryMasterPage />}
              />
              <Route
                path="add-payout-beneficiary-master"
                element={<AddPayoutBeneficiaryMaster />}
              />
              <Route
                path="update-payout-beneficiary-master/:id"
                element={<AddPayoutBeneficiaryMaster />}
              />
              {/* <Route
            path="update-payout-beneficiary-master"
            element={<EditPayoutBeneficiaryMaster />}
          /> */}
              <Route path="area" element={<AreaPage />} />
              <Route path="add-area" element={<AddArea />} />
              <Route path="update-area/:id" element={<AddArea />} />
              <Route
                path="agent-onboarding-list"
                element={<AgentOnbordingPage />}
              />
              <Route path="country-zone" element={<CountryZoneMudle />} />
              <Route path="add-country-zone" element={<IndexZone />} />
              {/* <Route
            path="add-country-zone/:id"
            element={<CountryAddZone />}
          /> */}

              <Route
                path="add-agent-onboarding"
                element={<AddAgentOnbording />}
              />
              <Route
                path="update-agent-onboarding/:id"
                element={<AddAgentOnbording />}
              />
              {/* <Route
            path="update-agent-onboarding"
            element={<UpdateAgentOnbording />}
          /> */}
              {/*  Shoib Route start */}
              <Route path="provider" element={<Provider />} />
              <Route path="add-provider" element={<AddProvider />} />
              <Route path="update-provider/:id" element={<AddProvider />} />
              <Route path="add-provider-logo" element={<AddproviderLogo />} />
              <Route path="update-provider-logo" element={<UpdateProvider />} />
              <Route path="api-master" element={<ApiMasterPage />} />
              <Route path="add-api-master" element={<AddApiMaster />} />
              <Route path="update-api-master/:id" element={<AddApiMaster />} />
              {/* <Route path="update-api-master" element={<UpdateApiMaster />} /> */}
              <Route
                path="api-transaction-master"
                element={<ApiTransitionMasterPage />}
              />
              <Route
                path="denomination-wise-api"
                element={<DominationWiseMasterPage />}
              />
              <Route
                path="add-denomination-wise-api"
                element={<AddDominationWiseMaster />}
              />
              <Route
                path="update-denomination-wise-api"
                element={<UpdateDonimationWiseMaster />}
              />
              <Route
                path="number-series-master"
                element={<NumberSeriesMasterPage />}
              />
              <Route
                path="add-number-series-master"
                element={<AddNumberSeriesMaster />}
              />
              <Route
                path="update-number-series-master"
                element={<UpdateNumberSeriesMaster />}
              />
              <Route path="state-wise-api" element={<StateWiseApiPage />} />
              <Route
                path="state-provider-settings"
                element={<StateWiseProviderSetting />}
              />
              <Route
                path="backup-api-master"
                element={<BackupApiMasterPage />}
              />
              <Route
                path="add-backup-api-master"
                element={<AddBackupApiMaster />}
              />
              <Route
                path="update-backup-api-master"
                element={<UpdateBackupApiMaster />}
              />
              <Route path="api-switching" element={<ApiSwitchingPage />} />
              <Route
                path="user-operator-limit"
                element={<UserOperatorLimitPage />}
              />
              <Route
                path="view-operator-limit"
                element={<ViewOperatorLimit />}
              />
              <Route
                path="vandor/payment/welcome"
                element={<ApiVandorPaymentPage />}
              />
              <Route
                path="site-setting/welcome"
                element={<SiteSettingPage />}
              />
              <Route
                path="sms-templete/welcome"
                element={<SmsSettingsPage />}
              />
              <Route
                path="package-settings"
                element={<PackageSettingsPage />}
              />
              <Route path="commission-setup" element={<CommissionSetup />} />
              <Route
                path="set-operator-commission"
                element={<SetOperatorSettings />}
              />
              <Route path="bank-settings" element={<BankSettingsPage />} />
              <Route path="user" element={<Customer />} />
              <Route path="user/add-user" element={<AddUsers />} />
              <Route path="update-user/:id" element={<AddUsers />} />
              <Route path="user-type" element={<UsersType />} />
              <Route path="add/user-type" element={<AddUsertType />} />
              <Route path="update/user-type/:id" element={<AddUsertType />} />
              <Route path="add-bank-settings" element={<AddBankSettings />} />
              <Route
                path="update-bank-settings"
                element={<UpdateBankSettings />}
              />
              <Route path="logo-upload" element={<LogoUploadPage />} />
              <Route
                path="signature-upload"
                element={<SignatureUploadPage />}
              />
              <Route path="service-banner" element={<ServiceBannerPage />} />
              <Route
                path="notification/welcome"
                element={<NotificationSettingsPage />}
              />
              <Route path="dynemic-page" element={<DynemicPage />} />
              <Route path="front-banner" element={<FrontBannerPage />} />
              <Route
                path="user-pannel-slider"
                element={<UserPannelSliderPage />}
              />
              <Route
                path="user-pannel-slider"
                element={<UserPannelSliderPage />}
              />

              {/* Top Navigation End */}
              {/*  Navigation Start */}
              {/*  Shoib Route */}
              {/* <Route path="/dashboard" element={<Dashboardpage />} />*/}
              <Route
                path="member-list/:id/:name"
                element={<DistributerPage />}
              />

              <Route
                path="create-user/:id"
                element={<CreateUserDistributerPage />}
              />
              <Route path="member-list/:id/:name" element={<RetailerPage />} />

              {/*  <Route
                path="create-user/retailer"
                element={<CreateUserRetailerPage />}
              /> */}
              <Route path="member/profile/view/:id" element={<ViewProfileMemberPage />} />
              <Route path="report/pancard/:id" element={<UtiPancardPage />} />
              <Route path="suspended-users" element={<SuspendedUserPage />} />
              <Route
                path="add-suspended-users"
                element={<AddSuspendedUser />}
              />
              <Route
                path="not-working-users"
                element={<NotWorkingUserPage />}
              />
              <Route
                path="add-not-working-user"
                element={<AddNotWorkingUserList />}
              />
              <Route
                path="all-transactions-report"
                element={<AlltransportationReportsPage />}
              />
              <Route
                path="add-transaction-report"
                element={<AddTransactionReport />}
              />
              <Route path="pancard-report" element={<PanCardReportPages />} />
              <Route path="add-pancard-report" element={<AddpanCardReport />} />
              <Route
                path="pending-transaction-report"
                element={<PendingTransactionReport />}
              />
              <Route
                path="add-pending-transaction-report"
                element={<AddPendingTransactionReport />}
              />
              <Route path="summary-report" element={<SalesReportsPage />} />
              <Route path="add-summary-report" element={<AddpadateSummary />} />
              <Route
                path="performance-report"
                element={<PerformanceReports />}
              />
              <Route
                path="add-performance-reports"
                element={<AddUpdatePerformanceReports />}
              />
              <Route
                path="operator-wise-sale"
                element={<OperatorWiseSalePage />}
              />
              <Route
                path="add-operator-wise-sale"
                element={<AddOperatorWiseReport />}
              />
              {/* <Route path="ledger-report" element={<LedgerReportPage />} /> */}
              <Route
                path="balance-trasnfer"
                element={<BalanceTransferPage />}
              />
              <Route
                path="add-balance-trasnfer"
                element={<BalanceTransferAdd />}
              />
              <Route
                path="update-balance-trasnfer"
                element={<UpdateBlanceTransfer />}
              />
              <Route
                path="balance-return-request"
                element={<BalanceReturnRequestPage />}
              />
              <Route
                path="add-balance-return-request"
                element={<AddBlanceReturnRequest />}
              />
              <Route
                path="update-balance-return-request"
                element={<UpdateBlanceReturnRequest />}
              />
              <Route
                path="payment-request-view"
                element={<PaymentRequestViewPage />}
              />
              <Route
                path="add-payment-request-view"
                element={<AddPaymentRequestView />}
              />
              <Route
                path="update-payment-request-view"
                element={<UpdatePaymentRequestView />}
              />
              <Route path="payment-request" element={<PaymentRequestPage />} />
              <Route path="pending-dispute" element={<PendingDisputPage />} />
              <Route
                path="add-pending-dispute"
                element={<AddPendingDispute />}
              />
              <Route
                path="update-pending-dispute"
                element={<UpdatePendingDisput />}
              />
              <Route path="solve-dispute" element={<SolveDisputePage />} />
              <Route path="add-solve-dispute" element={<AddSolveDispute />} />
              <Route
                path="update-solve-dispute"
                element={<UpdateSolveDispute />}
              />
              <Route
                path="user-income/distributor"
                element={<DistributerIncomePage />}
              />
              <Route
                path="add/distributor/income"
                element={<AddDistributerInc />}
              />
              <Route
                path="user-income/retailer"
                element={<RetailerIncomePage />}
              />
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
              <Route
                path="add-contact-enquiry"
                element={<AddContactEnquiry />}
              />
              <Route
                path="update-contact-enquiry/:id"
                element={<AddContactEnquiry />}
              />
              <Route
                path="cashfree-gateway-master"
                element={<CashfreeGateWayMasterPages />}
              />
              <Route
                path="add-cashfree-gateway-master"
                element={<AddCashFreeGateway />}
              />
              <Route
                path="whatapp/send-role-wise"
                element={<SendRoleWisepage />}
              />
              <Route path="company-setting" element={<CompanySettings />} />
              <Route path="currency" element={<CurrencyPage />} />
              <Route path="add-currency" element={<CurrencyForm />} />
              <Route path="update-currency/:id" element={<CurrencyForm />} />
              <Route path="country" element={<CountryPage />} />
              <Route path="add-country" element={<CountryForm />} />
              <Route path="update-country/:id" element={<CountryForm />} />
              <Route path="language" element={<LanguagePage />} />
              <Route path="satff" element={<StaffPage />} />
              <Route path="add-satff" element={<StaffForm />} />
              <Route path="update-satff/:id" element={<StaffForm />} />
              <Route path="staff-type" element={<StaffTypePage />} />
              <Route path="staff-type-add" element={<StaffTypeAdd />} />
              <Route path="staff-type-update/:id" element={<StaffTypeAdd />} />
              <Route path="add-language" element={<FormLanguage />} />
              <Route path="update_language/:id" element={<FormLanguage />} />
              <Route path="state-master" element={<StateMasterPage />} />
              <Route path="add-state-master" element={<FormStateMaster />} />
              <Route
                path="update-state-master/:id"
                element={<FormStateMaster />}
              />
              <Route
                path="service-area-permision"
                element={<ServiceAreaPermissionPage />}
              />
              <Route
                path="add-service-area-permision"
                element={<FormServicePermission />}
              />
              <Route
                path="dmt-commision"
                element={<DmtCommisionp />}
              />
              <Route
                path="add-dmt-commision"
                element={<DmtCommisionForm />}
              />
              <Route
                path="update-dmt-commision/:id"
                element={<DmtCommisionForm />}
              />
              <Route
                path="dmt-commision-scheme"
                element={<DmtCommiosionSche />}
              />
              <Route
                path="add-dmt-commision-scheme"
                element={<DmtcommschForm />}
              />
              <Route
                path="update-dmt-commision-scheme/:id"
                element={<DmtcommschForm />}
              />
              <Route path="profile" element={<Profile />} />
              <Route
                path="/admin/statement/report/:id"
                element={<Statement />}
              />
              <Route
                path="/admin/statementwallet/report/:id"
                element={<StatementWallet />}
              />
              <Route
                path="/admin/statement/apes/report/:id"
                element={<Transactions />}
              />
              <Route
                path="/admin/wallets/report/:id"
                element={<WalletsReportsPage />}
              />
              <Route
                path="/admin/add-wallets/report"
                element={<AddWalletsReports />}
              />
              <Route
                path="/admin/statement/billpayment/report/:id"
                element={<BillPayment />}
              />
              <Route
                path="/admin/statement/recharge/report/:id"
                element={<Recharge />}
              />
              <Route
                path="/admin/statement/moneyTransfer/report/:id"
                element={<MoneyTransfer />}
              />
              <Route
                path="/admin/additional-reports/recharge-reports"
                element={<RechargeReportsPage/>}
              />
              <Route
                path="/admin/additional-reports/search-trans-reports"
                element={<SearchReTarnsactionPage/>}
              />
              <Route
                path="/admin/additional-reports/indo-nepal-money-transfer"
                element={<IndoNepalMoneyPage/>}
              />
              <Route
                path="/admin/additional-reports/fast-tag-reports"
                element={<FastTagReportsPage/>}
              />
              <Route
                path="/admin/additional-reports/dmt-reports"
                element={<DmtReportsPages/>}
              />
              <Route
                path="/admin/additional-reports/dmt-reports-search"
                element={<DmtReportSearch/>}
              />
              <Route
                path="/admin/additional-reports/dmt-kyc-reports"
                element={<DmtKycReportPage/>}
              />
              <Route
                path="/admin/additional-reports/credit-card-bill-payment-report"
                element={<CcbilPayPage/>}
              />
              <Route
                path="/admin/additional-reports/aeps-Xpress-report"
                element={<AepsXpressPage/>}
              />
              <Route
                path="/admin/additional-reports/aeps-tez-report"
                element={<AepsTezRepPage/>}
              />
              <Route
                path="/admin/additional-reports/aeps-icici-report"
                element={<AepsIcici/>}
              />
              <Route
                path="/admin/additional-reports/aadhaarpay_pay_report"
                element={<AadharRepPage/>}
              />
              <Route
                path="/admin/additional-reports/insurancedekho_report"
                element={<InsurenceDekhoPage/>}
              />
              <Route
                path="/admin/additional-reports/bill_report_history"
                element={<BillPaymentHistoryPage/>}
              />
              <Route
                path="/admin/additional-reports/accountreport"
                element={<AccountReportPage/>}
              />
              <Route
                path="/admin/additional-reports/topuphistory"
                element={<BalanceTopUpHisPage/>}
              />
              <Route
                path="/admin/additional-reports/list_bank"
                element={<BankListPage/>}
              />
              <Route
                path="/admin/additional-reports/aeps_payout_report"
                element={<PayMentWithDrawlReportpage/>}
              />
              <Route
                path="/admin/additional-reports/cms_bill_report"
                element={<CmsBillReportsPage/>}
              />
              <Route
                path="/admin/additional-reports/postpaid_bill_transaction"
                element={<PostPaidBillPage/>}
              />
              <Route
                path="/admin/additional-reports/Turbo_payment_request"
                element={<TurboElinePage/>}
              />
              <Route
                path="/admin/additional-reports/Pg_report_rz"
                element={<PaymentGatewayPage/>}
              />
              <Route
                path="/admin/additional-reports/ruapay_gift_cards_report"
                element={<RupayGiftCardPage/>}
              />
              <Route
                path="/admin/wallet/virtual-wallet"
                element={<WallRep/>}
              />
              <Route
                path="/admin/wallet/add/virtual-wallet"
                element={<AddUpdateVirtualWall/>}
              />
            </Route>
            <Route path="*" element={<LoginPage />} />
            {/* <Route path="*" element={<Navigate to="/loginPage" />}/> */}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
