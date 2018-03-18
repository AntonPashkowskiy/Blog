import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import { withRouter } from "react-router-dom";
import { VisibilityFilterType } from '../../reducers/actions';
import './Header.less';

class Header extends Component {
    render() {
        const addNewTodoIcon = <FontIcon className="material-icons">add</FontIcon>;
        const iconButton = (
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        );
        const headerMenu = (
            <IconMenu
                iconButtonElement={iconButton}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <MenuItem primaryText="Add item"
                          leftIcon={addNewTodoIcon}
                          onClick={() => this.props.onAddTodoItemClick()}/>
                <Divider/>
                <MenuItem primaryText="Show all" 
                          checked={this.props.showAllChecked}  
                          onClick={() => this.props.onVisibilityFilterClick(VisibilityFilterType.ShowAll)}/>

                <MenuItem primaryText="Show active"
                          checked={this.props.showActiveChecked}
                          onClick={() => this.props.onVisibilityFilterClick(VisibilityFilterType.ShowActive)}/>

                <MenuItem primaryText="Show completed"
                          checked={this.props.showCompletedChecked}
                          onClick={() => this.props.onVisibilityFilterClick(VisibilityFilterType.ShowCompleted)}/>
                <Divider/>
                <MenuItem primaryText="About" onClick={() => this.props.history.push("/about")}/>
            </IconMenu>
        );
        return (
            <AppBar
                onLeftIconButtonClick={() => this.props.history.push("/")} 
                title="Just do it"
                iconElementRight={headerMenu}>
            </AppBar>
        );
    }
}

export default withRouter(Header);