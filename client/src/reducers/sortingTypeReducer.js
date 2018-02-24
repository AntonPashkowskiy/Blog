import { CHANGE_SORTING_TYPE, SortingType } from './actions';

export default function sortingTypeReducer(state = SortingType.ByDate, action) {
    switch (action.type) {
        case CHANGE_SORTING_TYPE:
            return action.sortingType;
        default:
            return state;
    }
}