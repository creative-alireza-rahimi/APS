import { forwardRef } from 'react';
import {Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const NotificationSnackbar = ({ closeSnack, message }) => {

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        closeSnack?.setValue(false);
    };

    return (
        <Snackbar open={closeSnack?.value} autoHideDuration={1500} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}