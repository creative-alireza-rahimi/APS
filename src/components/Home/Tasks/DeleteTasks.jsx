import { useState } from "react";
import { Button, Stack } from '@mui/material';
import { DeleteDialog } from "./DeleteDialog/DeleteDialog";
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteTasks = ({ title }) => {
  const [openDelete, setOpenDelete] = useState(false);

  function handleDeleteDialog() {
    setOpenDelete(openDelete => !openDelete)
}
  return (
    <Stack alignSelf="flex-start">
      <Button
        disableRipple
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        sx={{
          textTransform: "none",
        }}
        onClick={handleDeleteDialog}
      >
        {title}
      </Button>
      <DeleteDialog 
        modalStatus={openDelete} 
        handleDeleteDialog={handleDeleteDialog} 
        DeleteDialogTitle={`Delete ${title}`}
        DialogDescription="Are You Sure? Sure Sure?"
        DeleteBtnTitle="Delete All"
        CancelBtnTitle="Mission Abort" />

    </Stack>
  );
}
