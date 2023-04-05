import { useState, useEffect } from 'react';
import { Tasks } from "./Tasks/Tasks";
import { DeleteTasks } from "./Tasks/DeleteTasks";
import { AddTasks } from "./Tasks/AddTasks/AddTasks";
import { TotalTasks } from "./Tasks/TotalTasks";
import { useSelector } from 'react-redux';
import { getTasks } from "../../API/API";
import {
    CssBaseline,
    Container,
    Stack,
    Avatar,
    Divider,
    Chip,
    CircularProgress
} from '@mui/material';

export const Home = () => {
    const members = useSelector(state => state.members)
    const [hasComplete, setHasComplete] = useState([])
    const [openAdd, setOpenAdd] = useState(false);
    const [tasks, setTasks] = useState([])
    const [isReq, setIsReq] = useState(false);
    const { adminId } = members?.at(0);

    function handleAddDialog() {
        setOpenAdd(openAdd => !openAdd)
    }

    useEffect(() => {
        setTasks([]);
        setHasComplete([]);

        getTasks({ adminId })
            .then(tasksArray => {
                const completedTasks = [];
                const normalTasks = [];

                tasksArray?.data?.map(taskArray => {
                    console.log(taskArray);
                    if (taskArray?.isCompleted) completedTasks.push(taskArray);
                    else normalTasks.push(taskArray)
                })

                setTasks(normalTasks.reverse())
                setHasComplete(completedTasks.reverse())
            })
    }, [isReq])

    return (
        <>
            <CssBaseline />
            <Container>
                <Stack justifyContent="space-between" alignItems="center" spacing={3}>
                    <Stack direction="row" flexWrap="wrap" alignItems="center">
                        {members?.at(0)?.members?.map(member =>
                            <Avatar
                                key={member?.memberId}
                                alt={member?.fullName}
                                src={member?.profilePhoto}
                                sx={{
                                    margin: "0.2rem 0.4rem",
                                    minWidth: member?.isAdmin && "3rem",
                                    minHeight: member?.isAdmin && "3rem",
                                    border: member?.isAdmin && `3px solid #388e3c`,
                                }}
                            />)}
                    </Stack>

                    <Divider variant="middle" role="tasks" sx={{ width: "100%" }}>
                        <Chip label="ALL TASKS" />
                    </Divider>

                    <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
                        <Stack direction="row">
                            <AddTasks isReq={setIsReq} openAdd={openAdd} handleAddDialog={handleAddDialog} />
                            <DeleteTasks title="Tasks" />
                        </Stack>
                        <TotalTasks total={tasks?.length + hasComplete?.length} />
                    </Stack>

                    <Tasks edit tasks={tasks} updateTasks={setTasks} isReq={setIsReq} adminId={adminId} />

                    {hasComplete.length > 0 &&
                        <>
                            <Divider variant="middle" role="tasks" sx={{ width: "100%" }}>
                                <Chip label="COMPLETED TASKS" />
                            </Divider>

                            <DeleteTasks title="Completed Tasks" />

                            <Tasks complete tasks={hasComplete} />
                        </>
                    }
                          {(!tasks.length || !hasComplete) && <CircularProgress />}

                </Stack>
            </Container>
        </>
    )
}