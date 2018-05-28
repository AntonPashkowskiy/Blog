import { CHANGE_VISIBILITY_FILTER, VisibilityFilterType } from "./actions";

export default function visibilityFilterTypeReducer(state = VisibilityFilterType.ShowAll, action) {
    switch (action.type) {
        case CHANGE_VISIBILITY_FILTER:
            return action.visibilityFilterType;
        default:
            return state;
    }
}