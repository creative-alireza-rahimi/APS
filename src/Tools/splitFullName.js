import { capitalFirstLetter } from "./capitalFirstLetter";
export const splitFullName = (str) => {
    const fullname = str.split(" ")
    const firstName = capitalFirstLetter(fullname[0]);
    const lastName = capitalFirstLetter(fullname[1]);
    
    return {
        firstName,
        lastName,
        fullName: [firstName, lastName].join(" ")
    }
}