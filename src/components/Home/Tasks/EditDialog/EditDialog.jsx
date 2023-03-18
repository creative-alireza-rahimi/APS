import { EditTaskDialog } from "./EditTaskDialog";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider
} from '@mui/material';

export const EditDialog = ({ modalStatus, handleEditDialog }) => {

    function handleEdit() {
        console.log("edit");
        handleEditDialog()
    }

    return (
        <Dialog
            open={modalStatus}
            onClose={handleEditDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Edit {'Title'}
            </DialogTitle>

            <Divider variant="middle" />

            <DialogContent>
                <EditTaskDialog />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleEditDialog}>Nah, I`m Good</Button>
                <Button onClick={handleEdit} autoFocus>
                    Edit
                </Button>
            </DialogActions>
        </Dialog>
    );
}