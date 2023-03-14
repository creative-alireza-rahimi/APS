import { themes } from "../../Tools/colors";
import {
    CssBaseline,
    Box,
    Container,
    Stack,
} from '@mui/material';
import { ProfileNav } from "../ProfileNav/ProfileNav";
import { Logo } from "../Logo/Logo";

export const Header = () => {
    return (
        <>
            <CssBaseline />
            <Container>
                <Box
                    sx={{
                        width: "100%",
                        height: 45,
                        color: "white",
                        backgroundColor: themes.palette.primary.dark,
                        borderBottomRightRadius: 5,
                        borderBottomLeftRadius: 5,
                    }}
                >

                    <Stack spacing={12} direction="row" justifyContent="space-between">
                        <Logo />
                        <ProfileNav />
                    </Stack>

                </Box>
            </Container>
        </>
    );
}