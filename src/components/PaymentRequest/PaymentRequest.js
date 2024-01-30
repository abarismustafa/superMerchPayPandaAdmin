import PaymentRequestForm from "./PaymentRequestForm/PaymentRequestForm"
import PaymentBankDetails from "./pamentBankDetails/PaymentBankDetails"
import PaymentRequestList from "./pamentRequestList/PaymentRequestList"

function PaymentRequest() {
    return (
        <>
            <section className="PaymentRequest mt-4">
                <div className="container">
                    <div className="row">
                        <PaymentRequestForm />
                        <PaymentBankDetails />
                        <PaymentRequestList />
                    </div>
                </div>
            </section>
        </>
    )
}
export default PaymentRequest