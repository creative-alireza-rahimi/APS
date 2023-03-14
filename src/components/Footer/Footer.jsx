import { themes } from "../../Tools/colors";
import { ContactMe } from "./ContactMe/ContactMe";
import {
    CssBaseline,
    Box,
    Container,
    Stack,
} from '@mui/material';

export const Footer = () => {
    return (
        <>
            <CssBaseline />
            <Container sx={{position: "fixed", bottom: '0'}}>
                <Box
                    sx={{
                        width: "100%",
                        height: 35,
                        color: "white",
                        backgroundColor: themes.palette.primary.dark,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                    }}
                >

                    <Stack spacing={12} direction="row" justifyContent="space-between">
                        <ContactMe />
                    </Stack>

                </Box>
            </Container>
        </>
    );
}