import { useState } from 'react';
import {
    TextField,
    Autocomplete,
    FormControl,
    Avatar,
    Stack
} from '@mui/material';

export const AddMembers = ({ Image }) => {
    const [value, setValue] = useState([]);

    return (
        <FormControl error variant="standard" sx={{ maxWidth: 350, minWidth: "100%", marginTop: "1rem" }}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                multiple
                id="members"
                options={members}
                getOptionLabel={(option) => option.fullName}
                renderOption={(option) => (
                    <Stack {...option} direction="row" alignItems="center">
                        <Avatar alt="Remy Sharp" src="./photo.jpg" sx={{ width: "2rem", height: "2rem", marginRight: "1rem" }} />
                        {option.key}
                    </Stack>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Members"
                    />
                )}
            />
        </FormControl>
    );
}

const members = [
    {
        fullName: "Alireza Rahimi"
    },
];