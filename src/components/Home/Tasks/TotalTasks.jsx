import { useState } from "react";
import { Button, Stack } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';

export const TotalTasks = () => {
    return (
        <Stack alignSelf="flex-start">
            <Button
                disableRipple
                variant="contained"
                color="primary"
                startIcon={<FunctionsIcon />}
                sx={{
                    textTransform: "none",
                }}
            >
                Total Tasks:
            </Button>
        </Stack>
    );
}
