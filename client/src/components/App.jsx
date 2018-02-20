import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import './App.less';
import './Reset.less';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
