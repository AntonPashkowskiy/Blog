export const toggleTodoItemStatus = todoItem => {
    return Object.assign({}, todo, {
        status: todo.status === TodoItemStatus.Active ? TodoItemStatus.Completed : TodoItemStatus.Active
    });
};