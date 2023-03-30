import { useState } from 'react';
import { TasksDialog } from "./TasksDialog";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TranslateIcon from '@mui/icons-material/Translate';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import {
  Stack,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Chip,
  Typography,
  Divider,
  Tooltip
} from '@mui/material';

export const CardMember = ({ members }) => {
  const [openTasksDialog, setOpenTasksDialog] = useState(false);
  const [tasks, setTasks] = useState([]);
  console.log(members[0]?.members);
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
      {members[0]?.members?.map(member => (
        <Card sx={{ maxWidth: 330, minWidth: 320, margin: "1rem 0.6rem", minHeight: 220 }} key={member?.fullName} raised={true}>
          <CardHeader
            avatar={
              <Avatar src={member?.profilePhoto} alt={member?.fullName} />
            }
            action={
              member?.isAdmin ?
                <Tooltip title="Admin">
                  <SupervisorAccountIcon
                    sx={{ fontSize: "xx-large", margin: "1rem 1rem 0 0" }}
                    color="warning" />
                </Tooltip> :
                <Tooltip title="User">
                  <PersonIcon
                    sx={{ fontSize: "xx-large", margin: "1rem 1rem 0 0" }}
                    color="action" />
                </Tooltip>
            }
            title={member?.fullName}
            subheader={`Age: ${member?.age}`}
          />
          <CardContent>
            <Stack direction="row" justifyContent="flex-start" gap={3}>
              <Stack direction="row" justifyContent="flex-start">
                <Tooltip title="LinkedIn">
                  <LinkedInIcon
                    fontSize="large"
                    color="primary"
                    sx={{ marginRight: "1rem", cursor: 'pointer' }}
                    onClick={() => console.log("linkedIn")} />
                </Tooltip>

                <Tooltip title="Github">
                  <GitHubIcon
                    fontSize="large"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => console.log("github")} />
                </Tooltip>
              </Stack>

              <Divider orientation="vertical" flexItem />

              <Stack direction="row" alignItems='center'>
                <Tooltip title="Language">
                  <TranslateIcon />
                </Tooltip>

                <Typography variant="overline" display="block" sx={{ marginLeft: "0.8rem" }}>
                  {member?.language[0]}
                </Typography>
              </Stack>
            </Stack>


            <Stack direction="row" alignItems="center" margin="1rem 0">
              <Tooltip title="Skills">
                <PsychologyIcon fontSize="large" color="primary" sx={{ marginRight: "0.8rem" }} />
              </Tooltip>
              <Stack direction='row' flexWrap="wrap" >
                {member?.skills
                  ?.map(skill => skill)
                  ?.sort((a, b) => a.title.length - b.title.length)
                  ?.map(skill =>
                    <Chip key={skill?.title} size='small' label={skill?.title} sx={{ borderRadius: "1px", margin: "0.2rem 0.2rem" }} />
                  )}
              </Stack>
            </Stack>

            <Divider variant="middle" sx={{ margin: "1rem 0" }} />

            <Stack direction="row" flexWrap="wrap" alignItems="center" sx={{ marginTop: '1rem' }}>
              <Tooltip title="Tasks">
                <AssignmentOutlinedIcon fontSize="large" color="primary" />
              </Tooltip>

              {member?.tasks?.map((task, i) => (
                i < 3 &&
                <Chip key={i} label={task?.title} size="small" color={task?.isCompleted ? "success" : "error"} sx={{ margin: "0.2rem ", width: "fit-content" }} />
              ))}
              {member?.tasks?.length > 3 && <Chip label={<MoreHorizIcon sx={{ paddingTop: "0.4rem" }} />} sx={{ height: "1.6rem" }} onClick={() => handleTasksDialog(member.tasks)} />}
              {openTasksDialog && <TasksDialog open={openTasksDialog} handleTasksDialog={handleTasksDialog} tasks={tasks} />}
            </Stack>
          </CardContent>
        </Card>))}
    </Stack>
  );
}