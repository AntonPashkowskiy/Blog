import { connect } from "react-redux";

import TodoListItem from "../../components/todo/TodoListItem.jsx";
import {
    deleteTodoItemAction,
    toggleItemStatusAction,
    openEditTodoDialogAction
} from "../../reducers/actions";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEditTodoItemClick: id => dispatch(openEditTodoDialogAction(id)),
        onDeleteTodoItemClick: id => dispatch(deleteTodoItemAction(id)),
        onToggleStatusButtonClick: todoItem => dispatch(toggleItemStatusAction(todoItem))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TodoListItem);
