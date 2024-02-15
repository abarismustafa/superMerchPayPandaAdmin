import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import PaymentRequestViewForm from "./paymentRequestViewForm/PaymentRequestViewForm"
import PaymentRequestViewList from "./paymentRequestViewList/PaymentRequestViewList"

const breadCrumbsTitle = {
    id: "1",
    title_1: "Payment",
    title_2: "Payment Request View",
}
function PaymentRequestView() {
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PaymentRequestViewForm />
            <PaymentRequestViewList />
        </>
    )
}
export default PaymentRequestView