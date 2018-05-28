import {
    OPEN_ADD_TODO_DIALOG,
    CLOSE_ADD_TODO_DIALOG,
    OPEN_EDIT_TODO_DIALOG,
    CLOSE_EDIT_TODO_DIALOG
} from "./actions";

export function addTodoDialogReducer(state = false, action) {
    switch (action.type) {
        case OPEN_ADD_TODO_DIALOG:
            return true;
        case CLOSE_ADD_TODO_DIALOG:
            return false;
        default:
            return state;
    }
}

export function editTodoDialogReducer(state, action) {
    switch (action.type) {
        case OPEN_EDIT_TODO_DIALOG:
            return {
                isEditTodoDialogOpen: true,
                itemToEdit: action.itemToEdit
            };
        case CLOSE_EDIT_TODO_DIALOG:
        default:
            return {
                isEditTodoDialogOpen: false,
                itemToEdit: null
            };
    }
}