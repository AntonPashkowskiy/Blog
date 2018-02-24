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