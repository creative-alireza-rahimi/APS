import axios from "axios";

const COUNTRY_URL = `https://restcountries.com/v3.1/all`;

export async function getAllLanguages() {
    try {
        const response = await axios.get(COUNTRY_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Admins
export async function newAdmin(admin) {
    try {
        const response = await axios.post("http://localhost:5000/admin/newAdmin", admin);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function newMembers(member) {
    try {
        console.log(member);
        const response = await axios.put("http://localhost:5000/admin/newMember", member);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getAdmin({ email, password }) {
    try {
        const response = await axios.post("http://localhost:5000/login/getAdmin", { email, password });
        return response;
    } catch (error) {
        console.error(error);
    }
}

// Tasks
export async function newTask(task) {
    try {
        console.log(task);
        const response = await axios.post("http://localhost:5000/tasks/newTask", task);
        console.log("response: ", response);

        return response;
    } catch (error) {
        console.error(error);
    }
}
