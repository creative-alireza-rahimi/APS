import { useState } from "react";
import { EditTextarea } from "./EditTextarea";
import { EditMembers } from "./EditMembers";
import {
    TextField,
    DialogContentText,
} from '@mui/material';

export const EditTaskDialog = () => {
    const [ImagePreview, setImagePreview] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [members, setMembers] = useState([])

    function handleTitle (e) {
        setTitle(e.target.value)
    }

    function handleDescription(des){
        setDescription(des)
    }

    return (
        <div>
            <DialogContentText>
                Edit as you wish {description}
            </DialogContentText>

            <TextField
                autoFocus
                id="title"
                label="Title"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleTitle}
                sx={{marginTop: "1rem"}}
            />

            <EditTextarea setDescription={handleDescription} />

            <EditMembers Image={ImagePreview} members={members}/>

        </div>
    );
}