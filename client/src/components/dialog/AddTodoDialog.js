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

// Temp function
const getId = (min, max) => {
    return Math.random() * (max - min) + min;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCancelDialog: () => {
            dispatch(closeAddTodoDialogAction());
        },
        onConfirmDialog: newTodoItem => {
            newTodoItem.id = getId(1, 10000);
            newTodoItem.status = TodoItemStatus.Active;
            dispatch(addTodoItemAction(newTodoItem));
            dispatch(closeAddTodoDialogAction());
        }
    };
}

const AddTodoDialog = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoDialog);

export default AddTodoDialog;