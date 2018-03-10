import { OPEN_ADD_TODO_DIALOG, CLOSE_ADD_TODO_DIALOG } from './actions';

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