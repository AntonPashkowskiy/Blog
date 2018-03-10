import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class TodoDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            dueDate: null,
            priority: 1  
        };

        this.handleTitleChange = (event) => {
            this.setState({
                title: event.target.value
            });
        };

        this.handleDueDateChange = (event, dueDate) => {
            this.setState({
                dueDate: dueDate
            });
        };

        this.handlePriorityChange = (event, index, value) => {
            this.setState({
                priority: value
            });
        };
    }

    render() {
        const nowDate = new Date(Date.now());
        const actions = [
            <FlatButton 
                label="Cancel"
                primary={true}
                onClick={this.props.onCancelDialog}/>,
            <FlatButton
                label={this.props.confirmButtonText}
                primary={true}
                keyboardFocused={true}
                onClick={() => this.props.onConfirmDialog(this.state)}/>
        ];

        return (
            <Dialog
                title={this.props.dialogTitle}
                actions={actions}
                modal={true}
                open={this.props.isDialogOpen}>
                <TextField
                    hintText="Title" 
                    value={this.state.title} 
                    onChange={this.handleTitleChange}
                    fullWidth={true}/>

                <DatePicker 
                    hintText="Due date"
                    mode="landscape"
                    value={this.state.dueDate}
                    minDate={nowDate}
                    onChange={this.handleDueDateChange}/>

                <DropDownMenu value={this.state.priority} onChange={this.handlePriorityChange}>
                    {this.props.priorityItems.map(item => <MenuItem key={item.value} value={item.value} primaryText={item.text}/>)}
                </DropDownMenu>
            </Dialog>
        )
    }
}

export default TodoDialog;