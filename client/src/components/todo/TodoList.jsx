import React, { Component } from 'react';
import FunctionalTodoListItem from './FunctionalTodoListItem';
import { List } from 'material-ui/List';

class TodoList extends Component {
    render() {
        if (this.props.todoList.length) {
            return (
                <List>
                    {this.props.todoList.map(todo => (
                        <FunctionalTodoListItem key={todo.id} {...todo}/>
                    ))}
                </List>
            );
        }
        return <div></div>
    }
}

export default TodoList;