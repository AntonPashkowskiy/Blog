import TodoListItem from './TodoListItem.jsx';
import { connect } from 'react-redux';
import { deleteTodoItemAction, toggleItemStatusAction } from '../../reducers/actions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEditTodoItemClick: () => console.log("Open edit dialog"),
        onDeleteTodoItemClick: id => dispatch(deleteTodoItemAction(id)),
        onToggleStatusButtonClick: id => dispatch(toggleItemStatusAction(id))
    };
}

const FunctionalTodoListItem = connect(
    null,
    mapDispatchToProps
)(TodoListItem);

export default FunctionalTodoListItem;