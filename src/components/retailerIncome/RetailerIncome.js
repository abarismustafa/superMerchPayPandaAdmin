import RetailerIncomeForm from "./retailerIncomeForm/RetailerIncomeForm"
import RetailerIncomeList from "./retailerIncomeList/RetailerIncomeList"

function RetailerIncone() {
    return (
        <>
            <section className="RetailerIncone">
                    <div className="row">
                        <RetailerIncomeForm />
                        <RetailerIncomeList />
                    </div>
            </section>
        </>
    )
}
export default RetailerIncone