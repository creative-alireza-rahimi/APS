import { useState, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../Authentication/authSlice'
import { resetMember } from '../../Members/MembersSlice';
import { removeData } from "../../../Tools/saveToLocal";
import {
    IconButton,
    Typography,
    Box,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider,
} from '@mui/material';
import { NavLink } from "react-router-dom";

export const ProfileNav = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [adminArray, setAdminArray] = useState({});

    const dispatch = useDispatch();

    const open = Boolean(anchorEl);

    const adminProfile = useSelector((state) => state.members)
    console.log(adminProfile);
    useEffect(() => {
        setAdminArray(adminProfile[0]);
    }, [adminProfile])

    const handleClick = (event) => setAnchorEl(event.currentTarget);

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="caption" display="block" sx={{ marginTop: "0.5rem" }}>
                    {adminArray?.firstName}
                </Typography>

                <IconButton
                    disableRipple
                    color="primary"
                    aria-label="profile-picture"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    component="label"
                    onClick={handleClick}
                >
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
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar src={adminArray?.profilePhoto} />
                    Profile
                </MenuItem>

                <Divider />

                <MenuItem
                    // containerElement={<Link to="/" />}
                    href="/"
                    onClick={() => {
                        handleClose();
                        dispatch(logOut());
                        dispatch(resetMember())
                        removeData("user")
                    }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}