import { useState, useEffect } from 'react';
import {
    TextField,
    Autocomplete,
    FormHelperText,
    FormControl
} from '@mui/material';
import { getAllLanguages } from "../../../../API/API";

export const Language = () => {
    const [value, setValue] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        getAllLanguages()
            .then(langs =>
                setLanguages(
                    [...new Set(langs.map(lang => lang.languages && Object.values(lang.languages)[0]))]
                        .filter(lan => lan !== undefined)
                )
            )
    }, [])

    return (
        <FormControl error variant="standard" sx={{ maxWidth: 400, minWidth: "100%" }}>
            <Autocomplete
                value={value}

                multiple
                id="languages"
                aria-describedby="languages-error"
                options={languages}
                getOptionLabel={(option) => {
                    if (option)
                        return option
                }}
                onChange={(_, newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Language"
                        placeholder={value.length > 0 ? "" : "Farsi, English, ..."}
                    />
                )}
            />
            <FormHelperText id="languages-error">
                {value.length > 1 ? "Choose Only one language" : value.length === 0  ? "Choose your language" : ""}
            </FormHelperText>
        </FormControl>
    );
}