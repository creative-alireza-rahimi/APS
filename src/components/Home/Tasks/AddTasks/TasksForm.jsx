import { useState } from "react";
import { AddTextarea } from "./AddTextarea";
import { AddMembers } from "./AddMembers";
import {
    TextField,
    DialogContentText,
} from '@mui/material';

export const TasksForm = () => {
    const [ImagePreview, setImagePreview] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [members, setMembers] = useState([])

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleDescription(des) {
        setDescription(des)
    }

    return (
        <>
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

            <AddMembers Image={ImagePreview} members={members} />

        </>
    );
}