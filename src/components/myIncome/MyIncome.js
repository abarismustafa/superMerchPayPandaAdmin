import MyIncomeForm from "./myIncomeForm/MyIncomeForm"
import MyIncomeList from "./myIncomeList/MyIncomeList"

function MyIncome() {
    return (
        <>
            <section className="MyIncome mt-3">
                <div className="container">
                    <div className="row">
                        <MyIncomeForm />
                        <MyIncomeList />
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyIncome
