import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { grey400 } from 'material-ui/styles/colors';
import { formatDateAsString, getPriorityStringById } from './TodoUtils';
import { TodoItemStatus } from '../../reducers/actions';

class TodoListItem extends Component {
    render() {
        const formattedDueDate = formatDateAsString(this.props.dueDate);
        const formattedPriority = getPriorityStringById(this.props.priority);
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
                <MenuItem onClick={() => this.props.onEditTodoItemClick(this.props)}>Edit</MenuItem>
                <MenuItem onClick={() => this.props.onDeleteTodoItemClick(this.props.id)}>Delete</MenuItem>
            </IconMenu>
        );

        const statusCheckbox = (
            <Checkbox 
                onCheck={() => this.props.onToggleStatusButtonClick(this.props.id)}
                checked={this.props.status === TodoItemStatus.Completed}/>
        );

        return (
            <ListItem 
                primaryText={this.props.title}
                secondaryText={secondaryText}
                leftCheckbox={statusCheckbox}
                rightIconButton={rightIconMenu}>
            </ListItem>
        );
    }
}

export default TodoListItem;