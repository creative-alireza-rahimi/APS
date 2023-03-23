import { useState } from 'react';
import { TasksDialog } from "./TasksDialog";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  Stack,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Chip,
  Typography,
} from '@mui/material';

export const CardMember = ({ members }) => {
  const [openTasksDialog, setOpenTasksDialog] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleTasksDialog(tasks) {
    setTasks(tasks)
    setOpenTasksDialog(openTasksDialog => !openTasksDialog)
  }

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{ margin: '3rem 0' }}>
      {members.map(member => (
        <Card sx={{ maxWidth: 345, margin: "1rem 0.6rem", minWidth: 340, minHeight: 220 }} key={member.fullName} raised="true">
          <CardHeader
            avatar={
              <Avatar src={member.fullName} alt={member.fullName} />
            }
            action={
              member.isAdmin ?
                <SupervisorAccountIcon
                  sx={{ fontSize: "xx-large", margin: "1rem 1rem 0 0" }}
                  color="warning" /> :
                <PersonIcon
                  sx={{ fontSize: "xx-large", margin: "1rem 1rem 0 0" }}
                  color="action" />
            }
            title={member.fullName}
            subheader={`Age: ${member.age}`}
          />
          <CardContent>
            <Stack direction="row" justifyContent="flex-start" >
              <LinkedInIcon
                fontSize="large"
                color="primary"
                sx={{ marginRight: "1rem", cursor: 'pointer' }}
                onClick={() => console.log("linkedIn")} />
              <GitHubIcon
                fontSize="large"
                sx={{ cursor: 'pointer' }}
                onClick={() => console.log("github")} />
            </Stack>
            <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ marginTop: '1rem' }}>
              <Typography variant="button" sx={{ marginRight: "0.6rem" }}>
                Tasks:
              </Typography>

              {member?.tasks?.map((task, i) => (
                i < 3 &&
                <Chip label={task?.title} size="small" color={task?.isCompleted ? "success" : "error"} sx={{ margin: "0.2rem ", width: "fit-content" }} />
              ))}
              {member?.tasks?.length > 3 && <Chip label={<MoreHorizIcon sx={{ paddingTop: "0.4rem" }} />} sx={{ height: "1.6rem" }} onClick={() => handleTasksDialog(member.tasks)} />}
              {openTasksDialog && <TasksDialog open={openTasksDialog} handleTasksDialog={handleTasksDialog} tasks={tasks} />}
            </Stack>
          </CardContent>
        </Card>))}
    </Stack>
  );
}