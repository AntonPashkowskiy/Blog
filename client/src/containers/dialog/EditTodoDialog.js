import { connect } from "react-redux";

import TodoDialog from "../../components/dialog/TodoDialog.jsx";
import {
    closeEditTodoDialogAction,
    updateTodoItemAction,
    TodoItemPriority
} from "../../reducers/actions";

const mapStateToProps = (state, ownProps) => {
    const itemToEdit = state.editDialog.itemToEdit || {};

    return {
        dialogTitle: "Edit todo:",
        confirmButtonText: "Save changes",
        isDialogOpen: state.editDialog.isEditTodoDialogOpen,
        priorityItems: Object.entries(TodoItemPriority).map((priorityEntry) => {
            return {
                value: priorityEntry[1],
                text: priorityEntry[0]
            };
        }),
        id: itemToEdit.id,
        title: itemToEdit.title,
        dueDate: itemToEdit.dueDate,
        priority: itemToEdit.priority,
        status: itemToEdit.status
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCancelDialog: () => {
            dispatch(closeEditTodoDialogAction());
        },
        onConfirmDialog: updatedTodoItem => {
            dispatch(updateTodoItemAction(updatedTodoItem));
            dispatch(closeEditTodoDialogAction());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoDialog);