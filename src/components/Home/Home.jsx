import { useState, useEffect } from 'react';
import { Tasks } from "./Tasks/Tasks";
import { DeleteTasks } from "./Tasks/DeleteTasks";
import { DeleteCompletedTasks } from "./Tasks/DeleteCompletedTasks";
import { AddTasks } from "./Tasks/AddTasks/AddTasks";
import { TotalTasks } from "./Tasks/TotalTasks";
import { useSelector } from 'react-redux';
import { getTasks } from "../../API/API";
import { FailedMessage } from "./FailedMessage";
import {
    CssBaseline,
    Container,
    Stack,
    Avatar,
    Divider,
    Chip,
    Box,
    Typography
} from '@mui/material';

export const Home = () => {
    let clearTimeOut;
    const members = useSelector(state => state.members)
    const [hasComplete, setHasComplete] = useState([])
    const [openAdd, setOpenAdd] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [isReq, setIsReq] = useState(false);
    const [isError, setIsError] = useState(true);
    const { adminId } = members?.at(0);

    function handleAddDialog() {
        setOpenAdd(openAdd => !openAdd)
    }

    function handleErrorMessage() {
        setIsError(true);
    }

    useEffect(() => {
        setTasks([]);
        setHasComplete([]);

        getTasks({ adminId })
            .then(tasksArray => {
                setIsError(false);

                const completedTasks = [];
                const normalTasks = [];

                tasksArray?.data?.map(taskArray => {
                    if (taskArray?.isCompleted) completedTasks.push(taskArray);
                    else normalTasks.push(taskArray)
                })

                setTasks(normalTasks?.reverse())
                setHasComplete(completedTasks?.reverse())


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
                            <AddTasks isReq={setIsReq} openAdd={openAdd} handleAddDialog={handleAddDialog} errorMessage={handleErrorMessage} />
                            <DeleteTasks title="Tasks" adminId={adminId} isReq={setIsReq} />
                        </Stack>
                        <TotalTasks total={tasks?.length + hasComplete?.length} />
                    </Stack>

                    {/* {!tasks?.length && !isError &&
                        <Box sx={{ paddingTop: "3rem", textAlign: "center" }}>
                            <Typography variant="h4">No Active tasks.</Typography>
                            <Typography variant="subtitle2">Use Add or Revert.</Typography>
                        </Box>
                    } */}

                    <Tasks
                        edit
                        tasks={tasks}
                        updateTasks={setTasks}
                        isReq={setIsReq}
                        errorMessage={handleErrorMessage}
                        adminId={adminId} />

                    {hasComplete.length > 0 &&
                        <>
                            <Divider variant="middle" role="tasks" sx={{ width: "100%" }}>
                                <Chip label="COMPLETED TASKS" />
                            </Divider>

                            <DeleteCompletedTasks title="Completed Tasks" adminId={adminId} isReq={setIsReq} errorMessage={handleErrorMessage}/>

                            <Tasks
                                complete
                                tasks={hasComplete}
                                updateTasks={setTasks}
                                isReq={setIsReq}
                                errorMessage={handleErrorMessage}
                                adminId={adminId} />
                        </>
                    }
                    {(!tasks?.length && !hasComplete?.length) && <FailedMessage err={isError} />}

                </Stack>
            </Container>
        </>
    )
}