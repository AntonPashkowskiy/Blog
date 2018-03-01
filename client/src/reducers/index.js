import { combineReducers } from 'redux';
import sortingTypeReducer from './sortingTypeReducer'
import visibilityFilterTypeReducer from './visibilityFilterTypeReducer'
import todoListReducer from './todoListReducer'

const todoApplication = combineReducers({
    sortingType: sortingTypeReducer,
    visibilityFilterType: visibilityFilterTypeReducer,
    todoList: todoListReducer
});

export default todoApplication;