import RetailerIncomeForm from "./retailerIncomeForm/RetailerIncomeForm"
import RetailerIncomeList from "./retailerIncomeList/RetailerIncomeList"

function RetailerIncone() {
    return (
        <>
            <section className="RetailerIncone mt-3">
                <div className="container">
                    <div className="row">
                        <RetailerIncomeForm />
                        <RetailerIncomeList />
                    </div>
                </div>
            </section>
        </>
    )
}
export default RetailerIncone