import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

export default class About extends Component {
    render() {
        return (
            <Card>
                <CardTitle title="About Us"/>
                <CardText>
                    This is test react application was built from scratch by Anton Pashkouski.
                </CardText>
            </Card>
        );
    }
}
