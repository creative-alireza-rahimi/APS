import { Button, Stack } from '@mui/material';
import { AddTasksDialog } from "./AddTasksDialog";
import AddIcon from '@mui/icons-material/Add';

export const AddTasks = ({ openAdd, handleAddDialog, isReq }) => {

    return (
        <Stack alignSelf="flex-start">
            <Button
                disableRipple
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                sx={{
                    textTransform: "none",
                    marginRight: "1rem"
                }}
                onClick={handleAddDialog}
            >
                Add
            </Button>
            <AddTasksDialog
                isReq={isReq}
                modalStatus={openAdd}
                handleAddDialog={handleAddDialog} />
        </Stack>
    );
}
