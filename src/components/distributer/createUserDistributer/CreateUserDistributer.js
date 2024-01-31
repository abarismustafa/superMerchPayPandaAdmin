import BasicDetails from "./basicDetails/BasicDetails"
import Presnoaldetails from "./presnolDetails/PresnoalDetails"
import Services from "./services/Services"

function CreateUserDistributer() {
    return (
        <>
            <section className="CreateUserDistributer mt-3">
                <div className="">
                    <BasicDetails />
                    <Presnoaldetails />
                    <Services />
                </div>
            </section>
        </>
    )
}
export default CreateUserDistributer