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

export function addTodoItemAction(todoItem) {
    return {
        type: ADD_TODO_ITEM,
        item: todoItem
    };
}

export function updateTodoItemAction(todoItem) {
    return {
        type: UPDATE_TODO_ITEM,
        item: todoItem
    };
}

export function deleteTodoItemAction(id) {
    return {
        type: DELETE_TODO_ITEM,
        itemId: id
    };
}

export function toggleItemStatusAction(id) {
    return {
        type: TOGGLE_ITEM_STATUS,
        itemId: id
    };
}