import { useState } from "react";
import { Button, Stack } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
import { themes } from "../../../Tools/colors";

export const TotalTasks = () => {
    return (
        <Stack alignSelf="flex-start">
            <Button
                disableRipple
                variant="contained"
                disabled
                startIcon={<FunctionsIcon />}
                sx={{
                    textTransform: "none",
                    "&:disabled": {
                        backgroundColor: `${themes.palette.secondary.main}`,
                        color: "white"
                    }
                }}
            >
                Total Tasks:
            </Button>
        </Stack>
    );
}
