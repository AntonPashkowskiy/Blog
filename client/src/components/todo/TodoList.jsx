import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FunctionalTodoListItem from './FunctionalTodoListItem';
import { List } from 'material-ui/List';

export default class TodoList extends Component {
    componentDidMount() {
        this.props.onListLoaded();
    }

    render() {
        const { todoList } = this.props;

        if (todoList.length) {
            return (
                <List>
                    {todoList.map(todo => (
                        <FunctionalTodoListItem key={todo.id} {...todo}/>
                    ))}
                </List>
            );
        }
        return <div></div>;
    }
}

TodoList.propTypes = {
    onListLoaded: PropTypes.func.isRequired,
    todoList: PropTypes.array.isRequired
};