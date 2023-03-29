import axios from "axios";

const COUNTRY_URL = `https://restcountries.com/v3.1/all`;

export async function newAdmin(admin) {
    try {
        const response = await axios.post("http://localhost:5000/admin/newAdmin", admin);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function newMembers(member) {
    try {
        console.log(member);
        const response = await axios.put("http://localhost:5000/admin/newMember", member);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getAllLanguages() {
    try {
        const response = await axios.get(COUNTRY_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

