import { Button } from '@mui/material';

export const Logo = () => {
    return (
        <Button
            variant='text'
            disableRipple
            sx={{
                color: 'white',
                textTransform: "none",
                marginLeft: "0.6rem",

                "&:hover": {
                    backgroundColor: "transparent"
                },
            }}
        >
            CA TodZilla
        </Button>
    );
}