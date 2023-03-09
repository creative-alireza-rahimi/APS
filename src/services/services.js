import axios from "axios";

const URL = `https://todolist-backend-upla.onrender.com/todos`;

export async function getToDo() {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function createToDo(title) {
    try {
        const response = await axios.post(URL, {
            title,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateToDo({title, id}) {
    try {
        const response = await axios.put(URL, {
            title,
            id
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteToDo(id) {
    try {
        const response = await axios.delete(URL, {
            data: {
                id,
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}