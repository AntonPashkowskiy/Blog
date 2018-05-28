import { combineReducers } from 'redux';

import sortingTypeReducer from './sortingTypeReducer';
import visibilityFilterTypeReducer from './visibilityFilterTypeReducer';
import todoListReducer from './todoListReducer';
import { addTodoDialogReducer, editTodoDialogReducer } from './todoDialogReducers';

const todoApplication = combineReducers({
    sortingType: sortingTypeReducer,
    visibilityFilterType: visibilityFilterTypeReducer,
    todoList: todoListReducer,
    isAddTodoDialogOpen: addTodoDialogReducer,
    editDialog: editTodoDialogReducer
});

export default todoApplication;