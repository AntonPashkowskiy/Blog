import React, { Component } from 'react';
import TodoListItem from './TodoListItem.jsx'

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todoList.map(todo => (
                    <TodoListItem key={todo.id} {...todo}/>
                ))}
            </div>
        );
    }
}

export default TodoList;