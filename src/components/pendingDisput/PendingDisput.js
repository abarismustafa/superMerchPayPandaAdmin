import PendingDisputeList from "./pemdingDisputList/PendingDispute"


function PendingDisput() {
    return (
        <>
            <section className="pending-dispute pt-3">
                <div className="container">
                    <div className="row">
                        <PendingDisputeList />
                    </div>
                </div>
            </section>

        </>
    )
}
export default PendingDisput