import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import { NavLink } from "react-router-dom";

export const ProfileNav = () => {
    return (
        <NavLink to={'/profile'}>
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
        </NavLink>
    );
}