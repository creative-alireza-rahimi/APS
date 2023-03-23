import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const TasksList = React.memo(
    ({ tasks }) => {
        console.log(tasks);
        return (
            <List sx={{ maxHeight: 300 }}>
                {tasks.map((task, i) => (<ListItem>
                    {i + 1} - <ListItemText
                        primary={task.title}
                        sx={{marginLeft: "0.4rem"}}
                    />
                </ListItem>))}
            </List>
        );
    }
);