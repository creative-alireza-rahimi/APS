import { TasksForm } from "./TasksForm";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider
} from '@mui/material';

export const AddTasksDialog = ({ modalStatus, handleAddDialog }) => {

    function handleAdd() {
        console.log("add");
        handleAddDialog()
    }

    return (
        <Dialog
            open={modalStatus}
            onClose={handleAddDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Add a Task
            </DialogTitle>

            <Divider variant="middle" />

            <DialogContent>
                <TasksForm />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAddDialog}>Cancel</Button>
                <Button onClick={handleAdd} autoFocus>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}