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
        const response = await axios.post("http://localhost:5000/tasks/newTask", task);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function getTasks({ adminId }) {
    try {
        const response = await axios.get("http://localhost:5000/tasks/getTasks", { params: { adminId } });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function editTasks(task) {
    try {
        const response = await axios.put("http://localhost:5000/tasks/editTask", task);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteTasks({ adminId, deleteTaskId: taskId }) {
    try {
        const response = await axios.put("http://localhost:5000/tasks/deleteTask", { adminId, taskId });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function completeTasks({ adminId, taskId }) {
    try {
        const response = await axios.put("http://localhost:5000/tasks/completeTask", { adminId, taskId });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function revertTasks({ adminId, taskId }) {
    try {
        const response = await axios.put("http://localhost:5000/tasks/revertTask", { adminId, taskId });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteAllTasks({ adminId }) {
    try {
        const response = await axios.put("http://localhost:5000/tasks/deleteAllTasks", { adminId });
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteCompletedTasks({ adminId }) {
    try {
        const response = await axios.put("http://localhost:5000/tasks/deleteCompletedTasks", { adminId });
        return response;
    } catch (error) {
        console.error(error);
    }
}