import { useState } from "react";
import { DeleteDialog } from "./DeleteDialog/DeleteDialog";
import { EditDialog } from "./EditDialog/EditDialog";
import {
    CssBaseline,
    Container,
    Stack,
    Avatar,
    Divider,
    AvatarGroup,
    ButtonGroup,
    Button,
    Box,
    Typography,
    useMediaQuery,
} from '@mui/material';

export const Tasks = () => {
    const isHorizonal = useMediaQuery('(max-width : 650px)');
    const profile500 = useMediaQuery('(max-width : 500px)');
    const profile450 = useMediaQuery('(max-width : 450px)');

    const [openDelete, setOpenDelete] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    function handleDeleteDialog() {
        setOpenDelete(openDelete => !openDelete)
    }

    function handleEditDialog() {
        setOpenEdit(openEdit => !openEdit)
    }

    function handleComplete() {
        console.log("complete");

    }

    return (
        <Stack sx={{ width: "100%" }}>
            <CssBaseline />
            <Container sx={{ padding: "0 !important" }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                    sx={{
                        padding: "1rem 0.6rem",
                        boxShadow: "5px 5px 10px 1px rgb(0 0 0 / 50%)",
                        borderRadius: "5px",
                        margin: "1.6rem 0"
                    }}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ padding: "1.2rem 0" }}>

                        <Box width="1.2rem">
                            1
                        </Box>

                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Stack sx={{ paddingLeft: "1rem" }}>
                            <Typography variant="h5" gutterBottom noWrap={false} sx={{ fontWeight: "bold" }}>
                                Title
                            </Typography>
                            <Typography paragraph sx={{ maxWidth: "15rem" }}>
                                Description
                            </Typography>
                            <AvatarGroup
                                max={profile500 ? profile450 ? 4 : 7 : 10}
                                sx={{
                                    display: "flex",
                                    justifyContent: "start",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar alt="image" src="src" />
                            </AvatarGroup>
                        </Stack>
                    </Stack>

                    {isHorizonal && <Divider sx={{ width: "90%" }} orientation="horizontal" variant="middle" flexItem />}

                    <ButtonGroup
                        orientation={isHorizonal ? "horizontal" : "vertical"}
                        aria-label="vertical outlined button group"
                        sx={{ margin: `${isHorizonal ? "0.6rem auto 0" : "0"}` }}
                    >
                        <Button
                            key="edit"
                            sx={{ "&:hover": { background: "#0288d1", color: "#fff", border: "1px solid #0288d1" } }}
                            onClick={handleEditDialog}>
                            Edit
                        </Button>
                        <Button
                            key="delete"
                            sx={{ "&:hover": { background: "#d32f2f", color: "#fff", border: "1px solid #d32f2f" } }}
                            onClick={handleDeleteDialog}>
                            Delete
                        </Button>
                        <Button
                            key="complete"
                            sx={{ "&:hover": { background: "#388e3c", color: "#fff", border: "1px solid #388e3c" } }}
                            onClick={handleComplete}>
                            Complete
                        </Button>
                    </ButtonGroup>
                </Stack>
            </Container>

            <DeleteDialog modalStatus={openDelete} handleDeleteDialog={handleDeleteDialog}/>
            <EditDialog modalStatus={openEdit} handleEditDialog={handleEditDialog}/>

        </Stack>
    );
}