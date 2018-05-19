import TodoListItem from './TodoListItem.jsx';
import { connect } from 'react-redux';
import {
    deleteTodoItemAction,
    toggleItemStatusAction,
    openEditTodoDialogAction
} from '../../reducers/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEditTodoItemClick: todoItem => dispatch(openEditTodoDialogAction({
            id: todoItem.id,
            title: todoItem.title,
            status: todoItem.status,
            priority: todoItem.priority,
            dueDate: todoItem.dueDate
        })),
        onDeleteTodoItemClick: id => dispatch(deleteTodoItemAction(id)),
        onToggleStatusButtonClick: todoItem => dispatch(toggleItemStatusAction(todoItem))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(TodoListItem);
