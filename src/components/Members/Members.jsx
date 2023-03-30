import { useState } from "react";
import { SearchBox } from "../../Form/SearchBox/SearchBox";
import { AddMember } from "./AddMember/AddMember";
import { CardMember } from "./CardMember/CardMember";
import { includesStrings } from "../../Tools/includesStrings";
import { useSelector } from 'react-redux'
import {
    CssBaseline,
    Container,
    Stack,
} from '@mui/material';

export const Members = () => {
    const members = useSelector((state) => state.members)
    
    const [search, setSearch] = useState("");

    return (
        <>
            <CssBaseline />
            <Container>
                <Stack direction="column">
                    <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                        <AddMember />
                        <SearchBox searchValue={setSearch} />
                    </Stack>
                    {members &&
                        <CardMember
                            members={
                                search ?
                                    members.filter(member => includesStrings(member.fullName, search)) :
                                    members} />}
                </Stack>
            </Container>
        </>
    )
}

// const fakeMembers = [
//     {
//         fullName: "Alireza Rahimi",
//         isAdmin: true,
//         age: 23,
//         linkedIn: "creativealireza",
//         github: "creativealireza",
//         tasks: [
//             { title: "wake up", isCompleted: true },
//             { title: "eat shit", isCompleted: false },
//             { title: "fuck off", isCompleted: true }]
//     },
//     {
//         fullName: "ehsan",
//         isAdmin: false,
//         age: 23,
//         linkedIn: "creativealireza",
//         github: "creativealireza",
//         tasks: [
//             { title: "wake up", isCompleted: false },
//             { title: "eat shit", isCompleted: true },
//             { title: "fuck off2", isCompleted: false },
//             { title: "fuck off", isCompleted: true },
//             { title: "fuck offhgj", isCompleted: true },
//             { title: "fuck ofghjf", isCompleted: false },
//             { title: "fuck offghj", isCompleted: false }
//         ]
//     },
//     {
//         fullName: "erfan",
//         isAdmin: false,
//         age: 23,
//         linkedIn: "creativealireza",
//         github: "creativealireza",
//         tasks: [
//             { title: "wake up", isCompleted: false },
//             { title: "eat shit", isCompleted: true },
//             { title: "fuck off", isCompleted: false }]
//     },
//     {
//         fullName: "sara",
//         isAdmin: false,
//         age: 23,
//         linkedIn: "creativealireza",
//         github: "creativealireza",
//         tasks: [
//             { title: "wake up", isCompleted: false },
//             { title: "wake usp", isCompleted: false },
//             { title: "wake usssp", isCompleted: false },
//             { title: "eat shit", isCompleted: false },
//             { title: "fuck off", isCompleted: true }]
//     },
//     {
//         fullName: "zahra",
//         isAdmin: false,
//         age: 23,
//         linkedIn: "creativealireza",
//         github: "creativealireza",
//         tasks: [
//             { title: "wake up", isCompleted: false },
//             { title: "eat shit", isCompleted: true },
//             { title: "fuck off", isCompleted: false }]
//     },
// ];