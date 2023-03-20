import { useState } from 'react';
import { Tasks } from "./Tasks/Tasks";
import { DeleteTasks } from "./Tasks/DeleteTasks";
import {
    CssBaseline,
    Container,
    Stack,
    Avatar,
    Divider,
    Chip,
} from '@mui/material';

export const Home = () => {
    const [hasComplete, setHasComplete] = useState(true)

    return (
        <>
            <CssBaseline />
            <Container>
                <Stack justifyContent="space-between" alignItems="center" spacing={3}>
                    <Stack direction="row" flexWrap="wrap">
                        <Avatar alt="Alireza" src="src" />
                    </Stack>

                    <Divider variant="middle" role="tasks" sx={{ width: "100%" }}>
                        <Chip label="ALL TASKS" />
                    </Divider>

                    <DeleteTasks title="Tasks" />

                    <Tasks edit />

                    {hasComplete &&
                        <>
                            <Divider variant="middle" role="tasks" sx={{ width: "100%" }}>
                                <Chip label="COMPLETED TASKS" />
                            </Divider>

                            <DeleteTasks title="Completed Tasks" />

                            <Tasks complete />
                        </>
                    }
                </Stack>
            </Container>
        </>
    )
}