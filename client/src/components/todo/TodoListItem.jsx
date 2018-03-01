import { Component } from 'react';

class TodoListItem extends Component {
    render() {
        return (
            <li>
                {this.props.title}
                {this.props.dueDate}
                {this.props.priority}
                <button onClick={() => this.props.onToggleStatusButtonClick}>{this.props.status}</button>
                <button onClick={() => this.props.onEditTodoItemClick}>Delete</button>
                <button onClick={() => this.props.onDeleteTodoItemClick}>Delete</button>
            </li>
        );
    }
}