import { useState } from 'react';
import {
    TextField,
    Autocomplete,
    FormControl,
} from '@mui/material';

export const EditMembers = () => {
    const [value, setValue] = useState([]);

    return (
        <FormControl error variant="standard" sx={{ maxWidth: 400, minWidth: "100%", marginTop: "1rem" }}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                multiple
                id="members"
                options={members}
                getOptionLabel={(option) => option.fullName}
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
}
];