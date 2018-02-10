import React, { Component } from 'react';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import './App.less';
import './Reset.less';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default App;
