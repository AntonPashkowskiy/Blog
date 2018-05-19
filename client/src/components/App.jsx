import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FunctionalHeader from './header/FunctionalHeader';
import FunctionalTodoList from './todo/FunctionalTodoList';
import FunctionalFooter from './footer/FunctionalFooter';
import AddTodoDialog from './dialog/AddTodoDialog';
import EditTodoDialog from './dialog/EditTodoDialog';
import About from './about/About.jsx';
import { Switch, Route } from 'react-router-dom';

import './Reset.less';

export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <FunctionalHeader/>
                    <Switch>
                        <Route exact path="/" component={FunctionalTodoList}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                    <FunctionalFooter/>
                    <AddTodoDialog/>
                    <EditTodoDialog/>
                </div>
            </MuiThemeProvider>
        );
    }
}
