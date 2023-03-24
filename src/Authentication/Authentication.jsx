import { useState } from 'react';
import { SignUp } from "./SignUp/SignUp";
import {
    Button,
    Stack,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

export const Authentication = ({ isAuth }) => {
    const [openSignUp, setOpenSignUp] = useState(false);

    const handleOpenSignUp = () => setOpenSignUp(openSignUp => !openSignUp);

    return (
        <>
            <Dialog
                open={isAuth}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
                disableEscapeKeyDown

            >
                <DialogTitle>Welcome Jigar</DialogTitle>
                <DialogContent sx={{ minWidth: 350 }}>
                    <DialogContentText id="alert-dialog-slide-description">
                        Login
                    </DialogContentText>

                    <Stack justifyContent='space-evenly' sx={{ margin: "0.6rem 0", minHeight: "6rem" }}>
                        <Button variant="contained">as Visitor</Button>
                        <Button variant="contained">as  Admin</Button>
                    </Stack>

                    <DialogContentText id="alert-dialog-slide-description">
                        Sign Up
                    </DialogContentText>

                    <Stack>
                        <Button
                            variant="contained"
                            sx={{ margin: "0.6rem 0" }}
                            onClick={handleOpenSignUp}
                        >as Admin
                        </Button>
                    </Stack>
                </DialogContent>
            </Dialog>
            {openSignUp && <SignUp openForm={openSignUp} OpenSignUp={handleOpenSignUp} />}
        </>
    );
}