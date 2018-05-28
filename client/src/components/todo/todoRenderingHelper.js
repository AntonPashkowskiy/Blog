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

const priorityToText = {
    [TodoItemPriority.Low]: "Low",
    [TodoItemPriority.Medium]: "Medium",
    [TodoItemPriority.Hight]: "Hight"
};

export const getPriorityStringById = priority => {
    return priorityToText[priority];
};