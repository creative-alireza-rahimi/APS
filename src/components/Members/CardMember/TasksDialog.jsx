import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider
} from '@mui/material';

import { TasksList } from "./TasksList";

export const TasksDialog = React.memo(({ open, handleTasksDialog, tasks }) => {
    return (
        <Dialog
            open={open}
            onClose={handleTasksDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle id="alert-dialog-title">
                Tasks
            </DialogTitle>

            <Divider variant="middle" />

            <DialogContent>
                <TasksList tasks={tasks} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleTasksDialog}>Back</Button>
            </DialogActions>
        </Dialog>
    );
})