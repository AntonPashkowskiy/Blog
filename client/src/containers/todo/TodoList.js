import { connect } from 'react-redux';

import TodoList from '../../components/todo/TodoList.jsx';
import {
    SortingType,
    VisibilityFilterType,
    TodoItemStatus,
    loadTodoItemsAction
} from '../../reducers/actions';

const visibilityFilterTypeToFilter = {
    [VisibilityFilterType.ShowAll]: todo => true,
    [VisibilityFilterType.ShowActive]: todo => todo.status === TodoItemStatus.Active,
    [VisibilityFilterType.ShowCompleted]: todo => todo.status === TodoItemStatus.Completed
}

const filterTodoItems = (todoItems, visibilityFilterType) => {
    return todoItems.filter(visibilityFilterTypeToFilter[visibilityFilterType]);
}

const sortingTypeToSorter = {
    [SortingType.ByDate]: (firstTodo, secondTodo) => {
        if (firstTodo.dueDate > secondTodo.dueDate) {
            return 1;
        }
    
        if (firstTodo.dueDate < secondTodo.dueDate) {
            return -1;
        }
        return 0;
    },
    [SortingType.ByPriority]: (firstTodo, secondTodo) => {
        return secondTodo.priority - firstTodo.priority;
    }
}

const sortTodoItems = (todoItems, sortingType) => {
    return todoItems.sort(sortingTypeToSorter[sortingType]);
}

const mapStateToProps = (state, ownProps) => {
    let filteredItems = filterTodoItems(state.todoList, state.visibilityFilterType);
    let sortedItems = sortTodoItems(filteredItems, state.sortingType);

    return {
        todoList: sortedItems
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onListLoaded: () => dispatch(loadTodoItemsAction()) 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
