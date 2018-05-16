import axios from 'axios';

const API = "/api/todos/";

const getAllTodoItems = () => {
    return axios.get(API);
};

const getTodoItem = id => {
    return axios.get(`${API}/${id}`);
};

const saveTodoItem = todoItem => {
    return axios.post(API, todoItem);
};

const updateTodoItem = todoItem => {
    return axios.put(API, todoItem);
};

const deleteTodoItem = id => {
    return axios.delete(`${API}/${id}`);
};

export default {
    getAllTodoItems,
    getTodoItem,
    saveTodoItem,
    updateTodoItem,
    deleteTodoItem
};