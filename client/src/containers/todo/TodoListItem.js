import { connect } from "react-redux";

import TodoListItem from "../../components/todo/TodoListItem.jsx";
import {
    deleteTodoItemAction,
    toggleItemStatusAction,
    openEditTodoDialogAction
} from "../../reducers/actions";

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
};

export default connect(
    null,
    mapDispatchToProps
)(TodoListItem);
