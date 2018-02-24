import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FunctionalHeader from './header/FunctionalHeader';
import FunctionalFooter from './footer/FunctionalFooter';
import './App.less';
import './Reset.less';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <FunctionalHeader/>
                    <FunctionalFooter/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
