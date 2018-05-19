import { TodoItemStatus } from '../reducers/actions';

export const toggleTodoItemStatus = todoItem => {
    return Object.assign({}, todoItem, {
        status: todoItem.status === TodoItemStatus.Active ? TodoItemStatus.Completed : TodoItemStatus.Active
    });
};