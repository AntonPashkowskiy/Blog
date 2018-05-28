import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from '../containers/header/Header';
import TodoList from '../containers/todo/TodoList';
import Footer from '../containers/footer/Footer';
import AddTodoDialog from '../containers/dialog/AddTodoDialog';
import EditTodoDialog from '../containers/dialog/EditTodoDialog';
import About from './about/About.jsx';

import './Reset.less';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={TodoList}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                    <Footer/>
                    <AddTodoDialog/>
                    <EditTodoDialog/>
                </div>
            </MuiThemeProvider>
        );
    }
}
