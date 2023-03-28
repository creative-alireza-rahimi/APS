
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@mui/material';

export const LoginVisitor = ({ openForm, OpenLogin, AuthDialog }) => {
    const [filedError, setFiledError] = useState(false);

    const handleFillInput = (e) => {
        e.target.value ? setFiledError(false) : setFiledError(true);
    };

    return (
        <Dialog
            open={openForm}
            onClose={(_, reason) =>
                reason === 'backdropClick' || reason === 'escapeKeyDown' ?
                    "" : OpenLogin()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Login (Visitor)
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Enter your Github or LinkedIn Username to Proceed.
                </DialogContentText>
                <TextField
                    required
                    error={filedError}
                    helperText="Fill the input."
                    id="username"
                    label="Username"
                    variant="standard"
                    autoFocus
                    sx={{ marginTop: "1rem", minWidth: "100%" }}
                    onChange={handleFillInput}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    to="/"
                    component={Link}
                    onClick={() => {
                        OpenLogin();
                        AuthDialog();
                    }}>
                    Back
                </Button>
                <Button onClick={OpenLogin}>
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
}