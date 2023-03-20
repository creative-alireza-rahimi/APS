import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider
} from '@mui/material';

export const DeleteDialog = ({
    modalStatus,
    DeleteDialogTitle,
    DialogDescription,
    DeleteBtnTitle,
    CancelBtnTitle,
    handleDeleteDialog }) => {

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
                {DeleteDialogTitle}
            </DialogTitle>

            <Divider variant="middle" />

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {DialogDescription}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDeleteDialog}>{CancelBtnTitle}</Button>
                <Button onClick={handleDelete} autoFocus>
                    {DeleteBtnTitle}
                </Button>
            </DialogActions>
        </Dialog>
    );
}