import TodoDialog from './TodoDialog.jsx';
import { connect } from 'react-redux';
import { 
    closeAddTodoDialogAction,
    addTodoItemAction,
    TodoItemPriority,
    TodoItemStatus 
} from '../../reducers/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        dialogTitle: "Add todo:",
        confirmButtonText: "Add",
        isDialogOpen: state.isAddTodoDialogOpen,
        priorityItems: Object.entries(TodoItemPriority).map((priorityEntry) => {
            return {
                value: priorityEntry[1],
                text: priorityEntry[0]
            };
        }),
        title: "",
        dueDate: null,
        priority: TodoItemPriority.Low
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCancelDialog: () => {
            dispatch(closeAddTodoDialogAction());
        },
        onConfirmDialog: newTodoItem => {
            dispatch(addTodoItemAction(newTodoItem));
            dispatch(closeAddTodoDialogAction());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoDialog);
