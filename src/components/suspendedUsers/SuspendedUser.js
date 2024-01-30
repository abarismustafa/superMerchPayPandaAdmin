import SuspendedUserList from "./suspendedUserList/SuspendUserList"

function SuspendedUsers() {
    return (
        <>
            <section className="CreateUserDistributer mt-3">
                <div className="container">
                    <SuspendedUserList />
                </div>
            </section>

        </>
    )
}
export default SuspendedUsers