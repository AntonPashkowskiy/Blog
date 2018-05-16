import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400 } from 'material-ui/styles/colors';
import { formatDateAsString, getPriorityStringById } from './TodoUtils';
import { TodoItemStatus } from '../../reducers/actions';

export default class TodoListItem extends Component {
    render() {
        const {
            id,
            title,
            dueDate,
            priority,
            status,
            onEditTodoItemClick,
            onDeleteTodoItemClick,
            onToggleStatusButtonClick
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
                <MenuItem onClick={() => onEditTodoItemClick(todoItem)}>Edit</MenuItem>
                <MenuItem onClick={() => onDeleteTodoItemClick(id)}>Delete</MenuItem>
            </IconMenu>
        );

        const statusCheckbox = (
            <Checkbox 
                onCheck={() => onToggleStatusButtonClick(todoItem)}
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
