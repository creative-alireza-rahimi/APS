import { useState } from 'react';
import {
    TextField,
    Autocomplete,
    FormControl,
    FormHelperText
} from '@mui/material';

export const SearchSkills = () => {
    const [value, setValue] = useState([]);

    return (
        <FormControl error variant="standard" sx={{ maxWidth: 400, minWidth: "100%" }}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                multiple
                id="skills"
                aria-describedby="skills-error"
                options={technologies}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Skills"
                        placeholder={value.length > 0 ? "" : "ReactJs, ..."}
                    />
                )}
            />
            <FormHelperText id="skills-error">
                {value.length > 5 || value.length < 2 ? "(2 <= Skills <= 5)" : ""}
            </FormHelperText>
        </FormControl>
    );
}

const technologies = [
    {
        "title": "HTML"
    },
    {
        "title": "CSS"
    },
    {
        "title": "JavaScript"
    },
    {
        "title": "ReactJS"
    },
    {
        "title": "AngularJS"
    },
    {
        "title": "VueJS"
    },
    {
        "title": "NodeJS"
    },
    {
        "title": "jQuery"
    },
    {
        "title": "Bootstrap"
    },
    {
        "title": "ASP.NET"
    },
    {
        "title": "Django"
    },
    {
        "title": "Android SDK"
    },
    {
        "title": "iOS SDK"
    },
    {
        "title": "React Native"
    },
    {
        "title": "Xamarin"
    },
    {
        "title": "Swift"
    },
    {
        "title": "Java"
    },
    {
        "title": "Kotlin"
    },
    {
        "title": "Ruby on Rails"
    },
    {
        "title": "Python"
    },
    {
        "title": "PHP"
    },
    {
        "title": "Laravel"
    },
    {
        "title": "Flask"
    },
    {
        "title": "Spring Boot"
    },
    {
        "title": "Ruby"
    },
    {
        "title": "ExpressJS"
    },
    {
        "title": "SQL"
    },
    {
        "title": "MySQL"
    },
    {
        "title": "PostgreSQL"
    },
    {
        "title": "MongoDB"
    },
    {
        "title": "Oracle"
    },
    {
        "title": "SQLite"
    },
    {
        "title": "Amazon Web Services (AWS)"
    },
    {
        "title": "Microsoft Azure"
    },
    {
        "title": "Google Cloud Platform (GCP)"
    },
    {
        "title": "TensorFlow"
    },
    {
        "title": "Keras"
    },
    {
        "title": "PyTorch"
    },
    {
        "title": "OpenCV"
    },
    {
        "title": "Scikit-Learn"
    },
    {
        "title": "Docker"
    },
    {
        "title": "Kubernetes"
    },
    {
        "title": "Git"
    },
    {
        "title": "Jenkins"
    },
    {
        "title": "Ansible"
    },
    {
        "title": "Chef"
    },
    {
        "title": "Puppet"
    }
];