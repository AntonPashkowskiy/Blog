import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FooterSortingOptions from './FooterSortingOptions.jsx';

export default class Footer extends Component {
    render() {
        return (
            <Paper zDepth={1}>
                <FooterSortingOptions {...this.props}/>
            </Paper>
        );
    }
}
