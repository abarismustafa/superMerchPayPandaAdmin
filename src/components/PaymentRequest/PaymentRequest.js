import PaymentRequestForm from "./PaymentRequestForm/PaymentRequestForm"
import PaymentBankDetails from "./pamentBankDetails/PaymentBankDetails"
import PaymentRequestList from "./pamentRequestList/PaymentRequestList"

function PaymentRequest() {
    return (
        <>

            <div className="row">
                <PaymentRequestForm />
                <PaymentBankDetails />
                <PaymentRequestList />

            </div>
        </>
    )
}
export default PaymentRequest