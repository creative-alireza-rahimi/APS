import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider
} from '@mui/material';

export const DeleteDialog = ({ modalStatus, handleDeleteDialog }) => {

    function handleDelete() {
        console.log("delete");
        handleDeleteDialog()
    }

    return (
        <Dialog
            open={modalStatus}
            onClose={handleDeleteDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Delete {'Title'}?
            </DialogTitle>

            <Divider variant="middle" />

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Delete it and you are gonna need it immediately! 🙂
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDeleteDialog}>Mission Abort</Button>
                <Button onClick={handleDelete} autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}