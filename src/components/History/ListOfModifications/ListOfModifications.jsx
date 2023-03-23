import { useState, useEffect } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {
    Divider,
    Stack,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';

export const ListOfModifications = () => {
    const [modifications, setModifications] = useState([])

    useEffect(() => {
        setModifications([])
    }, [])

    return (
        <Stack >
            <Typography variant="h6" component="div">
                History of Modifications
            </Typography>
            <List sx={{ marginBottom: "1rem", minWidth: "60%" }}>
                {modifications?.map(modification => (
                    <>
                        <ListItem>
                            <ListItemIcon>
                                {
                                    modification.type === 'delete' ?
                                        <HighlightOffIcon color="error" /> : modification.type === 'edit' ?
                                            <EditIcon color="primary" /> : modification.type === "complete" ?
                                                <CheckCircleOutlineIcon color="warning" /> : <AddCircleOutlineIcon color="primary" />
                                }
                            </ListItemIcon>
                            <ListItemText>
                                <strong>{modification.user.firstName} </strong>
                                {modification.user.lastName}
                                <strong> {modification.type} </strong>
                                {modification.title} at {modification.data} {modification.time}
                            </ListItemText>
                        </ListItem>
                        <Divider variant="middle" />
                    </>))}
            </List>
        </Stack>
    );
}