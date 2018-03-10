import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FunctionalHeader from './header/FunctionalHeader';
import FunctionalTodoList from './todo/FunctionalTodoList';
import FunctionalFooter from './footer/FunctionalFooter';
import AddTodoDialog from './dialog/AddTodoDialog'
import './App.less';
import './Reset.less';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <FunctionalHeader/>
                    <FunctionalTodoList/>
                    <FunctionalFooter/>
                    <AddTodoDialog/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
