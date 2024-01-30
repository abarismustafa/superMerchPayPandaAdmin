import DistributerIncomeForm from "./distributerIncomeForm/DistributerIncomeForm"
import DistributerIncomeList from "./distributerIncomeList/DistributerIncomeList"

function DistributerIncome() {
    return (
        <>
            <section className="DistributerIncome mt-3">
                <div className="container">
                    <div className="row">
                        <DistributerIncomeForm />
                        <DistributerIncomeList />
                    </div>
                </div>
            </section>
        </>
    )
}
export default DistributerIncome