import TodoList from './TodoList.jsx';
import { connect } from 'react-redux';
import { SortingType, VisibilityFilterType, TodoItemStatus } from '../../reducers/actions';

const filterTodoItems = (todoItems, visibilityFilterType) => {
    return todoItems.filter(todo => {
        switch (visibilityFilterType) {
            case VisibilityFilterType.ShowAll:
                return true;
            case VisibilityFilterType.ShowActive:
                return todo.status === TodoItemStatus.Active;
            case VisibilityFilterType.ShowCompleted:
                return todo.status === TodoItemStatus.Completed;
        }
        return false;  
    });
}

const byDateSorter = (firstTodo, secondTodo) =>  {
    if (firstTodo.dueDate > secondTodo.dueDate) {
        return 1;
    }

    if (firstTodo.dueDate < secondTodo.dueDate) {
        return -1;
    }
    return 0;
}

const byPrioritySorter = (firstTodo, secondTodo) =>  {
    return secondTodo.priority - firstTodo.priority;
}

const sortTodoItems = (todoItems, sortingType) => {
    switch (sortingType) {
        case SortingType.ByDate:
            return todoItems.sort(byDateSorter);
        
        case SortingType.ByPriority:
            return todoItems.sort(byPrioritySorter);
    }
    return todoItems;
}

const mapStateToProps = (state, ownProps) => {
    let filteredItems = filterTodoItems(state.todoList, state.visibilityFilterType);
    let sortedItems = sortTodoItems(filteredItems, state.sortingType);

    return {
        todoList: sortedItems
    };
}

const FunctionalTodoList = connect(mapStateToProps, null)(TodoList);

export default FunctionalTodoList;