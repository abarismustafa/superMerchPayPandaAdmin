import BasicDetailsRetails from "./basicDetailsetailer/BasicDetailsetailer"
import PermanentDetailsRetailer from "./presnoalDetailsRetailer/PresnolDetailsRetailer"
import ServiceRetailer from "./serviceRetailer/ServiceRetailer"


function CreateUserRetailer() {
    return (
        <>
            <section className="CreateUserDistributer mt-3">
                <div className="container">
                    <BasicDetailsRetails />
                    <PermanentDetailsRetailer />
                    <ServiceRetailer />

                </div>
            </section>

        </>
    )
}
export default CreateUserRetailer
