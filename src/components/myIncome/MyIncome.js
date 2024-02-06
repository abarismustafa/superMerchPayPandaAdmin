import MyIncomeForm from "./myIncomeForm/MyIncomeForm"
import MyIncomeList from "./myIncomeList/MyIncomeList"

function MyIncome() {
    return (
        <>
            <section className="MyIncome">
                    <div className="row">
                        <MyIncomeForm />
                        <MyIncomeList />
                </div>
            </section>
        </>
    )
}
export default MyIncome
