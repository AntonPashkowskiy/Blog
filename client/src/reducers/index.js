import { combineReducers } from 'redux';
import sortingTypeReducer from './sortingTypeReducer'
import visibilityFilterTypeReducer from './visibilityFilterTypeReducer'

const todoApplication = combineReducers({
    sortingType: sortingTypeReducer,
    visibilityFilterType: visibilityFilterTypeReducer
});

export default todoApplication;