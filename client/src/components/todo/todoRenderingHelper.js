import { TodoItemPriority } from "../../reducers/actions";

export const formatDateAsString = (date) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        timezone: "UTC",
    };
    return date ? date.toLocaleDateString("en-US", options) : "undefined";
};

export const getPriorityStringById = (priority) => {
    let priorityEntry = Object.entries(TodoItemPriority).find(entry => entry[1] == priority);
    return priorityEntry ? priorityEntry[0] : "undefined";
};