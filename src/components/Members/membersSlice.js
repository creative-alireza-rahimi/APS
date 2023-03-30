import { createSlice } from '@reduxjs/toolkit'

const membersSliceState = [{
    fullName: "",
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    github: "",
    linkedIn: "",
    skills: [],
    language: [],
    profilePhoto: "",
    members: [],
    adminId: "",
    isAdmin: false
}]

export const membersSlice = createSlice({
    name: 'members',
    initialState: membersSliceState,
    reducers: {
        getMember: (state, action) => {
            console.log(action);
            return [action.payload];
        },
        resetMember: (state) => {
            return membersSliceState;
        },
        newMember: (state, action) => {
            console.log(action);
            return [action.payload];
        }
    },
})

// Action creators are generated for each case reducer function
export const { getMember, resetMember, newMember } = membersSlice.actions

export default membersSlice.reducer