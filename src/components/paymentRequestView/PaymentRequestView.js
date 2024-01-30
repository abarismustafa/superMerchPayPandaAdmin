import PaymentRequestViewForm from "./paymentRequestViewForm/PaymentRequestViewForm"
import PaymentRequestViewList from "./paymentRequestViewList/PaymentRequestViewList"


function PaymentRequestView() {
    return (
        <>
            <section className="PaymentRequestView mt-3">
                <div className="container">
                    <div className="row">
                        <PaymentRequestViewForm />
                        <PaymentRequestViewList />

                    </div>
                </div>
            </section>
        </>
    )
}
export default PaymentRequestView