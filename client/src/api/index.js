import axios from 'axios';
import { TodoItemStatus } from '../reducers/actions';

const API = "/api/todos/";

// API Calls
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

// Fake API calls
const fakeGetAllTodoItems = () => {
    return new Promise((resolve, reject) => {
        resolve([]);
    });
};

const fakeGetTodoItem = id => {
    return new Promise((resolve, reject) => {
        resolve(null);
    });
};

const fakeSaveTodoItem = todoItem => {
    const getId = (min, max) => {
        const id = Math.random() * (max - min) + min;
        return id.toString();
    };
    
    return new Promise((resolve, reject) => {
        todoItem.id = getId(1, 10000);
        todoItem.status = TodoItemStatus.Active;
        resolve(todoItem);
    });
};

const fakeUpdateTodoItem = todoItem => {
    return new Promise((resolve, reject) => {
        resolve(todoItem);
    });
};

const fakeDeleteTodoItem = id => {
    return new Promise((resolve, reject) => {
        resolve();
    });
};

export default {
    getAllTodoItems: fakeGetAllTodoItems,
    getTodoItem: fakeGetTodoItem,
    saveTodoItem: fakeSaveTodoItem,
    updateTodoItem: fakeUpdateTodoItem,
    deleteTodoItem: fakeDeleteTodoItem
};