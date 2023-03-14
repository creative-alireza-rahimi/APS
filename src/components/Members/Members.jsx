import { SearchBox } from "./SearchBox/SearchBox";
import { AddMember } from "./AddMember/AddMember";
import {
    CssBaseline,
    Container,
    Stack,
} from '@mui/material';

export const Members = () => {
    return (
        <>
            <CssBaseline />
            <Container>
                <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                    <AddMember />
                    <SearchBox />
                </Stack>
            </Container>
        </>
    )
}