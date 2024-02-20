import { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
function DeleteConfirmation({ message, onDelete }) {

    return (
        <>
            <div className="toast">
                <p>{message}</p>
                <div className="toast-actions">
                    <button onClick={onDelete}>Delete</button>
                    <button onClick={() => console.log('Cancelled')}>Cancel</button>
                </div>
            </div>
        </>
    )
}
export default DeleteConfirmation