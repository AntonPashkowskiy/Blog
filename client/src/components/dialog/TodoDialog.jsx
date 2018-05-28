import React, { Component } from "react";
import PropTypes from "prop-types";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

export default class TodoDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            title: this.props.title,
            dueDate: this.props.dueDate,
            priority: this.props.priority,
            status: this.props.status
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDueDateChange = this.handleDueDateChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
    }

    handleTitleChange (event) {
        this.setState({
            title: event.target.value
        });
    }

    handleDueDateChange(event, dueDate) {
        this.setState({
            dueDate: dueDate
        });
    }

    handlePriorityChange(event, index, value) {
        this.setState({
            priority: value
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            title: nextProps.title,
            dueDate: nextProps.dueDate,
            priority: nextProps.priority,
            status: nextProps.status
        });
    }

    render() {
        const { onCancelDialog, onConfirmDialog } = this.props;
        const { confirmButtonText, dialogTitle, isDialogOpen, priorityItems } = this.props;

        const nowDate = new Date(Date.now());
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={onCancelDialog}/>,
            <FlatButton
                label={confirmButtonText}
                primary={true}
                keyboardFocused={true}
                onClick={() => onConfirmDialog(this.state)}/>
        ];

        return (
            <Dialog
                title={dialogTitle}
                actions={actions}
                modal={true}
                open={isDialogOpen}>
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
                    {priorityItems.map(item => <MenuItem key={item.value} value={item.value} primaryText={item.text}/>)}
                </DropDownMenu>
            </Dialog>
        );
    }
}

TodoDialog.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    dueDate: PropTypes.instanceOf(Date),
    priority: PropTypes.number,
    status: PropTypes.number,
    confirmButtonText: PropTypes.string.isRequired,
    dialogTitle: PropTypes.string.isRequired,
    isDialogOpen: PropTypes.bool.isRequired,
    priorityItems: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string
    })),
    onCancelDialog: PropTypes.func,
    onConfirmDialog: PropTypes.func
};