
import { Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import DasBoardPage from './pages/dasBoardPage';
import DasBoardRight from './pages/dasBoardRight/DasBoardRight';
import Link from './components/link/Link';
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
// import PageNotFound from './common/pageNotFound/PageNotFound';
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
// import PaymentMethodMasterPage from './pages/topNavigationPages/Master/paymentMethodMaster';
// import AddPaymentMethod from './components/topNavigationComp/masters/paymentMethodMaster/addPaymentMethod/AddPaymentMethod';
// import EditPaymentMethod from './components/topNavigationComp/masters/paymentMethodMaster/editPaymentMethod/EditPaymentMethod';
// import PayoutBeneficiaryMasterPage from './pages/topNavigationPages/payoutBenefisiaryMaster';
// import AddPayoutBeneficiaryMaster from './components/topNavigationComp/masters/PayoutBeneficiaryMaster/addPayoutBeneficiaryMaster/AddPayoutBeneficiaryMaster';
// import EditPayoutBeneficiaryMaster from './components/topNavigationComp/masters/PayoutBeneficiaryMaster/EditPayoutBeneficiaryMaster/EditPayoutBeneficiaryMaster';
// import AgentOnbordingPage from './pages/topNavigationPages/agentOnbording';
// import AddAgentOnbording from './components/topNavigationComp/masters/agentOnbording/addAgentOnbording/AddAgentOnbording';
// import UpdateAgentOnbording from './components/topNavigationComp/masters/agentOnbording/UpdateAgentOnbording/UpdateAgentOnbording';


function App() {
  return (
    <>
      <Routes>
        <Route path='/admin' element={<DasBoardPage />} >
          <Route path='' element={<DasBoardRight />} />
          <Route path='link' element={<Link />} />


          <Route path="bank-master" element={<BankMasterP />} />
          <Route path="add-bank" element={<AddBank />} />
          <Route path="edit-add-bank" element={<EditAddBank />} />
          <Route path="role-master" element={<RoleMasterPage />} />
          <Route path="add-role-master" element={<AddRoleMaster />} />
          <Route path="edit-role-master" element={<EditRoleMaster />} />
          {/* <Route path="company-staff-" element={<CompanyStaffPages />} /> */}
          {/* <Route path="company-staff-permission" element={<MasterPages />} /> */}
          <Route path="status-master" element={<StatusMasterPage />} />
          <Route path="add-status-master" element={<AddStatusMaster />} />
          <Route path="edit-status-master" element={<EditStatusMaster />} />
          {/* <Route path="service-master" element={<ServiceMasterPage />} /> */}
          {/* <Route path="edit-service-master" element={<EditServiceMaster />} /> */}
          {/* <Route path="boardcast" element={<BoardcastPage />} /> */}
          {/* <Route path="payment-method" element={<PaymentMethodMasterPage />} /> */}
          {/* <Route path="add-payment-method" element={<AddPaymentMethod />} /> */}
          {/* <Route path="update-payment-method" element={<EditPaymentMethod />} /> */}
          {/* <Route path="payout-beneficiary-master" element={<PayoutBeneficiaryMasterPage />} /> */}
          {/* <Route path="add-payout-beneficiary-master" element={<AddPayoutBeneficiaryMaster />} /> */}
          {/* <Route path="update-payout-beneficiary-master" element={<EditPayoutBeneficiaryMaster />} /> */}
          {/* <Route path="agent-onboarding-list" element={<AgentOnbordingPage />} /> */}
          {/* <Route path="add-agent-onboarding" element={<AddAgentOnbording />} /> */}
          {/* <Route path="update-agent-onboarding" element={<UpdateAgentOnbording />} />  */}


          {/*  Shoib Route start */}
          {/* <Route path="provider" element={<Provider />} />
          <Route path="add-provider-logo" element={<AddproviderLogo />} /> */}
          {/* Top Navigation End */}

          {/*  Navigation Start */}
          {/*  Shoib Route */}
          {/* <Route path="/dashboard" element={<Dashboardpage />} />
          <Route path="member-list/distributor" element={<DistributerPage />} />
          <Route path="create-user/distributor" element={<CreateUserDistributerPage />} />
          <Route path="member-list/retailer" element={<RetailerPage />} />
          <Route path="create-user/retailer" element={<CreateUserRetailerPage />} />
          <Route path="suspended-users" element={<SuspendedUserPage />} />
          <Route path="not-working-users" element={<NotWorkingUserPage />} />
          <Route path="all-transactions-report" element={< AlltransportationReportsPage />} />
          <Route path="pancard-report" element={< PanCardReportPages />} />
          <Route path="pending-transaction-report" element={< PendingTransactionReport />} />
          <Route path="operator-wise-sale" element={<OperatorWiseSalePage />} />
          <Route path="ledger-report" element={<LedgerReportPage />} />
          <Route path="balance-trasnfer" element={< BalanceTransferPage />} />
          <Route path="balance-return-request" element={<BalanceReturnRequestPage />} />
          <Route path="payment-request-view" element={<PaymentRequestViewPage />} />
          <Route path="payment-request" element={<PaymentRequestPage />} />
          <Route path="pending-dispute" element={<PendingDisputPage />} />
          <Route path="solve-dispute" element={<SolveDisputePage />} />
          <Route path="user-income/distributor" element={<DistributerIncomePage />} />
          <Route path="income/user-income/retailer" element={<RetailerIncomePage />} />
          <Route path="income/my-income" element={<MyIncomePage />} />
          <Route path="debit-report" element={<DebitReportPage />} />
          <Route path="credit-report" element={<CreditReportPage />} />
          <Route path="agent" element={<MyCommissionRechargePage />} /> */}
        </Route>

      </Routes>
    </>
  );
}

export default App;
