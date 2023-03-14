import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';

export const ProfileNav = () => {
    return (
        <IconButton disableRipple color="primary" aria-label="profile picture" component="label">
            <PersonIcon
                
                sx={{
                    color: 'white',
                    margin: "0 0.6rem",
                    
                    "&:hover": {
                        backgroundColor: "transparent"
                    },
                }}
            />
        </IconButton>
    );
}