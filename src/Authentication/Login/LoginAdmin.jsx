import { useState } from "react";
import { Email } from "../../Form/Email";
import { Password } from "../../Form/Password";
import { emailValidation } from "../../Tools/emailValidation";
import { Link } from 'react-router-dom';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack
} from '@mui/material';

export const LoginAdmin = ({ openForm, OpenLogin, AuthDialog }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    function handleForm(e) {
        switch (e.target.id) {
            case "email":
                setEmail(emailValidation(e.target.value))
                break;
            case "password":
                setPassword(e.target.value)
                break;
            default:
                break;
        }
    }

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
                Login (Admin)
            </DialogTitle>
            <DialogContent>
                <Stack sx={{ minWidth: 300, minHeight: 140, marginTop: 1 }} justifyContent='space-between'>
                    <Email form={handleForm} email={email} />
                    <Password
                        showPassword={showPassword}
                        password={password}
                        form={handleForm}
                        handleClick={handleClickShowPassword}
                        fullWidth={true} />
                </Stack>
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