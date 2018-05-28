import thunk from "redux-thunk";
import api from "../api";
import { toggleTodoItemStatus } from "../helpers/todoItemHelper";

/*
    Change sorting type
*/
export const CHANGE_SORTING_TYPE = "CHANGE_SORTING_TYPE";

export const SortingType = {
    ByDate: 1,
    ByPriority: 2
};

export function changeSortingTypeAction(sortingType) {
    return {
        type: CHANGE_SORTING_TYPE,
        sortingType: sortingType
    };
}

/*
    Visibility filter
*/
export const CHANGE_VISIBILITY_FILTER = "CHANGE_VISIBILITY_FILTER";

export const VisibilityFilterType = {
    ShowAll: 1,
    ShowActive: 2,
    ShowCompleted: 3
};

export function changeVisibilityFilterAction(visibilityFilterType) {
    return {
        type: CHANGE_VISIBILITY_FILTER,
        visibilityFilterType: visibilityFilterType
    };
}

/*
    Todo list
*/
export const LOAD_TODO_ITEMS = "LOAD_TODO_ITEMS";
export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM";
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM";
export const TOGGLE_ITEM_STATUS = "TOGGLE_ITEM_STATUS";

export const TodoItemPriority = {
    Low: 1,
    Medium: 2,
    Hight: 3
};

export const TodoItemStatus = {
    Active: 1,
    Completed: 2
};

export function loadTodoItemsAction() {
    return dispatch => api.getAllTodoItems()
        .then(data => dispatch({
            type: LOAD_TODO_ITEMS,
            items: data
        }));
}

export function addTodoItemAction(todoItem) {
    return dispatch => api.saveTodoItem(todoItem)
        .then(data => dispatch({
            type: ADD_TODO_ITEM,
            item: data
        }));
}

export function updateTodoItemAction(todoItem) {
    return dispatch => api.updateTodoItem(todoItem)
        .then(success => dispatch({
            type: UPDATE_TODO_ITEM,
            item: todoItem
        }));
}

export function deleteTodoItemAction(id) {
    return dispatch => api.deleteTodoItem(id)
        .then(success => dispatch({
            type: DELETE_TODO_ITEM,
            itemId: id
        }));
}

export function toggleItemStatusAction(todoItem) {
    return dispatch => {
        const todoItemToUpdate = toggleTodoItemStatus(todoItem);

        api.updateTodoItem(todoItemToUpdate)
            .then(success => dispatch({
                type: TOGGLE_ITEM_STATUS,
                item: todoItemToUpdate
            }));
    };
}

/*
    Add todo dialog
*/
export const OPEN_ADD_TODO_DIALOG = "OPEN_ADD_TODO_DIALOG";
export const CLOSE_ADD_TODO_DIALOG = "CLOSE_ADD_TODO_DIALOG";

export function openAddTodoDialogAction() {
    return {
        type: OPEN_ADD_TODO_DIALOG
    };
}

export function closeAddTodoDialogAction() {
    return {
        type: CLOSE_ADD_TODO_DIALOG
    };
}

/*
    Edit todo dialog
*/
export const OPEN_EDIT_TODO_DIALOG = "OPEN_EDIT_TODO_DIALOG";
export const CLOSE_EDIT_TODO_DIALOG = "CLOSE_EDIT_TODO_DIALOG";

export function openEditTodoDialogAction(todoItemId) {
    return {
        type: OPEN_EDIT_TODO_DIALOG,
        itemToEditId: todoItemId
    };
}

export function closeEditTodoDialogAction() {
    return {
        type: CLOSE_EDIT_TODO_DIALOG
    };
}