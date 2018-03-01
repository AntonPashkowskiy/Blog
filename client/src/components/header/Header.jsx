import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FontIcon from 'material-ui/FontIcon';
import { VisibilityFilterType } from '../../reducers/actions';
import './Header.less';

class Header extends Component {
    render() {
        let addNewTodoIcon = <FontIcon className="material-icons">add</FontIcon>;
        let headerMenu = (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
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
                <MenuItem primaryText="About Us"/>
            </IconMenu>
        );
        return (
            <AppBar 
                title="Just do it"
                iconElementRight={headerMenu}>
            </AppBar>
        );
    }
}

export default Header;