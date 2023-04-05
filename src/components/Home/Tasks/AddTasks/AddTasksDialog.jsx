import { useState } from 'react';
import { AddTextarea } from "./AddTextarea";
import { AddMembers } from "./AddMembers";
import { newTask } from "../../../../API/API";
import { useSelector } from 'react-redux';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    TextField,
    LinearProgress
} from '@mui/material';

export const AddTasksDialog = ({ modalStatus, handleAddDialog, isReq }) => {
    const taskMembers = useSelector(state => state.members)

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedMembers, setSelectedMembers] = useState([]);

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleDescription(des) {
        setDescription(des)
    }

    async function handleSubmitTask() {
        setIsLoading(true)

        const task = await newTask({
            title,
            description,
            members: selectedMembers,
            adminId: taskMembers?.at(0)?.adminId,
            isCompleted: false,
            isEdited: false,
            isDeleted: false,
        })

        if (task.status === 200) {
            setIsLoading(false)
            isReq(req => !req)
            handleAdd();
        }
    }

    function handleAdd() {
        handleAddDialog()
    }

    return (
        <Dialog
            open={modalStatus}
            onClose={handleAddDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {isLoading && <LinearProgress />}
            <DialogTitle id="alert-dialog-title">
                Add a Task
            </DialogTitle>

            <Divider variant="middle" />

            <DialogContent>
                <TextField
                    autoFocus
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={handleTitle}
                />

                <AddTextarea setDescription={handleDescription} />

                <AddMembers
                    members={taskMembers?.at(0)?.members}
                    selectMembers={{ value: selectedMembers, setValue: setSelectedMembers }} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAddDialog}>Cancel</Button>
                <Button onClick={() => {
                    handleSubmitTask();
                }} autoFocus>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}