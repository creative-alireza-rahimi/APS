export const saveData = (key, user) => {
    localStorage.setItem(key, JSON.stringify(user));
}

export const removeData = (key) => {
    localStorage.removeItem(key);
}

export const readData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}