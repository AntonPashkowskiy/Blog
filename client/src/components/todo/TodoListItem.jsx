import React, { Component } from "react";
import PropTypes from "prop-types";

import { ListItem } from "material-ui/List";
import Checkbox from "material-ui/Checkbox";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { grey400 } from "material-ui/styles/colors";

import { formatDateAsString, getPriorityStringById } from "./todoRenderingHelper";
import { TodoItemStatus } from "../../reducers/actions";

export default class TodoListItem extends Component {
    constructor(props) {
        super(props);

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onToggleStatus = this.onToggleStatus.bind(this);
    }

    onEdit() {
        const { id, onEditTodoItemClick } = this.props;

        onEditTodoItemClick(id);
    }

    onDelete() {
        const { id, onDeleteTodoItemClick } = this.props;

        onDeleteTodoItemClick(id);
    }

    onToggleStatus() {
        const { onToggleStatusButtonClick } = this.props;
        const todoItem = this.props;

        onToggleStatusButtonClick(todoItem);
    }

    render() {
        const {
            title,
            dueDate,
            priority,
            status
        } = this.props;
        const todoItem = this.props;

        const formattedDueDate = formatDateAsString(dueDate);
        const formattedPriority = getPriorityStringById(priority);
        const secondaryText = `Due date: ${formattedDueDate}. Priority: ${formattedPriority}`;
        const iconButtonElement = (
            <IconButton
                touch={true}
                tooltipPosition="bottom-left">
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        const rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem onClick={this.onEdit}>Edit</MenuItem>
                <MenuItem onClick={this.onDelete}>Delete</MenuItem>
            </IconMenu>
        );

        const statusCheckbox = (
            <Checkbox
                onCheck={this.onToggleStatus}
                checked={status === TodoItemStatus.Completed}/>
        );

        return (
            <ListItem
                primaryText={title}
                secondaryText={secondaryText}
                leftCheckbox={statusCheckbox}
                rightIconButton={rightIconMenu}>
            </ListItem>
        );
    }
}

TodoListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    dueDate: PropTypes.instanceOf(Date),
    priority: PropTypes.number,
    status: PropTypes.number,
    onEditTodoItemClick: PropTypes.func,
    onDeleteTodoItemClick: PropTypes.func,
    onToggleStatusButtonClick: PropTypes.func
};
