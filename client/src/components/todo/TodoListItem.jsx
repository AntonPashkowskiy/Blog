import React, { Component } from 'react';

class TodoListItem extends Component {
    render() {
        return (
            <div>
                {this.props.title}
                {this.props.dueDate.toString()}
                {this.props.priority}
                <button onClick={() => this.props.onToggleStatusButtonClick}>{this.props.status}</button>
                <button onClick={() => this.props.onEditTodoItemClick}>Edit</button>
                <button onClick={() => this.props.onDeleteTodoItemClick}>Delete</button>
            </div>
        );
    }
}

export default TodoListItem;