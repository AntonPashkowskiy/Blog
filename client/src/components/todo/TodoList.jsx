import { Component } from 'react';
import TodoListItem from './TodoListItem.jsx'

class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoListItem key={todo.id} {...todo}/>
                ))}
            </ul>
        );
    }
}